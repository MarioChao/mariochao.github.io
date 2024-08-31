// Variables

let fadeInColor = "lightblue";
let fadeOutColor = "rgba(173, 216, 230, 0)";

let backgroundTextClassName = "background-text";

// Functions

function setBackgroundColor(defaultColor, transparentColor) {
	fadeInColor = defaultColor;
	fadeOutColor = transparentColor;
}

function setBackgroundTextClassName(className) {
	backgroundTextClassName = className;
}

function fadeBackgroundImage(fadeIn) {
	if (fadeIn) {
		document.body.style.backgroundColor = fadeOutColor;
	} else {
		document.body.style.backgroundColor = fadeInColor;
	}
}

function fadeTextColor(color = "") {
	let textElements = document.getElementsByClassName(backgroundTextClassName);
	for (const element of textElements) {
		element.style.color = color;
	}
}

function fadeTextStroke(textStroke = "") {
	let textElements = document.getElementsByClassName(backgroundTextClassName);
	for (const element of textElements) {
		element.style.webkitTextStroke = textStroke;
	}
}

function fadeFontSize(fontSize = "") {
	let textElements = document.getElementsByClassName(backgroundTextClassName);
	for (const element of textElements) {
		element.style.fontSize = fontSize;
	}
}

// Export

export const fadeElements = {
	setBackgroundColor,
	setBackgroundTextClassName,
	fadeBackgroundImage,
	fadeTextColor,
	fadeTextStroke,
	fadeFontSize,
}
