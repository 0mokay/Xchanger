document.querySelector("#go").addEventListener("click",function() {

var http = new XMLHttpRequest();
var url = 'http://xchanger-addon.herokuapp.com/login';
var params = 'username='+document.getElementById("uname").value+'&password='+document.getElementById("psw").value+'';
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {
    document.querySelector("#go").value="one moment please..";
            document.querySelector("#go").disabled=true;
//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
	if(http.responseText=='{"message":"true","body":"login successful"}'){





        var obj;

        var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      obj=JSON.parse(this.responseText);
browser.storage.local.set({obj:obj});

browser.storage.local.set({ logged: true });

                window.location.replace("https://vsagent.bet9ja.com/bet9ja-cashier-league/login/");
           //                                     window.close();

    }
  };
  xhttp.open("GET", "http://xchanger-addon.herokuapp.com/data/"+document.querySelector("#uname").value, true);
  xhttp.send();




       }
       else {
           alert("login failed");
                           window.close();
       }
    }
}

http.send(params);

});
