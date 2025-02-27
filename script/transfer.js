document.getElementById('transfer-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const agentAccountNumber = document.getElementById('transfer-account-number').value;
            const convertedAmmount = getInputValueById('transfer-ammount');
            const convertedPin =  getInputValueById('transfer-pin');
            const convertedMainBalance =  getInnerTextById('main-balance');
            const transferMoneyName = document.getElementById('transfer-money-name').innerText;
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
                        div.classList.add("bg-white", "p-3", "mx-3", "rounded-xl", "my-3", "flex", "justify-center", "items-center", "gap-3");
                        div.innerHTML = `
                            <div class = "w-20 m-1 p-2 bg-base-200 border rounded-full">
                                <img src="./assets/purse1.png" alt="">
                            </div>
                            <div>
                                <h1 class = "text-xl"> ${transferMoneyName} </h1>
                                <p><span class = "text-green-600">Succesfully!</span> Transfer $${convertedAmmount} to ${agentAccountNumber} ${dateTime}. Balance: $ ${sum} Thank You.</p>
                            </div>
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