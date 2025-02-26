document.getElementById('transfer-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const agentAccountNumber = document.getElementById('transfer-account-number').value;
            const convertedAmmount = getInputValueById('transfer-ammount');
            const convertedPin =  getInputValueById('transfer-pin');
            const convertedMainBalance =  getInnerTextById('main-balance');
            if(convertedAmmount <= 0){
                alert('You can not transfer money');
                return;
            }
            if(convertedAmmount && convertedPin){
                if(convertedPin === 1234){
                    const sum = convertedMainBalance - convertedAmmount;
                    if(sum <= 0){
                        alert('You have not enough balance to Transfer')
                    }else{
                        setInnerTextByIdAndValue('main-balance', sum);
                        console.log(sum);
                        const now = new Date();
                        const dateTime = now.toLocaleString();
                        const container = document.getElementById('transaction-container');
                        const div = document.createElement('div');
                        div.classList.add("bg-white", "p-3", "mx-3", "rounded-xl", "my-3");
                        div.innerHTML = `
                            <p><span class = "text-green-600">Succesfully!</span> Transfer $${convertedAmmount} to ${agentAccountNumber} ${dateTime}.</p>
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