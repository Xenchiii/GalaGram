var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// api/[[path]].js
var SEED = [
  ["ika", "Ika", "#22c55e", "2003-07-17", "RicaMae"],
  ["ian", "Ian", "#111827", "2001-11-11", "RodelAdrian"],
  ["prince", "Prince", "#ef4444", "2004-10-13", "PrinceKza"],
  ["ghel", "Ghel", "#ec4899", "2003-03-14", "MaGheleen"],
  ["andeng", "Andeng", "#2563eb", "2007-11-07", "AndreaRayne"],
  ["crimson", "Crimson", "#9f1239", "2003-10-03", "WillieJohn"],
  ["vhel", "Vhel", "#6b7280", "2000-04-20", "MaryYovhel"],
  ["jordan", "Jordan", "#92400e", "2005-01-06", "Jordan"],
  ["yanna", "Yanna", "#7c3aed", "2001-03-15", "DianaRose"],
  ["ange", "Ange", "#4d8f3a", "2003-12-17", "AmaliaAngela"]
];
var GROUPS = [
  ["gherison", ["ghel", "crimson", "ika"]],
  ["gherecess", ["ghel", "prince", "andeng"]],
  ["mlcodm", ["ian", "prince", "vhel", "jordan"]],
  ["romana", ["prince", "ika", "ian"]]
];
var GNAME = {
  gherison: "Gherison",
  gherecess: "Gherecess",
  mlcodm: "ML/CODM",
  romana: "Romana Family"
};
var CHANNELS = {
  general: "general",
  random: "random",
  plans: "plans",
  chikahan: "Chikahan",
  movies: "Movie Marathon",
  soundtrip: "Soundtrip"
};
var ALL = SEED.map((u) => u[0]);
var MIMES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/webm",
  "video/quicktime",
  "audio/webm",
  "audio/ogg",
  "audio/mp4",
  "audio/mpeg",
  "audio/aac",
  "audio/x-m4a",
  "audio/wav",
  "audio/x-wav",
  "audio/flac",
  "audio/x-flac",
  "audio/ogg"
];
var attLabel = /* @__PURE__ */ __name((a) => {
  const t = a && a[0] && a[0].t;
  return t === "img" ? "Sent a photo" : t === "vid" ? "Sent a video" : t === "aud" ? "Sent a voicemail" : "";
}, "attLabel");
function cleanAtt(a) {
  return (Array.isArray(a) ? a : []).slice(0, 6).map((x) => ({
    t: ["img", "vid", "aud"].includes(x && x.t) ? x.t : null,
    id: String(x && x.id || ""),
    mime: String(x && x.mime || "").slice(0, 40),
    w: Math.round(+x.w) || 0,
    h: Math.round(+x.h) || 0,
    dur: Math.min(+x.dur || 0, 3600),
    th: typeof x.th === "string" && x.th.startsWith("data:image/") && x.th.length < 4e4 ? x.th : "",
    tx: String(x.tx || "").slice(0, 500)
  })).filter((x) => x.t && /^[a-z0-9]{10,24}$/.test(x.id));
}
__name(cleanAtt, "cleanAtt");
var groupOf = /* @__PURE__ */ __name((k) => {
  const g = GROUPS.find((x) => "g:" + x[0] === k);
  return g ? g[1] : null;
}, "groupOf");
var b64u = /* @__PURE__ */ __name((b) => btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""), "b64u");
var vapid = null;
async function getVapid(db) {
  if (vapid) return vapid;
  let r = await db.prepare("SELECT v FROM kv WHERE k='vapid'").first();
  if (!r) {
    const kp = await crypto.subtle.generateKey(
      { name: "ECDSA", namedCurve: "P-256" },
      true,
      ["sign", "verify"]
    );
    const priv = await crypto.subtle.exportKey("jwk", kp.privateKey);
    const pub = b64u(await crypto.subtle.exportKey("raw", kp.publicKey));
    await db.prepare("INSERT OR IGNORE INTO kv(k,v) VALUES('vapid',?)").bind(JSON.stringify({ pub, priv })).run();
    r = await db.prepare("SELECT v FROM kv WHERE k='vapid'").first();
  }
  vapid = JSON.parse(r.v);
  return vapid;
}
__name(getVapid, "getVapid");
async function pushTo(db, ep, v, origin) {
  try {
    const key = await crypto.subtle.importKey(
      "jwk",
      v.priv,
      { name: "ECDSA", namedCurve: "P-256" },
      false,
      ["sign"]
    );
    const h = b64u(
      enc.encode(JSON.stringify({ typ: "JWT", alg: "ES256" }))
    ), p = b64u(
      enc.encode(
        JSON.stringify({
          aud: new URL(ep).origin,
          exp: Math.floor(Date.now() / 1e3) + 43200,
          sub: origin
        })
      )
    );
    const sig = await crypto.subtle.sign(
      { name: "ECDSA", hash: "SHA-256" },
      key,
      enc.encode(h + "." + p)
    );
    const r = await fetch(ep, {
      method: "POST",
      headers: {
        Authorization: `vapid t=${h}.${p}.${b64u(sig)}, k=${v.pub}`,
        TTL: "86400",
        Urgency: "high"
      }
    });
    if (r.status === 404 || r.status === 410)
      await db.prepare("DELETE FROM push_subs WHERE endpoint=?").bind(ep).run();
  } catch (e) {
  }
}
__name(pushTo, "pushTo");
async function notify(db, ids, kind, n, origin, force) {
  if (!ids.length) return;
  const now = Date.now(), ph = ids.map(() => "?").join(",");
  const act = {}, pm = {};
  (await db.prepare(`SELECT user_id,act FROM seen WHERE user_id IN (${ph})`).bind(...ids).all()).results.forEach((x) => act[x.user_id] = x.act || 0);
  (await db.prepare(`SELECT k,v FROM kv WHERE k IN (${ph})`).bind(...ids.map((i) => "prefs:" + i)).all()).results.forEach((x) => {
    try {
      pm[x.k.slice(6)] = JSON.parse(x.v);
    } catch (e) {
    }
  });
  const to = ids.filter(
    (i) => (force || now - (act[i] || 0) > 8e3) && (!pm[i] || pm[i][kind] !== false)
  );
  if (!to.length) return;
  const subs = (await db.prepare(
    `SELECT endpoint,user_id FROM push_subs WHERE user_id IN (${to.map(() => "?").join(",")})`
  ).bind(...to).all()).results;
  if (!subs.length) return;
  const us = [...new Set(subs.map((x) => x.user_id))];
  await db.batch([
    db.prepare("DELETE FROM notifs WHERE ts<?").bind(now - 864e5),
    ...us.map(
      (i) => db.prepare(
        "INSERT INTO notifs(user_id,title,body,tag,ts,done) VALUES(?,?,?,?,?,0)"
      ).bind(i, n.title, n.body, n.tag, now)
    )
  ]);
  const v = await getVapid(db);
  await Promise.all(subs.map((x) => pushTo(db, x.endpoint, v, origin)));
}
__name(notify, "notify");
async function transcribe(env, dataUrl) {
  try {
    if (!env.AI) return "";
    const r = await env.AI.run("@cf/openai/whisper-large-v3-turbo", {
      audio: dataUrl.slice(dataUrl.indexOf(",") + 1)
    });
    return String(r && r.text || "").trim().slice(0, 500);
  } catch (e) {
    return "";
  }
}
__name(transcribe, "transcribe");
function parseMusic(u) {
  let x;
  try {
    x = new URL(u);
  } catch (e) {
    return null;
  }
  const h = x.hostname.replace(/^(www|m)\./, "");
  const list = x.searchParams.get("list"), okl = list && /^[\w-]+$/.test(list) ? list : "", lq = okl ? "?list=" + okl : "";
  if (h === "youtu.be") {
    const id = x.pathname.slice(1);
    if (/^[\w-]{6,15}$/.test(id))
      return {
        embed: "https://www.youtube.com/embed/" + id + lq,
        src: "youtube",
        vid: id,
        list: okl
      };
  }
  if (h === "youtube.com" || h === "music.youtube.com") {
    const id = x.searchParams.get("v");
    if (id && /^[\w-]{6,15}$/.test(id))
      return {
        embed: "https://www.youtube.com/embed/" + id + lq,
        src: "youtube",
        vid: id,
        list: okl
      };
    if (okl)
      return {
        embed: "https://www.youtube.com/embed/videoseries" + lq,
        src: "youtube",
        vid: "",
        list: okl
      };
  }
  if (h === "open.spotify.com") {
    const m = x.pathname.match(
      /\/(track|album|playlist|episode|show|artist)\/([A-Za-z0-9]+)/
    );
    if (m)
      return {
        embed: "https://open.spotify.com/embed/" + m[1] + "/" + m[2],
        src: "spotify",
        kind: m[1]
      };
  }
  return null;
}
__name(parseMusic, "parseMusic");
var seeded = false;
var enc = new TextEncoder();
var hex = /* @__PURE__ */ __name((b) => [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join(""), "hex");
async function hashPw(pw, salt) {
  const k = await crypto.subtle.importKey(
    "raw",
    enc.encode(pw),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  return hex(
    await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt: enc.encode(salt),
        iterations: 1e5,
        hash: "SHA-256"
      },
      k,
      256
    )
  );
}
__name(hashPw, "hashPw");
async function seed(db) {
  if (seeded) return;
  for (const q of [
    "CREATE TABLE IF NOT EXISTS clips(id INTEGER PRIMARY KEY AUTOINCREMENT,from_id TEXT,to_key TEXT,data TEXT,dur REAL,ts INTEGER,txt TEXT DEFAULT '')",
    "CREATE TABLE IF NOT EXISTS kv(k TEXT PRIMARY KEY,v TEXT)",
    "CREATE TABLE IF NOT EXISTS push_subs(endpoint TEXT PRIMARY KEY,user_id TEXT,ts INTEGER)",
    "CREATE TABLE IF NOT EXISTS notifs(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id TEXT,title TEXT,body TEXT,tag TEXT,ts INTEGER,done INTEGER DEFAULT 0)",
    "ALTER TABLE clips ADD COLUMN txt TEXT DEFAULT ''",
    "ALTER TABLE users ADD COLUMN banner TEXT DEFAULT ''",
    "ALTER TABLE seen ADD COLUMN act INTEGER DEFAULT 0",
    "ALTER TABLE events ADD COLUMN edate TEXT DEFAULT ''",
    "ALTER TABLE events ADD COLUMN st TEXT DEFAULT ''",
    "ALTER TABLE events ADD COLUMN en TEXT DEFAULT ''",
    "ALTER TABLE events ADD COLUMN allday INTEGER DEFAULT 1",
    "ALTER TABLE events ADD COLUMN cat TEXT DEFAULT 'other'",
    "ALTER TABLE events ADD COLUMN note TEXT DEFAULT ''",
    "ALTER TABLE events ADD COLUMN members TEXT DEFAULT '[]'",
    "ALTER TABLE events ADD COLUMN rep TEXT DEFAULT 'none'",
    "ALTER TABLE messages ADD COLUMN att TEXT DEFAULT ''",
    "CREATE TABLE IF NOT EXISTS media(id TEXT,seq INTEGER,ch TEXT,mime TEXT,data TEXT,user_id TEXT,ts INTEGER,PRIMARY KEY(id,seq))",
    "CREATE TABLE IF NOT EXISTS emojis(name TEXT PRIMARY KEY,data TEXT,user_id TEXT,ts INTEGER)"
  ]) {
    try {
      await db.prepare(q).run();
    } catch (e) {
    }
  }
  const c = await db.prepare("SELECT COUNT(*) n FROM users").first();
  if (!c.n) {
    const st = [];
    for (const u of SEED) {
      const salt = crypto.randomUUID();
      st.push(
        db.prepare(
          "INSERT INTO users(id,name,color,bday,username,salt,hash) VALUES(?,?,?,?,?,?,?)"
        ).bind(
          u[0],
          u[1],
          u[2],
          u[3],
          u[4],
          salt,
          await hashPw(u[4], salt)
        )
      );
    }
    await db.batch(st);
  }
  seeded = true;
}
__name(seed, "seed");
var J = /* @__PURE__ */ __name((o, s = 200, h = {}) => new Response(JSON.stringify(o), {
  status: s,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
    ...h
  }
}), "J");
var ck = /* @__PURE__ */ __name((t, age = 2592e3) => ({
  "Set-Cookie": `gg=${t}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${age}`
}), "ck");
async function handle(ctx) {
  const { request, env } = ctx;
  const bg = /* @__PURE__ */ __name((p2) => {
    try {
      ctx.waitUntil(p2);
    } catch (e) {
    }
  }, "bg");
  const db = env.DB;
  if (!db)
    return J(
      {
        error: "D1 binding DB is missing. Add a D1 binding named DB to this Pages project and redeploy."
      },
      500
    );
  await seed(db);
  const origin = new URL(request.url).origin;
  const url = new URL(request.url), p = url.pathname.replace(/^\/api\/?/, "").replace(/\/$/, ""), m = request.method, now = Date.now();
  const body = /* @__PURE__ */ __name(async () => {
    try {
      return await request.json();
    } catch (e) {
      return {};
    }
  }, "body");
  const tok = (request.headers.get("Cookie") || "").match(
    /(?:^|;\s*)gg=([^;]+)/
  )?.[1];
  const newSession = /* @__PURE__ */ __name(async (uid) => {
    const t = crypto.randomUUID() + crypto.randomUUID();
    await db.prepare("INSERT INTO sessions VALUES(?,?,?)").bind(t, uid, now).run();
    return t;
  }, "newSession");
  const pub = /* @__PURE__ */ __name(async (uid) => db.prepare("SELECT id,name,color,username FROM users WHERE id=?").bind(uid).first(), "pub");
  if (m === "POST" && p === "login") {
    const b = await body();
    const u = await db.prepare("SELECT * FROM users WHERE username=?").bind(String(b.username || "").trim()).first();
    if (!u || await hashPw(String(b.password || ""), u.salt) !== u.hash)
      return J({ error: "Wrong username or password" }, 401);
    return J({ ok: true }, 200, ck(await newSession(u.id)));
  }
  if (m === "POST" && p === "qr/new") {
    const t = crypto.randomUUID().replace(/-/g, "");
    await db.batch([
      db.prepare("DELETE FROM qr WHERE ts<?").bind(now - 6e5),
      db.prepare("INSERT INTO qr VALUES(?,'pending',NULL,?)").bind(t, now)
    ]);
    return J({ token: t });
  }
  if (m === "GET" && p === "hint") {
    const h = await db.prepare("SELECT name,color,avatar FROM users WHERE username=?").bind(url.searchParams.get("u") || "").first();
    return J(h ? { found: true, ...h } : { found: false });
  }
  if (m === "GET" && p === "qr/status") {
    const r = await db.prepare("SELECT * FROM qr WHERE token=? AND ts>?").bind(url.searchParams.get("token") || "", now - 3e5).first();
    if (!r) return J({ expired: true });
    if (r.status !== "approved") return J({ ok: false });
    await db.prepare("DELETE FROM qr WHERE token=?").bind(r.token).run();
    return J({ ok: true }, 200, ck(await newSession(r.user_id)));
  }
  const me = tok ? await db.prepare(
    "SELECT u.id,u.name,u.color,u.username,u.salt,u.hash FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=? AND s.ts>?"
  ).bind(tok, now - 2592e6).first() : null;
  if (!me) return J({ error: "Not signed in" }, 401);
  const okCh = /* @__PURE__ */ __name((c) => /^(general|random|plans|chikahan|movies|soundtrip)$/.test(c) || /^dm:[a-z]+\+[a-z]+$/.test(c) && c.slice(3).split("+").includes(me.id) || c.startsWith("g:") && !!groupOf(c) && groupOf(c).includes(me.id), "okCh");
  const myG = GROUPS.filter((g) => g[1].includes(me.id)).map(
    (g) => "g:" + g[0]
  );
  const gl = myG.length ? myG : ["-"];
  const gin = gl.map(() => "?").join(",");
  const members = /* @__PURE__ */ __name((c) => c.startsWith("g:") ? groupOf(c) || [] : c.startsWith("dm:") ? c.slice(3).split("+") : ALL, "members");
  switch (m + " " + p) {
    case "GET me": {
      const F = "id,name,color,bday,bio,role,avatar,banner,upd";
      const users = (await db.prepare(`SELECT ${F} FROM users ORDER BY rowid`).all()).results;
      const mine = await db.prepare(`SELECT ${F},username FROM users WHERE id=?`).bind(me.id).first();
      const c = await db.prepare("SELECT COALESCE(MAX(id),0) n FROM signals").first();
      const k = await db.prepare("SELECT COALESCE(MAX(id),0) n FROM clips").first();
      return J({ me: mine, users, cur: { sig: c.n, clip: k.n } });
    }
    case "POST profile": {
      const b = await body(), name = String(b.name || "").trim().slice(0, 24), role = String(b.role || "").trim().slice(0, 40), bio = String(b.bio || "").trim().slice(0, 240);
      const color = String(b.color || ""), bday = String(b.bday || ""), av = String(b.avatar || ""), bn = String(b.banner || "");
      if (!name || !/^#[0-9a-fA-F]{6}$/.test(color) || !/^\d{4}-\d{2}-\d{2}$/.test(bday))
        return J({ error: "Check name, color and birthday" }, 400);
      if (av && (!av.startsWith("data:image/") || av.length > 6e4))
        return J({ error: "Photo is too large" }, 400);
      if (bn && (!bn.startsWith("data:image/") || bn.length > 9e4))
        return J({ error: "Banner is too large" }, 400);
      await db.prepare(
        "UPDATE users SET name=?,role=?,bio=?,color=?,bday=?,avatar=?,banner=?,upd=? WHERE id=?"
      ).bind(name, role, bio, color, bday, av, bn, now, me.id).run();
      return J({ ok: true });
    }
    case "GET recent":
      return J(
        (await db.prepare(
          "SELECT id,channel,user_id u,body x,att,ts t FROM messages WHERE channel IN ('general','random','plans','chikahan','movies','soundtrip') ORDER BY id DESC LIMIT 6"
        ).all()).results
      );
    case "POST logout":
      await db.prepare("DELETE FROM sessions WHERE token=?").bind(tok).run();
      await db.prepare("DELETE FROM voice WHERE user_id=?").bind(me.id).run();
      return J({ ok: true }, 200, ck("", 0));
    case "POST qr/approve": {
      const b = await body();
      const r = await db.prepare(
        "UPDATE qr SET status='approved',user_id=? WHERE token=? AND status='pending' AND ts>?"
      ).bind(me.id, String(b.token || ""), now - 3e5).run();
      return r.meta.changes ? J({ ok: true }) : J({ error: "Code expired" }, 400);
    }
    case "POST account": {
      const b = await body(), v = String(b.username || "").trim();
      if (!/^[A-Za-z0-9_.]{3,24}$/.test(v))
        return J(
          {
            error: "Use 3 to 24 letters, numbers, dots or underscores"
          },
          400
        );
      const t = await db.prepare("SELECT id FROM users WHERE username=? AND id!=?").bind(v, me.id).first();
      if (t) return J({ error: "That username is taken" }, 409);
      await db.prepare("UPDATE users SET username=? WHERE id=?").bind(v, me.id).run();
      return J({ ok: true, username: v });
    }
    case "POST password": {
      const b = await body(), n = String(b.next || "");
      if (await hashPw(String(b.current || ""), me.salt) !== me.hash)
        return J({ error: "Current password is wrong" }, 400);
      if (n.length < 4 || n.length > 100)
        return J(
          { error: "New password must be at least 4 characters" },
          400
        );
      const salt = crypto.randomUUID();
      await db.batch([
        db.prepare("UPDATE users SET salt=?,hash=? WHERE id=?").bind(salt, await hashPw(n, salt), me.id),
        db.prepare(
          "DELETE FROM sessions WHERE user_id=? AND token!=?"
        ).bind(me.id, tok)
      ]);
      return J({ ok: true });
    }
    case "GET sync": {
      const q = url.searchParams, ch = q.get("ch") || "", after = +q.get("after") || 0, vc = q.get("vc") || "";
      await db.prepare(
        "INSERT INTO seen(user_id,ts,act) VALUES(?1,?2,?3) ON CONFLICT(user_id) DO UPDATE SET ts=CASE WHEN ?4=1 THEN seen.ts ELSE excluded.ts END, act=CASE WHEN excluded.act>0 THEN excluded.act ELSE seen.act END"
      ).bind(
        me.id,
        now,
        q.get("vis") === "1" ? now : 0,
        q.get("inv") === "1" ? 1 : 0
      ).run();
      if (vc)
        await db.prepare(
          "UPDATE voice SET ts=? WHERE channel=? AND user_id=?"
        ).bind(now, vc, me.id).run();
      await db.prepare("DELETE FROM voice WHERE ts<?").bind(now - 15e3).run();
      const mq = ch && okCh(ch) ? after ? db.prepare(
        "SELECT id,user_id u,body x,att,ts t FROM messages WHERE channel=? AND id>? ORDER BY id LIMIT 200"
      ).bind(ch, after) : db.prepare(
        "SELECT * FROM (SELECT id,user_id u,body x,att,ts t FROM messages WHERE channel=? ORDER BY id DESC LIMIT 100) ORDER BY id"
      ).bind(ch) : db.prepare("SELECT 1 WHERE 0");
      const r = await db.batch([
        mq,
        db.prepare("SELECT user_id FROM seen WHERE ts>?").bind(now - 25e3),
        db.prepare("SELECT channel,user_id FROM voice"),
        db.prepare("SELECT MAX(upd) n FROM users"),
        db.prepare(
          "SELECT id,from_id f,type,data FROM signals WHERE id>? AND to_id=? ORDER BY id LIMIT 50"
        ).bind(+q.get("sig") || 0, me.id),
        db.prepare(
          "SELECT channel,id,user_id u,body x,att FROM messages WHERE id IN (SELECT MAX(id) FROM messages GROUP BY channel)"
        ),
        db.prepare(
          `SELECT id,from_id f,to_key t,data,dur,txt FROM clips WHERE id>? AND from_id!=? AND (to_key='all' OR to_key=? OR to_key IN (${gin})) ORDER BY id LIMIT 3`
        ).bind(+q.get("clip") || 0, me.id, me.id, ...gl),
        db.prepare("SELECT v FROM kv WHERE k='music'"),
        db.prepare("SELECT COALESCE(MAX(ts),0)+COUNT(*) n FROM emojis")
      ]);
      const voice = {};
      r[2].results.forEach(
        (x) => (voice[x.channel] = voice[x.channel] || []).push(x.user_id)
      );
      return J({
        ch,
        after,
        msgs: r[0].results,
        online: r[1].results.map((x) => x.user_id),
        voice,
        pv: r[3].results[0].n || 0,
        sigs: r[4].results,
        latest: r[5].results.filter((x) => okCh(x.channel)),
        clips: r[6].results,
        music: r[7].results[0] ? r[7].results[0].v : "",
        emv: r[8].results[0].n || 0
      });
    }
    case "POST messages": {
      const b = await body(), t = String(b.body || "").trim().slice(0, 2e3);
      if (!okCh(b.channel)) return J({ error: "Invalid message" }, 400);
      let atts = cleanAtt(b.att);
      if (atts.length) {
        const ids = [...new Set(atts.map((x) => x.id))];
        const ok = new Set(
          (await db.prepare(
            `SELECT DISTINCT id FROM media WHERE ch=? AND user_id=? AND id IN (${ids.map(() => "?").join(",")})`
          ).bind(b.channel, me.id, ...ids).all()).results.map((x) => x.id)
        );
        atts = atts.filter((x) => ok.has(x.id));
      }
      if (!t && !atts.length) return J({ error: "Invalid message" }, 400);
      const r = await db.prepare(
        "INSERT INTO messages(channel,user_id,body,att,ts) VALUES(?,?,?,?,?)"
      ).bind(
        b.channel,
        me.id,
        t,
        atts.length ? JSON.stringify(atts) : "",
        now
      ).run();
      const lab = b.channel.startsWith("dm:") ? "" : b.channel.startsWith("g:") ? GNAME[b.channel.slice(2)] : CHANNELS[b.channel];
      bg(
        notify(
          db,
          members(b.channel).filter((i) => i !== me.id),
          "msg",
          {
            title: lab ? me.name + " \xB7 " + lab : me.name,
            body: (t || attLabel(atts)).slice(0, 140),
            tag: "ch-" + b.channel
          },
          origin
        )
      );
      return J({ ok: true, id: r.meta.last_row_id });
    }
    case "POST media": {
      const b = await body(), id = String(b.id || ""), seq = +b.seq, ch = String(b.ch || ""), mime = String(b.mime || ""), d = String(b.data || "");
      if (!/^[a-z0-9]{10,24}$/.test(id) || !(seq >= 0 && seq < 48) || !okCh(ch) || !MIMES.includes(mime) || !d || d.length > 4e5)
        return J({ error: "Invalid upload" }, 400);
      const ex = await db.prepare("SELECT user_id FROM media WHERE id=? LIMIT 1").bind(id).first();
      if (ex && ex.user_id !== me.id)
        return J({ error: "Invalid upload" }, 400);
      await db.prepare(
        "INSERT OR REPLACE INTO media(id,seq,ch,mime,data,user_id,ts) VALUES(?,?,?,?,?,?,?)"
      ).bind(id, seq, ch, mime, d, me.id, now).run();
      return J({ ok: true });
    }
    case "GET media": {
      const rows = (await db.prepare(
        "SELECT ch,mime,data FROM media WHERE id=? ORDER BY seq"
      ).bind(String(url.searchParams.get("id") || "")).all()).results;
      if (!rows.length || !okCh(rows[0].ch))
        return J({ error: "Not found" }, 404);
      return new Response(rows.map((r) => r.data).join(""), {
        headers: {
          "Content-Type": "text/plain",
          "X-Mime": rows[0].mime,
          "Cache-Control": "private, max-age=86400"
        }
      });
    }
    case "GET emojis":
      return J(
        (await db.prepare("SELECT name,data FROM emojis ORDER BY ts").all()).results
      );
    case "POST emojis": {
      const b = await body(), name = String(b.name || "").toLowerCase(), d = String(b.data || "");
      if (!/^[a-z0-9_]{2,16}$/.test(name) || !d.startsWith("data:image/") || d.length > 3e4)
        return J(
          { error: "Use a 2 to 16 character name and a small image" },
          400
        );
      const c = await db.prepare("SELECT COUNT(*) n FROM emojis").first();
      if (c.n >= 80) return J({ error: "The emoji list is full" }, 400);
      if (await db.prepare("SELECT name FROM emojis WHERE name=?").bind(name).first())
        return J({ error: "That emoji name is taken" }, 409);
      await db.prepare(
        "INSERT INTO emojis(name,data,user_id,ts) VALUES(?,?,?,?)"
      ).bind(name, d, me.id, now).run();
      return J({ ok: true });
    }
    case "DELETE emojis":
      await db.prepare("DELETE FROM emojis WHERE name=? AND user_id=?").bind(String(url.searchParams.get("name") || ""), me.id).run();
      return J({ ok: true });
    case "GET finance":
      return J(
        (await db.prepare(
          "SELECT id,user_id,type,details,amount,date FROM finance ORDER BY id DESC LIMIT 500"
        ).all()).results
      );
    case "POST finance": {
      const b = await body(), a = Number(b.amount), d = String(b.details || "").trim().slice(0, 200);
      if (!d || !(a >= 0) || !["income", "expense"].includes(b.type) || !/^\d{4}-\d{2}-\d{2}$/.test(b.date || ""))
        return J({ error: "Invalid entry" }, 400);
      const w = await db.prepare("SELECT id FROM users WHERE id=?").bind(b.who).first();
      await db.prepare(
        "INSERT INTO finance(user_id,type,details,amount,date,ts) VALUES(?,?,?,?,?,?)"
      ).bind(w ? w.id : me.id, b.type, d, a, b.date, now).run();
      return J({ ok: true });
    }
    case "DELETE finance":
      await db.prepare("DELETE FROM finance WHERE id=?").bind(+url.searchParams.get("id")).run();
      return J({ ok: true });
    case "GET events":
      return J(
        (await db.prepare(
          "SELECT id,title,date,edate,st,en,allday,cat,note,members,rep,user_id FROM events ORDER BY date LIMIT 1500"
        ).all()).results
      );
    case "POST events": {
      const b = await body(), t = String(b.title || "").trim().slice(0, 100), dre = /^\d{4}-\d{2}-\d{2}$/, tre = /^([01]\d|2[0-3]):[0-5]\d$/;
      const date = String(b.date || ""), edate = String(b.edate || ""), st = String(b.st || ""), en = String(b.en || "");
      if (!t || !dre.test(date) || edate && (!dre.test(edate) || edate < date || Date.parse(edate) - Date.parse(date) > 6048e6))
        return J({ error: "Check the title and dates" }, 400);
      if (st && !tre.test(st) || en && !tre.test(en))
        return J({ error: "Check the times" }, 400);
      const cat = [
        "hangout",
        "movie",
        "study",
        "trip",
        "gala",
        "reminder",
        "other"
      ].includes(b.cat) ? b.cat : "other";
      const rep = ["none", "weekly", "monthly", "yearly"].includes(b.rep) ? b.rep : "none";
      const mem = JSON.stringify(
        (Array.isArray(b.members) ? b.members : []).filter(
          (x) => ALL.includes(x)
        )
      );
      const note = String(b.note || "").trim().slice(0, 300), allday = b.allday ? 1 : 0;
      if (+b.id) {
        await db.prepare(
          "UPDATE events SET title=?,date=?,edate=?,st=?,en=?,allday=?,cat=?,note=?,members=?,rep=? WHERE id=?"
        ).bind(
          t,
          date,
          edate,
          st,
          en,
          allday,
          cat,
          note,
          mem,
          rep,
          +b.id
        ).run();
        return J({ ok: true });
      }
      await db.prepare(
        "INSERT INTO events(title,date,edate,st,en,allday,cat,note,members,rep,user_id) VALUES(?,?,?,?,?,?,?,?,?,?,?)"
      ).bind(
        t,
        date,
        edate,
        st,
        en,
        allday,
        cat,
        note,
        mem,
        rep,
        me.id
      ).run();
      bg(
        notify(
          db,
          JSON.parse(mem).filter((i) => i !== me.id),
          "msg",
          {
            title: me.name + " added an event",
            body: t + " \xB7 " + date,
            tag: "event"
          },
          origin
        )
      );
      return J({ ok: true });
    }
    case "DELETE events":
      await db.prepare("DELETE FROM events WHERE id=?").bind(+url.searchParams.get("id")).run();
      return J({ ok: true });
    case "GET voices":
      return J(
        (await db.prepare(
          `SELECT id,from_id f,to_key t,dur,ts,txt FROM clips WHERE from_id=? OR to_key='all' OR to_key=? OR to_key IN (${gin}) ORDER BY id DESC LIMIT 30`
        ).bind(me.id, me.id, ...gl).all()).results
      );
    case "GET voice": {
      const r = await db.prepare("SELECT from_id,to_key,data FROM clips WHERE id=?").bind(+url.searchParams.get("id")).first();
      if (!r || !(r.from_id === me.id || r.to_key === "all" || r.to_key === me.id || myG.includes(r.to_key)))
        return J({ error: "Not found" }, 404);
      return J({ data: r.data });
    }
    case "POST clip": {
      const b = await body(), d = String(b.data || ""), to = String(b.to || "");
      const ok = to === "all" || myG.includes(to) || to !== me.id && !!await db.prepare("SELECT id FROM users WHERE id=?").bind(to).first();
      if (!ok || !d.startsWith("data:audio") || d.length > 65e4)
        return J({ error: "Could not send that buzz" }, 400);
      const dur = Math.min(Math.max(+b.dur || 0, 0), 30), text = String(b.text || "").trim().slice(0, 500);
      const rs = await db.batch([
        db.prepare("DELETE FROM clips WHERE ts<?").bind(now - 6048e5),
        db.prepare(
          "INSERT INTO clips(from_id,to_key,data,dur,ts,txt) VALUES(?,?,?,?,?,?)"
        ).bind(me.id, to, d, dur, now, text)
      ]);
      const cid = rs[1].meta.last_row_id, rc = to === "all" ? ALL.filter((i) => i !== me.id) : to.startsWith("g:") ? (groupOf(to) || []).filter((i) => i !== me.id) : [to];
      const tl = to === "all" ? "everyone" : to.startsWith("g:") ? GNAME[to.slice(2)] : "you";
      bg(
        (async () => {
          let tx = text;
          if (!tx) {
            tx = await transcribe(env, d);
            if (tx)
              await db.prepare("UPDATE clips SET txt=? WHERE id=?").bind(tx, cid).run();
          }
          await notify(
            db,
            rc,
            "buzz",
            {
              title: me.name + " buzzed " + tl,
              body: tx ? '"' + tx + '"' : "Sent a voice buzz",
              tag: "buzz-" + me.id
            },
            origin
          );
        })()
      );
      return J({ ok: true });
    }
    case "GET push/key":
      return J({ key: (await getVapid(db)).pub });
    case "POST push/sub": {
      const b = await body(), ep = String(b.endpoint || "");
      if (!/^https:\/\//.test(ep) || ep.length > 1e3)
        return J({ error: "Invalid subscription" }, 400);
      await db.prepare(
        "INSERT OR REPLACE INTO push_subs(endpoint,user_id,ts) VALUES(?,?,?)"
      ).bind(ep, me.id, now).run();
      return J({ ok: true });
    }
    case "POST push/unsub": {
      const b = await body();
      await db.prepare("DELETE FROM push_subs WHERE endpoint=? AND user_id=?").bind(String(b.endpoint || ""), me.id).run();
      return J({ ok: true });
    }
    case "POST push/test":
      await notify(
        db,
        [me.id],
        "msg",
        {
          title: "GalaGram",
          body: "Notifications are working.",
          tag: "test"
        },
        origin,
        true
      );
      return J({ ok: true });
    case "GET notifs": {
      const rows = (await db.prepare(
        "SELECT id,title,body,tag FROM notifs WHERE user_id=? AND done=0 ORDER BY id LIMIT 10"
      ).bind(me.id).all()).results;
      if (rows.length)
        await db.prepare(
          `UPDATE notifs SET done=1 WHERE id IN (${rows.map(() => "?").join(",")})`
        ).bind(...rows.map((x) => x.id)).run();
      return J(rows);
    }
    case "GET prefs": {
      const r = await db.prepare("SELECT v FROM kv WHERE k=?").bind("prefs:" + me.id).first();
      let v = {};
      try {
        v = r ? JSON.parse(r.v) : {};
      } catch (e) {
      }
      return J({
        msg: v.msg !== false,
        buzz: v.buzz !== false,
        call: v.call !== false
      });
    }
    case "POST prefs": {
      const b = await body();
      await db.prepare("INSERT OR REPLACE INTO kv(k,v) VALUES(?,?)").bind(
        "prefs:" + me.id,
        JSON.stringify({
          msg: b.msg !== false,
          buzz: b.buzz !== false,
          call: b.call !== false
        })
      ).run();
      return J({ ok: true });
    }
    case "POST signout-others":
      await db.prepare("DELETE FROM sessions WHERE user_id=? AND token!=?").bind(me.id, tok).run();
      return J({ ok: true });
    case "POST music": {
      const b = await body(), u = String(b.url || "").trim().slice(0, 300);
      let v, label;
      if (b.file) {
        const f = b.file, id = String(f.id || ""), title = String(f.title || "Untitled").trim().slice(0, 120) || "Untitled";
        if (!/^[a-z0-9]{10,24}$/.test(id))
          return J({ error: "Invalid file" }, 400);
        const ok = await db.prepare(
          "SELECT mime FROM media WHERE id=? AND ch='soundtrip' AND user_id=? LIMIT 1"
        ).bind(id, me.id).first();
        if (!ok || !String(ok.mime).startsWith("audio/"))
          return J({ error: "Upload the song first" }, 400);
        v = {
          src: "file",
          id,
          title,
          mime: ok.mime,
          by: me.id,
          ts: now
        };
        label = title;
      } else {
        if (!u) {
          await db.prepare("DELETE FROM kv WHERE k='music'").run();
          return J({ ok: true });
        }
        const m2 = parseMusic(u);
        if (!m2)
          return J({ error: "Paste a YouTube or Spotify link" }, 400);
        v = {
          url: u,
          embed: m2.embed,
          src: m2.src,
          vid: m2.vid || "",
          list: m2.list || "",
          kind: m2.kind || "",
          by: me.id,
          ts: now
        };
        label = u;
      }
      await db.batch([
        db.prepare("INSERT OR REPLACE INTO kv(k,v) VALUES('music',?)").bind(JSON.stringify(v)),
        db.prepare(
          "INSERT INTO messages(channel,user_id,body,ts) VALUES(?,?,?,?)"
        ).bind("soundtrip", me.id, "Now playing: " + label, now)
      ]);
      return J({ ok: true });
    }
    case "POST voice": {
      const b = await body(), ch = String(b.channel || "");
      const okV = /^(lounge|study|walkie)$/.test(ch) || ch.startsWith("call:") && /^(dm|g):/.test(ch.slice(5)) && okCh(ch.slice(5));
      if (b.action === "join" && !okV)
        return J({ error: "Invalid channel" }, 400);
      await db.prepare("DELETE FROM voice WHERE user_id=?").bind(me.id).run();
      if (b.action === "join")
        await db.prepare("INSERT INTO voice VALUES(?,?,?)").bind(b.channel, me.id, now).run();
      return J({ ok: true });
    }
    case "POST signal": {
      const b = await body();
      if (![
        "offer",
        "answer",
        "ice",
        "invite",
        "decline",
        "cancel",
        "media"
      ].includes(b.type) || String(b.data || "").length > 2e4)
        return J({ error: "Invalid signal" }, 400);
      if (b.type === "invite") {
        let d = {};
        try {
          d = JSON.parse(b.data);
        } catch (e) {
        }
        const rl = String(d.room || "").startsWith("g:") ? GNAME[String(d.room).slice(2)] : "";
        bg(
          notify(
            db,
            [String(b.to)],
            "call",
            {
              title: me.name + " is calling",
              body: (d.video ? "Video call" : "Voice call") + (rl ? " in " + rl : ""),
              tag: "call"
            },
            origin
          )
        );
      }
      await db.batch([
        db.prepare("DELETE FROM signals WHERE ts<?").bind(now - 12e4),
        db.prepare(
          "INSERT INTO signals(from_id,to_id,type,data,ts) VALUES(?,?,?,?,?)"
        ).bind(me.id, String(b.to), b.type, b.data, now)
      ]);
      return J({ ok: true });
    }
  }
  return J({ error: "Not found" }, 404);
}
__name(handle, "handle");
async function onRequest(ctx) {
  try {
    return await handle(ctx);
  } catch (e) {
    return J(
      { error: "Server error: " + String(e && e.message || e) },
      500
    );
  }
}
__name(onRequest, "onRequest");

// ../.wrangler/tmp/pages-xI6SKr/functionsRoutes-0.9584827391811127.mjs
var routes = [
  {
    routePath: "/api/:path*",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest]
  }
];

// ../../../../.npm-global/lib/node_modules/wrangler/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../../../../.npm-global/lib/node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
export {
  pages_template_worker_default as default
};
