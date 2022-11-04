var video = document.querySelector('#player1')

// load page
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	video.load()
	console.log("autoplay is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)

});

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	console.log(document.querySelector('#slider').value)
	volume = document.getElementById('slider').value
	document.querySelector("#volume").innerHTML = volume + "%"

});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()

});

var rate = 1;
// slow down button
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video")
	rate -= .1
	video.playbackRate = rate
	console.log('rate ', rate)
	
});

// speed up button
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Video")
	rate += .1
	video.playbackRate = rate
	console.log('rate ', rate)
	
});

// skip ahead button
document.querySelector("#skip").addEventListener("click", function() {
	console.log('skip ahead')
	duration = video.duration
	time = video.currentTime
	
	if(duration <= (time+10)){
		video.currentTime = 0
	}
	else{
		video.currentTime += 10
	}

	console.log('video current time is', video.currentTime)
});

// mute and unmute video
document.querySelector("#mute").addEventListener("click", function() {
	console.log('mute')
	if(video.muted == true){
		video.muted = false
		document.querySelector("#mute").innerText = "Mute"
	}
	else{
		video.muted = true
		document.querySelector("#mute").innerText = "Unmute"
	}
});

// change volume with slider
document.querySelector("#slider").addEventListener("change", function(){
	console.log('slider change')
	video.volume = document.querySelector('#slider').value * .01
	console.log('volume value',document.querySelector('#slider').value, '%');
	volume = document.querySelector('#slider')
	document.querySelector("#volume").innerHTML = volume.value + "%"
});
// apply old school class
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add('oldSchool')
});

// apply old school class
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove('oldSchool')
});



