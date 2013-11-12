var Utils = Utils || {};

Utils.Tooltip = function(el) {
	this.el = el;

	this.buildDOM();
	this.attachEvents();
};

Utils.Tooltip.prototype.attachEvents = function() {
	var el = this.el,
		tooltip = this.tooltip,
		tipText = tooltip.getElementsByTagName("p")[0],
		tipArrow = tooltip.getElementsByTagName("span")[0];

	el.addEventListener("focus", showTooltip);
	el.addEventListener("blur", hideTooltip);

	function showTooltip() {
		tooltip.style.left = el.offsetLeft+ "px";
		tooltip.style.top = el.offsetTop + el.offsetHeight + 7 + "px";
		tooltip.style.display = "block";

		tipText.innerHTML = el.title;
	}

	function hideTooltip() {
		tooltip.style.display = "none";
	}
}

Utils.Tooltip.prototype.buildDOM = function() {
	var theTooltip = document.getElementById("tooltip"),
		body = document.getElementsByTagName("body")[0],
		tipText,
		tipArrow;

	if(!theTooltip){
		theTooltip = document.createElement("div");
		theTooltip.id = "tooltip";
		theTooltip.className = "tooltip";

		tipArrow = document.createElement("span");
		tipText = document.createElement("p");

		body.appendChild(theTooltip);
		theTooltip.appendChild(tipText);
		theTooltip.appendChild(tipArrow);
	}

	this.tooltip = theTooltip;

	return;
}

window.addEventListener("load", function() {
	"use strict";

	var inputs = document.getElementsByClassName("showTooltip");

	Array.prototype.forEach.call(inputs, function(key, index, array) {
		new Utils.Tooltip(key);
	});	
});

