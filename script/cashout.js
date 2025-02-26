document.getElementById('cashout-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const agentAccountNumber = getInputValueById('cashout-account-number');
            const convertedAmmount = getInputValueById('cashout-ammount');
            const convertedPin =  getInputValueById('cashout-pin');
            const convertedMainBalance =  getInnerTextById('main-balance');
            if(convertedAmmount <= 0){
                alert('You can not Cash Out');
                return;
            }
            if(convertedAmmount && convertedPin){
                if(convertedPin === 1234){
                    const sum = convertedMainBalance - convertedAmmount;
                    setInnerTextByIdAndValue('main-balance', sum);
                    if(convertedAmmount <= 0){
                        alert('You have not enough balance to Cash Out');
                        return;
                    }else{
                        const container = document.getElementById('transaction-container');
                        const p = document.createElement('p');
                        p.innerText = `Cashout ${convertedAmmount}$ from this account to ${agentAccountNumber}`;
                        container.appendChild(p);
                    }
                }else{
                    alert("Enter Valid Pin");
                }
            }else{
                alert("Enter Ammount");
            }
        }
    );