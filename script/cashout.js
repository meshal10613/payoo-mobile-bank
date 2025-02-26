document.getElementById('cashout-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const agentAccountNumber = document.getElementById('cashout-account-number').value;
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
                        const now = new Date();
                        const dateTime = now.toLocaleString();
                        const container = document.getElementById('transaction-container');
                        const div = document.createElement('div');
                        div.classList.add("bg-white", "p-3", "mx-3", "rounded-xl", "my-3");
                        div.innerHTML = `
                            <p><span class = "text-green-600">Succesfully!</span> Cashout $${convertedAmmount} to ${agentAccountNumber} ${dateTime}.</p>
                            <h3>Balance: $ ${sum} Thank You.</h3>
                        `;
                        container.appendChild(div);
                    }
                }else{
                    alert("Enter Valid Pin");
                }
            }else{
                alert("Enter Ammount");
            }
        }
    );