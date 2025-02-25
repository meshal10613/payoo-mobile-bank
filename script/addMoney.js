document.getElementById("logout-btn")
    .addEventListener("click",
        function(){
            window.location.href = "./index.html";
        }
    );

document.getElementById('add-money-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const accountNumber = document.getElementById('account-number').value;
            const convertedAmmount = getInputValueById('ammount');
            const convertedPin = getInputValueById('pin');
            const convertedMainBalance = getInnerTextById('main-balance');
            if(accountNumber.length === 11){
                if(convertedPin === 1234){
                    const sum = convertedMainBalance + convertedAmmount;
                    setInnerTextByIdAndValue('main-balance', sum);
                }else{
                    alert("Enter Valid Pin");
                }
            }else{
                alert("Enter Ammount");
            }
        }
    );
