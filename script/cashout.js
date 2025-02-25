document.getElementById('cashout-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const convertedAmmount = getInputValueById('cashout-ammount');
            const convertedPin =  getInputValueById('cashout-pin');
            const convertedMainBalance =  getInnerTextById('main-balance');
            if(convertedAmmount && convertedPin){
                if(convertedPin === 1234){
                    const sum = convertedMainBalance - convertedAmmount;
                    if(sum < 0){
                        alert('You have not enough balance to Cash Out')
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