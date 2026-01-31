const users=[
{email:"admin@sral.k12.tr",password:"1234",role:"admin",name:"Okul Yönetimi"},
{email:"ogretmen1@sral.k12.tr",password:"1234",role:"teacher",name:"Matematik Öğretmeni"},
{email:"ogretmen2@sral.k12.tr",password:"1234",role:"teacher",name:"Türkçe Öğretmeni"}
];
function login(){
const email=document.getElementById("email").value;
const pass=document.getElementById("password").value;
const user=users.find(u=>u.email===email&&u.password===pass);
if(!user){alert("Hatalı giriş");return;}
localStorage.setItem("user",JSON.stringify(user));
location.href="dashboard.html";
}