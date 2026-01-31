function renderChart(data){
const canvas=document.getElementById("chartCanvas");
if(!canvas)return;
const ctx=canvas.getContext("2d");
const counts={};
data.forEach(r=>{counts[r.violation]=(counts[r.violation]||0)+1;});
const labels=Object.keys(counts);
const values=Object.values(counts);
ctx.clearRect(0,0,canvas.width,canvas.height);
canvas.height=220;
canvas.width=canvas.parentElement.offsetWidth;
const max=Math.max(...values,1);
const barWidth=canvas.width/labels.length;
labels.forEach((label,i)=>{
const barHeight=(values[i]/max)*180;
ctx.fillStyle="#004aad";
ctx.fillRect(i*barWidth+10,200-barHeight,barWidth-20,barHeight);
ctx.fillStyle="#000";
ctx.fillText(label,i*barWidth+15,215);
ctx.fillText(values[i],i*barWidth+15,190-barHeight);
});
}