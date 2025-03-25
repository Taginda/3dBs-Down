const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
let vid = document.getElementById("myVideo");
let poster1 = "Resources/video1.jpg";
let poster2 = "Resources/video2.jpg";

button1.onclick = previousVideo;
button2.onclick = nextVideo;

function nextVideo() {
	vid.src = "Resources/video2.mp4";
	 vid.poster  = poster2;
	vid.load();
}

function previousVideo() {
	vid.src = "Resources/video1.mp4";
	vid.poster  = poster1;
	vid.load();
	
}
