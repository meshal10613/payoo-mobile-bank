document.getElementById('bonus-btn')
    .addEventListener('click',
        function(event){
            event.preventDefault();
            const couponRewards = 50;
            const bonusCoupon = document.getElementById('bonus-coupon').value;
            const mainBalance = getInnerTextById('main-balance');
            const bonusName = document.getElementById('bonus-name').innerText;
            if(bonusCoupon === 'Payooo'){
                const sum = couponRewards + mainBalance;
                setInnerTextByIdAndValue('main-balance', sum);

                const now = new Date();
                const dateTime = now.toLocaleString();
                const container = document.getElementById('transaction-container');
                const div = document.createElement('div');
                div.classList.add("bg-white", "p-2", "mx-3", "rounded-xl", "my-3", "flex", "justify-center", "items-center", "gap-3");
                div.innerHTML = `
                    <div class = "w-20 m-1 p-2 bg-base-200 border rounded-full">
                        <img src="./assets/purse1.png" alt="">
                    </div>
                    <div>
                        <h1 class = "text-xl"> ${bonusName} </h1>
                        <p><span class = "text-green-600">Congratulations!</span> You have received a bonus $${couponRewards} from <span class = "text-blue-500">${bonusCoupon}</span> Coupon Code. ${dateTime}. Balance: $ ${sum}. Thank You.</p>
                    </div>
                `;
                container.appendChild(div);
            }else{
                alert('Please Enter Your Coupon Code');
            }
        }
    )