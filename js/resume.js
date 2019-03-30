var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}



var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;


if(!idb in window)
{
  console.log("indexedDB is not supported");
}
// indexedDB creations
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDB is created");
open.onupgradeneeded=function (e){
  var request=e.target.result;
  request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}
open.oneerror=function(error){
  console.log("Error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  var info=store.get(paravalue);
  info.onsuccess=function(data){
    console.log(data.target.result);
    personalinfo(data.target.result);
     //career(data.target.result);
  }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function  personalinfo(pi){
  var career=document.createElement("h2");
  career.textContent=pi.career;
  left.append(career);
  var image=document.createElement("img");

  image.src="images/pimage.svg";
  image.alt=pi.name;
  left.append(image);

var hh=document.createElement("h2");
hh.textContent=pi.name;
left.append(hh);

var hy=document.createElement("h3");
hy.textContent=pi.phno;
left.append(hy);

var hz=document.createElement("h4");
hz.textContent=pi.email;
left.append(hz);


var hi=document.createElement("h3");
hi.textContent=pi.adress;
left.append(hi);



  var hr=document.createElement(hr);
  right.append(hr);


  var head11=document.createElement("h1");
  head11.textContent="education details";
  right.append(head11);

var table=document.createElement("table");
table.border="1";
var tr1="<tr><th>institute</th><th>branch</th><th>year</th><th>per</th><tr>";
var tr2="";
for(var i in pi.education)
{
  tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].year+"</td><td>"+pi.education[i].per+"</td></tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);

var hr=document.createElement("hr");
right.append(hr);
var head=document.createElement("h1");
head.textContent="skills";
right.append(head);
var sl=document.createElement("h2");
sl.textContent=pi.skills;
right.append(sl);





}
