const cbtna = document.getElementById("cbtna");
const cbtnb = document.getElementById("cbtnb");
const cbtnc = document.getElementById("cbtnc");

cbtna.addEventListener('click',()=>{
  let w = window.innerWidth
  if (w < 700){
    document.getElementById("ul_content").style.width="0";
    setTimeout(() => { document.getElementById("ul_content").className = "ul_content_responsive"; },1000)
    setTimeout(() => { document.getElementById("ul_content").className = "ul_content"; 
    document.getElementById("ul_content").style.width="";
    },1100)
    document.getElementById("closebtn").className = "btnclose";
  }
  });

  cbtnb.addEventListener('click',()=>{
    let w = window.innerWidth
    if (w < 700){
      document.getElementById("ul_content").style.width="0";
      setTimeout(() => { document.getElementById("ul_content").className = "ul_content_responsive"; },1000)
      setTimeout(() => { document.getElementById("ul_content").className = "ul_content"; 
      document.getElementById("ul_content").style.width="";
      },1100)
      document.getElementById("closebtn").className = "btnclose";
    }
    });

    cbtnc.addEventListener('click',()=>{
      let w = window.innerWidth
      if (w < 700){
        document.getElementById("ul_content").style.width="0";
        setTimeout(() => { document.getElementById("ul_content").className = "ul_content_responsive"; },1000)
        setTimeout(() => { document.getElementById("ul_content").className = "ul_content"; 
        document.getElementById("ul_content").style.width="";
        },1100)
        document.getElementById("closebtn").className = "btnclose";
      }
      });



  export {cbtna,cbtnb,cbtnc};
  