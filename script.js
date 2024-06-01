const slideRed = document.getElementById("red");
const slideGreen = document.getElementById("green");
const slideBlue = document.getElementById("blue");

const textRed = document.getElementById("text-red");
const textGreen = document.getElementById("text-green");
const textBlue = document.getElementById("text-blue");

// let red = slideRed.value;
// let green = slideGreen.value;
// let blue = slideBlue.value;

const updateBackgroundColor = (red, green, blue) => {
	const colorRGB = `rgb(${red}, ${green}, ${blue})`;
	document.body.style.backgroundColor = colorRGB;
};

updateBackgroundColor(slideRed.value, slideGreen.value, slideBlue.value);

slideRed.addEventListener("change", (e) => {
	textRed.innerText = e.target.value;
	updateBackgroundColor(e.target.value, slideGreen.value, slideBlue.value);
});

slideGreen.addEventListener("change", (e) => {
	textGreen.innerText = e.target.value;
	updateBackgroundColor(slideRed.value, e.target.value, slideBlue.value);
});

slideBlue.addEventListener("change", (e) => {
	textBlue.innerText = e.target.value;
	updateBackgroundColor(slideRed.value, slideGreen.value, e.target.value);
});
