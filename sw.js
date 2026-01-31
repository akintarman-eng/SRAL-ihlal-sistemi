self.addEventListener("install",e=>{
e.waitUntil(
caches.open("sral-cache").then(cache=>{
return cache.addAll([
"./","./index.html","./dashboard.html","./style.css",
"./auth.js","./app.js","./admin.js","./charts.js",
"./export.js","./import.js","./discipline.js","./manifest.json","./logo.png"
]);
})
);
});