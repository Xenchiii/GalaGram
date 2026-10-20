const J=(o,s=200)=>new Response(JSON.stringify(o),{status:s,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
let ready=false;

export async function onRequest({request,env}){
try{
const db=env.DB;
if(!db)return J({error:'D1 binding DB is missing'},500);
if(!ready){
await db.prepare("CREATE TABLE IF NOT EXISTS album(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id TEXT,ts INTEGER,cap TEXT DEFAULT '',md TEXT DEFAULT '',w INTEGER DEFAULT 0,h INTEGER DEFAULT 0,th TEXT,data TEXT)").run();
ready=true;
}
const url=new URL(request.url),p=url.pathname.replace(/^\/api\/album\/?/,'').replace(/\/$/,''),m=request.method,now=Date.now();
const tok=(request.headers.get('Cookie')||'').match(/(?:^|;\s*)gg=([^;]+)/)?.[1];
const me=tok?await db.prepare('SELECT user_id id FROM sessions WHERE token=? AND ts>?').bind(tok,now-2592000000).first():null;
if(!me)return J({error:'Not signed in'},401);
const body=async()=>{try{return await request.json()}catch(e){return{}}};

if(m==='GET'&&p==='list'){
const q=url.searchParams,before=+q.get('before')||0,u=q.get('u')||'all';
const where=[],args=[];
if(before){where.push('id<?');args.push(before)}
if(u!=='all'){where.push('user_id=?');args.push(u)}
const w=where.length?' WHERE '+where.join(' AND '):'';
const rows=(await db.prepare('SELECT id,user_id u,ts t,cap,md,w,h,th FROM album'+w+' ORDER BY id DESC LIMIT 61').bind(...args).all()).results;
const tc=await db.prepare('SELECT COUNT(*) n FROM album'+(u==='all'?'':' WHERE user_id=?')).bind(...(u==='all'?[]:[u])).first();
return J({items:rows.slice(0,60),more:rows.length>60,total:tc.n});
}
if(m==='GET'&&p==='photo'){
const r=await db.prepare('SELECT data FROM album WHERE id=?').bind(+url.searchParams.get('id')).first();
return r?J({data:r.data}):J({error:'Not found'},404);
}
if(m==='POST'&&p==='add'){
const b=await body(),d=String(b.data||''),th=String(b.th||'');
if(!/^data:image\/(jpeg|png|webp);base64,/.test(d)||d.length>900000||!th.startsWith('data:image/')||th.length>60000)return J({error:'That photo is too large or not supported'},400);
const c=await db.prepare('SELECT COUNT(*) n FROM album').first();
if(c.n>=600)return J({error:'The album is full'},400);
const md=/^\d{4}-\d{2}-\d{2}$/.test(b.md||'')?b.md:'';
const r=await db.prepare('INSERT INTO album(user_id,ts,cap,md,w,h,th,data) VALUES(?,?,?,?,?,?,?,?)').bind(me.id,now,String(b.cap||'').trim().slice(0,300),md,Math.round(+b.w)||0,Math.round(+b.h)||0,th,d).run();
return J({ok:true,id:r.meta.last_row_id});
}
if(m==='POST'&&p==='edit'){
const b=await body(),md=/^\d{4}-\d{2}-\d{2}$/.test(b.md||'')?b.md:'';
await db.prepare('UPDATE album SET cap=?,md=? WHERE id=? AND user_id=?').bind(String(b.cap||'').trim().slice(0,300),md,+b.id,me.id).run();
return J({ok:true});
}
if(m==='DELETE'&&p==='del'){
await db.prepare('DELETE FROM album WHERE id=? AND user_id=?').bind(+url.searchParams.get('id'),me.id).run();
return J({ok:true});
}
return J({error:'Not found'},404);
}catch(e){
return J({error:'Server error: '+String(e&&e.message||e)},500);
}
}