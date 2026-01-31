function exportDiscipline(){
const data=JSON.parse(localStorage.getItem("violations")||"[]");
if(data.length===0){alert("Kayıt yok.");return;}
const grouped={};
data.forEach(r=>{
const key=`${r.student}|${r.class}|${r.number}`;
if(!grouped[key])grouped[key]=[];
grouped[key].push(r);
});
let content="";
for(const key in grouped){
const [name,cls,no]=key.split("|");
content+=`Disiplin Dosyası\nÖğrenci: ${name}\nSınıf: ${cls}\nNumara: ${no}\n------------------\n`;
grouped[key].forEach(r=>{
content+=`${r.dateTR} - ${r.violation} (${r.lesson}) - ${r.teacher}\n`;
});
content+="\n\n";
}
const blob=new Blob([content],{type:"text/plain;charset=utf-8;"});
const url=URL.createObjectURL(blob);
const a=document.createElement("a");
a.href=url;
a.download="disiplin_dosyalari.txt";
a.click();
}