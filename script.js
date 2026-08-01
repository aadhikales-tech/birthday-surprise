const photos=[
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg"
];

let i=0;

function next(){

i++;

if(i<photos.length){

document.getElementById("photo").src=photos[i];

}else{

document.body.innerHTML=`
<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:linear-gradient(#0f172a,#2563eb);color:white;text-align:center;flex-direction:column;">
<h1>💙 Happy Birthday Dhaniya 💙</h1>

<h2>May your smile shine forever ✨</h2>

<p>Stay happy, stay blessed and keep smiling always 💙</p>

</div>
`;

}
}
