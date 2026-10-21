const COLORS=['#22c55e','#111827','#ef4444','#ec4899','#2563eb','#9f1239','#6b7280','#92400e','#7c3aed','#4d8f3a'];
const PALETTE=['#22c55e','#111827','#ef4444','#ec4899','#2563eb','#9f1239','#6b7280','#92400e','#7c3aed','#4d8f3a','#0ea5e9','#f59e0b','#14b8a6','#1f2a44'];
const TEXT=[{id:'general',name:'general',icon:'hash'},{id:'random',name:'random',icon:'hash'},{id:'plans',name:'plans',icon:'hash'},{id:'chikahan',name:'Chikahan',icon:'chat'},{id:'movies',name:'Movie Marathon',icon:'film'},{id:'soundtrip',name:'Soundtrip',icon:'music'}];
const VOICE=[{id:'lounge',name:'Lounge'},{id:'study',name:'Study Room'}];
const NAV=[['home','Front Page','home'],['chat','Chat','chat'],['walkie','Walkie','radio'],['calendar','Calendar','calendar'],['album','Album','album'],['finance','Finance','wallet'],['map','Map','map'],['profile','Profile','user'],['settings','Settings','settings']];
const GROUPS=[{id:'gherison',name:'Gherison',members:['ghel','crimson','ika']},{id:'gherecess',name:'Gherecess',members:['ghel','prince','andeng']},{id:'mlcodm',name:'ML/CODM',members:['ian','prince','vhel','jordan']},{id:'romana',name:'Romana Family',members:['prince','ika','ian']}];
const LOADMSG=['Warming up the press','Setting the type','Inking the headlines','Folding the edition'];
const P={
menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
radio:'<circle cx="12" cy="13" r="2"/><path d="M8.5 9.5a5 5 0 0 0 0 7M15.5 9.5a5 5 0 0 1 0 7M5.5 6.5a9 9 0 0 0 0 13M18.5 6.5a9 9 0 0 1 0 13"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
wallet:'<path d="M3 7a2 2 0 0 1 2-2h13v4"/><rect x="3" y="7" width="18" height="13" rx="3"/><circle cx="16.5" cy="13.5" r="1"/>',
map:'<path d="M12 21s7-5.7 7-11a7 7 0 0 0-14 0c0 5.3 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z"/>',
monitor:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
hash:'<path d="M5 9h15M4 15h15M10 3L8 21M16 3l-2 18"/>',
volume:'<path d="M11 5L6 9H3v6h3l5 4V5zM16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/>',
mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
micoff:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M3 3l18 18"/>',
leave:'<path d="M4 15c5-4 11-4 16 0l-2 3-3-1.5v-2.5a9 9 0 0 0-6 0v2.5L6 18z"/>',
logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0"/>',
x:'<path d="M6 6l12 12M18 6L6 18"/>',
trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>'
};
const ico=n=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${P[n]}</svg>`;
const logo=`<svg viewBox="0 0 64 64" width="34" height="34"><rect width="64" height="64" rx="16" fill="var(--ac)"/><path d="M32 13c-9.4 0-17 7.2-17 16.2C15 41 32 52 32 52s17-11 17-22.8C49 20.2 41.4 13 32 13z" fill="var(--ink)"/><circle cx="32" cy="29" r="6.5" fill="var(--ac)"/></svg>`;
Object.assign(P,{
home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
cam:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
play:'<path d="M7 4l13 8-13 8z"/>',
phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
video:'<rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3z"/>',
videooff:'<rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3zM3 3l18 18"/>',
chev:'<path d="M6 9l6 6 6-6"/>',
screen:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M9 10l3-3 3 3M12 7v6"/>',
full:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
pause:'<path d="M8 5v14M16 5v14"/>',
volx:'<path d="M11 5L6 9H3v6h3l5 4V5zM16 9l5 6M21 9l-5 6"/>',
list:'<path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14c1 2 7 2 8 0M9 9.5h.01M15 9.5h.01"/>',
image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-9 9"/>',
check:'<path d="M5 12l5 5 9-10"/>',
trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
dl:'<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
film:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5M16 4.5a3.5 3.5 0 0 1 0 7M18 14.8c2.5.7 4 2.3 4 5.2"/>'
});

Object.assign(P,{
menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
chat:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
radio:'<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>',
calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
map:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
moon:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
monitor:'<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>',
send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
hash:'<line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/>',
volume:'<path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6A1.4 1.4 0 0 1 5.4 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4a.7.7 0 0 0 1.2-.5z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.4 18.4a9 9 0 0 0 0-12.8"/>',
volx:'<path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6A1.4 1.4 0 0 1 5.4 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4a.7.7 0 0 0 1.2-.5z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/>',
mic:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
micoff:'<line x1="2" x2="22" y1="2" y2="22"/><path d="M18.9 13.2A7.1 7.1 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.3V5a3 3 0 0 0-5.7-1.3"/><path d="M9 9v3a3 3 0 0 0 5.1 2.1"/><line x1="12" x2="12" y1="19" y2="22"/>',
leave:'<path d="M10.7 13.3a16 16 0 0 0 3.4 2.6l1.3-1.3a2 2 0 0 1 2.1-.4 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.7 2v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-3.3-2.7m-2.7-3.3A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8.1 9.9"/><line x1="22" x2="2" y1="2" y2="22"/>',
phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
video:'<path d="m16 13 5.2 3.5a.5.5 0 0 0 .8-.4V7.9a.5.5 0 0 0-.8-.4L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
videooff:'<path d="M10.7 6H14a2 2 0 0 1 2 2v2.5l5.2-3.1a.5.5 0 0 1 .8.4v8.2"/><path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/><path d="m2 2 20 20"/>',
logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
eye:'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',
play:'<polygon points="6 3 20 12 6 21 6 3"/>',
pause:'<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
film:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18M3 7.5h4M3 12h18M3 16.5h4M17 3v18M17 7.5h4M17 16.5h4"/>',
cam:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
image:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
list:'<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
check:'<path d="M20 6 9 17l-5-5"/>',
trash:'<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
dl:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
chev:'<path d="m6 9 6 6 6-6"/>',
screen:'<path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="m17 8 5-5"/><path d="M17 3h5v5"/>',
full:'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
printer:'<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
qr:'<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
scan:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
nav:'<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
locate:'<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',
share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" x2="15.4" y1="13.5" y2="17.5"/><line x1="15.4" x2="8.6" y1="6.5" y2="10.5"/>',
lock:'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
edit:'<path d="M12 20h9"/><path d="M16.4 3.6a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
album:'<path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="m22 13-1.3-1.3a2.4 2.4 0 0 0-3.4 0L11 18"/><circle cx="12" cy="8" r="2"/><rect width="16" height="16" x="6" y="2" rx="2"/>'
});
const $=(s,e=document)=>e.querySelector(s);
const $$=(s,e=document)=>[...e.querySelectorAll(s)];
const ls={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lum=h=>{const n=parseInt(h.slice(1),16);return(0.299*(n>>16)+0.587*(n>>8&255)+0.114*(n&255))/255};
const mix=(h,t,a)=>{const f=x=>parseInt(x,16),p=s=>[f(s.slice(1,3)),f(s.slice(3,5)),f(s.slice(5,7))],A=p(h),B=p(t);return'#'+A.map((v,i)=>Math.round(v+(B[i]-v)*a).toString(16).padStart(2,'0')).join('')};
const isDark=()=>document.documentElement.dataset.theme==='dark';
const nameColor=c=>isDark()&&lum(c)<0.3?'#e5e7eb':c;
const inkFor=c=>lum(c)>0.62?'#0b0f14':'#ffffff';
const peso=n=>'₱'+Number(n).toLocaleString('en-PH',{minimumFractionDigits:2,maximumFractionDigits:2});
const av=(u,cls='')=>u.avatar?`<img class="av ${cls}" src="${u.avatar}" alt="">`:`<span class="av ${cls}" style="background:${u.color};color:${inkFor(u.color)}">${esc(u.name[0])}</span>`;
let ME=null,USERS=[],qrTok=null,qrTimer=null,syncing=false,again=false;
const cur={sig:0,clip:0};
const S={r2:false,alb:{cur:'all',u:'all',list:[],items:[],more:false,up:[],total:0,videos:0,cover:''},locs:[],trips:[],mk:{},tl:[],pos:null,pax:1,round:false,dest:null,plan:null,myTrip:null,mapC:null,finMonth:'',finCat:'all',finQ:'',finDrawn:false,budget:0,map:null,screens:{},scr:null,scrQ:ls.get('gg_scrq','std'),scrAudio:false,pend:[],vm:null,vmA:null,mc:{},custom:[],emv:undefined,calView:'month',heat:false,calHide:null,sel:'',eventsRaw:'',calDrawn:false,music:null,musicRaw:undefined,bubOpen:false,bubSig:'',bubN:0,installEv:null,remote:{},peerCam:{},camOn:true,cam:false,invited:[],incoming:null,callRoom:null,isCaller:false,callStart:null,target:'all',voices:[],holding:false,rec:null,rmic:null,playing:null,lastId:{},latest:{},latestInit:false,unreadSig:'',view:'home',ch:'general',month:new Date(),muted:false,stream:null,ctx:null,actx:null,an:{},meter:null,local:false,loc:'Antipolo, Rizal',cache:{},seenMax:{},voice:{},online:[],fin:[],events:[],vc:null,pcs:{},offered:false,hold:false,pv:0,talk:{},confetti:false};
const FACE='<circle cx="12" cy="12" r="11" fill="#ffd43b"/><circle cx="12" cy="12" r="10.5" fill="none" stroke="#e8a900"/>';
const FACER='<circle cx="12" cy="12" r="11" fill="#ff7a59"/><circle cx="12" cy="12" r="10.5" fill="none" stroke="#d94a2a"/>';
const EY='<circle cx="8.3" cy="10" r="1.5" fill="#4a3300"/><circle cx="15.7" cy="10" r="1.5" fill="#4a3300"/>';
const SM='<path d="M7 14c1.2 3 8.8 3 10 0" stroke="#4a3300" stroke-width="1.6" fill="none" stroke-linecap="round"/>';
const FR='<path d="M8 17.5c1.2-2.4 6.8-2.4 8 0" stroke="#4a3300" stroke-width="1.6" fill="none" stroke-linecap="round"/>';
const MO='<path d="M6.5 13.2h11c0 3.6-2.5 5.8-5.5 5.8s-5.5-2.2-5.5-5.8z" fill="#4a3300"/>';
const HT='M12 21s-7-4.5-9-9.5C1.5 7 5 4 8 5.5c1.6.8 2.7 2 4 3.5 1.3-1.5 2.4-2.7 4-3.5 3-1.5 6.5 1.5 5 6-2 5-9 9.5-9 9.5z';
const EMO_SVG={
smile:FACE+EY+SM,
grin:FACE+EY+MO+'<path d="M7.4 13.2h9.2v1.7H7.4z" fill="#fff"/>',
laugh:FACE+'<path d="M6.5 10.5q1.8-2.4 3.6 0M13.9 10.5q1.8-2.4 3.6 0" stroke="#4a3300" stroke-width="1.6" fill="none" stroke-linecap="round"/>'+MO+'<path d="M7.4 13.2h9.2v1.7H7.4z" fill="#fff"/><path d="M3.8 9.5c-1 1.5-1 2.5 0 2.5s1-1 0-2.5zM20.2 9.5c-1 1.5-1 2.5 0 2.5s1-1 0-2.5z" fill="#4db8ff"/>',
wink:FACE+'<circle cx="8.3" cy="10" r="1.5" fill="#4a3300"/><path d="M14 10.2q1.7 1.7 3.4 0" stroke="#4a3300" stroke-width="1.6" fill="none" stroke-linecap="round"/>'+SM,
love:FACE+'<g transform="translate(4.6 6.6) scale(.2)"><path d="'+HT+'" fill="#ff3b5c"/></g><g transform="translate(13.4 6.6) scale(.2)"><path d="'+HT+'" fill="#ff3b5c"/></g>'+SM,
cool:FACE+'<path d="M4.5 8.5h15v1.4c0 2.2-1.6 3.6-3.7 3.6-1.8 0-2.8-1-3.3-2.3h-1c-.5 1.3-1.5 2.3-3.3 2.3-2.1 0-3.7-1.4-3.7-3.6z" fill="#1f1f24"/>'+SM,
cry:FACE+EY+'<path d="M8.3 11.8c-1 1.8-1 3 0 3s1-1.2 0-3zM15.7 11.8c-1 1.8-1 3 0 3s1-1.2 0-3z" fill="#4db8ff"/>'+FR,
sad:FACE+EY+'<path d="M6.5 7.5l3 .8M17.5 7.5l-3 .8" stroke="#4a3300" stroke-width="1.4" stroke-linecap="round"/>'+FR,
angry:FACER+EY+'<path d="M6 7l4 2M18 7l-4 2" stroke="#4a1500" stroke-width="2" stroke-linecap="round"/>'+FR.replace('#4a3300','#4a1500'),
shock:FACE+'<circle cx="8.3" cy="10" r="2.4" fill="#fff"/><circle cx="15.7" cy="10" r="2.4" fill="#fff"/><circle cx="8.3" cy="10" r="1.1" fill="#4a3300"/><circle cx="15.7" cy="10" r="1.1" fill="#4a3300"/><ellipse cx="12" cy="16.5" rx="2.2" ry="3" fill="#4a3300"/>',
sleepy:FACE+'<path d="M6.5 10.5h3.5M14 10.5h3.5" stroke="#4a3300" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="12" cy="16" rx="1.6" ry="1.2" fill="#4a3300"/><path d="M16.5 3.5h3.5l-3.5 4h3.5" stroke="#3a7bd5" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
think:FACE+EY+'<path d="M13.5 6.6q2-1.6 4 0" stroke="#4a3300" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M9 16.5h6" stroke="#4a3300" stroke-width="1.6" stroke-linecap="round"/>',
silly:FACE+EY+SM+'<path d="M10 16.5v3a2 2 0 0 0 4 0v-3z" fill="#ff7b9c"/>',
blush:FACE+'<path d="M6.5 10.5q1.8-2.4 3.6 0M13.9 10.5q1.8-2.4 3.6 0" stroke="#4a3300" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle cx="6.2" cy="14" r="1.9" fill="#ff8fa3" opacity=".75"/><circle cx="17.8" cy="14" r="1.9" fill="#ff8fa3" opacity=".75"/><path d="M9.5 15.2c1.4 1.6 3.6 1.6 5 0" stroke="#4a3300" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
heart:'<path d="'+HT+'" fill="#ff3b5c"/><path d="M6.5 8.5c.5-1.3 1.6-1.9 2.7-1.6" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round" opacity=".7"/>',
broken:'<path d="'+HT+'" fill="#ff3b5c"/><path d="M12.5 6.5l-2.2 4 3 2.2-2.3 4.8" stroke="#fff" stroke-width="1.6" fill="none" stroke-linejoin="round"/>',
fire:'<path d="M12 2c.5 3-2 4.5-3.5 7C7 11.5 7 15 9 17.5c1 1.2 2.2 2 3 2.5 3.5-.5 6-3.5 5.5-7-.3-2-1.5-3-2.5-4.5C14 7 13 4.5 12 2z" fill="#ff7a1a"/><path d="M12 12c-1.5 2-2.5 3-1.5 5 .5 1 1.500 1.500 1.500 1.500s2.500-.5 2.500-3c0-1.500-1.500-2.500-2.500-3.500z" fill="#ffd43b"/>',
star:'<path d="M12 2l2.9 6.6 7.100.7-5.400 4.700 1.600 7-6.200-3.700-6.200 3.700 1.600-7L2 9.300l7.100-.7z" fill="#ffc107" stroke="#e8a000" stroke-linejoin="round"/>',
bolt:'<path d="M13 2L4 14h6l-1 8 9-12h-6z" fill="#ffd43b" stroke="#e8a000" stroke-linejoin="round"/>',
check:'<circle cx="12" cy="12" r="11" fill="#22c55e"/><path d="M6.500 12.500l4 4 7-8" stroke="#fff" stroke-width="2.400" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
music:'<circle cx="12" cy="12" r="11" fill="#8b5cf6"/><path d="M10 16.500V8l6-1.500v8" stroke="#fff" stroke-width="1.700" fill="none" stroke-linejoin="round"/><circle cx="8.500" cy="16.500" r="1.800" fill="#fff"/><circle cx="14.500" cy="15" r="1.800" fill="#fff"/>',
cake:'<rect x="4" y="12" width="16" height="8" rx="2" fill="#ff9ec5"/><path d="M4 14c2 1.500 3 1.500 4 0s2 1.500 4 0 3 1.500 4 0 2 1.500 4 0V12H4z" fill="#fff"/><rect x="11" y="7" width="2" height="5" fill="#8b5cf6"/><path d="M12 3c1 1 1 2.200 0 3.200-1-1-1-2.200 0-3.200z" fill="#ffb300"/>',
gift:'<rect x="3.500" y="9" width="17" height="11" rx="1.500" fill="#ef4444"/><rect x="2.500" y="6.500" width="19" height="4" rx="1" fill="#f87171"/><rect x="11" y="6.500" width="2" height="13.500" fill="#ffd43b"/><path d="M12 6.500C9 6.500 8 3.500 10 3.500s2 3 2 3zM12 6.500c3 0 4-3 2-3s-2 3-2 3z" fill="#ffd43b"/>',
popcorn:'<circle cx="8" cy="8" r="2.800" fill="#fff3c4"/><circle cx="12" cy="6.500" r="3" fill="#ffe9a0"/><circle cx="16" cy="8" r="2.800" fill="#fff3c4"/><path d="M6 10h12l-1.500 11h-9z" fill="#ef4444"/><path d="M9.500 10l.6 11M14.500 10l-.6 11" stroke="#fff" stroke-width="1.800"/>'
};
const QUAL={low:{n:'Low',d:'480p, 15 fps',w:854,h:480,fps:15,kbps:900,hint:'detail'},std:{n:'Standard',d:'720p, 30 fps',w:1280,h:720,fps:30,kbps:2500,hint:'detail'},high:{n:'High',d:'1080p, 30 fps',w:1920,h:1080,fps:30,kbps:5000,hint:'detail'},smooth:{n:'Smooth',d:'1080p, 60 fps',w:1920,h:1080,fps:60,kbps:8000,hint:'motion'}};
const EMO={};
Object.keys(EMO_SVG).forEach(n=>{EMO[n]='data:image/svg+xml;charset=utf-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">'+EMO_SVG[n]+'</svg>')});
const EMO_NAMES=Object.keys(EMO_SVG);
const TW='https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/';
const twUrl=c=>{const cp=Array.from(c).map(x=>x.codePointAt(0).toString(16));return TW+(cp.includes('200d')?cp:cp.filter(x=>x!=='fe0f')).join('-')+'.svg'};
const EMJ=/(?:\p{Regional_Indicator}{2}|[#*0-9]\uFE0F?\u20E3|\p{Extended_Pictographic}(?:\uFE0F|\p{Emoji_Modifier})?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\p{Emoji_Modifier})?)*)/gu;
const emjHtml=m=>`<img class="emo" src="${twUrl(m)}" alt="${m}" draggable="false" onerror="this.replaceWith(document.createTextNode(this.alt))">`;
const emjImg=c=>`<img class="emo" data-u="${c}" src="${twUrl(c)}" alt="${c}" draggable="false">`;
function fmt(t){
const urls=[];
const s=esc(t).replace(/(https?:\/\/[^\s<]+)/g,u=>{urls.push(u);return '\u0001'+(urls.length-1)+'\u0001'});
const lines=s.split('\n');
const inl=x=>x.replace(/\*\*\*(.+?)\*\*\*/g,'<strong><em>$1</em></strong>').replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/__(.+?)__/g,'<u>$1</u>').replace(/\*(.+?)\*/g,'<em>$1</em>').replace(/:([a-z0-9_]{2,16}):/g,(m,n)=>EMO[n]?`<img class="emo" src="${EMO[n]}" alt=":${n}:">`:m);
let out='',open=false;
lines.forEach((ln,i)=>{
const b=/^\s*[-•]\s+(.*)$/.exec(ln),nb=/^\s*[-•]\s+/.test(lines[i+1]||'');
if(b){if(!open){out+='<ul>';open=true}out+='<li>'+inl(b[1])+'</li>'}
else{if(open){out+='</ul>';open=false}out+=inl(ln)+(i<lines.length-1&&!nb?'<br>':'')}
});
if(open)out+='</ul>';
out=out.replace(/\u0001(\d+)\u0001/g,(m,i)=>`<a href="${urls[+i]}" target="_blank" rel="noopener noreferrer">${urls[+i]}</a>`);
return out.replace(EMJ,emjHtml);
}
const isBig=t=>{const s=t.trim().replace(/:([a-z0-9_]{2,16}):/g,(m,n)=>EMO[n]?'\u0001':m).replace(EMJ,'\u0001').replace(/\s/g,'');return /^\u0001{1,5}$/.test(s)};
const attList=m=>{if(m._a!==undefined&&m._ar===m.att)return m._a;let a=[];try{a=m.att?JSON.parse(m.att):[]}catch(e){}m._a=a;m._ar=m.att;return a};
const attLabel=a=>{const t=a&&a[0]&&a[0].t;return t==='img'?'[Photo]':t==='vid'?'[Video]':t==='aud'?'[Voicemail]':''};
const rid=()=>Math.random().toString(36).slice(2,14)+Date.now().toString(36);
const byId=id=>USERS.find(u=>u.id===id)||{id,name:'Unknown',color:'#6b7280',bday:'2000-01-01',avatar:''};
const chanLabel=id=>id.startsWith('call:')?chName(id.slice(5)):id==='walkie'?'Squad':VOICE.find(c=>c.id===id).name;

async function api(p,o={}){
const r=await fetch('/api/'+p,{method:o.method||(o.body?'POST':'GET'),headers:o.body?{'Content-Type':'application/json'}:{},body:o.body?JSON.stringify(o.body):undefined,credentials:'same-origin'});
let d={};try{d=await r.json()}catch(e){}
if(r.status===401&&ME&&p!=='login'){ME=null;showLogin()}
if(!r.ok)throw Object.assign(new Error(d.error||'Request failed'),{status:r.status});
return d;
}
async function loadMe(keep){
const d=await api('me');ME=d.me;USERS=d.users;S.r2=!!d.r2;if(!keep)Object.assign(cur,d.cur);S.pv=Math.max(0,...USERS.map(u=>u.upd||0));
}

function applyTheme(over){
const m=ls.get('gg_mode','light');
const dark=m==='dark'||(m==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);
const root=document.documentElement;
root.dataset.theme=dark?'dark':'light';
root.classList.toggle('calm',ls.get('gg_calm',false));
root.classList.toggle('compact',ls.get('gg_compact',false));
root.classList.toggle('hc',ls.get('gg_hc',false));
root.classList.toggle('sansh',ls.get('gg_head','serif')==='sans');
root.classList.toggle('noticker',!ls.get('gg_ticker',true));
const fs=ls.get('gg_fs','m');root.classList.toggle('fs-s',fs==='s');root.classList.toggle('fs-l',fs==='l');
const base=over||(ME?ME.color:'#1f2a44');
let c=base;
if(dark)c=mix(base,'#ffffff',lum(base)<0.28?0.85:0.3);
const r=root.style;
r.setProperty('--base',base);r.setProperty('--ac',c);r.setProperty('--ink',inkFor(c));
r.setProperty('--side-ink',dark?'#ffffff':inkFor(base));
const t=$('meta[name=theme-color]');if(t)t.content=base;
const b=$('#ltheme');if(b)b.innerHTML=ico(dark?'sun':'moon');
}
function toast(t){
const d=document.createElement('div');d.textContent=t;
$('#toast').appendChild(d);setTimeout(()=>d.remove(),3200);
}
const soft=(f,d,t)=>{if(ls.get('gg_sounds',true))tone(f,d,t)};
function tone(f,d=.15,type='sine'){
try{const c=new (window.AudioContext||window.webkitAudioContext)();const o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.value=f;g.gain.setValueAtTime(.15,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+d);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+d);setTimeout(()=>c.close(),400)}catch(e){}
}
function countUp(el){
const to=+el.dataset.count,f=el.dataset.fmt==='peso'?peso:v=>Math.round(v);
if(ls.get('gg_calm',false)||!to){el.textContent=f(to);return}
const t0=performance.now();
(function s(t){const k=Math.min(1,(t-t0)/1000),e=1-Math.pow(1-k,3);el.textContent=f(to*e);if(k<1)requestAnimationFrame(s)})(t0);
}
function confetti(){
if(ls.get('gg_calm',false))return;
const c=$('#confetti');c.hidden=false;const x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;
const ps=Array.from({length:150},()=>({x:Math.random()*c.width,y:-20-Math.random()*c.height*.6,r:5+Math.random()*7,v:2+Math.random()*4,s:Math.random()*2-1,a:Math.random()*6,c:COLORS[Math.floor(Math.random()*COLORS.length)]}));
let t=0;
(function f(){x.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.y+=p.v;p.x+=Math.sin(p.a+=.05)*1.5+p.s;x.fillStyle=p.c;x.fillRect(p.x,p.y,p.r,p.r*.6)});if(++t<300)requestAnimationFrame(f);else{x.clearRect(0,0,c.width,c.height);c.hidden=true}})();
}
function nextBirthdays(){
const now=new Date(),today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
return USERS.map(u=>{const b=new Date(u.bday+'T00:00');let n=new Date(today.getFullYear(),b.getMonth(),b.getDate());if(n<today)n.setFullYear(n.getFullYear()+1);return{u,days:Math.round((n-today)/864e5),age:n.getFullYear()-b.getFullYear()}}).sort((a,b)=>a.days-b.days);
}
const pageHead=(k,t,r='')=>`<div class="phead rise"><div><small class="kick">${k}</small><h1>${t}</h1></div>${r}</div><hr class="dbl">`;

async function boot(){
$('#orbit').innerHTML=COLORS.map((c,i)=>`<i style="--i:${i};background:${c}"></i>`).join('');
$('#lword').innerHTML='GalaGram'.split('').map((c,i)=>`<span style="animation-delay:${.15+i*.07}s">${c}</span>`).join('');
$('#faces').innerHTML=COLORS.map((c,i)=>`<i style="background:${c};--n:${i}"></i>`).join('');
$('#leye').innerHTML=ico('eye');
const d=new Date();
$('#ldate').textContent=d.toLocaleDateString([],{weekday:'long',month:'long',day:'numeric',year:'numeric'});
$('#led').textContent='No. '+Math.ceil((d-new Date(d.getFullYear(),0,0))/864e5);
applyTheme();
if('serviceWorker' in navigator)navigator.serviceWorker.register('/sw.js').catch(()=>{});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();S.installEv=e});
let i=0;const mt=setInterval(()=>{i=(i+1)%LOADMSG.length;$('#lmsg').textContent=LOADMSG[i]},520);
const wait=new Promise(r=>setTimeout(r,2200));
let ok=false;
try{await loadMe();ok=true}catch(e){}
await wait;clearInterval(mt);
$('#loader').classList.add('done');
ok?startApp():showLogin();
}

function showLogin(){
leaveVoice();
dockClear();
const bb=$('#bubble');if(bb)bb.remove();
$('#app').hidden=true;$('#login').hidden=false;applyTheme();drawQR();$('#lu').focus();
}
async function drawQR(){
clearInterval(qrTimer);
const on=ls.get('gg_qrlogin',true);$('#qrpane').hidden=!on;$('.lcard').style.gridTemplateColumns=on?'':'1fr';
if(!on)return;
try{
const d=await api('qr/new',{method:'POST',body:{}});qrTok=d.token;
const q=qrcode(0,'M');q.addData(location.origin+'/?qr='+qrTok);q.make();
$('#qrbox').innerHTML=q.createSvgTag({cellSize:4,margin:0,scalable:true});
qrTimer=setInterval(async()=>{
if($('#login').hidden){clearInterval(qrTimer);return}
try{
const s=await api('qr/status?token='+qrTok);
if(s.expired){drawQR();return}
if(s.ok){clearInterval(qrTimer);await loadMe();startApp()}
}catch(e){}
},2000);
}catch(e){$('#qrbox').innerHTML=''}
}
let hintT=null;
$('#lu').oninput=()=>{
clearTimeout(hintT);
hintT=setTimeout(async()=>{
const v=$('#lu').value.trim();
if(v.length<3){$('#who').hidden=true;applyTheme();return}
try{
const h=await api('hint?u='+encodeURIComponent(v));
if(h.found){$('#wav').innerHTML=av(h,'');$('#wname').textContent=h.name;$('#who').hidden=false;applyTheme(h.color)}
else{$('#who').hidden=true;applyTheme()}
}catch(e){}
},300);
};
$('#lf').onsubmit=async e=>{
e.preventDefault();
try{
await api('login',{body:{username:$('#lu').value,password:$('#lp').value}});
$('#lp').value='';$('#lerr').textContent='';await loadMe();startApp();
}catch(err){
$('#lerr').textContent=err.status===401?'Wrong username or password. Check spelling and capital letters.':'Could not reach the server. Try again.';
const f=$('.lform');f.classList.remove('shake');void f.offsetWidth;f.classList.add('shake');
}
};
$('#leye').onclick=()=>{const p=$('#lp');p.type=p.type==='password'?'text':'password'};
$('#ltheme').onclick=()=>{ls.set('gg_mode',isDark()?'light':'dark');applyTheme($('#who').hidden?undefined:ME&&ME.color)};

function startApp(){
clearInterval(qrTimer);applyTheme();$('#login').hidden=true;$('#app').hidden=false;S.cache={};S.seenMax={};S.lastId={};S.latest={};S.latestInit=false;shell();go(S.view);sync();syncPush();loadEmojis();if(ls.get('gg_share',false))geoStart();
const q=new URLSearchParams(location.search).get('qr');
if(q){history.replaceState(null,'',location.pathname);approveDialog(q)}
}
function modal(html){
const m=document.createElement('div');m.className='modal';m.innerHTML=html;
m.onclick=e=>{if(e.target===m)m.remove()};
document.body.appendChild(m);return m;
}
function approveDialog(tok){
const m=modal(`<div class="card"><h2>Approve sign-in?</h2><p class="mut">A device is asking to sign in as ${esc(ME.name)}. Only approve if it is you.</p><div class="vctl"><button class="ghost" id="no">Deny</button><button class="pri" id="yes">Approve</button></div></div>`);
$('#no',m).onclick=()=>m.remove();
$('#yes',m).onclick=async()=>{try{await api('qr/approve',{body:{token:tok}});toast('Sign-in approved')}catch(e){toast(e.message)}m.remove()};
}

function shell(){
const u=ME;
$('#app').innerHTML=`<div class="shell${ls.get('gg_mini',false)?' mini':''}"><aside id="side"><button class="mast-s" id="sbt" aria-label="Expand or collapse the sidebar" title="Expand or collapse"><span class="mono">G</span><span class="mt"><b>GalaGram</b><small>The friends edition</small></span><span class="chv">${ico('chev')}</span></button><nav>${NAV.map((n,i)=>`<button class="nv" data-v="${n[0]}" title="${n[1]}"><span class="no">0${i+1}</span>${ico(n[2])}<span class="lb">${n[1]}</span></button>`).join('')}</nav><div class="me">${av(u)}<div><b>${esc(u.name)}</b><small>${esc(u.role||'Member')}</small></div><button id="out" aria-label="Sign out">${ico('logout')}</button></div></aside><div class="main"><header class="top"><button class="iconbtn gbtn" id="burger" aria-label="Open the sidebar" title="Open the sidebar"><span>G</span></button><div class="dl">${ico('calendar')}<span id="clock"></span></div><span class="grow"></span><span id="onair"></span><button class="iconbtn" id="scn" aria-label="Scan a QR code" title="Scan a QR code to sign in another device">${ico('scan')}</button><button class="iconbtn" id="tm" aria-label="Toggle theme"></button></header><div class="ticker"><div class="track" id="ticker"></div></div><main id="view"></main></div><div class="scrim" id="scrim"></div></div>`;
$('#side').onclick=e=>{const b=e.target.closest('.nv');if(b)go(b.dataset.v)};
$('.me .av').onclick=()=>go('profile');
$('#burger').onclick=()=>toggleSide(true);
$('#scrim').onclick=()=>toggleSide(false);
$('#out').onclick=signOut;
$('#sbt').onclick=()=>{if(!matchMedia('(min-width:861px)').matches){toggleSide(false);return}const m=!ls.get('gg_mini',false);ls.set('gg_mini',m);$('.shell').classList.toggle('mini',m)};
$('#scn').onclick=openScanner;
$('#tm').onclick=()=>{ls.set('gg_mode',isDark()?'light':'dark');applyTheme();themeIcon();if(['settings','profile'].includes(S.view))go(S.view)};
themeIcon();tickClock();drawTicker();drawOnAir();
}
function tickClock(){const c=$('#clock');if(c){const d=new Date();c.textContent=d.toLocaleDateString([],{weekday:'short',month:'short',day:'numeric'})+'  •  '+d.toLocaleTimeString([],{hour:'numeric',minute:'2-digit',hour12:!ls.get('gg_24h',false)})}}
setInterval(tickClock,20000);
function drawTicker(){
const el=$('#ticker');if(!el)return;
const nb=nextBirthdays().slice(0,4).map(x=>x.days===0?`${x.u.name} turns ${x.age} today`:`${x.u.name} turns ${x.age} in ${x.days} day${x.days===1?'':'s'}`);
const items=[...nb,`${Math.max(1,S.online.length)} online now`,'Welcome to the friends edition'];
const h=items.map(t=>`<span>${esc(t)}</span><i></i>`).join('');
el.innerHTML=h+h+h+h;
}
function drawOnAir(){
const el=$('#onair');if(!el)return;
el.innerHTML=S.vc?`<button class="pill" id="oa"><i></i>${S.vc.startsWith('call:')?'In call':'On air'} · ${esc(chanLabel(S.vc))}</button>`:'';
const b=$('#oa');if(b)b.onclick=()=>{if(S.vc.startsWith('call:'))openCall();else if(S.vc==='walkie')go('walkie');else{S.ch='v:'+S.vc;go('chat')}};
}
function themeIcon(){const b=$('#tm');if(b)b.innerHTML=ico(isDark()?'sun':'moon')}
function toggleSide(o){$('#side').classList.toggle('open',o);$('#scrim').classList.toggle('open',o)}
async function signOut(){
geoStop(true);
leaveVoice();
try{const sub=await pushSub();if(sub)await api('push/unsub',{body:{endpoint:sub.endpoint}})}catch(e){}
try{await api('logout',{method:'POST',body:{}})}catch(e){}
ME=null;showLogin();
}
function go(v){
if(S.map&&v!=='map'){try{S.map.remove()}catch(e){}S.map=null;clearInterval(S.mapT)}
S.view=v;toggleSide(false);
$$('.nv').forEach(b=>b.classList.toggle('on',b.dataset.v===v));
const vw=$('#view');vw.ondragenter=vw.ondragover=vw.ondragleave=vw.ondrop=null;vw.classList.remove('enter');void vw.offsetWidth;vw.classList.add('enter');
({home:homeView,chat:chatView,walkie:walkieView,calendar:calView,album:albumView,finance:finView,map:mapView,profile:profileView,settings:setView})[v]();
}

async function refreshUsers(){
await loadMe(true);applyTheme();themeIcon();
const me=$('.me');if(me){me.innerHTML=`${av(ME)}<div><b>${esc(ME.name)}</b><small>${esc(ME.role||'Member')}</small></div><button id="out" aria-label="Sign out">${ico('logout')}</button>`;$('#out').onclick=signOut;$('.me .av').onclick=()=>go('profile')}
drawTicker();
if(S.view==='chat'){drawChs();drawMem();if(!S.ch.startsWith('v:'))drawMsgs()}
}
async function sync(){
if(!ME)return;
if(syncing){again=true;return}
syncing=true;
try{
const ch=S.ch.startsWith('v:')?'':S.ch;
const q=new URLSearchParams({ch,after:S.lastId[ch]||0,sig:cur.sig,clip:cur.clip,vc:S.vc||'',vis:document.hidden?0:1,inv:ls.get('gg_hide',false)?1:0});
const d=await api('sync?'+q);
let msgChanged=false;
if(d.ch){
const list=S.cache[d.ch]||[],ids=d.msgs.map(x=>x.id);
if(d.after===0){
const keep=list.filter(x=>x.p||x.f);
if(JSON.stringify(list.filter(x=>!x.p&&!x.f).map(x=>x.id))!==JSON.stringify(ids)){S.cache[d.ch]=d.msgs.concat(keep);msgChanged=d.ch===S.ch}
}else if(d.msgs.length){
const have=new Set(list.map(x=>x.id)),add=d.msgs.filter(x=>!have.has(x.id));
if(add.length){S.cache[d.ch]=list.filter(x=>!x.p&&!x.f).concat(add,list.filter(x=>x.p||x.f));msgChanged=d.ch===S.ch}
}
if(ids.length)S.lastId[d.ch]=Math.max(S.lastId[d.ch]||0,...ids);
}
const vChanged=JSON.stringify(d.voice)!==JSON.stringify(S.voice);
S.voice=d.voice;
const oChanged=JSON.stringify(d.online)!==JSON.stringify(S.online);
S.online=d.online;
const lt={};
d.latest.forEach(r=>{lt[r.channel]={id:r.id,u:r.u,x:r.x||attLabel((()=>{try{return JSON.parse(r.att)}catch(e){return[]}})())}});
if(S.latestInit){Object.keys(lt).forEach(k=>{const o=S.latest[k];if((!o||lt[k].id>o.id)&&lt[k].u!==ME.id){const active=S.view==='chat'&&S.ch===k&&!document.hidden;if(!active){soft(900,.1,'triangle');toast(byId(lt[k].u).name+' in '+chName(k)+': '+lt[k].x.slice(0,70))}}})}
S.latest=lt;S.latestInit=true;
if(S.view==='chat'&&!document.hidden&&!S.ch.startsWith('v:'))markRead(S.ch);
updUnread();
for(const s of d.sigs){cur.sig=Math.max(cur.sig,s.id);await onSignal(s)}
for(const c of d.clips){cur.clip=Math.max(cur.clip,c.id);incomingClip(c)}
if(d.emv!==undefined&&d.emv!==S.emv){S.emv=d.emv;loadEmojis()}
const ms=d.music||'';
if(ms!==S.musicRaw){
const first=S.musicRaw===undefined,had=!!S.music;
S.musicRaw=ms;
try{S.music=ms?JSON.parse(ms):null}catch(e){S.music=null}
const auto=!first&&S.music&&(S.music.by===ME.id||ls.get('gg_listen',true))&&!(S.vc&&S.vc.startsWith('call:'));
dockSet(S.music,!!auto);
if(S.view==='chat'&&S.ch==='soundtrip'){if(had!==!!S.music)drawPane()}
}
if(S.vc)await reconcileVoice();
callTick();
if(d.pv>S.pv){await refreshUsers()}
if(oChanged)drawTicker();
if(S.view==='chat'){
if(vChanged)drawChs();
if(oChanged)drawMem();
if(S.ch.startsWith('v:')){if(vChanged)drawPane()}else if(msgChanged)drawMsgs();
}
if(S.view==='walkie'&&oChanged)drawTargets();
}catch(e){}
finally{syncing=false;if(again){again=false;sync()}}
}
setInterval(sync,2000);

function paintTalk(){
if(!ME)return;
const talk={};
Object.keys(S.an).forEach(id=>{const a=S.an[id];a.an.getByteFrequencyData(a.buf);talk[id]=a.buf.reduce((x,y)=>x+y,0)/a.buf.length>12});
if(S.vc)talk[ME.id]=S.local&&!S.muted;
S.talk=talk;
$$('[data-id]').forEach(el=>el.classList.toggle('talk',!!talk[el.dataset.id]));
}
setInterval(paintTalk,150);

async function homeView(){
const now=new Date(),h=now.getHours(),g=h<12?'Good morning':h<18?'Good afternoon':'Good evening';
const [rec,fin]=await Promise.all([api('recent').catch(()=>[]),api('finance').catch(()=>[])]);
if(S.view!=='home')return;
const nb=nextBirthdays(),n=nb[0];
const inc=fin.filter(x=>x.type==='income').reduce((a,b)=>a+b.amount,0),exp=fin.filter(x=>x.type==='expense').reduce((a,b)=>a+b.amount,0);
const spend=USERS.map(u=>({u,v:fin.filter(x=>x.type==='expense'&&x.user_id===u.id).reduce((a,b)=>a+b.amount,0)})).sort((a,b)=>b.v-a.v)[0];
const on=id=>id===ME.id||S.online.includes(id);
const feed=rec.length?rec.map(m=>{const a=byId(m.u);return `<div class="fd">${av(a,'sm')}<div><b style="color:${nameColor(a.color)}">${esc(a.name)}</b> <small>#${esc(m.channel)} · ${new Date(m.t).toLocaleTimeString([],{hour:'numeric',minute:'2-digit',hour12:!ls.get('gg_24h',false)})}</small><p>${esc(m.x||attLabel((()=>{try{return JSON.parse(m.att)}catch(e){return[]}})()))}</p></div></div>`}).join(''):'<div class="empty">No dispatches yet. Start the conversation.</div>';
$('#view').innerHTML=pageHead(now.toLocaleDateString([],{weekday:'long',month:'long',day:'numeric',year:'numeric'}),'Front Page')+`<div class="home"><div class="stack"><article class="card lead rise"><small class="kick">Lead story</small><h2 class="hl">${g}, ${esc(ME.name)}.</h2><p class="mut">${USERS.filter(u=>on(u.id)).length} of ${USERS.length} friends are around right now.</p><div class="count">${n.days===0?`<b>Today</b><span>${esc(n.u.name)} turns ${n.age}</span>`:`<b data-count="${n.days}">0</b><span>day${n.days===1?'':'s'} until ${esc(n.u.name)}'s birthday</span>`}</div><div class="vctl left"><button class="pri" data-go="chat">Open chat</button><button class="ghost" data-go="walkie">${ico('radio')}Send a buzz</button></div></article><section class="card rise" style="--i:2"><h3>Latest dispatches</h3>${feed}</section></div><div class="stack"><section class="card rise" style="--i:1"><h3>Online now</h3><div class="facepile">${USERS.map(u=>`<button data-p="${u.id}" class="${on(u.id)?'':'off'}">${av(u)}${esc(u.name)}</button>`).join('')}</div></section><section class="card rise" style="--i:3"><h3>Treasury</h3><div class="tre"><div><span>Balance</span><b data-count="${inc-exp}" data-fmt="peso">0</b></div><div><span>Income</span><b class="inc">${peso(inc)}</b></div><div><span>Expenses</span><b class="exp">${peso(exp)}</b></div><div><span>Top spender</span><b>${spend&&spend.v>0?esc(spend.u.name):'None yet'}</b></div></div></section><section class="card rise" style="--i:4"><h3>Coming up</h3><div class="up">${nb.slice(0,3).map(x=>`<div>${av(x.u)}<div class="grow"><b>${esc(x.u.name)}</b><small>Turns ${x.age}</small></div><span class="mut">${x.days===0?'Today':x.days+'d'}</span></div>`).join('')}</div></section></div></div>`;
$$('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));
$$('[data-p]').forEach(b=>b.onclick=()=>showProfile(b.dataset.p));
$$('[data-count]').forEach(countUp);
if(n.days===0&&!S.confetti){S.confetti=true;setTimeout(confetti,600)}
}

function barcode(seed){
let h=0,x=0,bars='';
const t=String(seed);
for(let i=0;i<44;i++){h=(h*31+t.charCodeAt(i%t.length)+i*7)>>>0;const w=1+(h%3);if(i%2===0)bars+=`<rect x="${x}" y="0" width="${w}" height="28"/>`;x+=w}
return `<svg viewBox="0 0 ${x} 28" preserveAspectRatio="none" class="bar" fill="currentColor">${bars}</svg>`;
}
const xtra=u=>{try{return typeof u.extra==='object'&&u.extra?u.extra:JSON.parse(u.extra||'{}')}catch(e){return{}}};
function zodiac(d){
const m=d.getMonth()+1,x=d.getDate();
const z=[['Capricorn',1,19],['Aquarius',2,18],['Pisces',3,20],['Aries',4,19],['Taurus',5,20],['Gemini',6,20],['Cancer',7,22],['Leo',8,22],['Virgo',9,22],['Libra',10,22],['Scorpio',11,21],['Sagittarius',12,21],['Capricorn',12,31]];
return z.find(a=>m<a[1]||(m===a[1]&&x<=a[2]))[0];
}
const idNo=u=>'GG-'+String(USERS.findIndex(x=>x.id===u.id)+1).padStart(4,'0');
function idCard(u){
const b=pdt(u.bday),x=xtra(u),no=idNo(u),on=u.id===ME.id||S.online.includes(u.id);
const bn=u.banner?` style="background-image:url('${u.banner}');background-size:cover;background-position:center"`:'';
const hob=(x.hobbies||'').split(',').map(t=>t.trim()).filter(Boolean).slice(0,4);
const info=[x.hometown?['Lives in',x.hometown]:null,x.work?['School / work',x.work]:null,x.fav?['Favorite',x.fav]:null].filter(Boolean);
return `<div class="idcard" id="idc" style="--idc:${u.color}"><div class="idtop"><span>GalaGram ID</span><span>${no}</span></div><div class="band"${bn}></div><div class="avwrap">${av(u,'xl')}<i class="st${on?' on':''}"></i></div><div class="body"><h2>${esc(u.name)}</h2>${x.nick?`<small class="aka">aka ${esc(x.nick)}</small>`:''}<span class="role">${esc(u.role||'Member')}</span>${x.status?`<em class="stm">"${esc(x.status)}"</em>`:''}<p>${esc(u.bio||'No bio yet.')}</p>${hob.length?`<div class="chipsr">${hob.map(h=>`<span>${esc(h)}</span>`).join('')}</div>`:''}${x.motto?`<p class="motto">${esc(x.motto)}</p>`:''}<div class="meta"><div><small>Born</small><b>${b.toLocaleDateString([],{month:'short',day:'numeric'})}</b></div><div><small>Sign</small><b>${zodiac(b)}</b></div><div><small>ID No.</small><b>${no}</b></div></div>${info.length?`<div class="infol">${info.map(i=>`<div><small>${i[0]}</small><b>${esc(i[1])}</b></div>`).join('')}</div>`:''}${barcode(u.id+u.bday)}</div></div>`;
}
function printID(u){
const x=xtra(u),b=pdt(u.bday),no=idNo(u),col=u.color,ink=inkFor(col);
const q=qrcode(0,'M');q.addData(location.origin+'/');q.make();
const qs=q.createSvgTag({cellSize:3,margin:0,scalable:true});
const pic=u.avatar?`<img class="pa" src="${u.avatar}">`:`<span class="pa pl" style="background:${col};color:${ink}">${esc(u.name[0])}</span>`;
const ban=u.banner?`background-image:url('${u.banner}');background-size:cover;background-position:center;`:'';
const hob=(x.hobbies||'').split(',').map(t=>t.trim()).filter(Boolean).slice(0,5);
const html=`<!doctype html><html><head><meta charset="utf-8"><title>GalaGram ID - ${esc(u.name)}</title><style>
@page{size:A4;margin:14mm}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Georgia,'Times New Roman',serif;color:#16120d;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:grid;gap:9mm;justify-content:center;padding:4mm}
.lab{font:8px/1 monospace;letter-spacing:.2em;text-transform:uppercase;color:#7a705f;text-align:center;margin-bottom:2mm}
.c{width:85.6mm;height:54mm;border-radius:3.5mm;border:.3mm solid #b9ae98;overflow:hidden;position:relative;background:#fffdf7;page-break-inside:avoid}
.top{height:7mm;background:${col};color:${ink};display:flex;justify-content:space-between;align-items:center;padding:0 4mm;font:7px monospace;letter-spacing:.25em;text-transform:uppercase}
.band{height:14mm;background-color:${col};${ban}}
.pa{position:absolute;left:5mm;top:14mm;width:20mm;height:20mm;border-radius:50%;border:1.2mm solid #fffdf7;object-fit:cover;display:grid;place-items:center;font:700 26px Georgia,serif}
.in{position:absolute;left:28mm;right:4mm;top:23mm}
h1{font-size:15pt;line-height:1.05}
.r{font:7px monospace;letter-spacing:.18em;text-transform:uppercase;color:${col};margin-top:1mm}
.s{font:italic 8px Georgia,serif;margin-top:1.2mm;color:#4a4236}
.row{position:absolute;left:5mm;right:5mm;bottom:3.2mm;display:flex;justify-content:space-between;gap:3mm;font:7px monospace;color:#4a4236}
.row b{display:block;font-size:8px;color:#16120d}
.bar{position:absolute;left:5mm;right:5mm;bottom:11mm;height:5mm;color:#16120d;width:calc(100% - 10mm)}
.back{padding:5mm;display:flex;gap:4mm}
.qr{width:28mm;height:28mm;flex:none;border:.3mm solid #cfc6b4;padding:1.5mm;background:#fff}
.qr svg{width:100%;height:100%}
.bt{font-size:10pt;font-weight:700;margin-bottom:1mm}
.bd{font:italic 8px/1.35 Georgia,serif;color:#3a3326;margin-bottom:1.5mm}
.ln{font:7px/1.5 monospace;color:#4a4236}
.chip{display:inline-block;border:.25mm solid ${col};color:${col};border-radius:2mm;padding:.3mm 1.5mm;font:6.5px monospace;margin:.4mm .4mm 0 0}
.foot{position:absolute;left:0;right:0;bottom:0;height:5mm;background:${col};color:${ink};font:6.5px monospace;letter-spacing:.2em;text-transform:uppercase;display:grid;place-items:center}
</style></head><body>
<div><div class="lab">Front</div><div class="c"><div class="top"><span>GalaGram ID</span><span>${no}</span></div><div class="band"></div>${pic}<div class="in"><h1>${esc(u.name)}</h1><div class="r">${esc(u.role||'Member')}</div>${x.status?`<div class="s">"${esc(x.status)}"</div>`:''}</div>${barcode(u.id+u.bday)}<div class="row"><div>Born<b>${b.toLocaleDateString([],{month:'short',day:'numeric'})}</b></div><div>Sign<b>${zodiac(b)}</b></div><div>ID No.<b>${no}</b></div></div></div></div>
<div><div class="lab">Back</div><div class="c back"><div class="qr">${qs}</div><div><div class="bt">${esc(u.name)}${x.nick?' ('+esc(x.nick)+')':''}</div><div class="bd">${esc(u.bio||'Member of the GalaGram friend group.')}</div>${x.hometown?`<div class="ln">Lives in ${esc(x.hometown)}</div>`:''}${x.work?`<div class="ln">${esc(x.work)}</div>`:''}${x.fav?`<div class="ln">Favorite: ${esc(x.fav)}</div>`:''}<div>${hob.map(h=>`<span class="chip">${esc(h)}</span>`).join('')}</div></div><div class="foot">galagram.pages.dev</div></div></div>
</body></html>`;
const f=document.createElement('iframe');
f.style.cssText='position:fixed;right:0;bottom:0;width:0;height:0;border:0';
document.body.appendChild(f);
const d=f.contentWindow.document;d.open();d.write(html);d.close();
setTimeout(()=>{try{f.contentWindow.focus();f.contentWindow.print()}catch(e){toast('Printing is not available here')}setTimeout(()=>f.remove(),2000)},500);
}
function tilt(el){
el.onmousemove=e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`rotateY(${x*12}deg) rotateX(${-y*12}deg)`};
el.onmouseleave=()=>{el.style.transform=''};
}
function socials(u){
const x=xtra(u),l=[];
if(x.ig)l.push(`<a class="soc" href="https://instagram.com/${encodeURIComponent(x.ig.replace(/^@/,''))}" target="_blank" rel="noopener noreferrer">Instagram @${esc(x.ig.replace(/^@/,''))}</a>`);
if(x.tt)l.push(`<a class="soc" href="https://tiktok.com/@${encodeURIComponent(x.tt.replace(/^@/,''))}" target="_blank" rel="noopener noreferrer">TikTok @${esc(x.tt.replace(/^@/,''))}</a>`);
if(x.fb)l.push(`<span class="soc">Facebook ${esc(x.fb)}</span>`);
return l.length?`<div class="socs">${l.join('')}</div>`:'';
}
const statTiles=r=>`<div class="stt"><div><b>${r.messages}</b><small>Messages</small></div><div><b>${r.buzzes}</b><small>Buzzes</small></div><div><b>${r.events}</b><small>Events added</small></div><div><b>${peso(r.spent)}</b><small>Spent</small></div></div>`;
function showProfile(id){
if(id===ME.id){go('profile');return}
const u=byId(id);
const m=modal(`<div class="pm">${idCard(u)}${socials(u)}<div id="pst2"></div><div class="vctl" style="margin-top:14px"><button class="pri" id="pm">${ico('chat')}Message</button><button class="ghost" id="pcl">${ico('phone')}Call</button><button class="ghost" id="pvd">${ico('video')}Video</button><button class="ghost" id="ppr">${ico('printer')}Print</button><button class="ghost" id="pc">Close</button></div></div>`);
tilt($('.idcard',m));
$('#pc',m).onclick=()=>m.remove();
$('#pm',m).onclick=()=>{m.remove();S.ch=dmKey(ME.id,id);go('chat')};
$('#pcl',m).onclick=()=>{m.remove();startCall(dmKey(ME.id,id),false)};
$('#pvd',m).onclick=()=>{m.remove();startCall(dmKey(ME.id,id),true)};
$('#ppr',m).onclick=()=>printID(u);
api('stats?u='+id).then(r=>{const e=$('#pst2',m);if(e)e.innerHTML=statTiles(r)}).catch(()=>{});
}
function profileView(){
const d={name:ME.name,role:ME.role||'',bio:ME.bio||'',bday:ME.bday,color:ME.color,avatar:ME.avatar||'',banner:ME.banner||'',extra:{...xtra(ME)}};
const cur=()=>({...ME,...d,extra:JSON.stringify(d.extra)});
const prev=()=>{const w=$('.idwrap');w.innerHTML=idCard(cur());tilt($('.idcard',w))};
const fk=(l,k,ph,len)=>`<label>${l}<input data-k="${k}" value="${esc(d[k])}" maxlength="${len}" placeholder="${ph}"></label>`;
const fx=(l,k,ph,len)=>`<label>${l}<input data-x="${k}" value="${esc(d.extra[k]||'')}" maxlength="${len}" placeholder="${ph}"></label>`;
$('#view').innerHTML=pageHead('GalaGram ID','Profile',`<button class="ghost" id="pprint">${ico('printer')}Print my ID</button>`)+`<div class="prof"><form class="card rise" id="pf"><h3>Photo and banner</h3><div class="avpick"><div id="pav">${av({...ME,...d},'xl')}</div><div class="vctl left"><label class="ghost" style="cursor:pointer">${ico('cam')}Upload photo<input type="file" id="pfile" accept="image/*" hidden></label><button type="button" class="ghost" id="prm">Remove</button></div></div><div class="fld"><div class="bnprev" id="bnp" style="background-color:${d.color}${d.banner?`;background-image:url('${d.banner}')`:''}"></div><div class="vctl left"><label class="ghost" style="cursor:pointer">${ico('cam')}Upload banner<input type="file" id="bfile" accept="image/*" hidden></label><button type="button" class="ghost" id="brm">Remove</button></div></div><h3>About you</h3><div class="twocol">${fk('Display name','name','',24)}${fx('Nickname','nick','What friends call you',40)}</div><div class="twocol">${fk('Role or title','role','Treasurer, Photographer...',40)}${fx('Status message','status','Studying, gaming, OJT...',80)}</div><label>Bio<textarea data-k="bio" maxlength="240" placeholder="A few lines about you">${esc(d.bio)}</textarea></label>${fx('Motto or favorite quote','motto','Words you live by',120)}<div class="twocol">${fx('Lives in','hometown','Antipolo, Rizal',60)}${fx('School or work','work','ICCT, BSIT',60)}</div><h3>Interests</h3>${fx('Hobbies (separate with commas)','hobbies','Gaming, Coding, Basketball',120)}${fx('Favorite song or food','fav','Sinigang, anything OPM',80)}<h3>Socials</h3><div class="twocol">${fx('Instagram','ig','username',40)}${fx('TikTok','tt','username',40)}</div>${fx('Facebook name','fb','Name as it appears',60)}<h3>Dashboard</h3><label>Birthday<input type="date" data-k="bday" value="${d.bday}" required></label><div class="fld"><small class="kick">Dashboard color</small><div class="swatches" id="sws">${PALETTE.map(c=>`<button type="button" data-c="${c}" class="${c===d.color?'on':''}" style="background:${c}" aria-label="${c}"></button>`).join('')}</div></div><button class="pri">Save profile</button></form><div class="stack"><div class="idwrap rise" style="--i:2"></div><div class="card rise" style="--i:3"><h3>Your activity</h3><div id="pst"><p class="mut">Loading...</p></div></div></div></div>`;
prev();
const upd=()=>{$('#pav').innerHTML=av({...ME,...d},'xl');const bp=$('#bnp');bp.style.backgroundColor=d.color;bp.style.backgroundImage=d.banner?`url('${d.banner}')`:'none';prev()};
$$('#pf [data-k]').forEach(i=>i.oninput=()=>{d[i.dataset.k]=i.value;upd()});
$$('#pf [data-x]').forEach(i=>i.oninput=()=>{d.extra[i.dataset.x]=i.value;upd()});
$('#sws').onclick=e=>{const b=e.target.closest('button');if(!b)return;d.color=b.dataset.c;$$('#sws button').forEach(x=>x.classList.toggle('on',x===b));upd()};
const fit=(f,w,h,q)=>new Promise((res,rej)=>{
const img=new Image(),url=URL.createObjectURL(f);
img.onload=()=>{const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d'),k=Math.max(w/img.width,h/img.height),sw=w/k,sh=h/k;x.drawImage(img,(img.width-sw)/2,(img.height-sh)/2,sw,sh,0,0,w,h);URL.revokeObjectURL(url);res(c.toDataURL('image/jpeg',q))};
img.onerror=()=>rej(new Error('That image could not be read'));
img.src=url;
});
$('#prm').onclick=()=>{d.avatar='';upd()};
$('#brm').onclick=()=>{d.banner='';upd()};
$('#pfile').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{d.avatar=await fit(f,160,160,.82);upd()}catch(err){toast(err.message)}};
$('#bfile').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{d.banner=await fit(f,600,200,.68);upd()}catch(err){toast(err.message)}};
$('#pprint').onclick=()=>printID(cur());
$('#pf').onsubmit=async e=>{
e.preventDefault();
try{await api('profile',{body:d});await loadMe(true);applyTheme();toast('Profile saved');shell();go('profile')}catch(err){toast(err.message)}
};
api('stats').then(r=>{const e=$('#pst');if(e)e.innerHTML=statTiles(r)+(r.first?`<p class="mut" style="margin-top:10px">Chatting since ${new Date(r.first).toLocaleDateString([],{month:'long',day:'numeric',year:'numeric'})}.</p>`:'')}).catch(()=>{});
}

const dmKey=(a,b)=>'dm:'+[a,b].sort().join('+');
const grpOf=k=>GROUPS.find(g=>'g:'+g.id===k);
const myGroups=()=>GROUPS.filter(g=>g.members.includes(ME.id));
function chName(k){
if(k.startsWith('dm:')){const ids=k.slice(3).split('+');return byId(ids.find(i=>i!==ME.id)||ids[0]).name}
if(k.startsWith('g:'))return (grpOf(k)||{name:'Group'}).name;
if(k.startsWith('v:'))return chanLabel(k.slice(2));
const t=TEXT.find(c=>c.id===k);
return t?t.name:k;
}
const readKey=()=>'gg_read_'+ME.id;
function markRead(ch){const l=S.latest[ch];if(!l)return;const r=ls.get(readKey(),{});if(r[ch]!==l.id){r[ch]=l.id;ls.set(readKey(),r)}}
const isUnread=ch=>{const l=S.latest[ch];return !!l&&l.u!==ME.id&&l.id>(ls.get(readKey(),{})[ch]||0)};
function updUnread(){
const keys=Object.keys(S.latest).filter(isUnread).sort();
const nv=$('.nv[data-v=chat]');if(nv)nv.classList.toggle('has',keys.length>0);
document.title=(keys.length?'('+keys.length+') ':'')+'GalaGram';
const sig=keys.join('|');
if(sig!==S.unreadSig){S.unreadSig=sig;if(S.view==='chat')drawChs()}
drawBubble();
}
const linkify=t=>esc(t).replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
function dayLabel(d){
const t=new Date(),y=new Date(Date.now()-864e5);
if(d.toDateString()===t.toDateString())return 'Today';
if(d.toDateString()===y.toDateString())return 'Yesterday';
return d.toLocaleDateString([],{weekday:'short',month:'short',day:'numeric'});
}
function chatView(){
$('#view').innerHTML=`<div class="chat rise"><nav class="chs" id="chs"></nav><section class="pane" id="pane"></section><aside class="mem" id="mem"></aside></div>`;
$('#chs').onclick=e=>{const b=e.target.closest('button');if(!b)return;S.ch=b.dataset.ch;drawChs();drawMem();drawPane();sync()};
$('#mem').onclick=e=>{const b=e.target.closest('button');if(b)showProfile(b.dataset.p)};
drawChs();drawMem();drawPane();sync();
}
function chBtn(k,h){const un=S.ch!==k&&isUnread(k);return `<button data-ch="${k}" class="${S.ch===k?'on':''}${un?' un':''}">${h}${un?'<i class="ndot"></i>':''}</button>`}
function drawChs(){
const el=$('#chs');if(!el)return;
const gs=myGroups();
el.innerHTML='<h4>Text channels</h4>'+TEXT.map(c=>chBtn(c.id,ico(c.icon)+esc(c.name))).join('')+(gs.length?'<h4>Group chats</h4>'+gs.map(g=>chBtn('g:'+g.id,ico('users')+esc(g.name))).join(''):'')+'<h4>Voice channels</h4>'+VOICE.map(c=>chBtn('v:'+c.id,ico('volume')+c.name+((S.voice[c.id]||[]).length?`<em>${S.voice[c.id].length}</em>`:''))).join('')+'<h4>Direct messages</h4>'+USERS.filter(x=>x.id!==ME.id).map(x=>chBtn(dmKey(ME.id,x.id),`<i class="dot" style="background:${x.color}"></i>${esc(x.name)}`)).join('');
}
function drawMem(){
const el=$('#mem');if(!el)return;
const g=grpOf(S.ch),list=g?g.members.map(byId):S.ch.startsWith('dm:')?S.ch.slice(3).split('+').map(byId):USERS;
el.innerHTML='<h4>Members</h4>'+list.map(x=>{const on=x.id===ME.id||S.online.includes(x.id);return `<button data-p="${x.id}" class="${on?'on':''}"><span class="pip">${av(x,'sm')}</span>${esc(x.name)}</button>`}).join('');
}
function drawPane(){
if(!S.ch.startsWith('v:'))markRead(S.ch);
S.ch.startsWith('v:')?voicePane():msgPane();
updUnread();
}
const D={track:null,yt:null,audio:null,playing:false,muted:false,open:false,hidden:false,cur:'',ytTitle:'',prog:0,pos:''};
const trackKey=t=>t.src+':'+(t.id||t.vid||t.list||t.embed)+':'+t.ts;
const trackTitle=t=>t.title||(t.src==='spotify'?'Spotify '+(t.kind||'track'):(D.ytTitle||'YouTube'));
function nowHtml(){
const t=S.music;
if(!t)return '<p class="mut musn">No song yet. Paste a YouTube or Spotify link, or upload a song. It keeps playing while you use the rest of GalaGram.</p>';
return `<div class="np"><span class="npi">${ico('music')}</span><div class="grow"><b>${esc(trackTitle(t))}</b><small class="mut">Set by ${esc(byId(t.by).name)} · ${t.src==='file'?'uploaded song':t.src}</small></div><button type="button" class="pri" id="npp">${t.src==='spotify'?'Show player':D.playing?'Pause':'Play'}</button></div>`;
}
function musicBlock(){
return `<div class="mus"><form id="mf2" class="musf"><input id="mu" placeholder="Paste a YouTube or Spotify link"><button class="pri">${ico('music')}Set</button><label class="ghost" style="cursor:pointer">${ico('plus')}Song<input type="file" id="mup" accept="audio/*" hidden></label>${S.music?'<button type="button" class="ghost" id="muc">Clear</button>':''}</form><div id="mplay">${nowHtml()}</div></div>`;
}
function loadYT(cb){
if(window.YT&&window.YT.Player){cb();return}
(S.ytq=S.ytq||[]).push(cb);
if(S.ytLoading)return;
S.ytLoading=true;
window.onYouTubeIframeAPIReady=()=>{(S.ytq||[]).splice(0).forEach(f=>f())};
const sc=document.createElement('script');sc.src='https://www.youtube.com/iframe_api';
sc.onerror=()=>{S.ytLoading=false;toast('Could not load the YouTube player')};
document.head.appendChild(sc);
}
function dockInit(){
let d=$('#dock');if(d)return d;
d=document.createElement('div');d.id='dock';d.hidden=true;
d.innerHTML=`<div class="dv" id="dv"></div><div class="dbar"><span class="dc">${ico('music')}</span><div class="dt"><b id="dti"></b><small id="dsb"></small><div class="dprog" id="dpr"><i></i></div></div><button class="dbn" id="dpp" aria-label="Play or pause"></button><button class="dbn" id="dmu" aria-label="Mute"></button><button class="dbn" id="dex" aria-label="Show or hide player">${ico('chev')}</button><button class="dbn" id="dcl" aria-label="Close player">${ico('x')}</button></div>`;
document.body.appendChild(d);
$('#dpp',d).onclick=dockToggle;
$('#dmu',d).onclick=dockMute;
$('#dex',d).onclick=()=>{D.open=!D.open;drawDock()};
$('#dcl',d).onclick=()=>{dockPause();D.hidden=true;drawDock()};
$('#dpr',d).onclick=dockSeek;
return d;
}
function drawDock(){
const d=dockInit(),t=D.track,show=!!t&&!D.hidden&&!!ME&&!$('#app').hidden;
d.hidden=!show;
document.body.classList.toggle('docked',show);
if(!t)return;
d.classList.toggle('open',D.open);d.classList.toggle('sp',t.src==='spotify');
$('#dti',d).textContent=trackTitle(t);
$('#dsb',d).textContent=(D.pos?D.pos+' · ':'')+'Set by '+byId(t.by).name;
$('#dpr i',d).style.width=D.prog+'%';
$('#dpp',d).innerHTML=ico(D.playing?'pause':'play');
$('#dmu',d).innerHTML=ico(D.muted?'volx':'volume');
$('#dpp',d).hidden=t.src==='spotify';$('#dmu',d).hidden=t.src==='spotify';
const mp=$('#mplay');if(mp&&S.view==='chat'&&S.ch==='soundtrip')mp.innerHTML=nowHtml();
}
function destroyPlayers(){
if(D.yt){try{D.yt.destroy()}catch(e){}D.yt=null}
if(D.audio){D.audio.pause();D.audio=null}
const dv=$('#dv');if(dv)dv.innerHTML='';
D.cur='';D.playing=false;
}
function dockSet(t,auto){
if(!t){dockClear();return}
const nw=!D.track||trackKey(D.track)!==trackKey(t);
D.track=t;
if(nw){destroyPlayers();D.hidden=false;D.open=t.src==='spotify';D.ytTitle='';D.prog=0;D.pos=''}
drawDock();syncMS();
if(nw&&auto)dockPlay();
}
function dockClear(){
destroyPlayers();D.track=null;D.hidden=false;D.open=false;
drawDock();document.body.classList.remove('docked');
if('mediaSession' in navigator){try{navigator.mediaSession.metadata=null}catch(e){}}
}
function ytMeta(){
try{const v=D.yt.getVideoData();if(v&&v.title&&v.title!==D.ytTitle){D.ytTitle=v.title;drawDock();syncMS()}}catch(e){}
}
async function dockPlay(){
const t=D.track;if(!t)return;
D.hidden=false;
const key=trackKey(t);
if(t.src==='spotify'){
const dv=$('#dv');
if(D.cur!==key){dv.innerHTML=`<iframe src="${esc(t.embed)}" allow="autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture" loading="lazy" title="Spotify player"></iframe>`;D.cur=key}
D.open=true;D.playing=false;drawDock();return;
}
if(t.src==='youtube'){
loadYT(()=>{
if(D.track!==t)return;
if(D.yt&&D.cur===key){if(D.yt.playVideo)D.yt.playVideo();return}
const dv=$('#dv');dv.innerHTML='<div id="ytp"></div>';D.cur=key;
const pv={autoplay:1,playsinline:1,rel:0,modestbranding:1};
const cfg={width:'100%',height:'100%',playerVars:pv,events:{onReady:e=>{if(D.muted)e.target.mute();e.target.playVideo();ytMeta()},onStateChange:e=>{D.playing=e.data===1;if(e.data===1)ytMeta();syncMS();drawDock()}}};
if(t.list){pv.list=t.list;pv.listType='playlist'}else cfg.videoId=t.vid;
D.yt=new YT.Player('ytp',cfg);
});
return;
}
if(t.src==='file'){
if(D.audio&&D.cur===key){D.audio.play().catch(()=>{});return}
try{
D.cur=key;
const a=new Audio(await mediaUrl(t.id));
if(D.track!==t||D.cur!==key)return;
a.muted=D.muted;
a.onplay=a.onpause=()=>{D.playing=!a.paused;syncMS();drawDock()};
a.onended=()=>{D.playing=false;D.prog=0;drawDock()};
a.ontimeupdate=dockTick;
D.audio=a;
await a.play();
}catch(e){toast('Could not play that song')}
}
}
function dockPause(){
const t=D.track;if(!t)return;
if(t.src==='youtube'&&D.yt&&D.yt.pauseVideo)D.yt.pauseVideo();
else if(t.src==='file'&&D.audio)D.audio.pause();
else if(t.src==='spotify'){destroyPlayers();D.open=false;drawDock()}
}
const dockToggle=()=>D.playing?dockPause():dockPlay();
function dockMute(){
D.muted=!D.muted;
if(D.yt&&D.yt.mute)D.muted?D.yt.mute():D.yt.unMute();
if(D.audio)D.audio.muted=D.muted;
drawDock();
}
function dockSeek(e){
const t=D.track;if(!t)return;
const r=e.currentTarget.getBoundingClientRect(),f=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));
if(t.src==='youtube'&&D.yt&&D.yt.getDuration)D.yt.seekTo(D.yt.getDuration()*f,true);
else if(t.src==='file'&&D.audio&&isFinite(D.audio.duration))D.audio.currentTime=D.audio.duration*f;
}
function dockTick(){
const t=D.track;if(!t)return;
let cur=0,dur=0;
if(t.src==='youtube'&&D.yt&&D.yt.getCurrentTime){try{cur=D.yt.getCurrentTime();dur=D.yt.getDuration()}catch(e){}}
else if(t.src==='file'&&D.audio){cur=D.audio.currentTime;dur=D.audio.duration}
if(dur&&isFinite(dur)){D.prog=Math.min(100,cur/dur*100);D.pos=fmtDur(cur)+' / '+fmtDur(dur)}
const d=$('#dock');
if(d&&!d.hidden){$('#dpr i',d).style.width=D.prog+'%';$('#dsb',d).textContent=(D.pos?D.pos+' · ':'')+'Set by '+byId(t.by).name;if(t.src==='youtube')ytMeta()}
}
setInterval(()=>{if(D.playing)dockTick()},500);
function syncMS(){
if(!('mediaSession' in navigator)||!D.track)return;
const t=D.track;
try{
navigator.mediaSession.metadata=new MediaMetadata({title:trackTitle(t),artist:'Soundtrip · '+byId(t.by).name,album:'GalaGram',artwork:[{src:'/icon-512.png',sizes:'512x512',type:'image/png'}]});
navigator.mediaSession.playbackState=D.playing?'playing':'paused';
navigator.mediaSession.setActionHandler('play',()=>dockPlay());
navigator.mediaSession.setActionHandler('pause',()=>dockPause());
}catch(e){}
}
function msgBody(m){
const at=attList(m);
let h='';
if(m.x)h+=`<div class="b${isBig(m.x)?' big':''}">${fmt(m.x)}</div>`;
const media=at.filter(a=>a.t!=='aud'),aud=at.filter(a=>a.t==='aud');
if(media.length){
h+=`<div class="matt n${media.length>4?'m':media.length}">${media.map(a=>`<button type="button" class="mm ${a.t}" data-med="${a.id}" data-t="${a.t}" data-n="${a.mime||''}" style="${media.length===1&&a.w&&a.h?`aspect-ratio:${a.w}/${a.h};`:''}">${a.th?`<img src="${a.th}" alt="" loading="lazy">`:`<span class="vph">${ico(a.t==='vid'?'video':'image')}</span>`}${a.t==='vid'?`<span class="pl">${ico('play')}${a.dur?`<small>${fmtDur(a.dur)}</small>`:''}</span>`:''}</button>`).join('')}</div>`;
}
aud.forEach(a=>{h+=`<div class="vmsg" data-id="${a.id}" data-dur="${a.dur||0}"><button type="button" class="vplay" aria-label="Play voicemail">${ico('play')}</button><div class="vbar"><i></i></div><small>${fmtDur(a.dur||0)}</small></div>${a.tx?`<div class="vtx">"${esc(a.tx)}"</div>`:''}`});
if(m.f)h+=`<button class="retry" data-retry="${m.tmp}">Not sent. Tap to retry</button>`;
return h;
}
async function mediaUrl(id){
if(S.mc[id])return S.mc[id];
let info=null;
try{info=await api('media?id='+id+'&info=1')}catch(e){throw new Error('Could not load that file')}
if(info.r2)return S.mc[id]='/api/media?id='+id;
const r=await fetch('/api/media?id='+id,{credentials:'same-origin'});
if(!r.ok)throw new Error('Could not load that file');
const mime=r.headers.get('X-Mime')||'application/octet-stream',bin=atob(await r.text()),u=new Uint8Array(bin.length);
for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);
return S.mc[id]=URL.createObjectURL(new Blob([u],{type:mime}));
}
async function openMedia(id,t){
const o=document.createElement('div');o.id='lbx';
o.innerHTML=`<button class="iconbtn lx" aria-label="Close">${ico('x')}</button><div class="lm"><span class="spin"></span></div>`;
document.body.appendChild(o);
const close=()=>{o.remove();document.removeEventListener('keydown',kd)};
const kd=e=>{if(e.key==='Escape')close()};
document.addEventListener('keydown',kd);
o.onclick=e=>{if(e.target===o||e.target.closest('.lx'))close()};
try{
const u=await mediaUrl(id);
$('.lm',o).innerHTML=t==='vid'?`<video src="${u}" controls autoplay playsinline></video>`:`<img src="${u}" alt="">`;
const a=document.createElement('a');a.className='iconbtn ld';a.href=u;a.download='galagram-'+id;a.innerHTML=ico('dl');a.setAttribute('aria-label','Download');o.appendChild(a);
}catch(e){toast(e.message);close()}
}
function vmUi(id){
const el=document.querySelector(`.vmsg[data-id="${id}"]`);
if(!el||!S.vmA||S.vmA.id!==id)return;
const a=S.vmA.a;
el.classList.toggle('on',!a.paused);
const i=el.querySelector('.vbar i');if(i&&a.duration)i.style.width=(a.currentTime/a.duration*100)+'%';
el.querySelector('small').textContent=fmtDur(a.currentTime)+' / '+fmtDur(isFinite(a.duration)?a.duration:+el.dataset.dur);
}
async function playVm(el){
const id=el.dataset.id;
if(S.vmA&&S.vmA.id===id){S.vmA.a.paused?S.vmA.a.play():S.vmA.a.pause();return}
if(S.vmA){S.vmA.a.pause();S.vmA=null}
el.classList.add('ld');
try{
const a=new Audio(await mediaUrl(id));
S.vmA={id,a};
a.ontimeupdate=()=>vmUi(id);a.onplay=a.onpause=()=>vmUi(id);
a.onended=()=>{a.currentTime=0;vmUi(id);const e2=document.querySelector(`.vmsg[data-id="${id}"] small`);if(e2)e2.textContent=fmtDur(+el.dataset.dur)};
await a.play();
}catch(e){toast('Could not play that voicemail')}
finally{el.classList.remove('ld')}
}
function seekVm(bar,e){
const el=bar.closest('.vmsg');
if(!S.vmA||S.vmA.id!==el.dataset.id||!isFinite(S.vmA.a.duration))return;
const r=bar.getBoundingClientRect();
S.vmA.a.currentTime=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width))*S.vmA.a.duration;
}
const toBlob=(c,q)=>new Promise(r=>c.toBlob(r,'image/jpeg',q));
function loadImg(f){return new Promise((res,rej)=>{const i=new Image(),u=URL.createObjectURL(f);i.onload=()=>{URL.revokeObjectURL(u);res(i)};i.onerror=()=>{URL.revokeObjectURL(u);rej(new Error('That image could not be read'))};i.src=u})}
function scaled(img,max,q){const k=Math.min(1,max/Math.max(img.width,img.height)),w=Math.round(img.width*k),h=Math.round(img.height*k),c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);return{c,w,h}}
async function prepImage(f){
const img=await loadImg(f),th=scaled(img,320,.7);
const thumb=th.c.toDataURL('image/jpeg',.7);
if(f.type==='image/gif'&&f.size<4*1024*1024)return{blob:f,th:thumb,w:img.width,h:img.height};
const big=scaled(img,1600,.82);
return{blob:await toBlob(big.c,.82),th:thumb,w:big.w,h:big.h};
}
function prepVideo(f){
return new Promise(res=>{
const v=document.createElement('video'),u=URL.createObjectURL(f);
let done=false;
const fin=x=>{if(done)return;done=true;URL.revokeObjectURL(u);res(x)};
v.muted=true;v.preload='metadata';v.playsInline=true;
setTimeout(()=>fin({th:'',w:0,h:0,dur:0}),5000);
v.onerror=()=>fin({th:'',w:0,h:0,dur:0});
v.onloadedmetadata=()=>{v.currentTime=Math.min(.5,(v.duration||1)/2)};
v.onseeked=()=>{try{const k=Math.min(1,320/Math.max(v.videoWidth,v.videoHeight)),c=document.createElement('canvas');c.width=Math.round(v.videoWidth*k);c.height=Math.round(v.videoHeight*k);c.getContext('2d').drawImage(v,0,0,c.width,c.height);fin({th:c.toDataURL('image/jpeg',.7),w:v.videoWidth,h:v.videoHeight,dur:Math.round(v.duration*10)/10||0})}catch(e){fin({th:'',w:v.videoWidth,h:v.videoHeight,dur:v.duration||0})}};
v.src=u;
});
}
function putXhr(url,blob,prog){
return new Promise((res,rej)=>{
const x=new XMLHttpRequest();
x.open('PUT',url);x.withCredentials=true;
x.upload.onprogress=e=>{if(e.lengthComputable&&prog)prog(e.loaded/e.total)};
x.onload=()=>{if(x.status>=200&&x.status<300)res();else{let m='Upload failed';try{m=JSON.parse(x.responseText).error||m}catch(e){}rej(Object.assign(new Error(m),{status:x.status}))}};
x.onerror=()=>rej(new Error('Network error during upload'));
x.setRequestHeader('Content-Type',blob.type||'application/octet-stream');
x.send(blob);
});
}
async function uploadBlob(blob,ch,prog){
const mime=(blob.type||'').split(';')[0];
if(S.r2){
const rid2='rr'+rid();
try{await putXhr(`/api/media?id=${rid2}&ch=${encodeURIComponent(ch)}&mime=${encodeURIComponent(mime)}`,blob,prog);return rid2}
catch(e){if(e.status!==501)throw e;S.r2=false}
}
const b64=await new Promise((res,rej)=>{const fr=new FileReader();fr.onload=()=>res(fr.result.slice(fr.result.indexOf(',')+1));fr.onerror=()=>rej(new Error('Could not read the file'));fr.readAsDataURL(blob)});
const id=rid(),CH=380000,n=Math.ceil(b64.length/CH);
if(n>48)throw new Error('That file is too large');
let done=0;
for(let i=0;i<n;i+=3){
await Promise.all([0,1,2].filter(k=>i+k<n).map(k=>api('media',{body:{id,seq:i+k,ch,mime,data:b64.slice((i+k)*CH,(i+k+1)*CH)}}).then(()=>{done++;if(prog)prog(done/n)})));
}
return id;
}
async function oneFile(f,ch){
const img=f.type.startsWith('image/'),vid=f.type.startsWith('video/');
if(!img&&!vid){toast('Only photos and videos can be attached');return}
if(vid&&f.size>(S.r2?95:12)*1024*1024){toast('Videos can be up to '+(S.r2?95:12)+' MB');return}
if(img&&f.size>30*1024*1024){toast('That photo is too large');return}
const it={k:rid(),t:img?'img':'vid',th:'',p:0,st:'up',ch};
S.pend.push(it);drawTray();
try{
const meta=img?await prepImage(f):await prepVideo(f);
it.th=meta.th;it.w=meta.w;it.h=meta.h;it.dur=meta.dur||0;
const blob=img?meta.blob:f;
drawTray();
it.id=await uploadBlob(blob,ch,p=>{it.p=p;drawTray()});
it.mime=(blob.type||f.type).split(';')[0];
it.st='ok';
}catch(e){toast(e.message||'Upload failed');S.pend=S.pend.filter(x=>x!==it)}
drawTray();
}
async function addFiles(files){
const ch=S.ch,room=10-S.pend.filter(x=>x.ch===ch).length,all=[...files],list=all.slice(0,Math.max(0,room));
if(all.length>list.length)toast('Up to 10 attachments per message');
let i=0;
await Promise.all(Array.from({length:Math.min(3,list.length)},async()=>{while(i<list.length){const f=list[i++];await oneFile(f,ch)}}));
}
function drawTray(){
const t=$('#tray');if(!t)return;
const mine=S.pend.filter(x=>x.ch===S.ch);
t.hidden=!mine.length;
t.innerHTML=mine.map(x=>`<div class="ti${x.st==='up'?' up':''}">${x.th?`<img src="${x.th}" alt="">`:`<span class="vph">${ico(x.t==='vid'?'video':'image')}</span>`}${x.st==='up'?`<i class="tp" style="width:${Math.round(x.p*100)}%"></i>`:''}<button type="button" data-rm="${x.k}" aria-label="Remove">${ico('x')}</button></div>`).join('');
}
const edEl=()=>$('#mi');
function edClear(){const e=edEl();if(e)e.innerHTML=''}
function edClean(){const e=edEl();if(e&&!e.textContent.replace(/\u200b/g,'').trim()&&!e.querySelector('img,li'))e.innerHTML=''}
function edSer(node){
let out='';
node.childNodes.forEach(n=>{
if(n.nodeType===3){out+=n.nodeValue;return}
if(n.nodeType!==1)return;
const t=n.tagName;
if(t==='BR'){out+='\n';return}
if(t==='IMG'){out+=n.dataset.e?':'+n.dataset.e+':':(n.dataset.u||n.alt||'');return}
const inner=edSer(n),ok=inner.trim();
if(t==='B'||t==='STRONG')out+=ok?'**'+inner+'**':inner;
else if(t==='I'||t==='EM')out+=ok?'*'+inner+'*':inner;
else if(t==='U')out+=ok?'__'+inner+'__':inner;
else if(t==='UL'||t==='OL')out+=(out&&!out.endsWith('\n')?'\n':'')+[...n.children].map(li=>'- '+edSer(li).replace(/\n+$/,'')).join('\n')+'\n';
else if(t==='DIV'||t==='P')out+=(out&&!out.endsWith('\n')?'\n':'')+inner+(inner.endsWith('\n')?'':'\n');
else out+=inner;
});
return out;
}
const edGet=()=>edSer(edEl()).replace(/[\u200b\u00a0]/g,m=>m==='\u00a0'?' ':'').replace(/\n{3,}/g,'\n\n').trim();
function edSave(){const sel=getSelection(),e=edEl();if(e&&sel.rangeCount){const r=sel.getRangeAt(0);if(e.contains(r.commonAncestorContainer))S.edRange=r.cloneRange()}}
function edRestore(){
const e=edEl();if(!e)return;
e.focus();
const sel=getSelection();
if(S.edRange&&e.contains(S.edRange.commonAncestorContainer)){sel.removeAllRanges();sel.addRange(S.edRange)}
else{const r=document.createRange();r.selectNodeContents(e);r.collapse(false);sel.removeAllRanges();sel.addRange(r)}
}
function insertEmoji(html){edRestore();document.execCommand('insertHTML',false,html+'&#8203;');edSave()}
const FCMD={b:'bold',i:'italic',u:'underline',ul:'insertUnorderedList'};
function toolState(){$$('#tools [data-f]').forEach(b=>{let on=false;try{on=document.queryCommandState(FCMD[b.dataset.f])}catch(e){}b.classList.toggle('on',on)})}
function fmtBtn(k){edRestore();document.execCommand(FCMD[k],false,null);edClean();edSave();toolState()}
document.addEventListener('selectionchange',()=>{const e=edEl();if(e&&document.activeElement===e){edSave();toolState()}});
async function loadEmojis(){
try{
const l=await api('emojis');
Object.keys(EMO).forEach(n=>{if(!EMO_SVG[n])delete EMO[n]});
l.forEach(x=>{if(!EMO_SVG[x.name])EMO[x.name]=x.data});
S.custom=l;
if(S.view==='chat'&&!S.ch.startsWith('v:'))drawMsgs();
}catch(e){}
}
const EMJ_TABS=[
['faces','Faces','😀 😃 😄 😁 😆 😅 🤣 😂 🙂 😉 😊 😇 🥰 😍 🤩 😘 😋 😜 🤪 🤗 🤔 🫠 😎 🥳 😏 😒 🙄 😬 😴 😢 😭 😤 😡 🤯 😱 🥺 🤒 💀 👻 🤡 ❤️ 🧡 💛 💚 💙 💜 🖤 🤍 💔 💯 🔥 ✨ ⭐ 🎉 🎂 🎁'],
['hands','Hands','👍 👎 👌 ✌️ 🤞 🤟 🤘 🤙 👋 🤚 ✋ 🖐️ 🖖 👏 🙌 🙏 🤝 💪 ✊ 👊 🤛 🤜 👈 👉 👆 👇 ☝️ 🫶 🤲 🫰 🤌 🤏 🫵 ✍️ 💅 🫡 🫳 🫴'],
['japan','Japan','🇯🇵 🎌 ⛩️ 🗾 🗻 🌸 🍣 🍱 🍜 🍙 🍘 🍡 🍢 🍥 🥟 🍵 🍶 🎍 🎎 🎏 🎐 🎑 🏯 🏮 🎴 🀄 👘 🥋 🧧 🍧 🍨 🐉 🦊 🎋 🎆 🚅 🐟 🦀 🍡'],
['dogs','Dogs','🐶 🐕 🐩 🦮 🐕‍🦺 🐺 🦴 🐾 🌭 🥎 🦝 🦊 🐻 🐼 🐨 🐹 🐰 🐭'],
['cats','Cats','🐱 🐈 🐈‍⬛ 😺 😸 😹 😻 😼 😽 🙀 😿 😾 🐯 🦁 🐆 🐅 🐾 🧶 🐟 🥛'],
['dinos','Dinos','🦖 🦕 🐊 🐉 🐲 🦎 🐢 🥚 🐣 🌋 🦴 🌿 🌴 🐍 🦂 🦈'],
['flags','Flags','🇵🇭 🇯🇵 🇺🇸 🇰🇷 🇨🇳 🇬🇧 🇦🇺 🇨🇦 🇸🇬 🇹🇭 🇻🇳 🇮🇩 🇲🇾 🇮🇳 🇦🇪 🇸🇦 🇫🇷 🇩🇪 🇮🇹 🇪🇸 🇧🇷 🇲🇽 🇦🇷 🇳🇿 🇳🇱 🇨🇭 🇸🇪 🇳🇴 🇷🇺 🇺🇦 🇹🇼 🇭🇰 🇮🇪 🇵🇹 🇹🇷 🇪🇬 🇿🇦 🏳️‍🌈 🏴‍☠️ 🏁 🚩 🏳️']
];
function emoPicker(){
const old=$('#epick');if(old){old.remove();return}
const f=$('#comp');if(!f)return;
const p=document.createElement('div');p.id='epick';p.className='epick';
let tab='gala';
const tabs=[['gala','Gala'],...EMJ_TABS.map(t=>[t[0],t[1]]),['custom','Custom']];
const draw=()=>{
let grid='';
if(tab==='gala')grid=EMO_NAMES.map(n=>`<button type="button" data-e="${n}" title=":${n}:"><img src="${EMO[n]}" alt=":${n}:"></button>`).join('');
else if(tab==='custom')grid=(S.custom||[]).map(x=>`<button type="button" data-e="${x.name}" title=":${x.name}:"><img src="${x.data}" alt=":${x.name}:"></button>`).join('')+`<label class="eadd" title="Add your own emoji">${ico('plus')}<input type="file" accept="image/*" hidden></label>`;
else grid=EMJ_TABS.find(t=>t[0]===tab)[2].split(' ').map(c=>`<button type="button" data-u="${c}"><img src="${twUrl(c)}" alt="${c}" onerror="this.replaceWith(document.createTextNode(this.alt))"></button>`).join('');
p.innerHTML=`<div class="etabs">${tabs.map(t=>`<button type="button" data-tab="${t[0]}" class="${tab===t[0]?'on':''}">${t[1]}</button>`).join('')}</div><div class="egrid">${grid}</div>`;
};
draw();f.appendChild(p);
p.onmousedown=e=>{if(!e.target.closest('input'))e.preventDefault()};
p.onclick=e=>{
const t=e.target.closest('[data-tab]');if(t){tab=t.dataset.tab;draw();return}
const b=e.target.closest('[data-e],[data-u]');
if(b)insertEmoji(b.dataset.u?emjImg(b.dataset.u):`<img class="emo" data-e="${b.dataset.e}" src="${EMO[b.dataset.e]||''}" alt=":${b.dataset.e}:" draggable="false">`);
};
p.onchange=async e=>{
const fl=e.target.files&&e.target.files[0];if(!fl)return;
try{
const img=await loadImg(fl),c=document.createElement('canvas');c.width=c.height=64;
const k=Math.max(64/img.width,64/img.height),w=img.width*k,h=img.height*k;
c.getContext('2d').drawImage(img,(64-w)/2,(64-h)/2,w,h);
const raw=prompt('Name your emoji (letters and numbers, 2 to 16 characters)');
if(!raw)return;
await api('emojis',{body:{name:raw.toLowerCase().replace(/[^a-z0-9_]/g,'').slice(0,16),data:c.toDataURL('image/png')}});
await loadEmojis();draw();toast('Emoji added');
}catch(err){toast(err.message)}
};
setTimeout(()=>document.addEventListener('click',function h(ev){if(!p.isConnected){document.removeEventListener('click',h);return}if(!p.contains(ev.target)&&!ev.target.closest('#emb')){p.remove();document.removeEventListener('click',h)}}),0);
}
async function vmStart(){
if(S.vm)return;
let stream;
try{stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true}})}catch(e){toast('Microphone access is needed');return}
if(typeof MediaRecorder==='undefined'){stream.getTracks().forEach(t=>t.stop());toast('Recording is not supported in this browser');return}
let rec;
try{rec=new MediaRecorder(stream,{audioBitsPerSecond:32000})}catch(e){rec=new MediaRecorder(stream)}
const v=S.vm={rec,stream,chunks:[],t0:Date.now(),ch:S.ch,cancel:false};
rec.ondataavailable=e=>{if(e.data.size)v.chunks.push(e.data)};
rec.onstop=()=>vmDone(v);
rec.start();trStart();
const f=$('#comp');if(f)f.classList.add('rec');
v.timer=setInterval(()=>{const t=(Date.now()-v.t0)/1000,e=$('#vmt');if(e)e.textContent=fmtDur(t);if(t>=180)vmStop()},250);
tone(880,.06,'square');
}
function vmStop(){
const v=S.vm;if(!v)return;
clearInterval(v.timer);trStop();
if(v.rec.state==='recording')v.rec.stop();
v.stream.getTracks().forEach(t=>t.stop());
const f=$('#comp');if(f)f.classList.remove('rec');
}
async function vmDone(v){
if(S.vm===v)S.vm=null;
if(v.cancel)return;
const dur=(Date.now()-v.t0)/1000;
if(dur<.8){toast('Too short');return}
const blob=new Blob(v.chunks,{type:v.rec.mimeType||'audio/webm'});
const tx=await trWait();
try{
toast('Sending voicemail...');
const id=await uploadBlob(blob,v.ch);
queueMsg(v.ch,'',[{t:'aud',id,mime:(blob.type||'audio/webm').split(';')[0],dur:Math.round(dur*10)/10,tx}]);
}catch(e){toast(e.message)}
}
let swx=0,swy=0;
document.addEventListener('touchstart',e=>{swx=e.touches[0].clientX;swy=e.touches[0].clientY},{passive:true});
document.addEventListener('touchend',e=>{
if(matchMedia('(min-width:861px)').matches||!$('#side'))return;
const dx=e.changedTouches[0].clientX-swx,dy=e.changedTouches[0].clientY-swy;
if(Math.abs(dy)>60||Math.abs(dx)<70)return;
const open=$('#side').classList.contains('open');
if(!open&&swx<26&&dx>0)toggleSide(true);
else if(open&&dx<0)toggleSide(false);
},{passive:true});
const monthKey=t=>new Date(t).toLocaleDateString([],{month:'long',year:'numeric'});
async function albumView(){
const A=S.alb;
try{const r=await api('albums');A.list=r.albums;A.total=r.total;A.videos=r.videos;A.cover=r.cover}catch(e){}
if(S.view!=='album')return;
if(A.cur!=='all'&&!A.list.some(a=>a.id===A.cur))A.cur='all';
try{const r=await api('album_items?album='+A.cur+'&u='+A.u);A.items=r.items;A.more=r.more}catch(e){}
if(S.view!=='album')return;
drawAlbum();
}
function upTiles(){
return S.alb.up.map(x=>`<div class="ti up">${x.th?`<img src="${x.th}" alt="">`:`<span class="vph">${ico('image')}</span>`}<i class="tp" style="width:${Math.round(x.p*100)}%"></i></div>`).join('');
}
function drawUp(){
const e=$('#aup');if(!e)return;
e.hidden=!S.alb.up.length;
e.innerHTML=S.alb.up.length?`<p class="mut">Uploading ${S.alb.up.length} ${S.alb.up.length===1?'item':'items'}...</p><div class="tray">${upTiles()}</div>`:'';
}
function drawAlbum(){
const A=S.alb,cur=A.list.find(a=>a.id===A.cur),mine=cur&&cur.user_id===ME.id;
let grid='',last='';
A.items.forEach((it,i)=>{
const mk=monthKey(it.ts);
if(mk!==last){if(last)grid+='</div>';grid+=`<h4 class="mon">${mk}</h4><div class="ag">`;last=mk}
grid+=`<button class="ai" data-i="${i}" title="Added by ${esc(byId(it.user_id).name)}">${it.th?`<img src="${it.th}" alt="" loading="lazy">`:`<span class="vph">${ico(it.t==='vid'?'video':'image')}</span>`}${it.t==='vid'?`<span class="pl">${ico('play')}${it.dur?`<small>${fmtDur(it.dur)}</small>`:''}</span>`:''}</button>`;
});
if(last)grid+='</div>';
const photos=cur?cur.n:A.total;
$('#view').innerHTML=pageHead('Memories','Album',`<div class="vctl"><button class="ghost" id="anew">${ico('plus')}New album</button><button class="pri" id="aadd">${ico('image')}Add photos and videos</button></div>`)+`<input type="file" id="afile" accept="image/*,video/*" multiple hidden><div class="albs rise"><button class="acard${A.cur==='all'?' on':''}" data-a="all"><span class="acv">${A.cover?`<img src="${A.cover}" alt="">`:ico('album')}</span><b>All memories</b><small>${A.total} ${A.total===1?'item':'items'}${A.videos?' · '+A.videos+' video'+(A.videos===1?'':'s'):''}</small></button>${A.list.map(a=>`<button class="acard${A.cur===a.id?' on':''}" data-a="${a.id}"><span class="acv">${a.cover?`<img src="${a.cover}" alt="">`:ico('album')}</span><b>${esc(a.name)}</b><small>${a.n} ${a.n===1?'item':'items'} · by ${esc(byId(a.user_id).name)}</small></button>`).join('')}</div><div class="card albm rise" style="--i:1"><div class="albh"><div class="grow"><h2>${cur?esc(cur.name):'All memories'}</h2><small class="mut">${photos} ${photos===1?'item':'items'}${A.cur==='all'?' across every album':''}</small></div><select id="au" aria-label="Filter by person"><option value="all">Everyone</option>${USERS.map(u=>`<option value="${u.id}"${A.u===u.id?' selected':''}>${esc(u.name)}</option>`).join('')}</select>${mine?`<button class="ghost" id="aren">${ico('edit')}Rename</button><button class="ghost" id="adel">${ico('trash')}Delete</button>`:''}</div><div class="upl" id="aup" hidden></div>${A.items.length?grid:`<div class="empty">${A.u!=='all'?'Nothing from this person yet.':'No photos or videos yet. Add the first ones, or drop files anywhere on this page.'}</div>`}${A.more?'<div class="vctl"><button class="ghost" id="amore">Load more</button></div>':''}</div><div class="dropz" id="adz">Drop photos and videos to add them</div>`;
drawUp();
const view=$('#view');let dc=0;const dz=$('#adz');
view.ondragenter=e=>{if([...(e.dataTransfer.types||[])].includes('Files')){dc++;dz.classList.add('on')}};
view.ondragleave=()=>{dc=Math.max(0,dc-1);if(!dc)dz.classList.remove('on')};
view.ondragover=e=>e.preventDefault();
view.ondrop=e=>{e.preventDefault();dc=0;dz.classList.remove('on');if(e.dataTransfer.files.length)albumUpload(e.dataTransfer.files)};
$('#aadd').onclick=()=>$('#afile').click();
$('#afile').onchange=e=>{albumUpload(e.target.files);e.target.value=''};
$('.albs').onclick=e=>{const b=e.target.closest('[data-a]');if(!b)return;A.cur=b.dataset.a==='all'?'all':+b.dataset.a;albumView()};
$('#au').onchange=e=>{A.u=e.target.value;albumView()};
$('#anew').onclick=async()=>{
const n=prompt('Name your new album');if(!n||!n.trim())return;
try{const r=await api('albums',{body:{name:n}});A.cur=r.id;albumView()}catch(err){toast(err.message)}
};
const rn=$('#aren');if(rn)rn.onclick=async()=>{const n=prompt('Rename album',cur.name);if(!n||!n.trim())return;try{await api('albums',{body:{id:cur.id,name:n}});albumView()}catch(err){toast(err.message)}};
const dl=$('#adel');if(dl)dl.onclick=async()=>{if(!confirm('Delete "'+cur.name+'" and every photo and video in it?'))return;try{await api('albums?id='+cur.id,{method:'DELETE'});A.cur='all';albumView()}catch(err){toast(err.message)}};
const mr=$('#amore');if(mr)mr.onclick=async()=>{
const last=A.items[A.items.length-1];
try{const r=await api('album_items?album='+A.cur+'&u='+A.u+'&before='+last.id);A.items=A.items.concat(r.items);A.more=r.more;drawAlbum()}catch(err){toast(err.message)}
};
$$('.ag').forEach(g=>g.onclick=e=>{const b=e.target.closest('.ai');if(b)albumLightbox(+b.dataset.i)});
}
async function albumUpload(files){
const A=S.alb,target=A.cur==='all'?(A.list[0]&&A.list[0].id):A.cur;
if(!target){toast('Create an album first');return}
const list=[...files].filter(f=>f.type.startsWith('image/')||f.type.startsWith('video/'));
if(!list.length){toast('Choose photos or videos');return}
if(A.cur==='all')toast('Adding to '+A.list[0].name);
let i=0,ok=0;
const one=async f=>{
const img=f.type.startsWith('image/');
if(!img&&f.size>(S.r2?95:12)*1024*1024){toast(f.name+' is over '+(S.r2?95:12)+' MB');return}
const up={th:'',p:0};A.up.push(up);drawUp();
try{
const meta=img?await prepImage(f):await prepVideo(f);
up.th=meta.th;drawUp();
const blob=img?meta.blob:f;
const id=await uploadBlob(blob,'album',p=>{up.p=p;drawUp()});
await api('album_items',{body:{album:target,items:[{t:img?'img':'vid',id,mime:(blob.type||f.type).split(';')[0],w:meta.w||0,h:meta.h||0,dur:meta.dur||0,th:meta.th||''}]}});
ok++;
}catch(e){toast((f.name||'File')+': '+(e.message||'upload failed'))}
A.up=A.up.filter(x=>x!==up);drawUp();
};
await Promise.all(Array.from({length:Math.min(3,list.length)},async()=>{while(i<list.length)await one(list[i++])}));
if(ok)toast(ok+(ok===1?' item added':' items added'));
if(S.view==='album')albumView();
}
function albumLightbox(start){
const A=S.alb;let idx=start,tx0=0;
const o=document.createElement('div');o.id='lbx';o.className='alb';
o.innerHTML=`<button class="iconbtn lx" aria-label="Close">${ico('x')}</button><button class="lnav l" aria-label="Previous"><span>${ico('chev')}</span></button><div class="lm"></div><button class="lnav r" aria-label="Next"><span>${ico('chev')}</span></button><div class="lcap"></div><div class="lact"></div>`;
document.body.appendChild(o);
const close=()=>{o.remove();document.removeEventListener('keydown',kd)};
const show=async()=>{
const it=A.items[idx];if(!it)return;
const my=idx,lm=$('.lm',o);
lm.innerHTML='<span class="spin"></span>';
const u=byId(it.user_id),cur=A.list.find(a=>a.id===it.album_id);
$('.lcap',o).innerHTML=`${av(u,'sm')}<div><b>${esc(u.name)}</b><small>${new Date(it.ts).toLocaleString([],{month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit',hour12:!ls.get('gg_24h',false)})}${cur?' · '+esc(cur.name):''} · ${idx+1} of ${A.items.length}</small></div>`;
$('.l',o).style.visibility=idx>0?'visible':'hidden';
$('.r',o).style.visibility=idx<A.items.length-1?'visible':'hidden';
try{
const url=await mediaUrl(it.media_id);
if(my!==idx)return;
lm.innerHTML=it.t==='vid'?`<video src="${url}" controls autoplay playsinline></video>`:`<img src="${url}" alt="">`;
const canDel=it.user_id===ME.id||(cur&&cur.user_id===ME.id);
$('.lact',o).innerHTML=`<a class="iconbtn" href="${url}" download="galagram-${it.media_id}" aria-label="Download">${ico('dl')}</a>${canDel?`<button class="iconbtn" id="ldel" aria-label="Delete">${ico('trash')}</button>`:''}`;
const d=$('#ldel',o);
if(d)d.onclick=async()=>{
if(!confirm('Delete this '+(it.t==='vid'?'video':'photo')+'?'))return;
try{await api('album_items?id='+it.id,{method:'DELETE'});A.items.splice(idx,1);if(!A.items.length){close();albumView();return}if(idx>=A.items.length)idx=A.items.length-1;show();albumView()}catch(err){toast(err.message)}
};
}catch(e){if(my===idx)lm.innerHTML='<p class="mut">Could not load this file.</p>'}
};
const go2=d=>{const n=idx+d;if(n>=0&&n<A.items.length){idx=n;show()}};
const kd=e=>{if(e.key==='Escape')close();else if(e.key==='ArrowLeft')go2(-1);else if(e.key==='ArrowRight')go2(1)};
document.addEventListener('keydown',kd);
o.onclick=e=>{if(e.target===o||e.target.closest('.lx'))close();else if(e.target.closest('.l'))go2(-1);else if(e.target.closest('.r'))go2(1)};
o.addEventListener('touchstart',e=>{tx0=e.touches[0].clientX},{passive:true});
o.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-tx0;if(Math.abs(dx)>70)go2(dx<0?1:-1)},{passive:true});
show();
}
async function openScanner(){
if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){toast('Camera is not available in this browser');return}
const m=document.createElement('div');m.className='modal';
m.innerHTML=`<div class="card scan"><h2>Scan to sign in</h2><p class="mut">Open GalaGram on the other device, show its login QR code, and point this camera at it.</p><div class="scanbox"><video id="sv" playsinline muted></video><i class="scanline"></i></div><p class="mut" id="sst">Looking for a QR code...</p><div class="vctl"><button class="ghost" id="sx">Cancel</button></div></div>`;
document.body.appendChild(m);
let stream=null,stop=false;
const close=()=>{stop=true;if(stream)stream.getTracks().forEach(t=>t.stop());m.remove()};
$('#sx',m).onclick=close;
m.onclick=e=>{if(e.target===m)close()};
try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}}})}
catch(e){toast('Camera access is needed to scan');close();return}
if(stop){stream.getTracks().forEach(t=>t.stop());return}
const v=$('#sv',m);v.srcObject=stream;
try{await v.play()}catch(e){}
const c=document.createElement('canvas'),x=c.getContext('2d',{willReadFrequently:true});
const tick=async()=>{
if(stop)return;
if(v.videoWidth&&window.jsQR){
c.width=v.videoWidth;c.height=v.videoHeight;x.drawImage(v,0,0);
const r=jsQR(x.getImageData(0,0,c.width,c.height).data,c.width,c.height,{inversionAttempts:'dontInvert'});
if(r&&r.data){
let tok='';try{tok=new URL(r.data).searchParams.get('qr')||''}catch(e){}
if(tok){
close();
try{await api('qr/approve',{body:{token:tok}});toast('Signed in on the other device')}catch(err){toast(err.message)}
return;
}
const st=$('#sst',m);if(st)st.textContent='That is not a GalaGram sign-in code.';
}
}
setTimeout(tick,150);
};
tick();
}
function drawBubble(){
let b=$('#bubble');
const items=ME&&!$('#app').hidden?Object.keys(S.latest).filter(isUnread).map(k=>({k,...S.latest[k]})).sort((a,c)=>c.id-a.id):[];
if(!items.length){if(b)b.remove();S.bubSig='';S.bubN=0;return}
const sig=items.map(i=>i.k+':'+i.id).join('|')+'|'+!!S.bubOpen;
if(b&&S.bubSig===sig)return;
const grow=items.length>(S.bubN||0);
S.bubSig=sig;S.bubN=items.length;
if(!b){
b=document.createElement('div');b.id='bubble';document.body.appendChild(b);
b.onclick=e=>{
const t=e.target.closest('[data-bub],[data-go2]');
if(!t)return;
if(t.dataset.bub){S.bubOpen=!S.bubOpen;S.bubSig='';drawBubble();return}
S.bubOpen=false;S.ch=t.dataset.go2;
if(S.view==='chat'){drawChs();drawMem();drawPane();sync()}else go('chat');
drawBubble();
};
b.onsubmit=async e=>{
e.preventDefault();
const f=e.target,k=f.dataset.k,inp=f.querySelector('input'),t=inp.value.trim();
if(!t)return;
inp.value='';
try{await api('messages',{body:{channel:k,body:t}});markRead(k);sync();updUnread()}catch(err){toast(err.message)}
};
}
const sender=byId(items[0].u);
b.innerHTML=`${S.bubOpen?`<div class="bpanel">${items.slice(0,5).map(i=>`<div class="bi"><button class="bgo" data-go2="${i.k}">${av(byId(i.u),'sm')}<div><b>${esc(byId(i.u).name)}</b><small>${esc(chName(i.k))}</small></div></button><p>${esc(i.x.slice(0,120))}</p><form class="br" data-k="${i.k}"><input placeholder="Reply" maxlength="500"><button aria-label="Send">${ico('send')}</button></form></div>`).join('')}</div>`:''}<button class="bub${grow?' bounce':''}" data-bub="1" aria-label="Unread messages">${av(sender)}<i class="bc">${items.length}</i></button>`;
}
function msgPane(){
const n=chName(S.ch),g=grpOf(S.ch);
$('#pane').innerHTML=`<div class="ph">${ico(g?'users':S.ch.startsWith('dm:')?'chat':((TEXT.find(c=>c.id===S.ch)||{}).icon||'hash'))}<b>${esc(n)}</b>${g?`<span class="gm">${g.members.map(id=>av(byId(id),'sm')).join('')}</span>`:''}${g||S.ch.startsWith('dm:')?`<span class="cbtns"><button class="iconbtn" data-call="voice" aria-label="Voice call" title="Voice call">${ico('phone')}</button><button class="iconbtn" data-call="video" aria-label="Video call" title="Video call">${ico('video')}</button></span>`:''}</div>${S.ch==='soundtrip'?musicBlock():''}<div class="msgs" id="msgs"></div><button class="jump" id="jump" hidden>New messages</button><form class="comp" id="comp"><div class="tools" id="tools"><button type="button" data-f="b" title="Bold (Ctrl+B)"><b>B</b></button><button type="button" data-f="i" title="Italic (Ctrl+I)"><i>I</i></button><button type="button" data-f="u" title="Underline (Ctrl+U)"><u>U</u></button><button type="button" data-f="ul" title="Bullet list">${ico('list')}</button><span class="sepv"></span><button type="button" id="emb" title="Emoji">${ico('smile')}</button><button type="button" id="atb" title="Photo or video">${ico('image')}</button><button type="button" id="vmb" title="Record a voicemail">${ico('mic')}</button><input type="file" id="fin" accept="image/*,video/*" multiple hidden></div><div class="tray" id="tray" hidden></div><div class="vmbar" id="vmbar"><i class="rdot"></i><b id="vmt">0:00</b><span class="vwave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><button type="button" class="ghost" id="vmx" title="Discard">${ico('trash')}</button><button type="button" class="pri" id="vms">${ico('send')}Send</button></div><div class="crow"><div id="mi" class="ed" contenteditable="true" role="textbox" aria-multiline="true" data-ph="Message ${esc(n)}"></div><button class="pri" aria-label="Send">${ico('send')}</button></div></form><div class="dropz" id="dz">Drop photos and videos to attach</div>`;
delete S.seenMax[S.ch];
drawMsgs();
const mi=$('#mi'),form=$('#comp'),box=$('#msgs');
mi.oninput=edClean;
mi.onkeydown=e=>{if(ls.get('gg_enter',true)&&e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();form.requestSubmit()}};
mi.onpaste=e=>{
const cd=e.clipboardData||{},fs=[...(cd.files||[])];
e.preventDefault();
if(fs.length){addFiles(fs);return}
document.execCommand('insertText',false,cd.getData?cd.getData('text/plain'):'');
};
$('#tools').onmousedown=e=>{if(e.target.closest('button'))e.preventDefault()};
$('#tools').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.f)fmtBtn(b.dataset.f);else if(b.id==='atb')$('#fin').click();else if(b.id==='emb')emoPicker();else if(b.id==='vmb')vmStart()};
$('#fin').onchange=e=>{addFiles([...e.target.files]);e.target.value=''};
$('#tray').onclick=e=>{const b=e.target.closest('[data-rm]');if(b){S.pend=S.pend.filter(x=>x.k!==b.dataset.rm);drawTray()}};
$('#vmx').onclick=()=>{if(S.vm){S.vm.cancel=true;vmStop()}};
$('#vms').onclick=()=>{if(S.vm){S.vm.cancel=false;vmStop()}};
const pane=$('#pane'),dz=$('#dz');let dc=0;
pane.ondragenter=e=>{if([...(e.dataTransfer.types||[])].includes('Files')){dc++;dz.classList.add('on')}};
pane.ondragleave=()=>{dc=Math.max(0,dc-1);if(!dc)dz.classList.remove('on')};
pane.ondragover=e=>e.preventDefault();
pane.ondrop=e=>{e.preventDefault();dc=0;dz.classList.remove('on');if(e.dataTransfer.files.length)addFiles([...e.dataTransfer.files])};
form.onsubmit=e=>{
e.preventDefault();
const t=edGet(),mine=S.pend.filter(x=>x.ch===S.ch);
if(mine.some(x=>x.st==='up'))return toast('Still uploading. One moment.');
const atts=mine.filter(x=>x.st==='ok').map(x=>({t:x.t,id:x.id,mime:x.mime,w:x.w||0,h:x.h||0,dur:x.dur||0,th:x.th||''}));
if(!t&&!atts.length)return;
edClear();S.pend=S.pend.filter(x=>x.ch!==S.ch);drawTray();
queueMsg(S.ch,t,atts);
};
box.onclick=e=>{
const r=e.target.closest('[data-retry]');if(r){retryMsg(+r.dataset.retry);return}
const pl=e.target.closest('.vplay');if(pl){playVm(pl.closest('.vmsg'));return}
const vb=e.target.closest('.vbar');if(vb){seekVm(vb,e);return}
const md=e.target.closest('[data-med]');if(md)openMedia(md.dataset.med,md.dataset.t,md.dataset.n);
};
S.pend=S.pend.filter(x=>x.ch===S.ch);drawTray();
if(S.vm){S.vm.cancel=true;vmStop()}
$('#jump').onclick=()=>{box.scrollTop=box.scrollHeight;$('#jump').hidden=true};
box.onscroll=()=>{if(box.scrollHeight-box.scrollTop-box.clientHeight<90)$('#jump').hidden=true};
$$('[data-call]').forEach(b=>b.onclick=()=>startCall(S.ch,b.dataset.call==='video'));
const mf=$('#mf2');
if(mf){
mf.onsubmit=async e=>{e.preventDefault();const u=$('#mu').value.trim();if(!u)return;try{await api('music',{body:{url:u}});$('#mu').value='';sync()}catch(err){toast(err.message)}};
const mc=$('#muc');if(mc)mc.onclick=async()=>{await api('music',{body:{url:''}}).catch(()=>{});sync()};
$('#mplay').onclick=e=>{if(!e.target.closest('#npp'))return;if(S.music&&S.music.src==='spotify'){D.open=true;dockPlay()}else dockToggle()};
const mu=$('#mup');
if(mu)mu.onchange=async e=>{
const f=e.target.files[0];e.target.value='';if(!f)return;
const ext=(f.name.split('.').pop()||'').toLowerCase(),types={mp3:'audio/mpeg',m4a:'audio/mp4',aac:'audio/aac',wav:'audio/wav',ogg:'audio/ogg',flac:'audio/flac',webm:'audio/webm'};
const type=f.type.startsWith('audio/')?f.type:types[ext];
if(!type){toast('Choose an audio file');return}
if(f.size>(S.r2?40:12)*1024*1024){toast('Songs can be up to '+(S.r2?40:12)+' MB');return}
toast('Uploading song...');
try{
const id=await uploadBlob(new Blob([f],{type}),'soundtrip');
await api('music',{body:{file:{id,title:f.name.replace(/\.[^.]+$/,'').slice(0,120)}}});
toast('Song added');sync();
}catch(err){toast(err.message)}
};
}
if(matchMedia('(hover:hover)').matches)mi.focus();
}
function queueMsg(ch,text,atts){
const tmp=Date.now()*1000+Math.floor(Math.random()*1000);
(S.cache[ch]=S.cache[ch]||[]).push({id:'t'+tmp,tmp,u:ME.id,t:Date.now(),x:text,att:atts&&atts.length?JSON.stringify(atts):'',p:true,a:true});
if(S.view==='chat'&&S.ch===ch)drawMsgs();
postMsg(ch,tmp);
}
async function postMsg(ch,tmp){
const list=S.cache[ch]||[],m=list.find(x=>x.tmp===tmp);
if(!m)return;
try{
const r=await api('messages',{body:{channel:ch,body:m.x,att:m.att?JSON.parse(m.att):[]}});
if(list.some(x=>x.id===r.id))list.splice(list.indexOf(m),1);else{m.id=r.id;m.p=false;m.f=false;delete m.tmp}
}catch(e){m.p=false;m.f=true}
if(S.view==='chat'&&S.ch===ch)drawMsgs();
sync();
}
function retryMsg(tmp){
const m=(S.cache[S.ch]||[]).find(x=>x.tmp===tmp);
if(m){m.f=false;m.p=true;drawMsgs();postMsg(S.ch,tmp)}
}
function drawMsgs(){
const el=$('#msgs');if(!el)return;
const all=S.cache[S.ch]||[];
const real=all.filter(m=>!m.p&&!m.f&&typeof m.id==='number').sort((a,b)=>a.id-b.id);
const list=real.concat(all.filter(m=>m.p||m.f));
if(!list.length){el.innerHTML='<div class="empty">No messages yet. Say hello.</div>';return}
const lastSeen=S.seenMax[S.ch];
let last=null,day='',h='',fresh=false;
list.forEach(m=>{
const a=byId(m.u),d=new Date(m.t);
let sep='';
if(d.toDateString()!==day){day=d.toDateString();sep=`<div class="sep"><span>${dayLabel(d)}</span></div>`;last=null}
const grp=last&&last.u===m.u&&m.t-last.t<300000;
const isNew=!!m.a||(lastSeen!==undefined&&typeof m.id==='number'&&m.id>lastSeen);
delete m.a;
if(isNew&&m.u!==ME.id)fresh=true;
const cls=`m${grp?' g':''}${isNew?' new':''}${m.p?' pend':''}${m.f?' fail':''}`;
const body=msgBody(m);
const tm=d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',hour12:!ls.get('gg_24h',false)});
h+=sep+(grp?`<div class="${cls}">${body}</div>`:`<div class="${cls}">${av(a)}<div><div class="mh"><b style="color:${nameColor(a.color)}">${esc(a.name)}</b><small>${tm}</small></div>${body}</div></div>`);
last=m;
});
S.seenMax[S.ch]=real.length?real[real.length-1].id:0;
const atEnd=el.scrollHeight-el.scrollTop-el.clientHeight<90||!el.dataset.init;
el.innerHTML=h;el.dataset.init='1';
if(atEnd||list[list.length-1].u===ME.id)el.scrollTop=el.scrollHeight;
else if(fresh){const j=$('#jump');if(j)j.hidden=false}
}

function voicePane(){
const id=S.ch.slice(2),list=S.voice[id]||[],joined=S.vc===id;
$('#pane').innerHTML=`<div class="ph">${ico('volume')}<b>${esc(chName(S.ch))}</b></div><div class="vp"><div class="tiles">${list.length?list.map(i=>{const a=byId(i);return `<div class="tile" data-id="${i}">${av(a,'lg')}<b>${esc(a.name)}</b></div>`}).join(''):'<div class="empty">Nobody is in this channel yet.</div>'}</div><div class="vctl">${joined?`<button class="ghost" id="vm">${ico(S.muted?'micoff':'mic')}${S.muted?'Unmute':'Mute'}</button><button class="danger" id="vl">${ico('leave')}Leave</button>`:`<button class="pri" id="vj">${ico('mic')}Join voice</button>`}</div></div>`;
const j=$('#vj'),l=$('#vl'),m=$('#vm');
if(j)j.onclick=()=>joinVoice(id);
if(l)l.onclick=()=>{leaveVoice();drawChs();drawPane()};
if(m)m.onclick=()=>{S.muted=!S.muted;if(S.stream)S.stream.getAudioTracks().forEach(t=>t.enabled=!S.muted);drawPane()};
}
function attachRemote(id,stream){
if(S.vc&&S.vc.startsWith('call:')&&S.remote[id]&&stream.id!==S.remote[id].id){S.screens[id]=stream;syncTiles();return}
S.remote[id]=stream;
if(S.vc&&S.vc.startsWith('call:')){
syncTiles();
const t=$('#ct-'+id);
if(t){const v=t.querySelector('video');if(v.srcObject!==stream)v.srcObject=stream;v.play().catch(()=>{})}
return;
}
let a=document.getElementById('au-'+id);
if(!a){a=document.createElement('audio');a.id='au-'+id;a.autoplay=true;document.body.appendChild(a)}
a.srcObject=stream;
}
function startCall(room,video){
if(S.vc&&S.vc.startsWith('call:')){if(S.callRoom===room)openCall();else toast('Finish your current call first');return}
callBegin(room,video);
}
async function callBegin(room,video){
const members=room.startsWith('g:')?grpOf(room).members:room.slice(3).split('+');
const ok=await joinVoice('call:'+room,video);
if(!ok)return;
S.isCaller=true;
S.invited=members.filter(i=>i!==ME.id);
const pl=JSON.stringify({room,video:S.cam,name:ME.name});
S.invited.forEach(id=>api('signal',{body:{to:id,type:'invite',data:pl}}).catch(()=>{}));
S.ringT=setInterval(()=>tone(440,.25),2600);
S.noAns=setTimeout(()=>{if(S.vc&&S.vc.startsWith('call:')&&(S.voice[S.vc]||[]).filter(i=>i!==ME.id).length===0){toast('No answer');leaveVoice()}},45000);
}
function closeCallUI(was){
clearInterval(S.ringT);clearTimeout(S.noAns);
const joined=S.voice[was]||[];
(S.invited||[]).filter(i=>!joined.includes(i)).forEach(id=>api('signal',{body:{to:id,type:'cancel',data:JSON.stringify({room:was.slice(5)})}}).catch(()=>{}));
if(S.scr){S.scr.getTracks().forEach(t=>{t.onended=null;t.stop()});S.scr=null}
S.invited=[];S.callStart=null;S.callRoom=null;S.isCaller=false;S.remote={};S.peerCam={};S.screens={};
const o=$('#call');if(o)o.remove();
}
function callTick(){
if(!S.vc||!S.vc.startsWith('call:'))return;
const list=S.voice[S.vc]||[],others=list.filter(i=>i!==ME.id);
if(others.length&&!S.callStart){S.callStart=Date.now();clearInterval(S.ringT);clearTimeout(S.noAns)}
if(S.callStart&&!others.length&&Date.now()-S.callStart>3000){toast('Call ended');leaveVoice();return}
if(!S.isCaller&&!S.callStart&&Date.now()-S.joinT>10000&&!others.length){toast('That call has ended');leaveVoice();return}
syncTiles();
}
function mediaTo(id){api('signal',{body:{to:id,type:'media',data:JSON.stringify({cam:S.cam&&S.camOn,scr:!!S.scr})}}).catch(()=>{})}
function sendMedia(){Object.keys(S.pcs).forEach(mediaTo)}
function syncTiles(){
const box=$('#ctiles');
if(!box||!S.vc||!S.vc.startsWith('call:'))return;
const people=[...new Set([ME.id,...(S.voice[S.vc]||[]),...Object.keys(S.remote)])];
const scr=[];
if(S.scr)scr.push('scr-'+ME.id);
Object.keys(S.screens).forEach(id=>{if(people.includes(id))scr.push('scr-'+id)});
const keys=[...people,...scr];
keys.forEach(k=>{
if($('#ct-'+k,box))return;
const isS=k.startsWith('scr-'),id=isS?k.slice(4):k,u=byId(id);
const d=document.createElement('div');
d.className='ctile'+(isS?' scr':'')+(!isS&&id===ME.id?' self':'');d.id='ct-'+k;d.dataset.k=k;
if(!isS)d.dataset.id=id;
d.innerHTML=isS?`<video autoplay playsinline></video><span class="cn">${id===ME.id?'Your screen':esc(u.name)+"'s screen"}</span><span class="qb"></span><button class="fsb" aria-label="Full screen">${ico('full')}</button>`:`<video autoplay playsinline></video><div class="cav">${av(u,'xl')}</div><span class="cn">${id===ME.id?'You':esc(u.name)}</span>`;
box.appendChild(d);
const v=d.querySelector('video');
if(isS){if(id===ME.id){v.muted=true;v.srcObject=S.scr}else{v.srcObject=S.screens[id];v.play().catch(()=>{})}}
else if(id===ME.id){v.muted=true;v.srcObject=S.stream}
else if(S.remote[id]){v.srcObject=S.remote[id];v.play().catch(()=>{})}
});
$$('.ctile',box).forEach(t=>{if(!keys.includes(t.dataset.k))t.remove()});
box.dataset.n=people.length;
box.classList.toggle('hasscr',scr.length>0);
$$('.ctile:not(.scr)',box).forEach(t=>{
const id=t.dataset.id,st=S.remote[id];
const hasVid=id===ME.id?(S.cam&&S.camOn):(!!st&&st.getVideoTracks().length>0&&S.peerCam[id]!==false);
t.classList.toggle('novid',!hasVid);
});
}
async function startShare(){
if(!S.vc||!S.vc.startsWith('call:')||S.scr)return;
const Q=QUAL[S.scrQ];
let st;
try{st=await navigator.mediaDevices.getDisplayMedia({video:{width:{ideal:Q.w},height:{ideal:Q.h},frameRate:{ideal:Q.fps,max:Q.fps}},audio:S.scrAudio?{echoCancellation:false,noiseSuppression:false}:false})}
catch(e){if(e&&e.name!=='NotAllowedError')toast('Screen sharing is not available here');return}
S.scr=st;
const vt=st.getVideoTracks()[0];
try{vt.contentHint=Q.hint}catch(e){}
vt.onended=stopShare;
Object.keys(S.pcs).forEach(id=>addScr(S.pcs[id]));
sendMedia();
const b=$('#cshr');if(b)b.classList.add('off');
syncTiles();toast('You are sharing your screen');
}
const scrSenders=pc=>pc.getSenders().filter(x=>x.track&&S.scr&&S.scr.getTracks().includes(x.track));
function addScr(pc){
S.scr.getTracks().forEach(t=>{const sn=pc.addTrack(t,S.scr);if(t.kind==='video'){applyQ(sn);setTimeout(()=>applyQ(sn),1500)}});
}
async function applyQ(sn){
const Q=QUAL[S.scrQ];
try{
const p=sn.getParameters();
if(!p.encodings||!p.encodings.length)p.encodings=[{}];
p.encodings[0].maxBitrate=Q.kbps*1000;p.encodings[0].maxFramerate=Q.fps;
p.degradationPreference=Q.hint==='motion'?'maintain-framerate':'maintain-resolution';
await sn.setParameters(p);
}catch(e){}
}
function setShareQ(k){
S.scrQ=k;ls.set('gg_scrq',k);
if(!S.scr)return;
const Q=QUAL[k],vt=S.scr.getVideoTracks()[0];
try{vt.contentHint=Q.hint}catch(e){}
vt.applyConstraints({width:{ideal:Q.w},height:{ideal:Q.h},frameRate:{ideal:Q.fps,max:Q.fps}}).catch(()=>{});
Object.keys(S.pcs).forEach(id=>scrSenders(S.pcs[id]).forEach(sn=>{if(sn.track.kind==='video')applyQ(sn)}));
}
function stopShare(){
if(!S.scr)return;
const st=S.scr;
Object.keys(S.pcs).forEach(id=>{const pc=S.pcs[id];scrSenders(pc).forEach(sn=>{try{pc.removeTrack(sn)}catch(e){}})});
S.scr=null;
st.getTracks().forEach(t=>{t.onended=null;t.stop()});
sendMedia();
const b=$('#cshr');if(b)b.classList.remove('off');
syncTiles();
}
function shareMenu(){
const o=$('#call');if(!o)return;
const old=$('#qmenu',o);
if(old){old.remove();return}
const m=document.createElement('div');m.id='qmenu';m.className='qm';
const draw=()=>{m.innerHTML=`<small class="kick">Screen share quality</small>${Object.keys(QUAL).map(k=>`<button type="button" class="qo${S.scrQ===k?' on':''}" data-q="${k}"><b>${QUAL[k].n}</b><small>${QUAL[k].d}</small></button>`).join('')}<div class="row"><b>Share sound</b><button type="button" class="sw${S.scrAudio?' on':''}" id="qa" aria-label="Share sound"></button></div>${S.scr?'<button type="button" class="danger" id="qstop">Stop sharing</button>':'<button type="button" class="pri" id="qgo">Start sharing</button>'}`};
draw();o.appendChild(m);
m.onclick=e=>{
const q=e.target.closest('[data-q]');
if(q){setShareQ(q.dataset.q);draw();return}
if(e.target.closest('#qa')){S.scrAudio=!S.scrAudio;draw();return}
if(e.target.closest('#qgo')){m.remove();startShare();return}
if(e.target.closest('#qstop')){m.remove();stopShare()}
};
}
function openCall(){
const room=S.vc.slice(5);
let o=$('#call');
if(o){o.hidden=false;S.callMin=false;syncTiles();return}
o=document.createElement('div');o.id='call';
o.innerHTML=`<div class="chead"><div><small class="kick">${S.cam?'Video call':'Voice call'}</small><b>${esc(chName(room))}</b></div><span class="ctime" id="ctime">Ringing...</span><button class="iconbtn" id="cmin" aria-label="Minimize">${ico('chev')}</button></div><div class="ctiles" id="ctiles"></div><div class="cbar"><button class="cb" id="cmute" aria-label="Mute">${ico('mic')}</button>${S.cam?`<button class="cb" id="ccam" aria-label="Camera">${ico('video')}</button>`:''}${navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia?`<button class="cb${S.scr?' off':''}" id="cshr" aria-label="Share screen" title="Share screen">${ico('screen')}</button>`:''}<button class="cb end" id="cend" aria-label="End call">${ico('leave')}</button></div>`;
document.body.appendChild(o);
$('#cmin',o).onclick=()=>{o.hidden=true;S.callMin=true};
$('#cmute',o).onclick=()=>{const b=$('#cmute');S.muted=!S.muted;S.stream.getAudioTracks().forEach(t=>t.enabled=!S.muted);b.classList.toggle('off',S.muted);b.innerHTML=ico(S.muted?'micoff':'mic')};
const cc=$('#ccam',o);
if(cc)cc.onclick=()=>{S.camOn=!S.camOn;S.stream.getVideoTracks().forEach(t=>t.enabled=S.camOn);cc.classList.toggle('off',!S.camOn);cc.innerHTML=ico(S.camOn?'video':'videooff');sendMedia();syncTiles()};
$('#cend',o).onclick=()=>leaveVoice();
const sh=$('#cshr',o);if(sh)sh.onclick=shareMenu;
$('#ctiles',o).onclick=e=>{const f=e.target.closest('.fsb');if(!f)return;const t=f.closest('.ctile');if(document.fullscreenElement)document.exitFullscreen();else if(t.requestFullscreen)t.requestFullscreen()};
syncTiles();
}
setInterval(()=>{$$('.ctile.scr').forEach(t=>{const v=t.querySelector('video'),b=t.querySelector('.qb');if(b&&v&&v.videoHeight)b.textContent=v.videoHeight+'p'})},1500);
setInterval(()=>{const t=$('#ctime');if(!t||!S.vc)return;t.textContent=S.callStart?fmtDur((Date.now()-S.callStart)/1000):(S.isCaller?'Ringing...':'Connecting...')},1000);
function handleCallSig(s){
let d={};try{d=JSON.parse(s.data)}catch(e){}
if(s.type==='invite'){
if(S.vc||S.incoming){api('signal',{body:{to:s.f,type:'decline',data:JSON.stringify({room:d.room,busy:true})}}).catch(()=>{});return}
showIncoming(s.f,d);
}else if(s.type==='decline'){
toast(byId(s.f).name+(d.busy?' is on another call':' declined the call'));
}else if(s.type==='cancel'){
if(S.incoming&&S.incoming.room===d.room){const n=byId(S.incoming.from).name;closeIncoming();toast('Missed call from '+n)}
}
}
function closeIncoming(){
clearInterval(S.ringIn);clearTimeout(S.inT);
if(S.incoming){S.incoming.el.remove();S.incoming=null}
}
function showIncoming(from,d){
if(!d.room)return;
const u=byId(from),m=document.createElement('div');
m.className='modal ring';
m.innerHTML=`<div class="card ringcard">${av(u,'xl')}<small class="kick">Incoming ${d.video?'video':'voice'} call</small><h2>${esc(u.name)}${d.room.startsWith('g:')?' in '+esc(chName(d.room)):''}</h2><div class="vctl"><button class="danger" id="rd">${ico('leave')}Decline</button><button class="pri" id="ra">${ico(d.video?'video':'phone')}Accept</button></div>${d.video?'<button class="ghost" id="ras">Accept with audio only</button>':''}</div>`;
document.body.appendChild(m);
S.incoming={room:d.room,el:m,from};
const ring=()=>{tone(520,.25,'triangle');setTimeout(()=>tone(660,.25,'triangle'),300);if(navigator.vibrate)navigator.vibrate(300)};
ring();S.ringIn=setInterval(ring,2200);
S.inT=setTimeout(()=>{closeIncoming();toast('Missed call from '+u.name)},45000);
const accept=video=>{closeIncoming();if(!(S.voice['call:'+d.room]||[]).length){toast('That call has ended');return}joinVoice('call:'+d.room,video)};
$('#ra',m).onclick=()=>accept(!!d.video);
const as=$('#ras',m);if(as)as.onclick=()=>accept(false);
$('#rd',m).onclick=()=>{api('signal',{body:{to:from,type:'decline',data:JSON.stringify({room:d.room})}}).catch(()=>{});closeIncoming()};
}

const ICE={iceServers:[{urls:'stun:stun.cloudflare.com:3478'},{urls:'stun:stun.l.google.com:19302'}]};
function mkPc(id){
const pc=new RTCPeerConnection(ICE);S.pcs[id]=pc;
S.stream.getTracks().forEach(t=>pc.addTrack(t,S.stream));
if(S.scr&&S.vc&&S.vc.startsWith('call:'))addScr(pc);
pc.onicecandidate=e=>{if(e.candidate)api('signal',{body:{to:id,type:'ice',data:JSON.stringify(e.candidate)}}).catch(()=>{})};
pc.onconnectionstatechange=()=>{if(pc.connectionState==='connected'){pc._init=true;mediaTo(id)}};
pc.onnegotiationneeded=async()=>{
if(!pc._init||pc._mk)return;
pc._mk=true;
try{const o=await pc.createOffer();if(pc.signalingState==='stable'){await pc.setLocalDescription(o);api('signal',{body:{to:id,type:'offer',data:JSON.stringify(o)}}).catch(()=>{})}}catch(e){}
finally{pc._mk=false}
};
pc.ontrack=e=>{
attachRemote(id,e.streams[0]);
try{
if(S.remote[id]!==e.streams[0])return;
S.actx=S.actx||new (window.AudioContext||window.webkitAudioContext)();
if(S.actx.state==='suspended')S.actx.resume();
const an=S.actx.createAnalyser();an.fftSize=256;S.actx.createMediaStreamSource(e.streams[0]).connect(an);
S.an[id]={an,buf:new Uint8Array(an.frequencyBinCount)};
}catch(err){}
};
return pc;
}
async function flushIce(pc){const q=pc._q||[];pc._q=[];for(const c of q){try{await pc.addIceCandidate(c)}catch(e){}}}
async function callPeer(id){
const pc=mkPc(id);const o=await pc.createOffer();await pc.setLocalDescription(o);
api('signal',{body:{to:id,type:'offer',data:JSON.stringify(o)}}).catch(()=>{});
}
async function onSignal(s){
if(s.type==='invite'||s.type==='decline'||s.type==='cancel'){handleCallSig(s);return}
if(!S.vc||!S.stream)return;
if(s.type==='media'){let m={};try{m=JSON.parse(s.data)}catch(e){}S.peerCam[s.f]=m.cam;if(m.scr===false)delete S.screens[s.f];syncTiles();return}
try{
const d=JSON.parse(s.data);let pc=S.pcs[s.f];
if(s.type==='offer'){
if(pc&&pc.signalingState==='have-local-offer'){if(ME.id>s.f)return;try{await pc.setLocalDescription({type:'rollback'})}catch(e){pc.close();delete S.pcs[s.f];pc=null}}
if(!pc)pc=mkPc(s.f);
await pc.setRemoteDescription(d);await flushIce(pc);
const a=await pc.createAnswer();await pc.setLocalDescription(a);
api('signal',{body:{to:s.f,type:'answer',data:JSON.stringify(a)}}).catch(()=>{});
}else if(s.type==='answer'){
if(pc&&pc.signalingState==='have-local-offer'){await pc.setRemoteDescription(d);await flushIce(pc)}
}else if(s.type==='ice'&&pc){
if(pc.remoteDescription){try{await pc.addIceCandidate(d)}catch(e){}}else(pc._q=pc._q||[]).push(d);
}
}catch(e){}
}
async function reconcileVoice(){
const list=S.voice[S.vc]||[];
if(!list.includes(ME.id)){api('voice',{body:{channel:S.vc,action:'join'}}).catch(()=>{});return}
if(!S.offered){S.offered=true;for(const id of list.filter(x=>x!==ME.id)){if(!S.pcs[id])await callPeer(id)}}
Object.keys(S.pcs).forEach(id=>{if(!list.includes(id)){S.pcs[id].close();delete S.pcs[id];delete S.an[id];delete S.remote[id];delete S.peerCam[id];delete S.screens[id];const a=document.getElementById('au-'+id);if(a)a.remove()}});
}
async function joinVoice(id,video){
leaveVoice();
if(S.actx&&S.actx.state==='suspended')S.actx.resume();
const aud={echoCancellation:true,noiseSuppression:true};
try{S.stream=await navigator.mediaDevices.getUserMedia({audio:aud,video:video?{width:{ideal:640},height:{ideal:480},facingMode:'user'}:false})}
catch(e){
if(video){try{S.stream=await navigator.mediaDevices.getUserMedia({audio:aud});toast('Camera unavailable. Joined with audio only')}catch(e2){toast('Microphone access is needed');return false}}
else{toast('Microphone access is needed');return false}
}
S.cam=S.stream.getVideoTracks().length>0;S.camOn=true;
S.muted=false;S.offered=false;S.hold=false;
if(id==='walkie')S.stream.getAudioTracks().forEach(t=>t.enabled=false);
try{await api('voice',{body:{channel:id,action:'join'}})}catch(e){toast(e.message);leaveVoice();return false}
S.vc=id;tone(660,.12);
if(id.startsWith('call:')){S.callRoom=id.slice(5);S.joinT=Date.now();S.callStart=null;S.remote={};S.peerCam={};S.screens={};S.invited=[];S.isCaller=false}
S.ctx=new (window.AudioContext||window.webkitAudioContext)();
const an=S.ctx.createAnalyser();an.fftSize=256;S.ctx.createMediaStreamSource(S.stream).connect(an);
const buf=new Uint8Array(an.frequencyBinCount);
S.meter=setInterval(()=>{an.getByteFrequencyData(buf);S.local=buf.reduce((a,b)=>a+b,0)/buf.length>16},120);
drawOnAir();
if(id.startsWith('call:'))openCall();
if(S.view==='chat'){drawChs();drawPane()}
sync();
return true;
}
function leaveVoice(){
const was=S.vc;
if(was&&was.startsWith('call:'))closeCallUI(was);
S.vc=null;S.hold=false;S.local=false;
Object.keys(S.pcs).forEach(id=>{S.pcs[id].close();const a=document.getElementById('au-'+id);if(a)a.remove()});S.pcs={};S.an={};
if(S.stream){S.stream.getTracks().forEach(t=>t.stop());S.stream=null}
if(S.meter){clearInterval(S.meter);S.meter=null}
if(S.ctx){S.ctx.close();S.ctx=null}
if(was&&ME)api('voice',{body:{channel:was,action:'leave'}}).catch(()=>{});
drawOnAir();
}
window.addEventListener('pagehide',()=>{if(S.vc&&ME)navigator.sendBeacon('/api/voice',new Blob([JSON.stringify({channel:S.vc,action:'leave'})],{type:'application/json'}))});

const fmtDur=s=>Math.floor(Math.round(s)/60)+':'+String(Math.round(s)%60).padStart(2,'0');
const tName=k=>k==='all'?'Everyone':k.startsWith('g:')?(grpOf(k)||{name:'Group'}).name:byId(k).name;
function targets(){
return [{k:'all',name:'Everyone',sub:'All friends'},...myGroups().map(g=>({k:'g:'+g.id,name:g.name,sub:g.members.length+' members'})),...USERS.filter(u=>u.id!==ME.id).map(u=>({k:u.id,name:u.name,sub:S.online.includes(u.id)?'Online now':'Away',u}))];
}
function drawTargets(){
const el=$('#tgt');if(!el)return;
const ts=targets();
if(!ts.some(t=>t.k===S.target))S.target='all';
el.innerHTML=ts.map(t=>`<button data-k="${t.k}" class="${S.target===t.k?'on':''}">${t.u?`<span class="pip2${S.online.includes(t.u.id)?' on':''}">${av(t.u)}</span>`:`<span class="av gicon">${t.k==='all'?ico('radio'):esc(t.name[0])}</span>`}<small>${esc(t.name)}</small></button>`).join('');
const c=ts.find(t=>t.k===S.target);
$('#sel').innerHTML=`<small>Buzzing</small><b>${esc(c.name)}</b><small>${esc(c.sub)}</small>`;
}
function setBstat(t){const e=$('#bstat');if(e)e.textContent=t}
async function recStart(){
if(S.rec)return;
if(!S.rmic||!S.rmic.active){
try{S.rmic=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true}})}catch(e){setBstat('Microphone blocked');toast('Microphone access is needed');return}
}
if(!S.holding||S.rec)return;
if(typeof MediaRecorder==='undefined'){toast('Recording is not supported in this browser');return}
let rec;
try{rec=new MediaRecorder(S.rmic,{audioBitsPerSecond:24000})}catch(e){rec=new MediaRecorder(S.rmic)}
S.chunks=[];S.rec=rec;S.t0=Date.now();
rec.ondataavailable=e=>{if(e.data.size)S.chunks.push(e.data)};
rec.onstop=()=>finishRec(rec);
rec.start();tone(880,.06,'square');trStart();
const b=$('#ptt');if(b)b.classList.add('rec');
S.rtimer=setInterval(()=>{const t=(Date.now()-S.t0)/1000;setBstat('Recording '+fmtDur(t));if(t>=30)recStop()},200);
}
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
function trStart(){
S.trF='';S.trI='';S.trDone=false;S.sr=null;
const e=$('#btxt');if(e)e.textContent='';
if(!SR||!ls.get('gg_transcribe',true)){S.trDone=true;return}
try{
const r=new SR();r.lang=ls.get('gg_lang','en-US');r.continuous=true;r.interimResults=true;
r.onresult=ev=>{let f='',i='';for(let k=0;k<ev.results.length;k++){const t=ev.results[k][0].transcript;if(ev.results[k].isFinal)f+=t+' ';else i+=t}S.trF=f.trim();S.trI=i.trim();const el=$('#btxt');if(el)el.textContent=(S.trF+' '+S.trI).trim()};
r.onerror=()=>{S.trDone=true};r.onend=()=>{S.trDone=true};
r.start();S.sr=r;
}catch(e){S.trDone=true}
}
function trStop(){if(S.sr){try{S.sr.stop()}catch(e){}}}
async function trWait(){
const t0=Date.now();
while(!S.trDone&&Date.now()-t0<1200)await new Promise(r=>setTimeout(r,60));
return ((S.trF||'')+' '+(S.trI||'')).trim().slice(0,500);
}
function recStop(){
S.holding=false;clearInterval(S.rtimer);trStop();
if(S.rec&&S.rec.state==='recording')S.rec.stop();
}
function finishRec(rec){
const dur=(Date.now()-S.t0)/1000,target=S.target,chunks=S.chunks;
S.rec=null;
const b=$('#ptt');if(b)b.classList.remove('rec');
if(dur<.5){setBstat('Too short. Hold a little longer');return}
const blob=new Blob(chunks,{type:rec.mimeType||'audio/webm'});
if(blob.size>470000){setBstat('Too long to send');return}
setBstat('Sending...');
const fr=new FileReader();
fr.onload=async()=>{
try{const text=await trWait();await api('clip',{body:{to:target,data:fr.result,dur,text}});tone(520,.08,'square');setBstat('Sent to '+tName(target));loadVoices()}
catch(e){setBstat('Not sent');toast(e.message)}
};
fr.readAsDataURL(blob);
}
const playedKey=()=>'gg_played_'+ME.id;
function markPlayed(id){const l=ls.get(playedKey(),[]);if(!l.includes(id)){l.push(id);ls.set(playedKey(),l.slice(-200))}if(S.view==='walkie')drawVoices()}
function stopPlay(){if(S.playing){S.playing.pause();S.playing=null}}
async function playVoice(id,btn){
stopPlay();
try{
const r=await api('voice?id='+id);
const a=new Audio(r.data);S.playing=a;
if(btn)btn.classList.add('on');
a.onended=()=>{if(btn)btn.classList.remove('on')};
await a.play();markPlayed(id);
}catch(e){toast('Could not play that buzz')}
}
function incomingClip(c){
const to=c.t==='all'?'everyone':c.t.startsWith('g:')?tName(c.t):'you';
toast(byId(c.f).name+' buzzed '+to+(c.txt?': '+c.txt.slice(0,80):''));
if(S.view==='walkie')loadVoices();
if(!ls.get('gg_autoplay',true)||S.rec)return;
S.clipQ=(S.clipQ||Promise.resolve()).then(()=>new Promise(res=>{
soft(740,.12,'triangle');
setTimeout(()=>{
const a=new Audio(c.data);S.playing=a;a.onended=res;a.onerror=res;
a.play().then(()=>markPlayed(c.id)).catch(()=>{toast('Open Walkie and tap play to hear it');res()});
},350);
}));
}
async function loadVoices(){try{S.voices=await api('voices')}catch(e){}drawVoices()}
function drawVoices(){
const el=$('#vh');if(!el)return;
const pl=ls.get(playedKey(),[]);
el.innerHTML=S.voices.length?S.voices.map(v=>{
const a=byId(v.f),mine=v.f===ME.id,un=!mine&&!pl.includes(v.id);
const to=mine?tName(v.t):v.t===ME.id?'you':tName(v.t);
return `<div class="vi"><button class="play" data-v="${v.id}" aria-label="Play">${ico('play')}</button>${av(a,'sm')}<div class="grow"><b>${mine?'You':esc(a.name)}</b><small>to ${esc(to)} · ${fmtDur(v.dur)} · ${new Date(v.ts).toLocaleTimeString([],{hour:'numeric',minute:'2-digit',hour12:!ls.get('gg_24h',false)})}</small>${v.txt?`<em class="tx">"${esc(v.txt)}"</em>`:''}</div>${un?'<i class="ndot"></i>':''}</div>`;
}).join(''):'<div class="empty">No buzzes yet. Hold the button to send the first one.</div>';
}
document.addEventListener('keydown',e=>{if(e.code==='Space'&&!e.repeat&&S.view==='walkie'&&!/INPUT|TEXTAREA|SELECT|BUTTON/.test(e.target.tagName)){e.preventDefault();S.holding=true;recStart()}});
document.addEventListener('keyup',e=>{if(e.code==='Space'&&S.view==='walkie')recStop()});
function walkieView(){
$('#view').innerHTML=pageHead('Buzz','Walkie',`<p class="mut" style="max-width:360px">Pick a friend or group, hold the button and talk. They hear it the moment you let go.</p>`)+`<div class="buzzpage"><div class="card stage rise"><div class="tgt" id="tgt"></div><div class="sel" id="sel"></div><div class="talkzone"><button id="ptt" class="bbtn">${ico('mic')}<span>Hold to talk</span></button><div class="wave">${[0,1,2,3,4,5,6,7,8].map(n=>`<i style="--n:${n}"></i>`).join('')}</div><p class="bstat" id="bstat">Hold the button and speak</p><p class="btxt" id="btxt"></p></div></div><div class="card rise" style="--i:2"><h3>Recent buzzes</h3><div class="vh" id="vh"></div></div></div>`;
drawTargets();drawVoices();loadVoices();
$('#tgt').onclick=e=>{const b=e.target.closest('button');if(!b)return;S.target=b.dataset.k;drawTargets();setBstat('Hold the button and speak')};
const p=$('#ptt');
p.onpointerdown=e=>{p.setPointerCapture(e.pointerId);S.holding=true;recStart()};
p.onpointerup=recStop;p.onpointercancel=recStop;
p.oncontextmenu=e=>e.preventDefault();
$('#vh').onclick=e=>{const b=e.target.closest('.play');if(b)playVoice(+b.dataset.v,b)};
}

const FCATS=[{id:'food',n:'Food',c:'#f59e0b'},{id:'transport',n:'Transport',c:'#2563eb'},{id:'shopping',n:'Shopping',c:'#ec4899'},{id:'bills',n:'Bills',c:'#ef4444'},{id:'fun',n:'Fun',c:'#8b5cf6'},{id:'trips',n:'Trips',c:'#14b8a6'},{id:'gifts',n:'Gifts',c:'#f97316'},{id:'other',n:'Other',c:'#6b7280'}];
const fcat=id=>FCATS.find(c=>c.id===id)||FCATS[7];
const fsplit=e=>{try{return JSON.parse(e.split||'[]')}catch(x){return[]}};
const fsum=(l,t)=>l.filter(x=>x.type===t).reduce((a,b)=>a+b.amount,0);
const pcompact=n=>'₱'+Math.round(n).toLocaleString('en-PH');
function balances(){
const net={};USERS.forEach(u=>net[u.id]=0);
S.fin.forEach(e=>{
const sp=fsplit(e);
if(e.type==='expense'&&sp.length){const part=[...new Set([...sp,e.user_id])],sh=e.amount/part.length;net[e.user_id]+=e.amount;part.forEach(q=>net[q]-=sh)}
else if(e.type==='settle'&&e.to_id){net[e.user_id]+=e.amount;net[e.to_id]-=e.amount}
});
const cr=Object.entries(net).filter(x=>x[1]>.005).sort((a,b)=>b[1]-a[1]).map(x=>({id:x[0],v:x[1]}));
const dt=Object.entries(net).filter(x=>x[1]<-.005).sort((a,b)=>a[1]-b[1]).map(x=>({id:x[0],v:-x[1]}));
const out=[];let i=0,j=0;
while(i<dt.length&&j<cr.length){const t=Math.min(dt[i].v,cr[j].v);out.push({from:dt[i].id,to:cr[j].id,v:t});dt[i].v-=t;cr[j].v-=t;if(dt[i].v<.005)i++;if(cr[j].v<.005)j++}
return out;
}
function barChart(series){
const W=520,H=170,pad=24,mx=Math.max(1,...series.flatMap(x=>[x.i,x.e])),bw=18,gap=(W-pad*2)/series.length;
return `<svg viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="Income and expenses by month">${series.map((x,k)=>{const cx=pad+k*gap+gap/2,hi=x.i/mx*(H-44),he=x.e/mx*(H-44);return `<g><rect class="bi" x="${cx-bw-1}" y="${H-24-hi}" width="${bw}" height="${Math.max(hi,x.i?2:0)}" rx="3"><title>Income ${peso(x.i)}</title></rect><rect class="be" x="${cx+1}" y="${H-24-he}" width="${bw}" height="${Math.max(he,x.e?2:0)}" rx="3"><title>Expenses ${peso(x.e)}</title></rect><text x="${cx}" y="${H-6}" text-anchor="middle">${x.l}</text></g>`}).join('')}</svg>`;
}
function donut(parts,total){
const R=52,C=2*Math.PI*R;let off=0;
const segs=parts.map(q=>{const len=q.v/total*C,g=`<circle r="${R}" cx="70" cy="70" fill="none" stroke="${q.c}" stroke-width="22" stroke-dasharray="${len} ${C-len}" stroke-dashoffset="${-off}" transform="rotate(-90 70 70)"/>`;off+=len;return g}).join('');
return `<svg viewBox="0 0 140 140" class="donut" role="img" aria-label="Spending by category">${total?segs:`<circle r="${R}" cx="70" cy="70" fill="none" stroke="var(--line)" stroke-width="22"/>`}<text x="70" y="68" text-anchor="middle" class="dn1">${pcompact(total)}</text><text x="70" y="84" text-anchor="middle" class="dn2">spent</text></svg>`;
}
async function finView(){
try{const r=await Promise.all([api('finance'),api('budget')]);S.fin=r[0];S.budget=r[1].amount}catch(e){}
if(S.view!=='finance')return;
drawFin(!S.finDrawn);S.finDrawn=true;
}
function drawFin(first){
const R=first?' rise':'',now=new Date(),cm=ymd(now).slice(0,7);
if(!S.finMonth)S.finMonth=cm;
const mo=S.finMonth,all=S.fin;
const months=[...new Set([cm,...all.map(x=>x.date.slice(0,7))])].sort().reverse();
let rows=all.filter(x=>mo==='all'||x.date.startsWith(mo));
if(S.finCat&&S.finCat!=='all')rows=rows.filter(x=>x.cat===S.finCat&&x.type!=='settle');
const q=(S.finQ||'').toLowerCase();
if(q)rows=rows.filter(x=>(x.details+' '+(x.note||'')+' '+byId(x.user_id).name).toLowerCase().includes(q));
const inc=fsum(rows,'income'),exp=fsum(rows,'expense');
const monthExp=fsum(all.filter(x=>x.date.startsWith(cm)),'expense'),bud=S.budget||0,left=bud-monthExp,pct=bud?Math.min(100,monthExp/bud*100):0;
const series=Array.from({length:6},(_,i)=>{const d=new Date(now.getFullYear(),now.getMonth()-5+i,1),k=ymd(d).slice(0,7),l=all.filter(x=>x.date.startsWith(k));return{l:d.toLocaleString([],{month:'short'}),i:fsum(l,'income'),e:fsum(l,'expense')}});
const bycat=FCATS.map(c=>({...c,v:rows.filter(x=>x.type==='expense'&&x.cat===c.id).reduce((a,b)=>a+b.amount,0)})).filter(c=>c.v>0).sort((a,b)=>b.v-a.v);
const tot=bycat.reduce((a,b)=>a+b.v,0);
const lb=USERS.map(u=>({u,v:rows.filter(x=>x.type==='expense'&&x.user_id===u.id).reduce((a,b)=>a+b.amount,0)})).sort((a,b)=>b.v-a.v);
const mx=Math.max(1,lb[0].v),bal=balances();
$('#view').innerHTML=pageHead('Funds','Financial report',`<div class="vctl"><button class="ghost" id="fcsv">${ico('dl')}Export CSV</button><button class="pri" id="fnew">${ico('plus')}New entry</button></div>`)+`<div class="fin"><div class="finbar${R}"><select id="fmo" aria-label="Month"><option value="all"${mo==='all'?' selected':''}>All time</option>${months.map(m=>`<option value="${m}"${m===mo?' selected':''}>${new Date(m+'-01T00:00').toLocaleString([],{month:'long',year:'numeric'})}</option>`).join('')}</select><select id="fct" aria-label="Category"><option value="all">All categories</option>${FCATS.map(c=>`<option value="${c.id}"${S.finCat===c.id?' selected':''}>${c.n}</option>`).join('')}</select><div class="sbox">${ico('search')}<input id="fq" placeholder="Search entries" value="${esc(S.finQ||'')}"></div></div><div class="stats4"><div class="card stat${R}"><small>Income</small><b class="inc" data-count="${inc}" data-fmt="peso">0</b></div><div class="card stat${R}" style="--i:1"><small>Expenses</small><b class="exp" data-count="${exp}" data-fmt="peso">0</b></div><div class="card stat${R}" style="--i:2"><small>Balance</small><b data-count="${inc-exp}" data-fmt="peso">0</b></div><div class="card stat${R}" style="--i:3"><small>Budget this month</small><b class="${bud&&left<0?'exp':''}">${bud?peso(left):'Not set'}</b><div class="bgt"><i style="width:${pct}%;background:${pct>90?'#dc2626':'var(--ac)'}"></i></div><small>${bud?peso(monthExp)+' of '+peso(bud)+' spent':'Set a shared budget below'}</small></div></div><div class="two"><div class="card${R}" style="--i:4"><h2>Last 6 months</h2><div class="legend"><span><i class="lg1"></i>Income</span><span><i class="lg2"></i>Expenses</span></div>${barChart(series)}</div><div class="card${R}" style="--i:5"><h2>Where the money went</h2><div class="dwrap">${donut(bycat,tot)}<div class="dleg">${bycat.length?bycat.map(c=>`<div><i style="background:${c.c}"></i>${c.n}<b>${peso(c.v)}</b></div>`).join(''):'<p class="mut">No expenses in this view.</p>'}</div></div></div></div><div class="two"><div class="card${R}" style="--i:6"><h2>Expense leaderboard</h2><div class="lb">${lb.map((t,i)=>`<div><span class="mut">${i+1}</span><b style="color:${nameColor(t.u.color)}">${esc(t.u.name)}${i===0&&t.v>0?'<br><span class="crown">Top spender</span>':''}</b><span class="bar"><i style="width:${t.v/mx*100}%;background:${t.u.color}"></i></span><span>${peso(t.v)}</span></div>`).join('')}</div></div><div class="stack"><div class="card${R}" style="--i:7"><h2>Settle up</h2><p class="mut">Based on expenses that were split between friends.</p><div class="setl">${bal.length?bal.map(x=>`<div>${av(byId(x.from),'sm')}<span><b>${esc(byId(x.from).name)}</b> owes <b>${esc(byId(x.to).name)}</b></span><em>${peso(x.v)}</em><button class="ghost" data-settle="${x.from}|${x.to}|${x.v.toFixed(2)}">Mark paid</button></div>`).join(''):'<p class="mut">Everyone is even.</p>'}</div></div><div class="card${R}" style="--i:8"><h2>Monthly budget</h2><div class="budrow"><input id="bud" type="number" min="0" step="50" value="${bud||''}" placeholder="Amount for the whole group"><button class="pri" id="budsave">Save</button></div></div></div></div><div class="card${R}" style="--i:9"><h2>Ledger</h2>${rows.length?`<div class="tbw"><table><tr><th>Date</th><th>Who</th><th>Details</th><th>Category</th><th class="r">Amount</th><th></th></tr>${rows.map(x=>{const c=fcat(x.cat),sp=fsplit(x.split),u=byId(x.user_id);return `<tr><td>${esc(x.date)}</td><td><span class="who2">${av(u,'sm')}${esc(u.name)}</span></td><td>${esc(x.details)}${x.type==='settle'?` to ${esc(byId(x.to_id).name)}`:''}${x.note?`<small class="mut">${esc(x.note)}</small>`:''}${sp.length?`<small class="mut">Split with ${sp.map(i=>esc(byId(i).name)).join(', ')}</small>`:''}</td><td>${x.type==='settle'?'<span class="pillc" style="--c:#6b7280">Payment</span>':x.type==='income'?'<span class="pillc" style="--c:#22c55e">Income</span>':`<span class="pillc" style="--c:${c.c}">${c.n}</span>`}</td><td class="r ${x.type==='income'?'inc':x.type==='settle'?'':'exp'}">${x.type==='income'?'+':x.type==='settle'?'':'-'}${peso(x.amount)}</td><td class="act"><button class="x" data-edit="${x.id}" aria-label="Edit">${ico('edit')}</button><button class="x" data-id="${x.id}" aria-label="Delete">${ico('x')}</button></td></tr>`}).join('')}</table></div>`:'<div class="empty">No entries here yet. Add one with New entry.</div>'}</div></div>`;
$$('[data-count]').forEach(countUp);
$('#fmo').onchange=e=>{S.finMonth=e.target.value;drawFin()};
$('#fct').onchange=e=>{S.finCat=e.target.value;drawFin()};
$('#fq').oninput=e=>{S.finQ=e.target.value;clearTimeout(S.fqT);S.fqT=setTimeout(()=>{drawFin();const i=$('#fq');if(i){i.focus();i.setSelectionRange(i.value.length,i.value.length)}},250)};
$('#fnew').onclick=()=>openFin();
$('#fcsv').onclick=()=>{
const csv=[['Date','Who','Type','Details','Category','Amount','To','Split','Note'],...rows.map(x=>[x.date,byId(x.user_id).name,x.type,x.details,x.cat,x.amount,x.to_id?byId(x.to_id).name:'',fsplit(x).map(i=>byId(i).name).join(' '),x.note||''])].map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n');
const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='galagram-finance.csv';a.click();
};
$('#budsave').onclick=async()=>{try{await api('budget',{body:{amount:$('#bud').value}});S.budget=+$('#bud').value||0;toast('Budget saved');drawFin()}catch(e){toast(e.message)}};
$$('[data-settle]').forEach(b=>b.onclick=async()=>{const [f,t,v]=b.dataset.settle.split('|');try{await api('finance',{body:{who:f,to:t,type:'settle',amount:v,details:'Payment',date:ymd(new Date())}});toast('Payment recorded');finView()}catch(e){toast(e.message)}});
$$('[data-edit]').forEach(b=>b.onclick=()=>openFin(+b.dataset.edit));
$$('.x[data-id]').forEach(b=>b.onclick=async()=>{if(!confirm('Delete this entry?'))return;try{await api('finance?id='+b.dataset.id,{method:'DELETE'});finView()}catch(e){toast(e.message)}});
}
function openFin(id){
const e=id?S.fin.find(x=>x.id===id):null;
if(id&&!e)return;
const v=e?{...e,split:fsplit(e)}:{type:'expense',user_id:ME.id,amount:'',date:ymd(new Date()),details:'',cat:'food',split:[],note:'',to_id:''};
let type=v.type,cat=v.cat;
const sp=new Set(v.split);
const m=modal(`<div class="card evm"><div class="evh"><h2>${e?'Edit entry':'New entry'}</h2><button class="iconbtn" id="fx" aria-label="Close">${ico('x')}</button></div><form id="ff"><div class="seg" id="ftp">${[['expense','Expense'],['income','Income'],['settle','Payment']].map(a=>`<button type="button" data-t="${a[0]}" class="${type===a[0]?'on':''}">${a[1]}</button>`).join('')}</div><div class="twocol"><label>Paid by<select id="fw">${USERS.map(u=>`<option value="${u.id}"${u.id===v.user_id?' selected':''}>${esc(u.name)}</option>`).join('')}</select></label><label>Amount<input id="fa" type="number" min="0.01" step="0.01" value="${v.amount}" required placeholder="0.00"></label></div><label id="fdl">Details<input id="fd" value="${esc(v.details)}" maxlength="200" placeholder="What was it for?"></label><div class="twocol"><label>Date<input id="fx2" type="date" value="${v.date}" required></label><label id="fol">Paid to<select id="fto">${USERS.map(u=>`<option value="${u.id}"${u.id===v.to_id?' selected':''}>${esc(u.name)}</option>`).join('')}</select></label></div><div class="fld" id="fcl"><small class="kick">Category</small><div class="catp" id="fcp">${FCATS.map(c=>`<button type="button" data-c="${c.id}" class="${cat===c.id?'on':''}" style="--c:${c.c}"><i></i>${c.n}</button>`).join('')}</div></div><div class="fld" id="fsl"><small class="kick">Split with (leave empty if it is only yours)</small><div class="mpick" id="fsp">${USERS.map(u=>`<button type="button" data-u="${u.id}" class="${sp.has(u.id)?'on':''}">${av(u,'sm')}<small>${esc(u.name)}</small></button>`).join('')}</div></div><label>Note<input id="fn" value="${esc(v.note||'')}" maxlength="200" placeholder="Optional"></label><div class="vctl left"><button class="pri">${e?'Save changes':'Add entry'}</button>${e?'<button type="button" class="danger" id="fdel">Delete</button>':''}<button type="button" class="ghost" id="fcx">Cancel</button></div></form></div>`);
const sync2=()=>{$('#fcl',m).hidden=type!=='expense';$('#fsl',m).hidden=type!=='expense';$('#fol',m).hidden=type!=='settle';$('#fdl',m).hidden=type==='settle';$$('#ftp button',m).forEach(b=>b.classList.toggle('on',b.dataset.t===type))};
sync2();
$('#fx',m).onclick=$('#fcx',m).onclick=()=>m.remove();
$('#ftp',m).onclick=x=>{const b=x.target.closest('button');if(b){type=b.dataset.t;sync2()}};
$('#fcp',m).onclick=x=>{const b=x.target.closest('button');if(!b)return;cat=b.dataset.c;$$('#fcp button',m).forEach(y=>y.classList.toggle('on',y===b))};
$('#fsp',m).onclick=x=>{const b=x.target.closest('button');if(!b)return;const i=b.dataset.u;sp.has(i)?sp.delete(i):sp.add(i);b.classList.toggle('on',sp.has(i))};
$('#ff',m).onsubmit=async x=>{
x.preventDefault();
try{
await api('finance',{body:{id:e?e.id:0,type,who:$('#fw',m).value,amount:$('#fa',m).value,date:$('#fx2',m).value,details:$('#fd',m).value,cat,split:type==='expense'?[...sp]:[],to:$('#fto',m).value,note:$('#fn',m).value}});
m.remove();toast(e?'Entry updated':'Entry added');finView();
}catch(err){toast(err.message)}
};
const dl=$('#fdel',m);
if(dl)dl.onclick=async()=>{if(!confirm('Delete this entry?'))return;try{await api('finance?id='+e.id,{method:'DELETE'});m.remove();finView()}catch(err){toast(err.message)}};
$('#fa',m).focus();
}

const CATS=[{id:'birthday',name:'Birthday',c:null},{id:'hangout',name:'Hangout',c:'#f59e0b'},{id:'movie',name:'Movie night',c:'#8b5cf6'},{id:'study',name:'Study',c:'#2563eb'},{id:'trip',name:'Trip',c:'#14b8a6'},{id:'gala',name:'Celebration',c:'#ec4899'},{id:'reminder',name:'Reminder',c:'#ef4444'},{id:'other',name:'Other',c:'#6b7280'}];
const catOf=id=>CATS.find(c=>c.id===id)||CATS[CATS.length-1];
const ymd=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const pdt=s=>new Date(s+'T00:00');
const evMembers=e=>{try{return JSON.parse(e.members||'[]')}catch(x){return[]}};
const tmin=t=>{const m=/^(\d{2}):(\d{2})$/.exec(t||'');return m?+m[1]*60+ +m[2]:null};
function t12(t){const m=tmin(t);if(m===null)return '';const h=Math.floor(m/60),mm=m%60;return ((h%12)||12)+':'+String(mm).padStart(2,'0')+' '+(h<12?'AM':'PM')}
function t12s(t){const m=tmin(t);if(m===null)return '';const h=Math.floor(m/60),mm=m%60;return ((h%12)||12)+(mm?':'+String(mm).padStart(2,'0'):'')+(h<12?'a':'p')}
function durLabel(a,b){const x=tmin(a),y=tmin(b);if(x===null||y===null||y<=x)return '';const d=y-x,h=Math.floor(d/60),m=d%60;return h?(m?h+'h '+m+'m':h+(h===1?' hour':' hours')):m+' min'}
function covers(e,d){
const s=pdt(e.date),n=e.edate?Math.round((pdt(e.edate)-s)/864e5):0;
if(d<s)return false;
const hit=b=>d>=b&&d<=new Date(b.getFullYear(),b.getMonth(),b.getDate()+n);
const r=e.rep||'none';
if(r==='none')return hit(s);
if(r==='weekly'){const k=Math.floor(Math.round((d-s)/864e5)/7);for(const o of[0,-1]){if(k+o>=0&&hit(new Date(s.getFullYear(),s.getMonth(),s.getDate()+(k+o)*7)))return true}return false}
if(r==='monthly'){for(const o of[0,-1]){const b=new Date(d.getFullYear(),d.getMonth()+o,s.getDate());if(b>=s&&hit(b))return true}return false}
if(r==='yearly'){for(const o of[0,-1]){const b=new Date(d.getFullYear()+o,s.getMonth(),s.getDate());if(b>=s&&hit(b))return true}return false}
return false;
}
function dayItems(d){
const out=[],hide=S.calHide||{};
S.events.forEach(e=>{if(!hide[e.cat]&&covers(e,d)){const ad=!!e.allday||!e.st;out.push({ev:e,title:e.title,color:catOf(e.cat).c,st:ad?'':e.st,en:ad?'':e.en,allday:ad})}});
if(!hide.birthday)USERS.forEach(u=>{const b=pdt(u.bday);if(b.getMonth()===d.getMonth()&&b.getDate()===d.getDate())out.push({bd:u,title:u.name+"'s birthday",color:u.color,allday:true,age:d.getFullYear()-b.getFullYear()})});
out.sort((a,b)=>(b.allday-a.allday)||((tmin(a.st)||0)-(tmin(b.st)||0)));
return out;
}
function chip(it){
if(it.bd)return `<button class="ev" style="--c:${it.color}" data-bd="${it.bd.id}">${esc(it.title)}</button>`;
return `<button class="ev" style="--c:${it.color}" data-ev="${it.ev.id}">${it.allday?'':`<small>${t12s(it.st)}</small>`}${esc(it.title)}</button>`;
}
function monthGrid(){
const d=S.month,y=d.getFullYear(),m=d.getMonth(),first=new Date(y,m,1),start=new Date(y,m,1-first.getDay());
const rows=Math.ceil((first.getDay()+new Date(y,m+1,0).getDate())/7),today=ymd(new Date());
let h=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(w=>`<div class="w">${w}</div>`).join('');
const cells=[];let mx=1;
for(let i=0;i<rows*7;i++){const c=new Date(start.getFullYear(),start.getMonth(),start.getDate()+i),its=dayItems(c);mx=Math.max(mx,its.length);cells.push({c,its})}
cells.forEach(({c,its})=>{
const k=ymd(c),o=c.getMonth()!==m;
const hs=S.heat&&its.length?` style="background:color-mix(in srgb,var(--ac) ${Math.round(its.length/mx*42)+8}%,var(--card))"`:'';
h+=`<div class="d${o?' o':''}${k===today?' t':''}${k===S.sel?' sel':''}" data-d="${k}"${hs}><span class="dn">${c.getDate()}</span><button class="dadd" data-add="${k}" aria-label="Add event">${ico('plus')}</button>${S.heat?(its.length?`<b class="hc">${its.length}</b>`:''):its.slice(0,3).map(chip).join('')+(its.length>3?`<em class="more">+${its.length-3} more</em>`:'')}</div>`;
});
return `<div class="cgrid">${h}</div>`;
}
function weekGrid(){
const s=pdt(S.sel),start=new Date(s.getFullYear(),s.getMonth(),s.getDate()-s.getDay()),today=ymd(new Date());
const days=[0,1,2,3,4,5,6].map(i=>new Date(start.getFullYear(),start.getMonth(),start.getDate()+i));
const head='<div class="wh"></div>'+days.map(c=>`<div class="wh${ymd(c)===today?' t':''}${ymd(c)===S.sel?' sel':''}" data-d="${ymd(c)}"><small>${c.toLocaleDateString([],{weekday:'short'})}</small><b>${c.getDate()}</b></div>`).join('');
const ad='<div class="wl">All day</div>'+days.map(c=>`<div class="wad" data-d="${ymd(c)}">${dayItems(c).filter(i=>i.allday).map(chip).join('')}</div>`).join('');
const hrs='<div class="wt">'+Array.from({length:18},(_,i)=>`<span>${t12s(String(i+6).padStart(2,'0')+':00')}</span>`).join('')+'</div>';
const cols=days.map(c=>{
const its=dayItems(c).filter(i=>!i.allday&&tmin(i.st)!==null).map(i=>{const a=tmin(i.st),e=tmin(i.en);return{...i,a,b:Math.max(a+30,e!==null&&e>a?e:a+60)}}).sort((x,y)=>x.a-y.a);
const lanes=[];
its.forEach(i=>{let l=lanes.findIndex(e=>e<=i.a);if(l<0){l=lanes.length;lanes.push(0)}lanes[l]=i.b;i.l=l});
const n=Math.max(1,lanes.length);
const bl=its.map(i=>{const t=(Math.max(i.a,360)-360)/60*44,hh=Math.max(22,(Math.min(i.b,1440)-Math.max(i.a,360))/60*44);return `<button class="wev" style="--c:${i.color};top:${t}px;height:${hh}px;left:${i.l*100/n}%;width:${100/n}%" data-ev="${i.ev.id}"><b>${esc(i.title)}</b><small>${t12s(i.st)}</small></button>`}).join('');
const nm=new Date(),nt=nm.getHours()*60+nm.getMinutes();
const now=ymd(c)===today&&nt>=360?`<i class="wnow" style="top:${(nt-360)/60*44}px"></i>`:'';
return `<div class="wc" data-wd="${ymd(c)}">${bl}${now}</div>`;
}).join('');
return `<div class="wk"><div class="whead">${head}${ad}</div><div class="wbody">${hrs}${cols}</div></div>`;
}
function miniCal(){
const d=S.month,y=d.getFullYear(),m=d.getMonth(),first=new Date(y,m,1),start=new Date(y,m,1-first.getDay());
const rows=Math.ceil((first.getDay()+new Date(y,m+1,0).getDate())/7),today=ymd(new Date());
let h=['S','M','T','W','T','F','S'].map(x=>`<b>${x}</b>`).join('');
for(let i=0;i<rows*7;i++){const c=new Date(start.getFullYear(),start.getMonth(),start.getDate()+i),k=ymd(c);h+=`<button data-d="${k}" class="${c.getMonth()!==m?'o':''}${k===today?' t':''}${k===S.sel?' sel':''}${dayItems(c).length?' has':''}">${c.getDate()}</button>`}
return `<div class="mhead"><b>${d.toLocaleString([],{month:'long',year:'numeric'})}</b><span><button class="mb" data-mm="-1" aria-label="Previous month">${ico('chev')}</button><button class="mb" data-mm="1" aria-label="Next month">${ico('chev')}</button></span></div><div class="mcal">${h}</div>`;
}
function agendaHtml(R){
const d=pdt(S.sel),its=dayItems(d);
const cards=its.map(i=>{
if(i.bd){const u=i.bd;return `<article class="ag" style="--c:${u.color}" data-bd="${u.id}"><div class="bar2"></div><div class="agb"><span class="tagc">Birthday</span><h3>${esc(u.name)}'s birthday</h3><div class="agt">${av(u,'sm')}<span>Turns ${i.age}</span></div></div></article>`}
const e=i.ev,c=catOf(e.cat),mem=evMembers(e).map(byId);
const when=i.allday?(e.edate&&e.edate!==e.date?pdt(e.date).toLocaleDateString([],{month:'short',day:'numeric'})+' to '+pdt(e.edate).toLocaleDateString([],{month:'short',day:'numeric'}):'All day'):t12(e.st)+(e.en?' to '+t12(e.en):'');
const dl=i.allday?'':durLabel(e.st,e.en);
const nm=mem.length>2?mem.slice(0,2).map(u=>esc(u.name)).join(', ')+' +'+(mem.length-2)+' more':mem.map(u=>esc(u.name)).join(' and ');
return `<article class="ag" style="--c:${c.c}" data-ev="${e.id}"><div class="bar2"></div><div class="agb"><span class="tagc">${c.name}${e.rep&&e.rep!=='none'?' · repeats '+e.rep:''}</span><h3>${esc(e.title)}</h3>${e.note?`<p class="mut">${esc(e.note)}</p>`:''}<div class="agt">${ico('clock')}<span>${when}</span>${dl?`<small>${dl}</small>`:''}</div>${mem.length?`<div class="agm"><span class="stackav">${mem.slice(0,4).map(u=>av(u,'sm')).join('')}</span><small>${nm}</small></div>`:''}<small class="mut">Added by ${esc(byId(e.user_id).name)}</small></div></article>`;
}).join('');
return `<div class="card${R}"><div class="agh"><div><h2>Scheduled</h2><small class="mut">${d.toLocaleDateString([],{weekday:'long',month:'long',day:'numeric',year:'numeric'})}</small></div><span class="vctl"><button class="iconbtn" data-sd="-1" aria-label="Previous day">${ico('chev')}</button><button class="iconbtn" data-sd="1" aria-label="Next day">${ico('chev')}</button></span></div><button class="pri wide" data-add="${S.sel}">${ico('plus')}Add event</button><div class="aglist">${cards||'<div class="empty">Nothing scheduled. Enjoy the free day.</div>'}</div></div>`;
}
async function calView(quiet){
let raw;
try{raw=await api('events')}catch(e){raw=S.events}
if(S.view!=='calendar')return;
const js=JSON.stringify(raw);
if(quiet&&js===S.eventsRaw)return;
S.eventsRaw=js;S.events=raw;
drawCal(!quiet&&!S.calDrawn);
S.calDrawn=true;
}
function drawCal(first){
if(!S.calHide)S.calHide=ls.get('gg_calhide',{});
if(!S.sel)S.sel=ymd(new Date());
const R=first?' rise':'',d=S.month,y=d.getFullYear(),m=d.getMonth(),sd=pdt(S.sel);
const wk=S.calView==='week';
const ws=new Date(sd.getFullYear(),sd.getMonth(),sd.getDate()-sd.getDay()),we=new Date(ws.getFullYear(),ws.getMonth(),ws.getDate()+6);
const label=wk?ws.toLocaleDateString([],{month:'short',day:'numeric'})+' to '+we.toLocaleDateString([],{month:'short',day:'numeric',year:'numeric'}):'';
const upb=nextBirthdays().slice(0,3);
const keep=$('.calmain .wk');const sc=keep?keep.scrollTop:0;
$('#view').innerHTML=pageHead('Content calendar','Birthdays & events',`<button class="pri" data-add="${S.sel}">${ico('plus')}Add event</button>`)+`<div class="cal2"><div class="stack cl"><div class="card${R}">${miniCal()}</div><div class="card${R}" style="--i:1"><h3>Categories</h3><div class="cfl">${CATS.map(c=>`<div class="cf" role="checkbox" tabindex="0" aria-checked="${!S.calHide[c.id]}" data-cat="${c.id}"><i class="${S.calHide[c.id]?'':'on'}" style="--c:${c.c||'var(--ac)'}"></i>${c.name}</div>`).join('')}</div></div><div class="card${R}" style="--i:2"><h3>Next birthdays</h3><div class="up">${upb.map(x=>`<div>${av(x.u,'sm')}<div class="grow"><b>${esc(x.u.name)}</b><small>Turns ${x.age}</small></div><span class="mut">${x.days===0?'Today':x.days+'d'}</span></div>`).join('')}</div></div></div><div class="card calmain${R}" style="--i:1"><div class="calbar"><button class="iconbtn" data-nav="-1" aria-label="Previous">${ico('chev')}</button><button class="iconbtn" data-nav="1" aria-label="Next">${ico('chev')}</button>${wk?`<h2>${label}</h2>`:`<select id="cm" aria-label="Month">${Array.from({length:12},(_,i)=>`<option value="${i}"${i===m?' selected':''}>${new Date(2000,i,1).toLocaleString([],{month:'long'})}</option>`).join('')}</select><select id="cy" aria-label="Year">${Array.from({length:9},(_,i)=>y-4+i).map(v=>`<option${v===y?' selected':''}>${v}</option>`).join('')}</select>`}<span class="grow"></span><button class="ghost" data-today="1">Today</button><button class="ghost${S.heat?' on':''}" data-heat="1">Heat map</button><div class="seg two"><button data-cv="month" class="${wk?'':'on'}">Month</button><button data-cv="week" class="${wk?'on':''}">Week</button></div></div>${wk?weekGrid():monthGrid()}</div><div class="stack cr" id="cag">${agendaHtml(R)}</div></div>`;
const nk=$('.calmain .wk');if(nk){nk.scrollTop=keep?sc:(8-6)*44}
const root=$('.cal2');
root.onclick=e=>{
const t=e.target;let x;
if(x=t.closest('[data-add]')){openEvent(null,x.dataset.add);return}
if(x=t.closest('[data-ev]')){openEvent(+x.dataset.ev);return}
if(x=t.closest('[data-bd]')){showProfile(x.dataset.bd);return}
if(x=t.closest('[data-cat]')){S.calHide[x.dataset.cat]=!S.calHide[x.dataset.cat];ls.set('gg_calhide',S.calHide);drawCal();return}
if(x=t.closest('[data-mm]')){S.month=new Date(y,m+ +x.dataset.mm,1);drawCal();return}
if(x=t.closest('[data-nav]')){
const n=+x.dataset.nav;
if(wk){const nd=new Date(sd.getFullYear(),sd.getMonth(),sd.getDate()+7*n);S.sel=ymd(nd);S.month=new Date(nd.getFullYear(),nd.getMonth(),1)}
else S.month=new Date(y,m+n,1);
drawCal();return;
}
if(x=t.closest('[data-sd]')){const nd=new Date(sd.getFullYear(),sd.getMonth(),sd.getDate()+ +x.dataset.sd);S.sel=ymd(nd);S.month=new Date(nd.getFullYear(),nd.getMonth(),1);drawCal();return}
if(t.closest('[data-today]')){const n=new Date();S.sel=ymd(n);S.month=new Date(n.getFullYear(),n.getMonth(),1);drawCal();return}
if(t.closest('[data-heat]')){S.heat=!S.heat;drawCal();return}
if(x=t.closest('[data-cv]')){S.calView=x.dataset.cv;drawCal();return}
if(x=t.closest('.wc')){const r=x.getBoundingClientRect(),h=Math.min(23,6+Math.floor((e.clientY-r.top)/44)),p=n=>String(n).padStart(2,'0');openEvent(null,x.dataset.wd,p(h)+':00',p(Math.min(23,h+1))+':00');return}
if(x=t.closest('[data-d]')){selDay(x.dataset.d);return}
};
const cm=$('#cm'),cy=$('#cy');
if(cm)cm.onchange=()=>{S.month=new Date(+$('#cy').value,+cm.value,1);drawCal()};
if(cy)cy.onchange=()=>{S.month=new Date(+cy.value,+$('#cm').value,1);drawCal()};
root.ondblclick=e=>{const c=e.target.closest('.d');if(c&&!e.target.closest('[data-ev],[data-bd]'))openEvent(null,c.dataset.d)};
}
function selDay(k){
S.sel=k;const d=pdt(k);
if(d.getMonth()!==S.month.getMonth()||d.getFullYear()!==S.month.getFullYear())S.month=new Date(d.getFullYear(),d.getMonth(),1);
drawCal();
}
function openEvent(id,date,st,en){
const e=id?S.events.find(x=>x.id===id):null;
if(id&&!e)return;
const v=e?{...e,members:evMembers(e),allday:!!e.allday||!e.st}:{title:'',date:date||S.sel,edate:'',st:st||'',en:en||'',allday:!st,cat:'hangout',note:'',members:[],rep:'none'};
const m=modal(`<div class="card evm"><div class="evh"><h2>${e?'Edit event':'New event'}</h2><button class="iconbtn" id="evx" aria-label="Close">${ico('x')}</button></div><form id="evf"><label>Title<input id="et" value="${esc(v.title)}" maxlength="100" required placeholder="What's happening?"></label><div class="fld"><small class="kick">Type</small><div class="catp" id="catp">${CATS.filter(c=>c.id!=='birthday').map(c=>`<button type="button" data-c="${c.id}" class="${v.cat===c.id?'on':''}" style="--c:${c.c}"><i></i>${c.name}</button>`).join('')}</div></div><div class="twocol"><label>Date<input type="date" id="ed" value="${v.date}" required></label><label>Until (optional)<input type="date" id="ee" value="${v.edate||''}"></label></div><div class="row"><b>All day</b><button type="button" class="sw${v.allday?' on':''}" id="ead" role="switch" aria-label="All day"></button></div><div class="twocol" id="etm"${v.allday?' hidden':''}><label>Starts<input type="time" id="es" value="${v.st||''}"></label><label>Ends<input type="time" id="en" value="${v.en||''}"></label></div><label>Repeat<select id="er">${[['none','Does not repeat'],['weekly','Every week'],['monthly','Every month'],['yearly','Every year']].map(r=>`<option value="${r[0]}"${v.rep===r[0]?' selected':''}>${r[1]}</option>`).join('')}</select></label><label>Note<textarea id="eno" maxlength="300" placeholder="Add a note">${esc(v.note||'')}</textarea></label><div class="fld"><small class="kick">Members</small><div class="mpick" id="mpk">${USERS.map(u=>`<button type="button" data-u="${u.id}" class="${v.members.includes(u.id)?'on':''}">${av(u,'sm')}<small>${esc(u.name)}</small></button>`).join('')}</div></div>${e?`<small class="mut">Added by ${esc(byId(e.user_id).name)}</small>`:''}<div class="vctl left"><button class="pri">${e?'Save changes':'Add event'}</button>${e?`<button type="button" class="danger" id="evd">Delete</button>`:''}<button type="button" class="ghost" id="evc">Cancel</button></div></form></div>`);
let cat=v.cat,ad=v.allday;
const mem=new Set(v.members);
$('#evx',m).onclick=$('#evc',m).onclick=()=>m.remove();
$('#catp',m).onclick=x=>{const b=x.target.closest('button');if(!b)return;cat=b.dataset.c;$$('#catp button',m).forEach(y=>y.classList.toggle('on',y===b))};
$('#mpk',m).onclick=x=>{const b=x.target.closest('button');if(!b)return;const id=b.dataset.u;mem.has(id)?mem.delete(id):mem.add(id);b.classList.toggle('on',mem.has(id))};
$('#ead',m).onclick=()=>{ad=!ad;$('#ead',m).classList.toggle('on',ad);$('#etm',m).hidden=ad};
$('#evf',m).onsubmit=async x=>{
x.preventDefault();
const date=$('#ed',m).value,edate=$('#ee',m).value,st=ad?'':$('#es',m).value,en=ad?'':$('#en',m).value;
if(edate&&edate<date)return toast('The end date is before the start date');
if(st&&en&&en<=st)return toast('The end time must be after the start time');
try{
await api('events',{body:{id:e?e.id:0,title:$('#et',m).value,date,edate,st,en,allday:ad||!st,cat,note:$('#eno',m).value,members:[...mem],rep:$('#er',m).value}});
m.remove();toast(e?'Event updated':'Event added');
S.eventsRaw='';await calView();
}catch(err){toast(err.message)}
};
const dl=$('#evd',m);
if(dl)dl.onclick=async()=>{if(!confirm('Delete this event?'))return;try{await api('events?id='+e.id,{method:'DELETE'});m.remove();toast('Event deleted');S.eventsRaw='';await calView()}catch(err){toast(err.message)}};
$('#et',m).focus();
}

const hav=(a,b,c,d)=>{const R=6371,r=x=>x*Math.PI/180,dl=r(c-a),dn=r(d-b),q=Math.sin(dl/2)**2+Math.cos(r(a))*Math.cos(r(c))*Math.sin(dn/2)**2;return 2*R*Math.asin(Math.sqrt(q))};
const ago=t=>{const m=Math.round((Date.now()-t)/60000);return m<1?'just now':m<60?m+' min ago':m<1440?Math.round(m/60)+' h ago':Math.round(m/1440)+' d ago'};
const clock12=t=>new Date(t).toLocaleTimeString([],{hour:'numeric',minute:'2-digit',hour12:!ls.get('gg_24h',false)});
const MODES={jeep:'Jeepney',tricycle:'Tricycle',moto:'Motorcycle taxi',taxi:'Taxi',grab:'Ride-hailing car',walk:'Walking',other:'Other'};
function geoStart(){
if(S.geoId!=null||!navigator.geolocation)return;
S.geoId=navigator.geolocation.watchPosition(p=>{
S.pos={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy,ts:Date.now()};
const i=S.locs.findIndex(l=>l.user_id===ME.id),rec={user_id:ME.id,lat:S.pos.lat,lng:S.pos.lng,acc:S.pos.acc,ts:Date.now(),share:1};
if(i>=0)S.locs[i]=rec;else S.locs.push(rec);
if(Date.now()-(S.geoSent||0)>15000){S.geoSent=Date.now();api('loc',{body:{lat:S.pos.lat,lng:S.pos.lng,acc:S.pos.acc}}).catch(()=>{})}
if(S.view==='map'&&S.map)drawMarkers();
},err=>{if(err.code===1){ls.set('gg_share',false);geoStop(true);toast('Location permission was denied');if(S.view==='map')mapView()}},{enableHighAccuracy:true,maximumAge:10000,timeout:25000});
}
function geoStop(off){
if(S.geoId!=null&&navigator.geolocation){navigator.geolocation.clearWatch(S.geoId)}
S.geoId=null;
if(off)api('loc',{body:{share:false}}).catch(()=>{});
}
function setShare(on){
ls.set('gg_share',on);
if(on){if(!navigator.geolocation){toast('This browser cannot share location');ls.set('gg_share',false);return}geoStart();toast('Sharing your live location. Keep GalaGram open.')}
else{geoStop(true);const i=S.locs.findIndex(l=>l.user_id===ME.id);if(i>=0)S.locs[i].share=0}
}
async function osrm(a,b){
try{
const r=await fetch(`https://router.project-osrm.org/route/v1/driving/${a.lng},${a.lat};${b.lng},${b.lat}?overview=full&geometries=geojson`);
const j=await r.json(),x=j.routes&&j.routes[0];
if(!x)throw new Error('none');
return{km:x.distance/1000,min:x.duration/60,geo:x.geometry,approx:false};
}catch(e){
const km=hav(a.lat,a.lng,b.lat,b.lng)*1.35;
return{km,min:km/25*60,geo:null,approx:true};
}
}
function fares(km,min,pax,round){
const x=round?2:1;
const M=[
{k:'jeep',n:'Jeepney',per:true,f:14+Math.max(0,km-4)*2,t:min*1.35+8,note:'Fixed route. Each person pays their own fare.'},
{k:'tricycle',n:'Tricycle',cap:3,f:30+Math.max(0,km-1)*12,t:min*1.7+3,note:'Special trip, usually negotiated. Seats about 3.'},
{k:'moto',n:'Motorcycle taxi',per:true,f:Math.max(60,50+Math.max(0,km-2)*12),t:min*.8+4,note:'Each person rides their own.'},
{k:'taxi',n:'Taxi',cap:4,f:45+13.5*km+2*min,t:min+3,note:'Metered: 45 flag-down, 13.50 per km, 2 per minute.'},
{k:'grab',n:'Ride-hailing car',cap:4,f:Math.max(80,50+14*km+2.5*min),t:min+6,note:'Estimate only. Surge and fees can raise it.'}
];
if(km<2)M.unshift({k:'walk',n:'Walking',per:true,f:0,t:km/4.5*60,note:'Free and good for you.'});
return M.map(m=>{const veh=m.per?pax:Math.ceil(pax/m.cap),total=m.f*veh*x;return{...m,veh,total,pp:total/pax,time:Math.round(m.t)}});
}
async function searchPlace(q){
const r=await fetch('https://nominatim.openstreetmap.org/search?format=jsonv2&limit=6&countrycodes=ph&q='+encodeURIComponent(q));
return (await r.json()).map(x=>({name:x.display_name.split(',').slice(0,3).join(', '),lat:+x.lat,lng:+x.lon}));
}
function accent(){return getComputedStyle(document.documentElement).getPropertyValue('--ac').trim()||'#2563eb'}
function drawRoute(geo){
if(!S.map)return;
if(S.routeL){S.map.removeLayer(S.routeL);S.routeL=null}
if(geo){S.routeL=L.geoJSON(geo,{style:{color:accent(),weight:6,opacity:.85}}).addTo(S.map);S.map.fitBounds(S.routeL.getBounds(),{padding:[40,40]})}
}
function drawMarkers(){
if(!S.map)return;
const seen=new Set();
S.locs.forEach(l=>{
const u=byId(l.user_id),mine=u.id===ME.id,live=!!l.share&&Date.now()-l.ts<10*60000;
seen.add(u.id);
const icon=L.divIcon({className:'pmw',html:`<div class="pmk${live?' live':''}" style="--c:${u.color}"><span class="pmi">${av(u)}</span><b>${esc(mine?'You':u.name)}</b></div>`,iconSize:[64,66],iconAnchor:[32,58]});
if(S.mk[u.id])S.mk[u.id].setLatLng([l.lat,l.lng]).setIcon(icon);
else S.mk[u.id]=L.marker([l.lat,l.lng],{icon}).addTo(S.map).on('click',()=>focusPerson(u.id));
});
Object.keys(S.mk).forEach(id=>{if(!seen.has(id)){S.map.removeLayer(S.mk[id]);delete S.mk[id]}});
(S.tl||[]).forEach(x=>S.map.removeLayer(x));S.tl=[];
S.trips.forEach(t=>{
const u=byId(t.user_id),pin=L.marker([t.lat,t.lng],{icon:L.divIcon({className:'pmw',html:`<div class="dpin" style="--c:${u.color}">${ico('map')}</div>`,iconSize:[34,34],iconAnchor:[17,30]})}).addTo(S.map);
S.tl.push(pin);
const l=S.locs.find(x=>x.user_id===t.user_id);
if(l)S.tl.push(L.polyline([[l.lat,l.lng],[t.lat,t.lng]],{color:u.color,weight:3,dashArray:'6 8',opacity:.8}).addTo(S.map));
});
}
function focusPerson(id){
const l=S.locs.find(x=>x.user_id===id);
if(l&&S.map)S.map.flyTo([l.lat,l.lng],16);
}
function drawPeople(){
const el=$('#ppl');if(!el)return;
const me=S.locs.find(l=>l.user_id===ME.id);
el.innerHTML=USERS.map(u=>{
const l=S.locs.find(x=>x.user_id===u.id);
const live=l&&l.share&&Date.now()-l.ts<10*60000;
const st=!l?'No location yet':live?'Sharing live · '+ago(l.ts):(l.share?'Quiet · ':'Location off · last seen ')+ago(l.ts);
const dist=l&&me&&u.id!==ME.id?hav(me.lat,me.lng,l.lat,l.lng):null;
return `<div class="prow${live?' live':''}">${av(u,'sm')}<div class="grow"><b>${esc(u.id===ME.id?'You':u.name)}</b><small>${st}${dist!==null?' · '+(dist<1?Math.round(dist*1000)+' m':dist.toFixed(1)+' km')+' away':''}</small></div>${l?`<button class="x" data-loc="${u.id}" aria-label="Locate" title="Show on map">${ico('locate')}</button>`:''}${l&&u.id!==ME.id?`<button class="x" data-eta="${u.id}" aria-label="ETA to me" title="ETA to me">${ico('nav')}</button>`:''}</div>`;
}).join('');
}
function drawTrips(){
const el=$('#trp');if(!el)return;
const mine=S.trips.find(t=>t.user_id===ME.id);
el.innerHTML=S.trips.length?S.trips.map(t=>{
const u=byId(t.user_id),mins=Math.round((t.eta-Date.now())/60000);
return `<div class="trow">${av(u,'sm')}<div class="grow"><b>${esc(u.id===ME.id?'You':u.name)}</b> to ${esc(t.dest)}<small>${MODES[t.mode]||'Trip'} · ETA ${clock12(t.eta)} · ${mins>0?'in '+mins+' min':'arriving now'}${t.fare?' · '+peso(t.fare):''}</small></div>${t.user_id===ME.id?`<button class="ghost" data-arr="1">I am here</button><button class="x" data-tc="1" aria-label="Cancel trip">${ico('x')}</button>`:''}</div>`;
}).join(''):'<p class="mut">Nobody is on the way right now.</p>';
S.myTrip=mine||null;
}
async function loadMapData(){
try{
const r=await Promise.all([api('locs'),api('trips')]);
const keep=S.locs.find(l=>l.user_id===ME.id&&ls.get('gg_share',false));
S.locs=r[0];S.trips=r[1];
if(keep&&S.pos){const i=S.locs.findIndex(l=>l.user_id===ME.id);const rec={user_id:ME.id,lat:S.pos.lat,lng:S.pos.lng,acc:S.pos.acc,ts:Date.now(),share:1};if(i>=0)S.locs[i]=rec;else S.locs.push(rec)}
}catch(e){return}
if(S.view!=='map'||!S.map)return;
drawMarkers();drawPeople();drawTrips();
const mt=S.myTrip;
if(mt&&S.pos){
const d=hav(S.pos.lat,S.pos.lng,mt.lat,mt.lng);
if(d<.15){await api('trip?arrived=1',{method:'DELETE'}).catch(()=>{});toast('You arrived. Friends were told.');loadMapData();return}
if(Date.now()-(S.tripUpd||0)>60000){
S.tripUpd=Date.now();
const r=await osrm(S.pos,{lat:mt.lat,lng:mt.lng}),eta=Date.now()+r.min*60000*(MODES[mt.mode]&&mt.mode!=='taxi'&&mt.mode!=='grab'?1.2:1);
api('trip',{body:{dest:mt.dest,lat:mt.lat,lng:mt.lng,slat:mt.slat,slng:mt.slng,mode:mt.mode,fare:mt.fare,eta,label:clock12(eta)}}).catch(()=>{});
}
}
}
async function originPos(){
if($('#orig')&&$('#orig').value==='center'&&S.map){const c=S.map.getCenter();return{lat:c.lat,lng:c.lng}}
if(S.pos&&Date.now()-S.pos.ts<120000)return S.pos;
if(!navigator.geolocation)return null;
return new Promise(res=>navigator.geolocation.getCurrentPosition(p=>{S.pos={lat:p.coords.latitude,lng:p.coords.longitude,acc:p.coords.accuracy,ts:Date.now()};res(S.pos)},()=>res(null),{enableHighAccuracy:true,timeout:12000}));
}
function renderPlan(){
const el=$('#plan');if(!el||!S.plan)return;
const P=S.plan,fl=fares(P.km,P.min,S.pax,S.round);
const cheap=Math.min(...fl.map(x=>x.total)),fast=Math.min(...fl.map(x=>x.time));
const gm=`https://www.google.com/maps/dir/?api=1&origin=${P.o.lat},${P.o.lng}&destination=${P.d.lat},${P.d.lng}&travelmode=driving`;
el.innerHTML=`<div class="pl1"><b>${esc(P.d.name)}</b><small>${P.km.toFixed(1)} km${P.approx?' (straight-line estimate)':''} · about ${Math.round(P.min)} min by car · ${S.pax} ${S.pax===1?'person':'people'}${S.round?' · round trip':''}</small></div><div class="fares">${fl.map(x=>`<div class="fare"><div class="grow"><b>${x.n}</b>${x.total===cheap?'<span class="tg">Cheapest</span>':''}${x.time===fast?'<span class="tg g">Fastest</span>':''}<small>${x.note}</small><small>About ${x.time} min${x.veh>1?' · '+x.veh+(x.per?' rides':' vehicles'):''}</small></div><div class="fp"><b>${peso(x.total)}</b><small>${peso(x.pp)} each</small></div><button class="ghost" data-share="${x.k}" title="Tell friends you are on the way">${ico('share')}</button></div>`).join('')}</div><p class="mut">Fare figures are estimates for planning, not quotes. Real fares depend on traffic, time of day and operator.</p><a class="ghost" href="${gm}" target="_blank" rel="noopener noreferrer">${ico('nav')}Open directions in Google Maps</a>`;
}
async function planTrip(){
if(!S.dest){toast('Pick a destination first');return}
const b=$('#goplan');b.disabled=true;b.textContent='Working...';
try{
const o=await originPos();
if(!o){toast('Turn on location or choose map center as the start');return}
const r=await osrm(o,S.dest);
S.plan={o,d:S.dest,...r};
if(r.geo)drawRoute(r.geo);
else if(S.map)S.map.fitBounds([[o.lat,o.lng],[S.dest.lat,S.dest.lng]],{padding:[50,50]});
renderPlan();
}finally{b.disabled=false;b.innerHTML=`${ico('nav')}Get route and fare`}
}
async function shareTrip(mode){
const P=S.plan;if(!P)return;
const f=fares(P.km,P.min,S.pax,S.round).find(x=>x.k===mode),eta=Date.now()+f.time*60000;
try{
await api('trip',{body:{dest:P.d.name,lat:P.d.lat,lng:P.d.lng,slat:P.o.lat,slng:P.o.lng,mode,fare:Math.round(f.total),eta,label:clock12(eta)}});
toast('Trip shared. Friends can see your ETA.');
S.tripUpd=Date.now();loadMapData();
}catch(e){toast(e.message)}
}
async function etaTo(id){
const l=S.locs.find(x=>x.user_id===id);
const meL=S.pos||S.locs.find(x=>x.user_id===ME.id)||(S.map?{lat:S.map.getCenter().lat,lng:S.map.getCenter().lng}:null);
if(!l||!meL)return;
const out=$('#etaout');out.textContent='Working out the route...';
const r=await osrm(l,meL),u=byId(id),live=l.share&&Date.now()-l.ts<10*60000;
out.innerHTML=`<b>${esc(u.name)}</b> is about <b>${Math.max(1,Math.round(r.min))} min</b> (${r.km.toFixed(1)} km) from ${S.pos?'you':'the map center'}.${live?'':` <em>Their location is off, so this is from their last known spot ${ago(l.ts)}.</em>`}`;
drawRoute(r.geo);
}
function mapView(){
const sharing=ls.get('gg_share',false);
S.pax=ls.get('gg_pax',1);S.round=false;S.dest=null;S.plan=null;
$('#view').innerHTML=pageHead('Where to','Map and trips')+`<div class="mapx"><aside class="mapp"><div class="card rise"><div class="row"><div><b>Share my live location</b><p class="mut" id="shn">${sharing?'On. Friends can see where you are while GalaGram is open.':'Off. Friends cannot see you.'}</p></div><button class="sw${sharing?' on':''}" id="shw" role="switch" aria-checked="${sharing}" aria-label="Share my live location"></button></div></div><div class="card rise" style="--i:1"><h3>People</h3><div class="prows" id="ppl"></div><p class="etao" id="etaout"></p></div><div class="card rise" style="--i:2"><h3>Plan a trip and fare</h3><div class="dsel"><label>Where to<input id="dq" placeholder="SM Masinag, Robinsons Antipolo..." autocomplete="off"></label><div class="sug" id="sug" hidden></div></div><div class="twocol"><label>Start from<select id="orig"><option value="me">My location</option><option value="center">Map center</option></select></label><label>People going<div class="step"><button type="button" id="pxm" aria-label="Fewer people">-</button><b id="pxn">${S.pax}</b><button type="button" id="pxp" aria-label="More people">+</button></div></label></div><div class="row"><b>Round trip</b><button class="sw" id="rnd" role="switch" aria-checked="false" aria-label="Round trip"></button></div><button class="pri wide" id="goplan">${ico('nav')}Get route and fare</button><div id="plan"></div></div><div class="card rise" style="--i:3"><h3>On the way</h3><div class="prows" id="trp"></div></div></aside><div class="mapw rise" style="--i:1"><div id="lmap"></div></div></div>`;
const c=S.pos?[S.pos.lat,S.pos.lng]:(S.mapC||[14.5862,121.1761]);
S.map=L.map('lmap').setView(c,13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(S.map);
S.mk={};S.tl=[];S.routeL=null;
setTimeout(()=>S.map&&S.map.invalidateSize(),250);
S.map.on('moveend',()=>{if(S.map)S.mapC=[S.map.getCenter().lat,S.map.getCenter().lng]});
drawMarkers();drawPeople();drawTrips();
loadMapData();
clearInterval(S.mapT);S.mapT=setInterval(()=>{if(S.view==='map')loadMapData()},10000);
$('#shw').onclick=()=>{const on=!ls.get('gg_share',false);setShare(on);$('#shw').classList.toggle('on',on);$('#shn').textContent=on?'On. Friends can see where you are while GalaGram is open.':'Off. Friends cannot see you.';setTimeout(loadMapData,1500)};
$('#ppl').onclick=e=>{const l=e.target.closest('[data-loc]'),t=e.target.closest('[data-eta]');if(l)focusPerson(l.dataset.loc);else if(t)etaTo(t.dataset.eta)};
$('#trp').onclick=async e=>{
if(e.target.closest('[data-arr]')){await api('trip?arrived=1',{method:'DELETE'}).catch(()=>{});toast('Friends were told you arrived');loadMapData()}
else if(e.target.closest('[data-tc]')){await api('trip',{method:'DELETE'}).catch(()=>{});toast('Trip cancelled');loadMapData()}
};
let dt=null;
$('#dq').oninput=e=>{
clearTimeout(dt);const q=e.target.value.trim(),sg=$('#sug');
if(q.length<3){sg.hidden=true;return}
dt=setTimeout(async()=>{
try{
const r=await searchPlace(q);
sg.innerHTML=r.length?r.map((x,i)=>`<button type="button" data-i="${i}">${esc(x.name)}</button>`).join(''):'<span class="mut">No places found</span>';
sg.hidden=false;sg._r=r;
}catch(err){sg.hidden=true}
},450);
};
$('#sug').onclick=e=>{
const b=e.target.closest('[data-i]');if(!b)return;
const x=$('#sug')._r[+b.dataset.i];
S.dest=x;$('#dq').value=x.name;$('#sug').hidden=true;
if(S.dmk)S.map.removeLayer(S.dmk);
S.dmk=L.marker([x.lat,x.lng],{icon:L.divIcon({className:'pmw',html:`<div class="dpin" style="--c:${accent()}">${ico('map')}</div>`,iconSize:[34,34],iconAnchor:[17,30]})}).addTo(S.map);
S.map.flyTo([x.lat,x.lng],15);
};
const px=d=>{S.pax=Math.max(1,Math.min(20,S.pax+d));ls.set('gg_pax',S.pax);$('#pxn').textContent=S.pax;if(S.plan)renderPlan()};
$('#pxm').onclick=()=>px(-1);$('#pxp').onclick=()=>px(1);
$('#rnd').onclick=()=>{S.round=!S.round;$('#rnd').classList.toggle('on',S.round);if(S.plan)renderPlan()};
$('#goplan').onclick=planTrip;
$('#plan').onclick=e=>{const b=e.target.closest('[data-share]');if(b)shareTrip(b.dataset.share)};
}

const pushOk=()=>'serviceWorker' in navigator&&'PushManager' in window&&'Notification' in window;
const u8=s=>{const r=atob((s+'='.repeat((4-s.length%4)%4)).replace(/-/g,'+').replace(/_/g,'/'));return Uint8Array.from(r,c=>c.charCodeAt(0))};
async function pushSub(){if(!pushOk())return null;const reg=await navigator.serviceWorker.getRegistration();return reg?await reg.pushManager.getSubscription():null}
async function pushEnable(){
if(!pushOk())throw new Error('This browser does not support push notifications');
const perm=await Notification.requestPermission();
if(perm!=='granted')throw new Error('Notifications are blocked. Allow them in your browser or phone settings.');
const reg=await navigator.serviceWorker.ready;
const k=(await api('push/key')).key;
let sub=await reg.pushManager.getSubscription();
if(!sub)sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:u8(k)});
await api('push/sub',{body:{endpoint:sub.endpoint}});
}
async function pushDisable(){const sub=await pushSub();if(sub){await api('push/unsub',{body:{endpoint:sub.endpoint}}).catch(()=>{});await sub.unsubscribe()}}
async function syncPush(){try{if(pushOk()&&Notification.permission==='granted'){const sub=await pushSub();if(sub)await api('push/sub',{body:{endpoint:sub.endpoint}})}}catch(e){}}
function swRow(k,def,t,d){const on=ls.get(k,def);return `<div class="row"><div><b>${t}</b><p class="mut">${d}</p></div><button class="sw${on?' on':''}" data-k="${k}" data-d="${def}" role="switch" aria-checked="${on}" aria-label="${t}"></button></div>`}
const uaName=u=>{
const b=/Edg\//.test(u)?'Edge':/OPR\//.test(u)?'Opera':/Chrome\//.test(u)?'Chrome':/Firefox\//.test(u)?'Firefox':/Safari\//.test(u)?'Safari':'Browser';
const o=/iPhone|iPad/.test(u)?'iPhone or iPad':/Android/.test(u)?'Android':/Mac OS/.test(u)?'Mac':/Windows/.test(u)?'Windows':/Linux/.test(u)?'Linux':'a device';
return b+' on '+o;
};
function setView(){
const mode=ls.get('gg_mode','light'),fs=ls.get('gg_fs','m'),lang=ls.get('gg_lang','en-US'),head=ls.get('gg_head','serif'),share=ls.get('gg_share',false);
const ios=/iphone|ipad/i.test(navigator.userAgent)&&!matchMedia('(display-mode: standalone)').matches;
$('#view').innerHTML=pageHead('Preferences','Settings')+`<div class="set"><div class="stack">
<div class="card rise"><h2>Account</h2><form id="fu"><label>Username<input id="nu" value="${esc(ME.username)}" required minlength="3" maxlength="24" autocapitalize="off"></label><button class="pri">Save username</button></form><form id="fp"><label>Current password<input id="cp" type="password" required autocomplete="current-password"></label><label>New password<input id="np" type="password" required minlength="4" autocomplete="new-password"></label><label>Confirm new password<input id="cf" type="password" required autocomplete="new-password"></label><button class="pri">Change password</button></form></div>
<div class="card rise" style="--i:1"><h2>Devices</h2><p class="mut">Where you are signed in right now.</p><div class="devs" id="devs"><p class="mut">Loading...</p></div><button class="ghost" id="sos">Sign out all other devices</button></div>
<div class="card rise" style="--i:2"><h2>Notifications</h2><div class="row"><div><b>Push notifications</b><p class="mut" id="pnote">Checking...</p></div><button class="sw" id="psw" role="switch" aria-checked="false" aria-label="Push notifications"></button></div><div id="ptypes" hidden><div class="row"><b>Messages</b><button class="sw" data-pref="msg" aria-label="Message alerts"></button></div><div class="row"><b>Voice buzzes</b><button class="sw" data-pref="buzz" aria-label="Buzz alerts"></button></div><div class="row"><b>Calls</b><button class="sw" data-pref="call" aria-label="Call alerts"></button></div><div class="row"><div><b>Quiet hours</b><p class="mut">No push alerts during this window.</p></div><button class="sw" id="qhs" role="switch" aria-label="Quiet hours"></button></div><div class="twocol" id="qht"><label>From<input type="time" id="qhf" value="22:00"></label><label>Until<input type="time" id="qhu" value="07:00"></label></div></div><button class="ghost" id="ptest" hidden>Send a test notification</button>${swRow('gg_sounds',true,'In-app sounds','Chimes for new messages and buzzes.')}</div>
<div class="card rise" style="--i:3"><h2>Location and trips</h2><div class="row"><div><b>Share my live location</b><p class="mut">Friends see you on the map while GalaGram is open. You can turn it off any time.</p></div><button class="sw${share?' on':''}" id="shs" role="switch" aria-checked="${share}" aria-label="Share my live location"></button></div><label>People going on trips by default<select id="spx">${Array.from({length:10},(_,i)=>`<option value="${i+1}"${ls.get('gg_pax',1)===i+1?' selected':''}>${i+1}</option>`).join('')}</select></label></div>
<div class="card rise" style="--i:4"><h2>Privacy and data</h2>${swRow('gg_hide',false,'Appear offline','Friends will not see you as online.')}<button class="ghost" id="exp">${ico('dl')}Download my data</button><p class="mut">Photos, videos and voicemails are stored in ${S.r2?'Cloudflare R2, so large videos work.':'the database. Connect R2 to allow large videos.'}</p>${S.r2?`<button class="ghost" id="mig">Move my older photos and videos to R2</button>`:''}</div>
</div><div class="stack">
<div class="card rise" style="--i:1"><h2>Appearance</h2><div class="seg" id="sg">${[['light','Light','sun'],['dark','Dark','moon'],['system','System','monitor']].map(a=>`<button data-m="${a[0]}" class="${mode===a[0]?'on':''}">${ico(a[2])}${a[1]}</button>`).join('')}</div><small class="kick">Text size</small><div class="seg" id="sf">${[['s','Small'],['m','Default'],['l','Large']].map(a=>`<button data-fs="${a[0]}" class="${fs===a[0]?'on':''}">${a[1]}</button>`).join('')}</div><small class="kick">Headline style</small><div class="seg two" id="sh">${[['serif','Serif'],['sans','Sans']].map(a=>`<button data-h="${a[0]}" class="${head===a[0]?'on':''}">${a[1]}</button>`).join('')}</div>${swRow('gg_calm',false,'Reduce animations','Turns off motion and confetti.')}${swRow('gg_compact',false,'Compact layout','Tighter spacing to fit more on screen.')}${swRow('gg_ticker',true,'Birthday ticker','The scrolling strip under the top bar.')}${swRow('gg_hc',false,'High contrast','Stronger borders and darker text.')}${swRow('gg_24h',false,'24-hour clock','Show times like 18:30 instead of 6:30 PM.')}<p class="mut">Your dashboard color is set in Profile.</p></div>
<div class="card rise" style="--i:2"><h2>Chat and buzz</h2>${swRow('gg_enter',true,'Enter sends message','Turn off to send with the button only.')}${swRow('gg_autoplay',true,'Auto-play incoming buzzes','Voice buzzes play as soon as they arrive.')}${swRow('gg_listen',true,'Listen along','Songs set in Soundtrip start playing for you.')}${swRow('gg_transcribe',true,'Transcribe my buzzes','Your words are turned into text so friends can read them.')}<label>Transcription language<select id="slang"><option value="en-US">English (US)</option><option value="en-PH">English (Philippines)</option><option value="fil-PH">Filipino</option></select></label></div>
<div class="card rise" style="--i:3"><h2>Sign-in</h2>${swRow('gg_qrlogin',true,'QR code on login screen','Let a signed-in device approve a new sign-in. Applies to this device.')}<div class="row"><div><b>Sign in another device</b><p class="mut">Open GalaGram on the other screen, then scan the QR code shown on its login page with this device's camera.</p></div><button class="ghost" id="scn2">${ico('scan')}Scan</button></div><button class="ghost" id="so">${ico('logout')}Sign out</button></div>
<div class="card rise" style="--i:4"><h2>About</h2><p class="mut">GalaGram 1.6, the friends' daily edition.</p><button class="ghost" id="inst" hidden>Install app</button><p class="mut" id="ihint"></p><button class="ghost" id="cmc">Clear cached photos and videos</button><button class="ghost" id="rst">Reset display settings</button></div>
</div></div>`;
$('#slang').value=lang;
$('#slang').onchange=e=>ls.set('gg_lang',e.target.value);
$('#spx').onchange=e=>ls.set('gg_pax',+e.target.value);
$$('[data-k]').forEach(b=>b.onclick=()=>{ls.set(b.dataset.k,!ls.get(b.dataset.k,b.dataset.d==='true'));applyTheme();tickClock();setView()});
$('#sg').onclick=e=>{const b=e.target.closest('button');if(!b)return;ls.set('gg_mode',b.dataset.m);applyTheme();themeIcon();setView()};
$('#sf').onclick=e=>{const b=e.target.closest('button');if(!b)return;ls.set('gg_fs',b.dataset.fs);applyTheme();setView()};
$('#sh').onclick=e=>{const b=e.target.closest('button');if(!b)return;ls.set('gg_head',b.dataset.h);applyTheme();setView()};
$('#fu').onsubmit=async e=>{e.preventDefault();try{const d=await api('account',{body:{username:$('#nu').value}});ME.username=d.username;toast('Username updated')}catch(err){toast(err.message)}};
$('#fp').onsubmit=async e=>{e.preventDefault();if($('#np').value!==$('#cf').value)return toast('New passwords do not match');try{await api('password',{body:{current:$('#cp').value,next:$('#np').value}});e.target.reset();toast('Password changed')}catch(err){toast(err.message)}};
$('#so').onclick=signOut;
$('#scn2').onclick=openScanner;
$('#sos').onclick=async()=>{try{await api('signout-others',{method:'POST',body:{}});toast('Other devices signed out');loadDevs()}catch(err){toast(err.message)}};
$('#shs').onclick=()=>{const on=!ls.get('gg_share',false);setShare(on);$('#shs').classList.toggle('on',on);$('#shs').setAttribute('aria-checked',on)};
$('#exp').onclick=async()=>{try{const d=await api('export');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(d,null,2)],{type:'application/json'}));a.download='galagram-my-data.json';a.click()}catch(err){toast(err.message)}};
const mg=$('#mig');
if(mg)mg.onclick=async()=>{
mg.disabled=true;
let list=[];
try{list=await api('media/legacy')}catch(e){toast(e.message);mg.disabled=false;return}
if(!list.length){toast('Nothing to move. Everything is already in R2.');mg.disabled=false;return}
let n=0;
for(const m of list){
mg.textContent='Moving '+(n+1)+' of '+list.length+'...';
try{
const r=await fetch('/api/media?id='+m.id,{credentials:'same-origin'}),bin=atob(await r.text()),u=new Uint8Array(bin.length);
for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);
await putXhr('/api/media?id='+m.id+'&migrate=1',new Blob([u],{type:m.mime}));
n++;
}catch(e){}
}
toast('Moved '+n+' of '+list.length+' files to R2');
mg.disabled=false;mg.textContent='Move my older photos and videos to R2';
};
$('#cmc').onclick=()=>{Object.values(S.mc).forEach(u=>URL.revokeObjectURL(u));S.mc={};toast('Cached media cleared')};
$('#rst').onclick=()=>{Object.keys(localStorage).filter(k=>/^gg_(mode|fs|calm|compact|ticker|enter|sounds|autoplay|transcribe|lang|hide|qrlogin|hc|head|24h|listen|pax)$/.test(k)).forEach(k=>localStorage.removeItem(k));applyTheme();themeIcon();tickClock();setView()};
const inst=$('#inst');
if(S.installEv){inst.hidden=false;inst.onclick=async()=>{S.installEv.prompt();S.installEv=null;inst.hidden=true}}
$('#ihint').textContent=ios?'On iPhone: tap Share, then Add to Home Screen. Open GalaGram from your Home Screen to turn on notifications.':'';
async function loadDevs(){
try{
const l=await api('sessions'),el=$('#devs');if(!el)return;
el.innerHTML=l.map(x=>`<div class="dev"><div class="grow"><b>${esc(uaName(x.ua))}</b><small>${x.cur?'This device · ':''}signed in ${ago(x.ts)}</small></div>${x.cur?'':`<button class="x" data-dev="${x.id}" aria-label="Sign out this device">${ico('logout')}</button>`}</div>`).join('')||'<p class="mut">No devices found.</p>';
}catch(e){}
}
$('#devs').onclick=async e=>{const b=e.target.closest('[data-dev]');if(!b)return;try{await api('sessions?id='+b.dataset.dev,{method:'DELETE'});toast('Device signed out');loadDevs()}catch(err){toast(err.message)}};
loadDevs();
const sw=$('#psw'),note=$('#pnote');
const savePrefs=()=>{const st={};$$('[data-pref]').forEach(x=>st[x.dataset.pref]=x.classList.contains('on'));st.qh={on:$('#qhs').classList.contains('on'),from:$('#qhf').value||'22:00',to:$('#qhu').value||'07:00',tz:-new Date().getTimezoneOffset()};api('prefs',{body:st}).catch(()=>{})};
async function refreshPush(){
if(!$('#psw'))return;
if(!pushOk()){note.textContent=ios?'On iPhone, add GalaGram to your Home Screen first (Share, then Add to Home Screen) and open it from there.':'This browser does not support push notifications.';sw.disabled=true;return}
if(Notification.permission==='denied'){note.textContent='Blocked. Allow notifications for this site in your browser or phone settings.';sw.disabled=true;return}
const sub=await pushSub(),on=!!sub&&Notification.permission==='granted';
sw.classList.toggle('on',on);sw.setAttribute('aria-checked',on);
note.textContent=on?'On. You get alerts for messages, buzzes and calls, even when the app is closed.':'Off. Turn on to get alerts when the app is closed.';
$('#ptypes').hidden=!on;$('#ptest').hidden=!on;
if(on){try{const p=await api('prefs');$$('[data-pref]').forEach(b=>b.classList.toggle('on',!!p[b.dataset.pref]));const q=p.qh||{};$('#qhs').classList.toggle('on',!!q.on);$('#qhf').value=q.from||'22:00';$('#qhu').value=q.to||'07:00'}catch(e){}}
}
sw.onclick=async()=>{try{if(sw.classList.contains('on'))await pushDisable();else await pushEnable()}catch(err){toast(err.message)}refreshPush()};
$$('[data-pref]').forEach(b=>b.onclick=()=>{b.classList.toggle('on');savePrefs()});
$('#qhs').onclick=()=>{$('#qhs').classList.toggle('on');savePrefs()};
$('#qhf').onchange=$('#qhu').onchange=savePrefs;
$('#ptest').onclick=async()=>{try{await api('push/test',{method:'POST',body:{}});toast('Sent. It should arrive in a moment.')}catch(err){toast(err.message)}};
refreshPush();
}

setInterval(()=>{const a=document.activeElement;if((a&&/INPUT|SELECT|TEXTAREA/.test(a.tagName))||$('.modal'))return;if(S.view==='finance'&&ME)finView();else if(S.view==='calendar'&&ME&&!$('.modal'))calView(true);else if(S.view==='walkie'&&ME)loadVoices()},12000);
boot();
