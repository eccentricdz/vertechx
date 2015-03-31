

var contacts = [
{
	name : 'Jay Megotia',
	mobile : '7677153992',
	email : 'jaykumarmegotia@gmail.com'
},
{
	name : 'Sharad Agrawal',
	mobile : '7549014303',
	email : 'sharadagrawal.bit@gmail.com'
},
{
	name : 'Rahul Agarwal',
	mobile : '8797593485',
	email : 'simplyrahul93@gmail.com'
},
{
		name : 'Nimesh Ghelani',
	mobile : '7549157225',
	email : 'nimeshghelani@gmail.com'
},
{
		name : 'Richa Varma',
	mobile : '8292505450',
	email : 'richavarma.0902@gmail.com'
},
{
	name : 'Swapnil Jha',
	mobile : '9572227745',
	email : 'swapnil1270.11@bitmesra.ac .in'
},
{
	name : 'Harsh Vardhan',
	mobile : '9534163202',
	email : 'harsh.vardhan1071@gmail.com'
}
];


var Typer={
	name : 'vertechx',
	text: '<span id="a">vertechx</span>:<span id="b">~</span><span id="c">$</span> Vertechx 2015<br/><br/>Welcome to Vertechx 2015<!-- laglaglaglaglaglaglag--><p>The annual technology festival of <a href="www.bitmesra.ac.in" target="_blank">Birla Institute of Technology, Mesra</a>, to be held this year on the <span id="a">11th and 12th of April</span><br/><br/></p><!-- qowifjqwoeiijefoqwioefjj --><p>Follow us on our <a href="https://www.facebook.com/vertechxbitmesra" target="_blank">facebook</a> page<br/><br/></p><!- oqwipjefqwioefjwioqwji --><p>The event details are coming very soon. Stay tuned for updates.<br/></p>',
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
		if(document.getElementById('prompt')!=null)
		$('#prompt').before(str);
		else
			$('#console').append(str);
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

function askUser(ques, name){
	if(name=="password")
		Typer.write('<p><span id="c">'+ques+'</span>&nbsp;<input type="password" autofocus class="response" id='+name+' name="response"></input></p>');
	else
	Typer.write('<p><span id="c">'+ques+'</span>&nbsp;<input type="text" autofocus class="response" id='+name+' name="response"></input></p>');
	$('.response').focus();
};


var excecute = {
	contact : function(){
			for(var i=0;i<contacts.length;i++)
			{
				Typer.write('<p class="contacts">'+contacts[i].name+' : '+contacts[i].mobile+' / <a href="mailto:'+contacts[i].email+'">'+contacts[i].email+'</a></p>')
			}
	},
	register : function(){
			window.open(
					'register.html',
					'_blank' // <- This is what makes it open in a new window.
					);
	},
	login : function(){
		$('#prompt').remove();
		askUser("Enter your team name : ", 'team');

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

Typer.speed=8;
Typer.file="vertechx.txt";

Typer.text+='If you would like to get in touch with us<!-- slightdelayhere-->, mail us at : <a href="mailto:vertechx.bitmesra@gmail.com">vertechx.bitmesra@gmail.com</a>';
Typer.text+="<br />or type <span id='a'>'contact'</span> to get the contact details";
Typer.text+="<br /><br />Type <span id='a'>'register'</span> to register your team now"
Typer.text+="<br />Type <span id='a'>'login'</span> to log in to your team account"

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

var userResponse = {
	
}

function authenticate(team, password){
	//return true or false by matching the team and password in the db
	if(team==password)
	return true;
	else
		return false;
}

$(document).ready(function() {

	var beep = document.getElementById('beep');

	function alertify(msg, success){
		if(!success)
		{
			beep.play();
			Typer.write('<p class="alert">'+msg+'</p>');
		}
		else
			Typer.write('<p class="success">'+msg+'</p>');
	}

	function processCommand(cmd){
		cmd = cmd.split(' ');

		if(excecute.hasOwnProperty(cmd[0]))
		{
			if(cmd.length==1)
				excecute[cmd]();
			else
				excecute[cmd](cmd.split(1));
		}
		else
		alertify("\'"+cmd+"' is not recognized as an internal or external command, stay tuned, we will update the list of valid commands", false);
	}

$(document).click(function(){
	$('#command, .response').focus();
});
	
$('#console').keypress(function(event) {
		console.log(event.target);
		if(event.which==13){
			event.preventDefault();
			var target = $(event.target);
			if(target.attr('id')=="command"){
			Typer.write('<p><span id="a">'+Typer.name+'</span>:<span id="b">~</span><span id="c">$</span>&nbsp;'+$('#command').val()+'</p>');
			var command = $('#command').val();
			processCommand(command);
			$('#command').val('');
								}
			else{
				var name = target.attr('id');
				userResponse[name] = target.val();
				if(name!='password')
				Typer.write('<span>'+target.val()+'</span>');
				target.remove();
				if(name=="team")
					askUser("Enter your password : ", 'password');
				else if(name=="password")
				{
					var auth = authenticate(userResponse['team'], userResponse['password']);
					if(auth)
					{
						alertify("Welcome Team "+userResponse['team']+'!', true);
						Typer.name = userResponse['team'];
					}
					else
					{
						alertify("Error logging in! Please check your username/password and try again", false);
					}
					Typer.addPrompt();
				}
			}
		}
	});

});
