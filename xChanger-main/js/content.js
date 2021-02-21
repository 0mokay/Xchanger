
if(sessionStorage.getItem("reload") != "false" && document.querySelector("li").getAttribute("aria-selected") != "false")
{
        sessionStorage.setItem("reload","false");
     window.location.reload(true);
}
var win;
/*for(var i=18;i<=143;i=i+11){
     win=document.querySelectorAll("td")[i].textContent;
         document.querySelectorAll("td")[i].textContent=win+"ok";
 }*/

//alert(document.querySelector("li").getAttribute("aria-selected"));
//alert(document.querySelector("*").innerHTML);
document.getElementById("base").onclick = function(event){

    
  const isButton = event.target.id === 'ui-id-2';
  const isSpan1 = event.target.innerHTML === '&lt;&lt;';
  const isSpan2 = event.target.innerHTML === '&gt;&gt;';
    


  if (isButton || isSpan2) {
      
	    /*  var slowLoad = window.setTimeout( function() {
	document.getElementById('base').style.display="none";
    }, 10000 );*/


	//document.getElementById('base').style.opacity="0";


setTimeout(function(){
	document.getElementById('base').style.opacity="1";

		},3000);
      


                      sessionStorage.setItem("reload","true");

 /*for(var i=1;i<12;i++){
     for(var j=0;j<=8;j++){
         document.querySelectorAll("td")[j].textContent="0";
     }
 }*/

     //         window.clearTimeout( slowLoad );

}
        if(isButton){
        if(sessionStorage.getItem("ticketTimes")!="two"){
        sessionStorage.setItem("ticketTimes","two");
}
else{
    	document.getElementById('base').style.display="none";
                sessionStorage.setItem("ticketTimes","one");
}
    }
    
      if (isSpan1) {
      	document.getElementById('base').style.display="none";
                          sessionStorage.setItem("ticketTimes","one");
      }
  const isButton2 = event.target.id === 'ui-id-5';
  if (isButton2){
			document.getElementById('ui-tabs-4').style.display="none";
  }
    
    
      const isView = event.target.textContent === 'View';

    if (isView) {
    	document.getElementById('dialog-div').style.opacity="0";


setTimeout(function(){
	document.getElementById('dialog-div').style.opacity="1";

		},3000);
    }
    
                browser.storage.local.set({ enableSubscription: false });
            browser.storage.local.set({ enableSubscription: true });
  // alert(event.target.id);
    setTimeout(function(){
	document.getElementById('base').style.pointerEvents= "none";
                sessionStorage.setItem("ticketTimes","one");

		},360000);
	}


//var c;
//alert(document.querySelectorAll("tbody td")[29].textContent);
/*for(var i=18;i<=132;i=i+11){
    c=document.querySelectorAll("tbody td")[18].innerHTML;
document.querySelectorAll("tbody td")[i].innerHTML=c;
}*/

