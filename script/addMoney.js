document.getElementById("logout-btn")
    .addEventListener("click",
        function(){
            window.location.href = "./index.html";
        }
    );

document.getElementById('add-money')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const amount = document.getElementById('ammount').value;
            const convertedAmmount = parseInt(amount);
            const pin = document.getElementById('pin').value;
            const convertedPin = parseInt(pin);
            const mainBalance = document.getElementById("main-balance").innerText;
            const convertedMainBalance = parseFloat(mainBalance);
            if(amount && pin){
                if(convertedPin === 1234){
                    const sum = convertedMainBalance + convertedAmmount;
                    document.getElementById("main-balance").innerText = sum;
                }else{
                    alert("Enter Valid Pin");
                }
            }else{
                alert("Enter Ammount");
            }
        }
    );
