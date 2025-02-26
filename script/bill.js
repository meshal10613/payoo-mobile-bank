document.getElementById('pay-bill-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const selectedBank = document.getElementById('bill-bank').value;
            const accountNumber = document.getElementById('bill-account-number').value;
            const ammount = getInputValueById('bill-ammount');
            const pin = getInputValueById('bill-pin');
            const convertedMainBalance = getInnerTextById('main-balance');
            if(selectedBank){
                if(accountNumber.length === 11){
                    if(pin === 1234){
                        const sum = convertedMainBalance - ammount;
                        setInnerTextByIdAndValue('main-balance', sum);

                        const now = new Date();
                        const dateTime = now.toLocaleString();
                        const container = document.getElementById('transaction-container');
                        const div = document.createElement('div');
                        div.classList.add("bg-white", "p-3", "mx-4", "rounded-xl", "my-3");
                        div.innerHTML = `
                            <p><span class = "text-green-600">Succesfully!</span>
                            Added money $${ammount} from ${accountNumber}
                            ${selectedBank}. ${dateTime}</p>
                            <h3>Balance: $ ${sum}. Thank You.</h3>
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