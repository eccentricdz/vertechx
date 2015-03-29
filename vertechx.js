
var Typer={
	name : 'vertechx',
	text: '<span id="a">vertechx</span>:<span id="b">~</span><span id="c">$</span> Vertechx 2015<br/><br/>Welcome to Vertechx 2015<!-- laglaglaglaglaglaglaglaglaglaglaglag --><p>The annual technology festival of <a href="www.bitmesra.ac.in" target="_blank">Birla Institute of Technology, Mesra</a><br/><br/></p><!-- qowifjqwoeiijefoqwijefoijfqiwoefjj --><p>Follow us on our <a href="https://www.facebook.com/vertechxbitmesra" target="_blank">facebook</a> page<br/><br/></p><!- oqwipjefqwioefjwioqfjoiqwjfeioqwjefoi --><p>The details are coming very soon. Stay tuned for updates.<br/><br/></p><!-- owlsqweoifjqwoefijqwoeifjqwoefijwef -->If you would like to get in touch with us<!-- slightdelayhere-->, mail us at : <a href="mailto:vertechx.bitmesra@gmail.com">vertechx.bitmesra@gmail.com</a><p>Have a good day :)</p>',
	index:0, 
	speed:2, 
	file:"", 
	accessCountimer: null,
	init: function(){
		this.accessCountimer=setInterval(function(){Typer.updLstChr();},500);
		// $.get(Typer.file,function(data){
		// 	Typer.text=data;
		// 	Typer.text = Typer.text.slice(0, Typer.text.length-1);
		// 	//console.log(Typer.text);
		// });
	},
 
	content:function(){
		return $('#console').html();
	},
 
	write:function(str){
		$('#prompt').before(str);
		window.scrollBy(0,50);
		return false;
	},
 
 
	addText:function(key){//Main function to add the code
		if(Typer.text){ 
			var cont=Typer.content(); 
			if(cont.substring(cont.length-1,cont.length)=="|") 
				$('#console').html($('#console').html().substring(0,cont.length-1)); 
			if(key.keyCode!=8){ 
				Typer.index+=Typer.speed;
			}else{
				if(Typer.index>0) 
					Typer.index-=Typer.speed;
			}
			var text=Typer.text.substring(0,Typer.index)
			var rtn= new RegExp("\n", "g"); 
	
			$('#console').html(text.replace(rtn,"<br/>"));
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
			$('#console').html($('#console').html().substring(0,cont.length-1)); 
		else
			this.write("|"); 
	},

	addPrompt : function(){
		var prompt = '<p id="prompt"><span id="a">'+this.name+'</span>:<span id="b">~</span><span id="c">$</span>&nbsp;<input type="text" autofocus id="command" name="command"></input></p>';
		$('#console').append(prompt);
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
 


function t() {
	Typer.addText({"keyCode": 1237});
	if (Typer.index > Typer.text.length) {
		clearInterval(timer);
		clearInterval(Typer.accessCountimer);
		Typer.addPrompt();
	}
}

var timer = setInterval("t();", 30);

$(document).ready(function() {

	var beep = document.getElementById('beep');

	function alertify(msg){
		beep.play();
		Typer.write('<p class="alert">'+msg+'</p>');
		
	}

	function processCommand(cmd){
		cmd = cmd.split(' ');

		console.log(cmd);
		alertify("\'"+cmd+"' is not recognized as an internal or external command, stay tuned, we will update the list of valid commands");
	}

$(document).click(function(){
	$('#command').focus();
});
	
$('#console').keypress(function(event) {
		console.log(event.which);
		if(event.which==13){
			event.preventDefault();
			Typer.write('<p><span id="a">'+Typer.name+'</span>:<span id="b">~</span><span id="c">$</span>&nbsp;'+$('#command').val()+'</p>');
			var command = $('#command').val();
			processCommand(command);
			$('#command').val('');
		}
	});

});
