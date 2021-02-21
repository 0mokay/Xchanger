
//force setInterval to stop
//4 RB
browser.storage.local.get({obj:""},function(result){
  var cUsername;
  cUsername=result["obj"][0].name.split(" ")[0];

  if(parent.document.querySelector("#app-container"))
        window.top.location.href=parent.document.querySelector("iframe").src;
else {
  console.log("it's shop");
}


showDebit(cUsername);
/*if(document.querySelector("iframe"))
window.location.replace(document.querySelector('iframe').src);
*/



if (/shopadmin/.test(document.location.href)){
//logout function to call
  function logoutBF() {
    browser.storage.local.set({obj:null});
        browser.storage.local.set({ autoReplaceOnLoad: false });
                    browser.storage.local.set({ autoReplacePeriodically: false });
                        browser.storage.local.set({ enableSubscription: false });
         browser.storage.local.set({ subscriptionUrl: "" });
            browser.storage.local.set({ logged: false });
            alert("logged out");
 document.getElementsByTagName('html')[0].remove();
             }


  let viewIn=false;
  function onStart() {
    document.querySelector("body").style.backgroundColor="white";
    let bLink=document.createElement("link");
    bLink.rel="stylesheet";
    bLink.href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    bLink.integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T";
    bLink.crossOrigin="anonymous";
    document.body.appendChild(bLink);


    let logoutB=document.createElement("button");
logoutB.textContent="Logout";
logoutB.style.cssText="float:right;background:white; color:black";
document.body.appendChild(logoutB);

logoutB.addEventListener("click", function () {
logoutBF();
})


document.addEventListener("click",function () {
    if(document.querySelector(".ui-dialog").style.display=="block" && viewIn){
      viewIn=false;
        document.querySelector(".ui-button-icon-only").click();
}
});

  }

onStart();










async function asyncCall() {
  console.log('calling');
  document.querySelector("#base").style.cssText =await "visibility: hidden; position: absolute; background-color: white";
  //solve this by checking existence like in table ticket
//await document.querySelector("#ui-id-2").click();
var innerList="";


let win;
let idT;
let eventI;
let dateT;
    var check=await setInterval(async function() {
      if (document.querySelectorAll("#tickets td")[18].textContent) {

        //console.log(document.querySelectorAll("#tickets td")[18].textContent);
        for(var i=18;i<=139;i=i+11){
          win=parseInt(document.querySelectorAll("#tickets td")[i].textContent);
          idT=document.querySelectorAll("#tickets td")[i-8].textContent;
          eventI=document.querySelectorAll("#tickets td")[i-6].textContent;
          dateT=document.querySelectorAll("#tickets td")[i-7].textContent;
          if(win>0){
            innerList+=
            "<li id='"+idT+" "+dateT+" "+eventI+"' class='NTL' style='margin:auto'><span>"+win+
            "</span> <input type='button' value='%' style='width:auto;display:none'> <select style='display:none'></select> <input type='button' class='btn btn-warning' value='V' style='width:auto;' > <input id='myDelete' class='delete btn btn-danger' style='display:none' type='button' value='D' style='width:auto;' > <div class='percents'> <input type='button' value='50%' class='percent' style='width:auto;'> <input type='button' class='percent' value='45%' style='width:auto;'> <input type='button' class='percent' value='40%' style='width:auto;'> <input type='button' class='percent' value='35%' style='width:auto;'> <input type='button' class='percent' value='30%' style='width:auto;'> <input type='button' class='percent' value='25%' style='width:auto;'> <input type='button' class='percent' value='20%' style='width:auto;'> <input type='button' value='15%' class='percent' style='width:auto;'> <input type='button' value='10%' class='percent' style='width:auto;'> <input type='button' value='5%' class='percent' style='width:auto;'></div></li><br>";

          }

      }


if(innerList==""){
  innerList="<h2 style='text-align:center;'>Empty</h2>";
}
         ul.innerHTML=innerList;


//calling view
ul.childNodes.forEach(function (e) {
  if (e.id) {
    vButton=e.children[3];
    vButton.addEventListener("click", function () {
    let liId=e.id;
    let viewPars=liId.split(" ");
          let newScript = document.createElement('script');
      newScript.innerHTML="view_ticket("+viewPars[0]+",'"+viewPars[1]+" "+viewPars[2]+"','',"+viewPars[3]+",'Combined','0','0')";
      document.body.appendChild(newScript);
            newScript.remove();
            console.log(viewPars);
            setTimeout(function(){
viewIn=true;
document.querySelector(".ui-button-icon-only").style.visibility="hidden";

},200);
    });
  }
});


//create next and back button, assign events also
let backB=document.createElement("input");
backB.type="button";
backB.value="back";
backB.classList.add("btn","btn-secondary");
backB.id="backB";
ul.appendChild(backB);
backB.addEventListener("click", function () {
  document.querySelector("button.btn-tab:nth-child(1)").click();
  asyncCall();
});
let pageN=document.querySelector("#ticketbuttons > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)").textContent;
let spanPN=document.createElement("span");
spanPN.textContent=pageN;
spanPN.style.fontSize="13px";
spanPN.style.fontWeight="lighter";
spanPN.id="pageNum";
ul.appendChild(spanPN);

let nextB=document.createElement("input");
nextB.type="button";
nextB.value="next";
nextB.classList.add("btn","btn-secondary");
nextB.id="nextB";
ul.appendChild(nextB);
nextB.addEventListener("click", function () {
  console.log("next");
  document.querySelector("button.btn-tab:nth-child(2)").click();
  asyncCall();
});

       browser.storage.local.get({obj:""},function(result){
        let objWin;
        let ticketWin;
        for (let liI = 0; liI < document.querySelectorAll(".NTL span").length; liI++) {
           for(let o=result["obj"].length-1;o>=0;o--){
             objWin=result["obj"][o].input;
             if(document.querySelectorAll(".NTL span")[liI].textContent==objWin && !document.querySelectorAll(".NTL span")[liI].hasAttribute('id')){
              document.querySelectorAll(".NTL span")[liI].id=result["obj"][o]._id;
               console.log(document.querySelectorAll(".NTL span")[liI].textContent,document.querySelectorAll(".NTL span")[liI].id,result["obj"][o]._id);
continue;
             }



                      }



                      var currentTicketWin=document.querySelectorAll(".NTL span")[liI];
//                      currentTicketWin.textContent=parseInt(currentTicketWin.textContent);
                      currentTicketWin.setAttribute("data-id", document.querySelectorAll(".NTL span")[liI].textContent);
                      var winBeforeEmpty=currentTicketWin.textContent.length;
                     var winR=currentTicketWin.textContent.split("");
                     currentTicketWin.textContent=currentTicketWin.textContent[0]+""+currentTicketWin.textContent[1];
                     for (var i = 2; i < winBeforeEmpty; i++) {
                      winR[i]="*";
                      //the if else will have no impact, i will leave it here just in case the .00 is needed again
                    /*  if(i+2==winBeforeEmpty-1)
                        currentTicketWin.textContent+=".";
                       else */
                        currentTicketWin.textContent+=winR[i].toString();

                    }

                      if(document.querySelectorAll(".NTL span")[liI].hasAttribute('id'))
                        {
                          if(document.querySelector("#pageNum").textContent.includes("Page 1")) {
                       document.querySelectorAll(".NTL span")[liI].parentElement.children[4].style.cssText="display:inline;background-color:red";
                             }
                                document.querySelectorAll(".NTL span")[liI].parentElement.children[2].disabled=true;
        var percentsList=document.querySelectorAll(".NTL span")[liI].parentElement.children[5].children;
for (var i = 0; i < percentsList.length; i++) {
  percentsList[i].disabled=true;
}
        document.querySelectorAll(".NTL span")[liI].parentElement.children[4].addEventListener("click", function (dButton) {
            var liNodes=dButton.target.parentElement;
            if(!liNodes.childNodes[0].textContent.includes("/"))
            var confirmAnswer=confirm("Are you sure you want to delete");
              if(confirmAnswer){

                            let cId=dButton.target.parentElement.childNodes[0].id;
          fetch('http://xchanger-addon.herokuapp.com/delete/'+cUsername, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: cId})
        })
        .then(res=>res.json())
        .then(res =>{
        console.log(res.message, cUsername, cId);
        dButton.target.style.display="none";
        for (var i = 0; i < liNodes.children[5].children.length; i++) {
          liNodes.children[5].children[i].disabled=false;
        }
            })
      .then(()=>{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            let cObj=JSON.parse(this.responseText);
      browser.storage.local.set({obj:cObj});
          }
        };
        xhttp.open("GET", "http://xchanger-addon.herokuapp.com/data/"+cUsername, true);
        xhttp.send();
      });

 }
            });
                     }
                     if(liI+1==document.querySelectorAll(".NTL span").length)
                     changeColor();
        }

      });



      //this is posting input process when user selects a percent
        document.querySelectorAll(".percent").forEach(function (cInputB) {



        cInputB.addEventListener("click",function (e){
          //this for was in res
          for (var i = 0; i < 10; i++) {
            e.target.parentElement.children[i].disabled=true;
            }
document.querySelectorAll(".delete").forEach(function(tempDButton){
    if(tempDButton.style.backgroundColor=="lightblue"){
            console.log("2");
       tempDButton.disabled=true;
       }
})
          browser.storage.local.get({obj:""},function(result){
            cUsername=result["obj"][0].name.split(" ")[0];
           var date=[];
           date=new Date().toString().split(" ");
           let mydate=date[1]+" "+date[2]+", "+date[3]+" "+date[4];
let input=e.target.parentElement.parentElement.childNodes[0].getAttribute('data-id');
              input=parseFloat(input);
let li=e.target.parentElement.parentElement;
//console.log(input);
let output=e.target.value.replace('%', '');
              output=parseFloat(output);
                var d = new Date();
  var n = d.getTime();
           fetch('http://xchanger-addon.herokuapp.com/insert_new/'+cUsername, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: cUsername+" "+mydate, input: input, output: output, event_id: "", is_mine: false, time_stamp: n.toString() })
  })
  .then(res=>res.json())
    .then(res =>{
       if(res.message){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            let cObj=JSON.parse(this.responseText);
        browser.storage.local.set({obj:cObj});
        console.log(cObj[cObj.length-1]);
          }
        };
        xhttp.open("GET", "http://xchanger-addon.herokuapp.com/data/"+cUsername, true);
        xhttp.send();
        // console.log(res.winningResult.ops[0]._id);

e.target.parentElement.parentElement.childNodes[0].textContent=e.target.parentElement.parentElement.childNodes[0].textContent+"/"+output;
if(document.querySelector("#pageNum").textContent.includes("Page 1")) {
  let deleteInbput=li.children[4];
deleteInbput.style.cssText="display:inline;background-color:red";//this was lightBlue
}
li.children[0].id=res.winningResult.ops[0]._id;

deleteInbput.addEventListener("click", function (dButton) {
                  var confirmAnswer=confirm("Are you sure you want to delete");
  if(confirmAnswer){
    
  if(deleteInbput.style.backgroundColor=="lightblue")
{
  let cId=dButton.target.parentElement.childNodes[0].id;
  fetch('http://xchanger-addon.herokuapp.com/delete_prev/'+cUsername, {
method: 'POST',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
}
})
.then(res=>res.json())
.then(res =>{
//console.log(res.message);
deleteInbput.style.display="none";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let cObj=JSON.parse(this.responseText);
browser.storage.local.set({obj:cObj});
  }
};
xhttp.open("GET", "http://xchanger-addon.herokuapp.com/data/"+cUsername, true);
xhttp.send();
});
}

else {
  console.log("delete wrong");
}
    
}
    });
       }

    });


         });
            
            setTimeout(function(){
                            document.querySelector("#myDelete").style.backgroundColor="red";
            },100000);

            
            
        });
            

                });

clearInterval(check);
//changeColor();
      }
    },100);
    
}
setTimeout(function () {
  document.querySelector("#ui-id-2").click();
  asyncCall();
  timerF();
},1000);

function refreshFirstPage() {
if(document.querySelector("#pageNum").textContent.includes("Page 1")) {
  document.querySelector("button.btn-tab:nth-child(1)").click();
  asyncCall();
}
}

let refresh=setInterval(refreshFirstPage,10000);


let startStop=document.createElement("button");
startStop.textContent="stop";
startStop.style.cssText="display:inline-block;margin-right:1%;";
div=document.createElement("div");
document.querySelector("body").appendChild(startStop);

div.style.cssText="width:100px;background-color:white;color:black;display:inline-block";
let min=30;
let hr=0;
document.querySelector("body").appendChild(div);

var ul=document.createElement("ul");
ul.style.cssText="width:100%;background-color:white;margin-top:10%; color:black; font-size:22px; font-weight: bold;text-align:center";
var myDivContain=document.createElement("div");
myDivContain.id="myDivContain";
document.querySelector("body").appendChild(myDivContain);
document.querySelector("body #myDivContain").appendChild(ul);


function timerF() {
div.innerHTML=" <h3 style='text-align:center;'> 0"+hr+":"+min+"min</h3>";
if(min==0){
  min=30;
  clearInterval(timer);
  clearInterval(refresh);
  startStop.textContent="start";
    var restarTimer=confirm("do you want to restart the timer?");
    if(restarTimer){
        startStop.click();
    }
}
min--;

}
let timer=setInterval(timerF,60000);

startStop.addEventListener("click", function () {
  if(startStop.textContent=="start"){
    timer=setInterval(timerF,60000);
    refresh=setInterval(refreshFirstPage,10000);
    startStop.textContent="stop";
  }
  else if (startStop.textContent=="stop") {
    clearInterval(timer);
    clearInterval(refresh);
    startStop.textContent="start";
  }
  console.log("done");
});

function showCode(){
    
    var codeButton=document.createElement("button");
    codeButton.textContent="show Code";
    codeButton.id="codeB";
    document.body.appendChild(codeButton);

    codeButton.addEventListener("click", function(){
        
        
  var xhttpC = new XMLHttpRequest();
  xhttpC.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
  var codeRes=JSON.parse(this.responseText);
if(codeRes["status"])
    alert("your code is "+codeRes["message"]);
            
        }
  };
        
          xhttpC.open("GET", "http://xchanger-addon.herokuapp.com/login_unique_code_user/"+cUsername, true);
  xhttpC.send();

    });
    
}
var buttonR=document.createElement("button");
buttonR.id='refreshB';
buttonR.textContent="refresh";
document.body.appendChild(buttonR);

buttonR.addEventListener("click", function(){
document.querySelector("button.btn-tab:nth-child(1)").click();
asyncCall();
});

    showCode();
    



}

});
