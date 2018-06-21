$(document).ready(function(){
    $("#tweetMe").jsSocials({
	showCount: false,
	shares: ["twitter"],
	showLabel: false,
	url: "http://bit.ly/bantuNP",
	text: "Check out the Symposium on the Syntax of the Bantu Noun Phrase #bantuNP #syntax",
	// hashtags: "bantuNP,syntax",
	shareIn: "popup",
    });
    $(".jssocials-share-link").attr("id", "myTweet")
    $("#myTweet").text("#bantuNP")
});
