function check_empty()
{
	if(document.getElementById('username').value==""|| document.getElementById('email').value==""||
	document.getElementById('password').value==""|| document.getElementById('repeatpswd').value=="")
	{
		alert("Please Fill out all fields !");
	}
	else
	{
		document.getElementById('myform').submit();
		alert("Form Submitted Successfully...");
	}
}

function div_show() {
document.getElementById('abc').style.display = "block";
}

function div_hide(){
	document.getElementById('abc').style.display="none";
}
var attempt=3;
function checkForm()
{
	if(info.uname.value=="" || info.uname.value==null || info.pswd.value=="" || info.pswd.value==null)
	{
		alert("Please fill the Username and Password ");
		return false;

	}
	else
	{
		alert("You are logged in");
	}
}