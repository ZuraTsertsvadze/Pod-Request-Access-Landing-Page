"use strict"

const emailVal= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const search=document.querySelector(".search");
const error=document.querySelector(".error");
const request=document.querySelector(".request");


const cheacker=()=>{


request.addEventListener("click",()=>{

if(!emailVal.test(search.value)){

    error.style.display="block";

}else{


    error.style.display="none";

}

})


}
