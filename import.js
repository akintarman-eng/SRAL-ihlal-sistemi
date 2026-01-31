function importStudents(input){
const file=input.files[0];
if(!file)return;
const reader=new FileReader();
reader.onload=function(e){
const text=e.target.result;
const rows=text.split("\n").slice(1);
const students=rows.map(r=>{
const cols=r.split(",");
return {number:cols[0],name:cols[1],class:cols[2]};
});
localStorage.setItem("students",JSON.stringify(students));
alert("e-Okul öğrenci listesi yüklendi ✔️");
};
reader.readAsText(file);
}