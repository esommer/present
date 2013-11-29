window.onload = function () {

	function Present () {
		this.memory = "";
		this.checkIn = function () {
			this.speak("I'm here.");
			this.speak("It's now: " + new Date());
		}
		this.speak = function (words) {
			var output = document.createTextNode(words);
			var paragraph = document.createElement("p");
			document.getElementById("present").appendChild(paragraph).appendChild(output);
		}
		this.listen = function () {
			this.memory = window.prompt("How was your day? ");
		}
		this.respond = function () {
			this.speak("Ah, I see. You said: " + this.memory);
		}
	}

	var presence = new Present();
	presence.checkIn();
	presence.listen();
	presence.respond();

};
