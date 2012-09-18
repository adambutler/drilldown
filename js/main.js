$(document).ready(function(){

	var currentWindow = $('ul.drilldown');

	$('ul.drilldown li').each(function(index, value){
		if( $(this).find('> ul') ){
			$(this).find('a').append('>')
		}
	});

	$('ul.drilldown li').click(function(e){
		console.log(e.currentTarget)

		$(e.currentTarget).find('> ul').show("slide", { direction: "right" }, 1000);
	});

})