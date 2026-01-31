function exportCSV(){
const data=JSON.parse(localStorage.getItem("violations")||"[]");
if(data.length===0){alert("Kayıt yok.");return;}
const headers=["Ad","Sınıf","Numara","İhlal","Ders","Öğretmen","Tarih"];
const rows=data.map(r=>[r.student,r.class,r.number,r.violation,r.lesson,r.teacher,r.dateTR]);
let csv=headers.join(",")+"\n";
rows.forEach(r=>{csv+=r.map(x=>`"${x}"`).join(",")+"\n";});
const blob=new Blob([csv],{type:"text/csv;charset=utf-8;"});
const url=URL.createObjectURL(blob);
const a=document.createElement("a");
a.href=url;
a.download="sral_ihlal_kayitlari.csv";
a.click();
}