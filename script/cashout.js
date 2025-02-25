document.getElementById('cashout-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const amount = document.getElementById('cashout-ammount').value;
            const convertedAmmount = parseInt(amount);
            const pin = document.getElementById('cashout-pin').value;
            const convertedPin = parseInt(pin);
            const mainBalance = document.getElementById("main-balance").innerText;
            const convertedMainBalance = parseFloat(mainBalance);
            if(amount && pin){
                if(convertedPin === 1234){
                    const sum = convertedMainBalance - convertedAmmount;
                    if(sum < 0){
                        alert('You have not enough balance to Cash Out')
                    }else{
                        document.getElementById("main-balance").innerText = sum;
                    }
                }else{
                    alert("Enter Valid Pin");
                }
            }else{
                alert("Enter Ammount");
            }
        }
    );