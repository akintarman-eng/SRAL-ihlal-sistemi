if(user.role==="admin"){renderTable();fillClassFilter();}
function getData(){return JSON.parse(localStorage.getItem("violations")||"[]");}
function fillClassFilter(){
const data=getData();
const classes=[...new Set(data.map(r=>r.class))];
const select=document.getElementById("classFilter");
classes.forEach(c=>{const opt=document.createElement("option");opt.value=c;opt.innerText=c;select.appendChild(opt);});
}
function renderTable(){
const data=getData();
const search=document.getElementById("searchBox").value.toLowerCase();
const start=document.getElementById("startDate").value;
const end=document.getElementById("endDate").value;
const classFilter=document.getElementById("classFilter").value;
const filtered=data.filter(r=>{
const matchName=r.student.toLowerCase().includes(search);
const matchClass=!classFilter||r.class===classFilter;
const d=r.dateISO.slice(0,10);
const matchStart=!start||d>=start;
const matchEnd=!end||d<=end;
return matchName&&matchClass&&matchStart&&matchEnd;
});
renderStats(filtered);
renderChart(filtered);
if(filtered.length===0){tableArea.innerHTML="<p>Kayıt bulunamadı.</p>";return;}
let html=`<table><tr><th>Ad</th><th>Sınıf</th><th>No</th><th>İhlal</th><th>Ders</th><th>Öğretmen</th><th>Tarih</th></tr>`;
filtered.forEach(r=>{
html+=`<tr><td>${r.student}</td><td>${r.class}</td><td>${r.number}</td><td>${r.violation}</td><td>${r.lesson}</td><td>${r.teacher}</td><td>${r.dateTR}</td></tr>`;
});
html+="</table>";
tableArea.innerHTML=html;
}
function renderStats(data){
const statsBox=document.getElementById("statsBox");
const total=data.length;
const byStudent={};
data.forEach(r=>{
const key=`${r.student} (${r.class}/${r.number})`;
byStudent[key]=(byStudent[key]||0)+1;
});
const top=Object.entries(byStudent).sort((a,b)=>b[1]-a[1]).slice(0,5);
let html=`<div class="stat-box">Toplam İhlal<br>${total}</div>`;
top.forEach(([name,count])=>{
html+=`<div class="stat-box">${name}<br>${count}</div>`;
});
statsBox.innerHTML=html;
}