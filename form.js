function validateForm() {
    var frtname=document.getElementById('fname').value;
	var ltname=document.getElementById('lname').value;
	var nation=document.getElementById('inputcountry').value;
	var state=document.getElementById('inputstate').value;
	var city=document.getElementById('inputcity').value;
	var address=document.getElementById('inputaddress').value;
	var gender=document.getElementById('inputgender').value; 
	var mail=document.getElementById('inputmailid').value;
	var pn=document.getElementById('inputnumbers').value;
	var pw=document.getElementById('inputpassword').value;

if(null==frtname||frtname==""){
		document.getElementById('fnameerr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('fnameerr').innerHTML="";
	}
	if(null==ltname||ltname==""){
		document.getElementById('lnameerr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('lnameerr').innerHTML="";
	}
	if(null==mail||mail==""){
		document.getElementById('mailerr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('mailerr').innerHTML="";
	}
	if(null==nation||nation==""){
		document.getElementById('countryerr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('countryerr').innerHTML="";
	}
	if(null==state||state==""){
		document.getElementById('stateerr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('stateerr').innerHTML="";
	}
	if(null==pn||pn==""){
		document.getElementById('mobileerr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('mobileerr').innerHTML="";
	}
	if(null==city||city==""){
		document.getElementById('cityerr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('cityerr').innerHTML="";
	}
	if(null==address||address==""){
		document.getElementById('addresserr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('addresserr').innerHTML="";
	}
	if(null==pw||pw==""){
		document.getElementById('passworderr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('passworderr').innerHTML="";
	}
}