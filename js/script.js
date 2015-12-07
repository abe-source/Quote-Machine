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
			      "Work hard, dreambig.",
			      "No matter how you feel. Get up,dress up, show up and never give up!",
			      "Sometimes, you need to step outside, get some air, and remind yourself of who you are and who you want to be.",
			      "Sometimes it's better to react with no reaction",
			      "Sometimes life is about risking everything for a dream no one can see but you",
			      "A year from now you will wish you had started today!",
			      "Overthinking leads to negative thoughts.",
			      "The darkest hour has only sixty minutes!",
			      "Stop holding yourself back. If you aren't happy, make a change!",
			      "To laught at yourself is to Love yourself!",
			      "Everything you need will come to you at the perfect time!"]
  var count = 0;
  $(".button").click(function(){
    var ranQuote = Math.floor(Math.random() * quotes.length);
    var tweetText = "https://twitter.com/intent/tweet?text=" + quotes[ranQuote] + "\n http://codepen.io/Intooo/pen/LGYoJN";   
    $(".quotes").text(quotes[ranQuote]);
    $('.tweet').html("<a class='twitter-share-button' id='tweet-link' href='http://twitter.com/intent/tweet?text=' data-size='small'>Tweet</a>");
    $('#tweet-link').attr('href',tweetText);    
    count++;      
  });
});	









