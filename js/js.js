
function pretraga(){
var input=document.getElementById('search').value;
	if(input != ""){
	 
		
		
		var key="b65513f92170f2171b436646acf5bd53";
		var hash="9323047b55c4f3f0f22ce3f833aa2f13";
		var limit="12";
		
	
		var ourRequest=new XMLHttpRequest();
		ourRequest.open('GET','http://gateway.marvel.com/v1/public/characters?nameStartsWith='+input+'&limit='+limit+'&ts=10&apikey='+key+'&hash='+hash+'');
		ourRequest.onload=function(){
		var ourData=JSON.parse(ourRequest.responseText);
		var tekst="";
		for( var i = 0; i<ourData.data.results.length; i++){
			var element=ourData.data.results[i];
			
			
			tekst+="<div class='box' id='"+element.id+"'><img src='"+element.thumbnail.path+"/portrait_fantastic."+element.thumbnail.extension+"' alt='"+element.name+"'/><br/>"+element.name+"</div>";
		}
	
	
	 var prikaz=document.getElementById('prikaz');
	prikaz.innerHTML=tekst;
	
	
}
ourRequest.send();

	
		}
		else{
				
				
		var fav=JSON.parse(localStorage.getItem('favorites'));

var tekst="";
for(var i=0; i<fav.length;i++){
	var favitem=fav[i];
	console.log(favitem);

	var key="b65513f92170f2171b436646acf5bd53";
		var hash="9323047b55c4f3f0f22ce3f833aa2f13";
		
		var ourRequest=new XMLHttpRequest();
		ourRequest.open('GET','https://gateway.marvel.com/v1/public/characters/'+favitem+'?ts=10&apikey=b65513f92170f2171b436646acf5bd53&hash=9323047b55c4f3f0f22ce3f833aa2f13');
		ourRequest.onload=function(){
		var ourData=JSON.parse(ourRequest.responseText);
		for( var j = 0; j<ourData.data.results.length; j++){
			var element=ourData.data.results[j];
		}
		tekst+="<div class='fav' id='"+element.id+"'><img src='"+element.thumbnail.path+"/portrait_uncanny."+element.thumbnail.extension+"' alt='"+element.name+"'/><br/>"+element.name+"</div>";
		
		
		
		var prikaz=document.getElementById('prikaz');
	prikaz.innerHTML=tekst;
	
	
	}
ourRequest.send();
}
		}
		
}





	
	


