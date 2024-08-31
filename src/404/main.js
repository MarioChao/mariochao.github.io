// Imports

import {fadeElements} from "./fade-elements.js";

// Functions

function initializeFont() {
	document.body.style.fontFamily = "'PT Serif'";
	document.body.style.transition = "all 2000ms";
	document.body.style.backgroundBlendMode = "lighten";
	fadeElements.setBackgroundColor("lightblue", "rgba(173, 216, 230, 0)");
}

function setBackgroundImage(image) {
	document.body.style.backgroundImage = image;
}

function onWander() {
	let wanderAudio = document.getElementById("wander-audio");
	if (wanderAudio.paused) {
		wanderAudio.play();

		setBackgroundImage("url(/src/assets/images/space-background-2.png)");
		fadeElements.fadeBackgroundImage(true);
		fadeElements.fadeTextColor("white");
		fadeElements.fadeFontSize("32px");
	} else {
		wanderAudio.pause();
		wanderAudio.currentTime = 0;

		fadeElements.fadeBackgroundImage(false);
		fadeElements.fadeTextColor();
		fadeElements.fadeFontSize();
	}
}

function initializeWanderButton() {
	let wanderDiv = document.getElementById("wander-div");

	wanderDiv.addEventListener("click", onWander);
}

function initializeButtons() {
	initializeWanderButton();
}

function onDOMContentLoaded() {
	initializeFont();
	initializeButtons();
}

// Calling / events

window.addEventListener("DOMContentLoaded", onDOMContentLoaded);
