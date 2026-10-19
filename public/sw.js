self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{
e.waitUntil((async()=>{
let list=[];
try{const r=await fetch('/api/notifs',{credentials:'same-origin'});if(r.ok)list=await r.json()}catch(err){}
const cl=await self.clients.matchAll({type:'window',includeUncontrolled:true});
const visible=cl.some(c=>c.visibilityState==='visible');
if(!list.length){
if(!visible)await self.registration.showNotification('GalaGram',{body:'New activity',tag:'gg',icon:'/icon-192.png',badge:'/icon-192.png'});
return;
}
if(visible)return;
for(const n of list){
await self.registration.showNotification(n.title,{body:n.body,tag:n.tag||'gg',renotify:true,icon:'/icon-192.png',badge:'/icon-192.png',vibrate:[120,60,120],requireInteraction:n.tag==='call'});
}
})());
});
self.addEventListener('notificationclick',e=>{
e.notification.close();
e.waitUntil((async()=>{
const cl=await self.clients.matchAll({type:'window',includeUncontrolled:true});
for(const c of cl){if('focus' in c){await c.focus();return}}
if(self.clients.openWindow)await self.clients.openWindow('/');
})());
});
