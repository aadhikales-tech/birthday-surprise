const photos = [
"i0.jpeg",
"i.jpeg",
"m.jpeg",
"p.jpeg",
"WhatsApp Image 2026-07-11 at 9.56.13 AM.jpeg"
];

let current = 0;

function next(){
current++;

if(current < photos.length){
document.getElementById("photo").src = photos[current];
}else{
document.body.innerHTML=`
<div style="height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;background:linear-gradient(135deg,#0f172a,#2563eb);color:white;text-align:center;">
<h1>💙 Happy Birthday Dhaniya 💙</h1>
<h2>Love you as always ✨</h2>
<p>Thank you for being such an amazing person. Stay happy always! 💙</p>
</div>`;
}
}
