document.getElementById('add-money').style.display = 'none';
document.getElementById('cashout').style.display = 'none';
document.getElementById('transfer').style.display = 'none';

function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}

document.getElementById('Add-Money')
    .addEventListener('click',
        function(){
            handleToggle('add-money', 'block');
            handleToggle('cashout', 'none');
            handleToggle('transfer' ,'none');
            // document.getElementById('add-money').style.display = 'block';
            // document.getElementById('cashout').style.display = 'none';
            // document.getElementById('transfer').style.display = 'none';
        }
    );

document.getElementById('Cash-Out')
    .addEventListener('click',
        function(){
            handleToggle('add-money', 'none');
            handleToggle('cashout', 'block');
            handleToggle('transfer' ,'none');
        }
    );

document.getElementById('Transfer')
    .addEventListener('click',
        function(){
            handleToggle('add-money', 'none');
            handleToggle('cashout', 'none');
            handleToggle('transfer' ,'block');
        }
    );
document.getElementById('Bonus')
    .addEventListener('click',
        function(){
            handleToggle('add-money', 'none');
            handleToggle('cashout', 'none');
            handleToggle('transfer' ,'none');
        }
    );
document.getElementById('Bill')
    .addEventListener('click',
        function(){
            handleToggle('add-money', 'none');
            handleToggle('cashout', 'none');
            handleToggle('transfer' ,'none');
        }
    );
document.getElementById('Transaction')
    .addEventListener('click',
        function(){
            handleToggle('add-money', 'none');
            handleToggle('cashout', 'none');
            handleToggle('transfer' ,'none');
        }
    );