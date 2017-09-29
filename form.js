function validateForm() {
    var frtname=document.getElementById('fname').value;
  if(null==frtname||frtname==""){
    document.getElementById('fnameerr').innerHTML="You can't leave this empty.";
  }else{
    document.getElementById('fnameerr').innerHTML="";
  }
  var ltname=document.getElementById('lname').value;
  if(null==ltname||ltname==""){
    document.getElementById('lnameerr').innerHTML="You can't leave this empty.";
  }else{
    document.getElementById('lnameerr').innerHTML="";
  }
  var gender=document.getElementById('inputgender').value; 
  if(null==gender||gender==""){
    document.getElementById('gendererr').innerHTML="You can't leave this empty.";
  }else{
    document.getElementById('gendererr').innerHTML="";
  }
  var nation=document.getElementById('inputcountry').value;
  if(null==nation||nation==""){
    document.getElementById('countryerr').innerHTML="You can't leave this empty.";
  }else{
    document.getElementById('countryerr').innerHTML="";
  }
  var state=document.getElementById('inputstate').value;
  if(null==state||state==""){
    document.getElementById('stateerr').innerHTML="You can't leave this empty.";
  }else{
    document.getElementById('stateerr').innerHTML="";
  }
  var city=document.getElementById('inputcity').value;
  if(null==city||city==""){
    document.getElementById('cityerr').innerHTML="You can't leave this empty.";
  }else{
    document.getElementById('cityerr').innerHTML="";
  }
  var address=document.getElementById('inputaddress').value;
  if(null==address||address==""){
    document.getElementById('addresserr').innerHTML="You can't leave this empty.";
  }else{
    document.getElementById('addresserr').innerHTML="";
  }
  var pn=document.getElementById('inputnumbers').value;
  if(null==pn||pn==""){
    document.getElementById('mobileerr').innerHTML="You can't leave this empty.";
  }else{
    document.getElementById('mobileerr').innerHTML="";
  }
  var mail=document.getElementById('inputmailid').value;
  if(null==mail||mail==""){
    document.getElementById('mailerr').innerHTML="You can't leave this empty.";
  }else{
    document.getElementById('mailerr').innerHTML="";
  }
  var pswd=document.getElementById('inputPassword').value;
  if(null==pswd||pswd==""){
    document.getElementById('passworderr').innerHTML="You can't leave this empty.";
  }else{
    document.getElementById('passworderr').innerHTML="";
  }
}