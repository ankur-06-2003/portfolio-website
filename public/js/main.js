
function displayBar(){
    
    document.querySelector("#sidebar").style.display='block';
    
  
}
function CloseBar(){
    document.querySelector("#sidebar").style.display="none";
    
    
}
function removeSidenav(){
    document.querySelector("#sidebar").style.display="none";
}
function mySkill(){
    document.querySelector("#tab-contents-edu").style.display="none";
    let skl=document.querySelector(".tab-contents");
    skl.style.display="block"
    document.querySelector("#my-edu").setAttribute("class","tab-links")
    document.querySelector("#my-skill").classList.add("active-link")
}
// function bodyscroll(){
//     if(window.innerHeight(1000)){
//         document.querySelector(".css-progress").style.width="80%";
//     // .progress:hover .css-progress{
//     let a= document.querySelectorAll(".html-progress");
//     a.forEach((curr)=>{
//         curr.style.width='90%'
//     })}
//     //     width: 80%;
//     // }
//     // .progress:hover .api-progress{
//     //     width: 70%;
//     // }
//     // .progress:hover .html-progress{
//     //     width: 90%;
//     }

function edu(){
    document.querySelector(".tab-contents").style.display="none";
    let skl=document.querySelector("#tab-contents-edu");
    skl.style.display="block"
    document.querySelector("#my-skill").setAttribute("class","tab-links")
    document.querySelector("#my-edu").classList.add("active-link")
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

