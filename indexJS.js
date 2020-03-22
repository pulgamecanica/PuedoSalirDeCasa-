function myFunction()
{
    document.getElementById('foo').setAttribute("class", "style1");
}
$(function() {
    causeRepaintsOn = $("h1, h2, h3, p");
	$(window).resize(function() {
         causeRepaintsOn.css("z-index", 1);
    });
});
    