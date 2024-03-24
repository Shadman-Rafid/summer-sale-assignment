
    


// }
// else {
//     apply.disabled = true;
// }



// const btnPurchase = document.querySelector('btn-purchase');
//     btnPurchase.disabled = true;
function buttonPurchase(){
    const getTotalPrice = setTotalPrice(0);
    console.log(getTotalPrice);
    const btnPurchase = document.getElementById('btn-purchase');
btnPurchase.disabled = true;
    if (getTotalPrice > 0){
        btnPurchase.disabled = false;  
        addToPurchaseList('empty');
    }
    // else {
    //     btnPurchase.disabled = true;  
    // }
    return getTotalPrice;
}


function random(){
    const coupon = document.getElementById('coupon-field');
    const couponValue = coupon.value;

    const apply = document.getElementById('btn-coupon');
    console.log("total price = ", getTotalPrice);
    // if(getTotalPrice >= 200){
    coupon.addEventListener("keyup", (e) => {
        const value = e.currentTarget.value;
        console.log(value);
        apply.disabled = false;
        apply.addEventListener('click', function(){
            console.log('apply btn is enabled');
            const coupon = document.getElementById('coupon-field');
            const couponValue = coupon.value;
            console.log(couponValue);
            // const discount = getCardValue('discount');
            // console.log(discount);
            // const discountPrice = getTotalPrice * 0.2;
            // console.log(discountPrice);
            // discount.innerText = '';
        })
        if(value === '') {
            apply.disabled = true;
        }
    })
}
random();
