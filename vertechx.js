
var pwd = [];
var fs = {};
function pwdtostr(){
    var ret = '';
    for(var i = 0;i<pwd.length;i++){
        ret += '/'+pwd[i];
    }
    console.log(ret);
    return ret;
}
function amort(fs, par, path){
    if(typeof(fs) == typeof(""))
        return;
    tmp = '';
    if(!path)
        path = '';
    else
        tmp = '/';
    for(key in fs){
        amort(fs[key], fs, path+tmp+key);
    }
    fs['meta'] = {};
    fs['meta']['path'] = path;
    fs['.'] = fs;
    fs['..'] = par;
}
function getpwd(){
    var ret = fs;
    for(var i = 0;i<pwd.length;i++){
        ret = ret[pwd[i]];
    }
    return ret;
}
function getnewpwd(pwd, cur, args){
    var ret = pwd;
    for(var i = 0;i<args.length;i++){
        if(args[i] == "")
            continue;
        if(args[i] in cur){
            cur = cur[args[i]];
            ret.push(args[i]);
        }
        else
            return false;
    }
    ret = cur['meta']['path'].split('/');
    if(ret.length == 1 && ret[0] == "")ret = [];
    console.log(ret);
    return ret;
}
$.getJSON('api/fs.php',
    function (data, textStatus, jqXHR) {
        // success callback
        fs = data;
        fs['vertechx.txt'] = 'Welcome to Vertechx 2015<!-- laglaglaglaglaglaglag--><p>The annual technology festival of <a href="http://www.bitmesra.ac.in" target="_blank">Birla Institute of Technology, Mesra</a>, to be held this year on the <span id="a">11th and 12th of April</span><br/></p><p>Brought to you by the technical power houses of our college, <br><span id="a">ACM | SAE | Robolution | IET | IETE | IEEE</p><!-- qowifjqwoeiijefoqwioefjj --><p>Follow us on our <a href="https://www.facebook.com/vertechxbitmesra" target="_blank">facebook</a> page<br/></p><!- oqwipjefqwioefjwioqwji --><p>The event details are coming very soon. Stay tuned for updates.<br/></p>';
        fs['vertechx.txt']+='If you would like to get in touch with us<!-- slightdelayhere-->, mail us at : <a href="mailto:vertechx.bitmesra@gmail.com">vertechx.bitmesra@gmail.com</a>';
        fs['vertechx.txt']+="<br />or type <span id='a'>'contact'</span> to get the contact details";
        fs['vertechx.txt']+="<br /><br />Type <span id='a'>'register'</span> to register your team now";
        fs['vertechx.txt']+="<br />Type <span id='a'>'login'</span> to log in to your team account";
        fs['vertechx.txt']+="<br /><br />Type <span id='a'>'help'</span> to get a list of available commands";
        amort(fs);
    }
);
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
	text: '<span id="a">vertechx</span>:<span id="b">~</span><span id="c">$</span> Vertechx 2015<br/><br/>Welcome to Vertechx 2015<!-- laglaglaglaglaglaglag--><p>The annual technology festival of <a href="http://www.bitmesra.ac.in" target="_blank">Birla Institute of Technology, Mesra</a>, to be held this year on the <span id="a">11th and 12th of April</span><br/></p><p>Brought to you by the technical power houses of our college, <br><span id="a">ACM | SAE | Robolution | IET | IETE | IEEE</p><!-- qowifjqwoeiijefoqwioefjj --><p>Follow us on our <a href="https://www.facebook.com/vertechxbitmesra" target="_blank">facebook</a> page<br/></p><!- oqwipjefqwioefjwioqwji --><p>The event details are coming very soon. Stay tuned for updates.<br/></p>',
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
		var prompt = '<p id="prompt"><span id="a">'+this.name+'</span>:<span id="b">~'+pwdtostr()+'</span><span id="c">$</span>&nbsp;<input type="text" autofocus id="command" name="command"></input></p>';
		$('#console').append(prompt);
		$('#command').focus();
	}
}
$.getJSON('api/login.php', function(data){
    if(data['logged_in']){
        Typer.name = data['userinfo']['teamName'];
        alertify("Welcome Team "+Typer.name+'!', true);
    }
});
function askUser(ques, name){
	if(name=="password")
		Typer.write('<p><span id="c">'+ques+'</span>&nbsp;<input type="password" autofocus class="response" id='+name+' name="response"></input></p>');
	else
	Typer.write('<p><span id="c">'+ques+'</span>&nbsp;<input type="text" autofocus class="response" id='+name+' name="response"></input></p>');
	$('.response').focus();
};


var excecute = {
	contact : [
		function(){
			for(var i=0;i<contacts.length;i++)
			{
				Typer.write('<p class="contacts">'+contacts[i].name+' : '+contacts[i].mobile+' / <a href="mailto:'+contacts[i].email+'">'+contacts[i].email+'</a></p>')
			}
	},
	"Get the contact details"
],
	register : [function(){
			window.open(
					'register.html',
					'_blank' // <- This is what makes it open in a new window.
					);
	},
	"Register your team"
	],
	login : [function(){
		$('#prompt').remove();
		askUser("Enter your team name : ", 'team');

	},
	"Login in to your team account"
	],

	list : [function(args){
		
		//if correct sequence args[0]
        // $.post('api/list.php',
        //     { ans: args[0] , roll: args[1]},
        //     function (data, textStatus, jqXHR) {
        //         alertify('Your Submission was recorded, we will announce the prizes by the end of the day', true);
        //     }
        // );
		alertify("Submissions for the event 'linked list' are now closed", false);
		//may be store the no of entries kai, pata chalega kitna successful tha
		//else part here
	},
	"Submissions for the event 'linked list' are now closed"
	],

	rules : [function(){
		window.open('rules.pdf','_blank');
	},
	"Get the rules for VertechX 2015"
	],

	help : [
	function(){
		for(var key in excecute)
		{
			Typer.write('<p class="help"><span id="c">'+key+'</span> : '+excecute[key][1]+'</p>');
		}
	},
	"Get the list of commands available"
	],

    ls : [
        function(args){
            var cur = fs;
            for(var i = 0;i<pwd.length;i++){
                cur = cur[pwd[i]];
            }
            Typer.write("<span class='dir'>.</span>");
            Typer.write('<br />');
            Typer.write("<span class='dir'>..</span>");
            Typer.write('<br />');
            for(var key in cur){
                if(key == '.' || key == '..' || key == 'meta')continue;
                if(typeof(cur[key]) == typeof(""))
                    Typer.write("<span class='file'>"+key+"</span>");
                else
                    Typer.write("<span class='dir'>"+key+"/</span>");
                Typer.write('<br />');
            }
        },
        "Show current directory content"
    ],
    cd : [
        function(args){
            var cur = fs, curpwd = [];
            if(args[0] != '/'){
                cur = getpwd();
                curpwd = pwd;
            }
            arg = args[0].split('/');
            var newpwd = getnewpwd(curpwd, cur, arg);
            if(newpwd !== false)
                pwd = newpwd;
        },
        "Change current directory"
    ],
    cat : [
        function(args){
            cur = getpwd();
            if(args[0] in cur)
                Typer.write(cur[args[0]]);
        },
        "Display file content"
    ]
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

function authenticate(team, password, cb){
	//return true or false by matching the team and password in the db
    $.ajax({
        url: 'api/login.php',
        type: 'POST',
        data: $.param( {'user':team, 'pass': password } ),
        success: function (data, textStatus, jqXHR) {
            data = JSON.parse(data);
            if(data['ok'])cb['success']();
            else cb['error']('Error logging in! Please check your username/password and try again');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // error callback
            cb['error']('Unknown Error!');
        }
    });
}


Typer.speed=8;
Typer.file="vertechx.txt";

Typer.text+='If you would like to get in touch with us<!-- slightdelayhere-->, mail us at : <a href="mailto:vertechx.bitmesra@gmail.com">vertechx.bitmesra@gmail.com</a>';
Typer.text+="<br />or type <span id='a'>'contact'</span> to get the contact details";
Typer.text+="<br /><br />Type <span id='a'>'register'</span> to register your team now";
Typer.text+="<br />Type <span id='a'>'login'</span> to log in to your team account";
Typer.text+="<br /><br />Type <span id='a'>'help'</span> to get a list of available commands";


Typer.init();
 


function t() {
	Typer.addText({"keyCode": 1237});
	if (Typer.index > Typer.text.length) {
		clearInterval(timer);
		clearInterval(Typer.accessCountimer);
		Typer.addPrompt();
	}
}

	function alertify(msg, success){
		if(!success)
		{
			beep.play();
			Typer.write('<p class="alert">'+msg+'</p>');
		}
		else
			Typer.write('<p class="success">'+msg+'</p>');
	}

var timer = setInterval("t();", 30);

var userResponse = {
	
}

$(document).ready(function() {

	var beep = document.getElementById('beep');



	function processCommand(cmd){
		if(cmd=='')
			return;

		cmd = cmd.split(' ');
		console.log(cmd);
		if(excecute.hasOwnProperty(cmd[0]))
		{
			if(cmd.length==1)
				excecute[cmd[0]][0]();
			else
				excecute[cmd[0]][0](cmd.slice(1));
		}
		else
		alertify("\'"+cmd[0]+"' is not recognized as an internal or external command, stay tuned, we will update the list of valid commands", false);
	}

$(document).click(function(){
	if(Typer.index < Typer.text.length)
                Typer.index = Typer.text.length;
	$('#command, .response').focus();
});
$(document).keypress(function(event)
        {
            if(Typer.index < Typer.text.length)
                Typer.index = Typer.text.length;
        });
$('#console').keypress(function(event) {
		//console.log(event.target);
		if(event.which==13){
			event.preventDefault();
			var target = $(event.target);
			if(target.attr('id')=="command"){

			Typer.write('<p><span id="a">'+Typer.name+'</span>:<span id="b">~'+pwdtostr()+'</span><span id="c">$</span>&nbsp;'+$('#command').val()+'</p>');
			var command = $('#command').val();
			$('#prompt').remove();
			processCommand(command);
            if(command != 'login')
                Typer.addPrompt();
			// $('#command').val('');
			
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
                    authenticate(userResponse['team'], userResponse['password'], {
                        success: function(){
                            alertify("Welcome Team "+userResponse['team']+'!', true);
                            Typer.name = userResponse['team'];
                            Typer.addPrompt();
                        },
                        error: function(msg){
                            alertify(msg, false);
                            Typer.addPrompt();
                        }
                    });
                }
            }
        }
});

});
