$(document).ready(function(){
	var quotes = ["Some days you just have to create your own sunshine.",
			      "Be somebody who makes everybody feel lika a somebody.",
			      "Never give up! There is no such thing as an ending jus a new beginning.",
			      "I don't trust words. I trust actions.",
			      "Sometimes the right path is not the easiest one.",
			      "Stars can't shine without darkness.",
			      "I can and I will.",
			      "I'm not who I was before!",
			      "Being happy doesn't mean everything's perfect. It means you have decided to look beyond the impperfections.",
			      "Work hard, dreambig."]
	$(".button").on("click", function(){
	var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	$(".itiem").text(randomQuote);
});

});










