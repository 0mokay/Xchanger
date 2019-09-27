//alert(browser.storage.local.get("obj").value);
document.addEventListener("click",function(event){
      const isButton = event.target.id === 'ui-id-2';
  const isSpan1 = event.target.innerHTML === '&lt;&lt;';
  const isSpan2 = event.target.innerHTML === '&gt;&gt;';
    
//alert(event.target.id);

  if (isButton || isSpan2 || isSpan1) {
      document.querySelector('#base').style.opacity="0";


setTimeout(function(){
	document.getElementById('base').style.opacity="1";

		},2000);
  }
});


function updateurl(username){
    	document.querySelector('body').style.pointerEvents= "none";
        document.querySelector("body").style.border="1px solid white";
var obj;
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
              obj=JSON.parse(this.responseText);
browser.storage.local.set({obj:obj});
document.querySelector("body").style.border="1px solid black";
	document.querySelector('body').style.pointerEvents= "auto";
}
  };
  xhttp.open("GET", "http://xchanger-addon.herokuapp.com/data/"+username, true);
  xhttp.send();

}



browser.storage.local.get({obj:""},function(result){   

 var username=result["obj"][0].name.split(" ")[0];
    
   if(result["obj"].length>0){

           document.querySelector("#ui-id-2").onclick=function(){
   updateurl(username);
}
           
       if(document.querySelector("li").getAttribute("aria-selected") != "false")
{     
updateurl(username);
}

       
           if(document.querySelectorAll("li")[1].getAttribute("aria-selected") != "false")
{              	


    var win;
    var percentinput;
    var thisInput;
    var percent;
    var thisOutput;
    var newoutput;

for(var i=18;i<=139;i=i+11){
     win=document.querySelectorAll("td")[i].textContent;
    for(var j=0;j<result["obj"].length;j++){
        if(parseFloat(win).toFixed()==result["obj"][j].input){
            thisInput=result["obj"][j].input;
            thisOutput=result["obj"][j].output;
                      	  		  	  percentinput=(parseFloat(thisInput)/100);
            	  percent=percentinput*parseFloat(thisOutput);
            	  newoutput=parseFloat(thisInput)-percent;
            newoutput=Math.ceil(newoutput / 5) * 5;
            newoutput=newoutput.toFixed(2);
         document.querySelectorAll("td")[i].textContent=newoutput;
        }
    }
 }

}

}
    
});
