
function displayBar(){
    document.querySelector("#bar").style.display="none";
    document.querySelector("#xcross").style.display='block';
    document.querySelector(".container nav ul").style.display='block';
  
}
function CloseBar(){
    document.querySelector("#xcross").style.display="none";
    document.querySelector("#bar").style.display="block";
    document.querySelector(".container nav ul").style.display='none';
}
function mySkill(){
    document.querySelector("#tab-contents-edu").style.display="none";
    let skl=document.querySelector(".tab-contents");
    skl.style.display="block"
    document.querySelector("#my-edu").setAttribute("class","tab-links")
    document.querySelector("#my-skill").setAttribute("class","tab-links  active-link")
}
function edu(){
    document.querySelector(".tab-contents").style.display="none";
    let skl=document.querySelector("#tab-contents-edu");
    skl.style.display="block"
    document.querySelector("#my-skill").setAttribute("class","tab-links")
    document.querySelector("#my-edu").setAttribute("class","tab-links  active-link")
}
function about(){
    if(window.innerWidth<=800){
        window.scrollTo(0,280);
    }
    else{
        window.scrollTo(0,800);
    }
}
function contact(){
    if(window.innerWidth<=800){
        window.scrollTo(0,1200);
    }
    else{
        window.scrollTo(0,1800);
    }
}
function skill(){
    if(window.innerWidth<=800){
        window.scrollTo(0,800);
    }
    else{
        window.scrollTo(0,1300);
    }
}
function showContactInput(){
    document.querySelector("#contact-800").style.display="none";
    // document.querySelector("#contact-800").style.transform="rotateX(180deg)";
    document.querySelector("#contact-div-1").style.display="block";
    // window.scrollTo(0,1500)
}
function showContact800(){
    document.querySelector("#contact-div-1").style.display="none";
    document.querySelector("#contact-800").style.display="block";
    // window.scrollTo(0,1500)
}

