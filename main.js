inputNameEle=document.getElementById("inputName");
inputUrlEle=document.getElementById("inputUrl");
linkValueEle=document.getElementById("linkValue")
alertName=document.getElementById("alertName")
alertUrl=document.getElementById("alertUrl")



var siteList=[];

// for(var i=0; i<siteList.length;i++){
    
//   if(siteList[i].site.name==inputNameEle)  {
//     console.log("false");

//   }

// }
if(localStorage.getItem('sites') !==null ){
    siteList=JSON.parse(localStorage.getItem('sites'))
   
    display(siteList)
}

//ADD
function addFunction(){
    if(validName()==true  && validSite()==true){

       inputNameValue=inputNameEle.value;
      inputLinkValue=inputUrlEle.value;
 
      var site = {
        name:inputNameValue ,
        link:inputLinkValue
        }
 siteList.push(site) 
 localStorage.setItem("sites",JSON.stringify(siteList) ); 
 display()
    
}
for(var i=0; i<siteList.length;i++){
    
    if(siteList[i].name==inputNameValue && siteList[i].name==inputLinkValue)  {
      // alert("true")
  
    }else{
        // alert("false")
    }
  
  }
}
   

function display(){
    console.log(siteList);
   var temp = "";

   for(var i =0 ; i<siteList.length; i++){
    temp+= `  <tr class="py-5">
    <td><p class="fs-4 fw-bold" id="data">`+siteList[i].name+`</p></td>
    <td>
        <a href=" `+siteList[i].link+`  " class="btn btn-info" id="linkValue" target="_blank">Visit</a>
        <a href="#" class="btn btn-danger" onclick="delLink(`+i+`)">Delete</a>
    </td>
    
     </tr>
    `
}
   document.getElementById("myTable").innerHTML=temp
}




function delLink(index)
{
    console.log(index);
    siteList.splice(index,1)
    localStorage.setItem("sites",JSON.stringify(siteList) ); 

    display()
}

//Validation 

inputNameEle.addEventListener("blur",validName)

function validName(){
      let reg =/^[A-Z][a-z]{3,10}[0-9]?$/
   if(reg.test(inputNameEle.value) ==true){
    alertName.classList.replace("d-block","d-none")
    inputNameEle.classList.add("is-valid")
    inputNameEle.classList.remove("is-invalid")
    return true

   }else{
    alertName.classList.replace("d-none","d-block")
    inputNameEle.classList.add("is-invalid")
    inputNameEle.classList.remove("is-valid")
    return false
   }
}



inputUrlEle.addEventListener("blur",validSite)


function validSite(){    
     let regLink = /^(ftp|http|https):\/\/[^ "]+$/;
   if(regLink.test(inputUrlEle.value) ==true){
    alertUrl.classList.replace("d-block","d-none")
    inputUrlEle.classList.add("is-valid")
    inputUrlEle.classList.remove("is-invalid")
    return true

   }else{
    alertUrl.classList.replace("d-none","d-block")
    inputUrlEle.classList.add("is-invalid")
    inputUrlEle.classList.remove("is-valid")
    return false
   }
}


