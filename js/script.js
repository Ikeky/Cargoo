var subbtn = document.querySelector("#subcal");
var tunedpanel = document.querySelector("#tuned");
var nottunedpanel = document.querySelector("#nottuned");
$("#subcal").click(function(e) {
	$("#tuned").addClass('d-block');
	$("#tuned").removeClass('d-none');
	$("#nottuned").addClass('d-none');
	$("#nottuned").removeClass('d-block');
});