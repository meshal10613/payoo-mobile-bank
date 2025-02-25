document.getElementById('transfer-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const amount = document.getElementById('transfer-ammount').value;
            const convertedAmmount = parseInt(amount);
            const pin = document.getElementById('transfer-pin').value;
            const convertedPin = parseInt(pin);
            const mainBalance = document.getElementById("main-balance").innerText;
            const convertedMainBalance = parseFloat(mainBalance);
            if(amount && pin){
                if(convertedPin === 1234){
                    const sum = convertedMainBalance - convertedAmmount;
                    if(sum < 0){
                        alert('You have not enough balance to Transfer')
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