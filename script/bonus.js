document.getElementById('bonus-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const couponRewards = 50;
            const bonusCoupon = document.getElementById('bonus-coupon').value;
            const mainBalance = getInnerTextById('main-balance');
            if(bonusCoupon === 'Payooo'){
                const sum = couponRewards + mainBalance;
                setInnerTextByIdAndValue('main-balance', sum);

                const now = new Date();
                const dateTime = now.toLocaleString();
                const container = document.getElementById('transaction-container');
                const div = document.createElement('div');
                div.classList.add("bg-white", "p-3", "mx-3", "rounded-xl", "my-3");
                div.innerHTML = `
                    <p><span class = "text-green-600">Congratulations!</span> You have received a bonus $${couponRewards} from <span class = "text-blue-500">${bonusCoupon}</span> Coupon Code. ${dateTime}</p>
                    <h3>Balance: $ ${sum}. Thank You. </h3>
                `;
                container.appendChild(div);
            }else{
                alert('Please Enter Your Coupon Code');
            }
        }
    )