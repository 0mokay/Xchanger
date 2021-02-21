console.log("in debit");
function showDebit(username) {
    fetch('http://xchanger-addon.herokuapp.com/debit_status/tik')
    .then(response => response.json())
    .then(data =>{
        let h4=document.createElement("h4");
h4.id='debt-amount';
h4.textContent='debt amount: '+data.amount;
document.body.appendChild(h4);
/*let sucAlert=document.createElement('div');
sucAlert.innerHTML='<div id="debt-alert" class="alert alert-success" role="alert">Debt Refreshed</div>';
*/

document.querySelector('#debt-amount').addEventListener('click', function (e) {
    fetch('http://xchanger-addon.herokuapp.com/debit_status/'+username)
    .then(response => response.json())
    .then(data =>{
        e.target.textContent='debt amount: '+data.amount;
        alert("debt refreshed");
    });
});

    });     
}
