let cbtn = document.getElementById("closebtn");
const obtn = document.getElementById("openbtn");




obtn.addEventListener('click',()=>{
  
    document.getElementById("ul_content").className = "overlay";
    setTimeout(() => { document.getElementById("ul_content").style.width = "100%"; }, .9000)
    document.getElementById("closebtn").className = "active_btnclose";
    document.getElementsByTagName("li").className = "li_responsive";
})  

  
  /* Close when someone clicks on the "x" symbol inside the overlay */

  cbtn.addEventListener('click',()=>{
    
    document.getElementById("ul_content").style.width="0";
    setTimeout(() => { document.getElementById("ul_content").className = "ul_content_responsive"; },1000)
    setTimeout(() => { document.getElementById("ul_content").className = "ul_content"; 
    document.getElementById("ul_content").style.width="";
    },1100)
    document.getElementById("closebtn").className = "btnclose";
  })

  export {obtn,cbtn};