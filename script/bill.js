document.getElementById('pay-bill-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const selectedBank = document.getElementById('bill-bank').value;
            const accountNumber = document.getElementById('bill-account-number').value;
            const ammount = getInputValueById('bill-ammount');
            const pin = getInputValueById('bill-pin');
            const convertedMainBalance = getInnerTextById('main-balance');
            const payBillName = document.getElementById('pay-bill-name').innerText;
            if(selectedBank){
                if(accountNumber.length === 11){
                    if(pin === 1234){
                        const sum = convertedMainBalance - ammount;
                        setInnerTextByIdAndValue('main-balance', sum);

                        const now = new Date();
                        const dateTime = now.toLocaleString();
                        const container = document.getElementById('transaction-container');
                        const div = document.createElement('div');
                        div.classList.add("bg-white", "p-3", "mx-4", "rounded-xl", "my-3", "flex", "justify-center", "items-center", "gap-3");
                        div.innerHTML = `
                            <div class = "w-20 m-1 p-2 bg-base-200 border rounded-full">
                                <img src="./assets/purse1.png" alt="">
                            </div>
                            <div>
                                <h1 class = "text-xl"> ${payBillName} </h1>
                                <p><span class = "text-green-600">Succesfully!</span>
                                Added money $${ammount} from ${accountNumber}
                                ${selectedBank}. ${dateTime}. Balance: $ ${sum}. Thank You.</p>
                            </div>
                        `;
                        container.appendChild(div);
                    }else{
                        alert('please enter a valid pin');
                    }
                }else{
                    alert('please enter a valid account number');
                }
            }else{
                alert('please select a bank');
            }
        }
    );