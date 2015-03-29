var Typer={
	text: '<span id="a">vertechx</span>:<span id="b">~</span><span id="c">$</span> Vertechx 2015<br/><br/>Welcome to VertechX 2015<!-- laglaglaglaglaglaglaglaglaglaglaglag --><p>The annual technology festival of <a href="www.bitmesra.ac.in" target="_blank">Birla Institute of Technology, Mesra</a><br/><br/></p><!-- qowifjqwoeiijefoqwijefoijfqiwoefjj --><p>Follow us on our <a href="https://www.facebook.com/vertechxbitmesra" target="_blank">facebook</a> page<br/><br/></p><!- oqwipjefqwioefjwioqfjoiqwjfeioqwjefoi --><p>The details are coming very soon. Stay tuned for updates.<br/><br/></p><!-- owlsqweoifjqwoefijqwoeifjqwoefijwef -->If you would like to get in touch with us<!-- slightdelayhere-->, mail us at : <a href="mailto:vertechx.bitmesra@gmail.com">vertechx.bitmesra@gmail.com</a><p>Have a good day :)</p>',
	index:0, 
	speed:2, 
	file:"", 
	init: function(){
		accessCountimer=setInterval(function(){Typer.updLstChr();},500);
		// $.get(Typer.file,function(data){
		// 	Typer.text=data;
		// 	Typer.text = Typer.text.slice(0, Typer.text.length-1);
		// 	//console.log(Typer.text);
		// });
	},
 
	content:function(){
		return $("#console").html();
	},
 
	write:function(str){
		$("#console").append(str);
		return false;
	},
 
 
	addText:function(key){//Main function to add the code
		if(Typer.text){ 
			var cont=Typer.content(); 
			if(cont.substring(cont.length-1,cont.length)=="|") 
				$("#console").html($("#console").html().substring(0,cont.length-1)); 
			if(key.keyCode!=8){ 
				Typer.index+=Typer.speed;
			}else{
				if(Typer.index>0) 
					Typer.index-=Typer.speed;
			}
			var text=Typer.text.substring(0,Typer.index)
			var rtn= new RegExp("\n", "g"); 
	
			$("#console").html(text.replace(rtn,"<br/>"));
			window.scrollBy(0,50);
		}
		if ( key.preventDefault && key.keyCode != 122 ) { // prevent F11(fullscreen) from being blocked
			key.preventDefault()
		};  
		if(key.keyCode != 122){ // otherway prevent keys default behavior
			key.returnValue = false;
		}
	},
 
	updLstChr:function(){ 
		var cont=this.content(); 
		if(cont.substring(cont.length-1,cont.length)=="|") 
			$("#console").html($("#console").html().substring(0,cont.length-1)); 
		else
			this.write("|"); 
	}
}
 
function replaceUrls(text) {
	var http = text.indexOf("http://");
	var space = text.indexOf(".me ", http);
	if (space != -1) { 
		var url = text.slice(http, space-1);
		return text.replace(url, "<a href=\""  + url + "\">" + url + "</a>");
	} else {
	return text
}
}
Typer.speed=3;
Typer.file="vertechx.txt";
Typer.init();
 
var timer = setInterval("t();", 30);

function t() {
	Typer.addText({"keyCode": 1237});
	if (Typer.index > Typer.text.length) {
		clearInterval(timer);console.log('timer cleared');
	}
}
 