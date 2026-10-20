const J=(o,s=200)=>new Response(JSON.stringify(o),{status:s,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
let ready=false;

export async function onRequest({request,env}){
try{
const db=env.DB;
if(!db)return J({error:'D1 binding DB is missing'},500);
if(!ready){
for(const q of [
"CREATE TABLE IF NOT EXISTS album(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id TEXT,ts INTEGER,cap TEXT DEFAULT '',md TEXT DEFAULT '',w INTEGER DEFAULT 0,h INTEGER DEFAULT 0,th TEXT,data TEXT)",
"ALTER TABLE album ADD COLUMN folder_id INTEGER DEFAULT 0",
"ALTER TABLE album ADD COLUMN kind TEXT DEFAULT 'img'",
"ALTER TABLE album ADD COLUMN mid TEXT DEFAULT ''",
"ALTER TABLE album ADD COLUMN mime TEXT DEFAULT ''",
"ALTER TABLE album ADD COLUMN dur REAL DEFAULT 0",
"CREATE TABLE IF NOT EXISTS album_folders(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,user_id TEXT,ts INTEGER)",
"CREATE INDEX IF NOT EXISTS idx_album_f ON album(folder_id,id)"
]){try{await db.prepare(q).run()}catch(e){}}
ready=true;
}
const url=new URL(request.url),p=url.pathname.replace(/^\/api\/album\/?/,'').replace(/\/$/,''),m=request.method,now=Date.now();
const tok=(request.headers.get('Cookie')||'').match(/(?:^|;\s*)gg=([^;]+)/)?.[1];
const me=tok?await db.prepare('SELECT user_id id FROM sessions WHERE token=? AND ts>?').bind(tok,now-2592000000).first():null;
if(!me)return J({error:'Not signed in'},401);
const body=async()=>{try{return await request.json()}catch(e){return{}}};
const folderOk=async f=>f>0&&!!(await db.prepare('SELECT id FROM album_folders WHERE id=?').bind(f).first());

if(m==='GET'&&p==='list'){
const q=url.searchParams,before=+q.get('before')||0,u=q.get('u')||'all',f=q.get('f')||'all';
const wc=[],ac=[];
if(u!=='all'){wc.push('user_id=?');ac.push(u)}
if(f!=='all'){wc.push('folder_id=?');ac.push(+f||0)}
const where=before?[...wc,'id<?']:wc,args=before?[...ac,before]:ac;
const w=where.length?' WHERE '+where.join(' AND '):'';
const cw=wc.length?' WHERE '+wc.join(' AND '):'';
const rows=(await db.prepare('SELECT id,user_id u,ts t,cap,md,w,h,th,kind,mid,mime,dur,folder_id f FROM album'+w+' ORDER BY id DESC LIMIT 61').bind(...args).all()).results;
const tc=await db.prepare('SELECT COUNT(*) n FROM album'+cw).bind(...ac).first();
return J({items:rows.slice(0,60),more:rows.length>60,total:tc.n});
}
if(m==='GET'&&p==='folders'){
const rows=(await db.prepare("SELECT f.id,f.name,f.user_id u,f.ts,(SELECT COUNT(*) FROM album a WHERE a.folder_id=f.id) n,(SELECT th FROM album a WHERE a.folder_id=f.id AND a.th!='' ORDER BY a.id DESC LIMIT 1) th FROM album_folders f ORDER BY f.name COLLATE NOCASE").all()).results;
return J(rows);
}
if(m==='POST'&&p==='folder'){
const b=await body(),name=String(b.name||'').trim().slice(0,40),id=+b.id||0;
if(!name)return J({error:'Give the folder a name'},400);
const dup=await db.prepare('SELECT id FROM album_folders WHERE name=? COLLATE NOCASE AND id!=?').bind(name,id).first();
if(dup)return J({error:'A folder with that name already exists'},409);
if(id){
await db.prepare('UPDATE album_folders SET name=? WHERE id=? AND user_id=?').bind(name,id,me.id).run();
return J({ok:true,id});
}
const c=await db.prepare('SELECT COUNT(*) n FROM album_folders').first();
if(c.n>=60)return J({error:'Too many folders'},400);
const r=await db.prepare('INSERT INTO album_folders(name,user_id,ts) VALUES(?,?,?)').bind(name,me.id,now).run();
return J({ok:true,id:r.meta.last_row_id});
}
if(m==='DELETE'&&p==='folder'){
const id=+url.searchParams.get('id')||0;
const f=await db.prepare('SELECT user_id FROM album_folders WHERE id=?').bind(id).first();
if(!f)return J({error:'Not found'},404);
if(f.user_id!==me.id)return J({error:'Only the person who made this folder can delete it'},403);
await db.batch([db.prepare('UPDATE album SET folder_id=0 WHERE folder_id=?').bind(id),db.prepare('DELETE FROM album_folders WHERE id=?').bind(id)]);
return J({ok:true});
}
if(m==='GET'&&p==='photo'){
const r=await db.prepare('SELECT data FROM album WHERE id=?').bind(+url.searchParams.get('id')).first();
return r?J({data:r.data}):J({error:'Not found'},404);
}
if(m==='POST'&&p==='add'){
const b=await body(),kind=b.kind==='vid'?'vid':'img',th=String(b.th||'');
const c=await db.prepare('SELECT COUNT(*) n FROM album').first();
if(c.n>=600)return J({error:'The album is full'},400);
let fid=+b.f||0;
if(fid&&!(await folderOk(fid)))fid=0;
const md=/^\d{4}-\d{2}-\d{2}$/.test(b.md||'')?b.md:'',cap=String(b.cap||'').trim().slice(0,300);
let d='',mid='',mime='',dur=0;
if(kind==='img'){
d=String(b.data||'');
if(!/^data:image\/(jpeg|png|webp);base64,/.test(d)||d.length>900000||!th.startsWith('data:image/')||th.length>60000)return J({error:'That photo is too large or not supported'},400);
}else{
mid=String(b.mid||'');
if(!/^[a-z0-9]{10,24}$/.test(mid))return J({error:'Invalid video'},400);
const ok=await db.prepare("SELECT mime FROM media WHERE id=? AND ch='album' AND user_id=? LIMIT 1").bind(mid,me.id).first();
if(!ok||!String(ok.mime).startsWith('video/'))return J({error:'Upload the video first'},400);
mime=ok.mime;dur=Math.min(Math.max(+b.dur||0,0),7200);
if(th&&(!th.startsWith('data:image/')||th.length>60000))return J({error:'Invalid thumbnail'},400);
}
const r=await db.prepare('INSERT INTO album(user_id,ts,cap,md,w,h,th,data,folder_id,kind,mid,mime,dur) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)').bind(me.id,now,cap,md,Math.round(+b.w)||0,Math.round(+b.h)||0,th,d,fid,kind,mid,mime,dur).run();
return J({ok:true,id:r.meta.last_row_id});
}
if(m==='POST'&&p==='move'){
const b=await body(),ids=(Array.isArray(b.ids)?b.ids:[]).map(Number).filter(n=>n>0).slice(0,50);
let fid=+b.f||0;
if(fid&&!(await folderOk(fid)))return J({error:'Folder not found'},404);
if(!ids.length)return J({error:'Nothing to move'},400);
await db.prepare(`UPDATE album SET folder_id=? WHERE user_id=? AND id IN (${ids.map(()=>'?').join(',')})`).bind(fid,me.id,...ids).run();
return J({ok:true});
}
if(m==='POST'&&p==='edit'){
const b=await body(),md=/^\d{4}-\d{2}-\d{2}$/.test(b.md||'')?b.md:'';
await db.prepare('UPDATE album SET cap=?,md=? WHERE id=? AND user_id=?').bind(String(b.cap||'').trim().slice(0,300),md,+b.id,me.id).run();
return J({ok:true});
}
if(m==='DELETE'&&p==='del'){
const id=+url.searchParams.get('id'),r=await db.prepare('SELECT mid FROM album WHERE id=? AND user_id=?').bind(id,me.id).first();
if(r){
const st=[db.prepare('DELETE FROM album WHERE id=? AND user_id=?').bind(id,me.id)];
if(r.mid)st.push(db.prepare("DELETE FROM media WHERE id=? AND ch='album' AND user_id=?").bind(r.mid,me.id));
await db.batch(st);
}
return J({ok:true});
}
return J({error:'Not found'},404);
}catch(e){
return J({error:'Server error: '+String(e&&e.message||e)},500);
}
}