function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

$(function(){

	var myVar = 'test';
	console.log(myVar);

	$.get('/esx_webadmin/backend/functions.php?return=get_whitelist').done(function( data ){
		data = JSON.parse(data);
		console.log(data)

		for (var i = 0; i < data.length; i++) {
			var add = "<tr> \
			<td>"+data[i]['identifier']+"</td> \
			<td>"+data[i]['firstname']+" "+data[i]['lastname']+"</td> \
			<td>"+data[i]['last_connexion']+"</td> \
			<td><a href=\"#\" class=\"label label-danger\">Remove</a></td> \
			</tr>"


			$('#whitelisted table tbody').append(add);

			//data[i]
		}






	});

});