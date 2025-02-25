document.getElementById('add-money').style.display = 'none';
document.getElementById('cashout').style.display = 'none';
document.getElementById('transfer').style.display = 'none';

document.getElementById('Add-Money')
    .addEventListener('click',
        function(){
            document.getElementById('add-money').style.display = 'block';
            document.getElementById('cashout').style.display = 'none';
            document.getElementById('transfer').style.display = 'none';
        }
    );

document.getElementById('Cash-Out')
    .addEventListener('click',
        function(){
            document.getElementById('cashout').style.display = 'block';
            document.getElementById('add-money').style.display = 'none';
            document.getElementById('transfer').style.display = 'none';
        }
    );

document.getElementById('Transfer')
    .addEventListener('click',
        function(){
            document.getElementById('transfer').style.display = 'block';
            document.getElementById('cashout').style.display = 'none';
            document.getElementById('add-money').style.display = 'none';
        }
    );