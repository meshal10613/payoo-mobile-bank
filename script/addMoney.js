document.getElementById("logout-btn")
    .addEventListener("click",
        function(){
            window.location.href = "./index.html";
        }
    );

document.getElementById('refresh-btn')
    .addEventListener('click',
        function(){
            window.location.href = "./main.html";
        }
    )

document.getElementById('add-money-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const selectedBank = document.getElementById('add-bank').value;
            const accountNumber = document.getElementById('account-number').value;
            const convertedAmmount = getInputValueById('ammount');
            const convertedPin = getInputValueById('pin');
            const convertedMainBalance = getInnerTextById('main-balance');
            const addMoneyName = document.getElementById('add-money-name').innerText;
            if(convertedAmmount <= 0){
                alert('You can not add money');
                return;
            }
            if(selectedBank){
                if(accountNumber.length === 11){
                    if(convertedPin === 1234){
                        const sum = convertedMainBalance + convertedAmmount;
                        setInnerTextByIdAndValue('main-balance', sum);

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
                            <h1 class = "text-xl"> ${addMoneyName} </h1>
                            <p><span class = "text-green-600">Succesfully!</span> Added money $${convertedAmmount} from ${accountNumber} ${selectedBank} ${dateTime}. Balance: $ ${sum} Thank You. </p>
                        </div>
                        `;
                        container.appendChild(div);
                    }else{
                        alert("Enter Valid Pin");
                    }
                }else{
                    alert("Enter Ammount");
                }
            }else{
                alert('Please Select a Bank');
            }
        }
    );
