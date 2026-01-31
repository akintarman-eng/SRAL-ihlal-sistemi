const user=JSON.parse(localStorage.getItem("user"));
if(!user)location.href="index.html";
document.getElementById("userInfo").innerText=`${user.name} (${user.role})`;
if(user.role!=="admin"){document.getElementById("adminPanel").classList.add("hidden");}
function logout(){localStorage.removeItem("user");location.href="index.html";}
function saveViolation(){
const record={
id:Date.now(),
student:studentName.value.trim(),
class:className.value.trim(),
number:number.value.trim(),
violation:violation.value,
lesson:lesson.value.trim(),
teacher:user.name,
teacherEmail:user.email,
dateISO:new Date().toISOString(),
dateTR:new Date().toLocaleString("tr-TR")
};
if(!record.student||!record.class||!record.number||!record.violation){alert("Lütfen tüm alanları doldurun.");return;}
const data=JSON.parse(localStorage.getItem("violations")||"[]");
data.push(record);
localStorage.setItem("violations",JSON.stringify(data));
alert("İhlal kaydedildi ✔️");
studentName.value=className.value=number.value=lesson.value="";
violation.value="";
}