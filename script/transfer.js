document.getElementById('transfer-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
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
                    }
                }else{
                    alert("Enter Valid Pin");
                }
            }else{
                alert("Enter Ammount");
            }
        }
    );