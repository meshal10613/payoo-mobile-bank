document.getElementById('add-money').style.display = 'none';
document.getElementById('cashout').style.display = 'none';
document.getElementById('transfer').style.display = 'none';
document.getElementById('bonus').style.display = 'none';
document.getElementById('transactions').style.display = 'none';
document.getElementById('bill').style.display = 'none';

function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}

document.getElementById('Add-Money')
    .addEventListener('click',
        function(){
            handleToggle('add-money', 'block');
            handleToggle('cashout', 'none');
            handleToggle('transfer' ,'none');
            handleToggle('bonus' ,'none');
            handleToggle('bill' ,'none');
            handleToggle('transactions' ,'none');
        }
    );

document.getElementById('Cash-Out')
    .addEventListener('click',
        function(){
            handleToggle('add-money', 'none');
            handleToggle('cashout', 'block');
            handleToggle('transfer' ,'none');
            handleToggle('bonus' ,'none');
            handleToggle('bill' ,'none');
            handleToggle('transactions' ,'none');
        }
    );

document.getElementById('Transfer')
    .addEventListener('click',
        function(){
            handleToggle('add-money', 'none');
            handleToggle('cashout', 'none');
            handleToggle('transfer' ,'block');
            handleToggle('bonus' ,'none');
            handleToggle('bill' ,'none');
            handleToggle('transactions' ,'none');
        }
    );
document.getElementById('Bonus')
    .addEventListener('click',
        function(){
            handleToggle('add-money', 'none');
            handleToggle('cashout', 'none');
            handleToggle('transfer' ,'none');
            handleToggle('bonus' ,'block');
            handleToggle('bill' ,'none');
            handleToggle('transactions' ,'none');
        }
    );
document.getElementById('Bill')
    .addEventListener('click',
        function(){
            handleToggle('add-money', 'none');
            handleToggle('cashout', 'none');
            handleToggle('transfer' ,'none');
            handleToggle('bonus' ,'none');
            handleToggle('bill' ,'block');
            handleToggle('transactions' ,'none');
        }
    );
document.getElementById('Transaction')
    .addEventListener('click',
        function(){
            handleToggle('add-money', 'none');
            handleToggle('cashout', 'none');
            handleToggle('transfer' ,'none');
            handleToggle('bonus' ,'none');
            handleToggle('bill' ,'none');
            handleToggle('transactions' ,'block');
        }
    );