//function Loadjson(file,callback){
  //var xhr = new XMLHttpRequest();
  //xhr.overrideMimeType("application/json");
  //xhr.open("GET",file,true);
  //xhr.onreadystatechange =function(){
    //if(xhr.readyState === 4 && xhr.status =="200"){
    //callback(xhr.responseText);
  //}
//};
//xhr.send("null");
//}
//Loadjson("data.json",function(text)
//{
  //var data= JSON.parse(text);
//  console.log(data);
//  basics(data.details);
//  careerInfo(data.Career);
//  education(data.education);
//  skills(data.skills);
//  achievments(data.achievments);
//})
   function loadjson(file){
     return new Promise((resolve,reject)=>{
       return fetch(file).then(response=>{
         if(response.ok){
           resolve(response.json());
         }else{
           reject(new Error('error'));
         }
       })
     })
   }
   var newfile=loadjson("data.json");
   newfile.then(data=>{
     console.log(data);
     basics(data.details);
     careerInfo(data.Career);
     education(data.education);
     skills(data.skills);
     achievments(data.achievments);
   })
var ch1 =document.querySelector(".child1")
function basics(det){
  var Image =document.createElement("img");
  Image.src =det.Image;
  ch1.appendChild(Image);
  var Name=document.createElement("h1");
  Name.textContent = det.Name;
  ch1.appendChild(Name);

  var Ph = document.createElement("h3");
  Ph.textContent = det.Phno;
  ch1.appendChild(Ph);

  var mail=document.createElement("a");
  mail.textContent=det.Email;
  ch1.appendChild(mail);

  var adds =document.createElement("h2")
  adds.textContent="Address:";
  ch1.appendChild(adds);

  var hr=document.createElement("hr");
  ch1.appendChild(hr);

  var  add=document.createElement("h4");
  add.textContent =det.Address;
  ch1.appendChild(add);

}
var ch2 =document.querySelector(".child2")
function careerInfo(info)
{

  var car =document.createElement("h2");
  car.textContent= "Career:";
  ch2.appendChild(car);

  var hr=document.createElement("hr");
  ch2.appendChild(hr);

  var inf =document.createElement("p");
  inf.textContent=info.info;
  ch2.appendChild(inf);

  var hr=document.createElement("hr");
  ch2.appendChild(hr);
}

function education(edu){
var e=document.createElement("h2");
e.textContent="Educational Qualification";
ch2.appendChild(e);

var hr=document.createElement("hr");
ch2.appendChild(hr);

var tab =document.createElement("table");
tab.border="1";
ch2.appendChild(tab);

tabdata="<tr><td>"+"Qualification"+"</td><td>"+"Institution"+"</td><td>"+"Percentage"+"</td><td>"+"Year"+"</td></tr>";

for(i=0;i<edu.length;i++){
  tabdata +="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institution+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].Year+"</td></tr>";
  tab.innerHTML =tabdata;
  }
}
function skills(skillinfo)
{
 var hd=document.createElement("h2");
 hd.textContent="Technical Skills";
 ch2.appendChild(hd);

 var hr=document.createElement("hr");
 ch2.appendChild(hr);

for(i=0;i<skillinfo.length;i++)
{
  var title=document.createElement("h4");
  title.textContent=skillinfo.title;
  ch2.appendChild(title);

  var eduul=document.createElement("ul");
  var eduli=document.createElement("li");
  eduli.textContent=skillinfo[i].info;
  eduul.appendChild(eduli);
  ch2.appendChild(eduul);
}
}
function achievments(a) {
   var ab=document.createElement("h2");
   ab.textContent="Achievments";
   ch2.appendChild(ab);

   for(i=0;i<a.length;i++)
   {
     var aul=document.createElement("ul");
     var ali=document.createElement("li");

     ali.textContent=a[i].info;
     aul.appendChild(ali);
     ch2.appendChild(aul);
   }
 }


function openpage(){
  window.open("sample.html","_self",true)
}
