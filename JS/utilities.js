function getCardValue(priceId){
    const cardItemPrice = document.getElementById(priceId);
    const getPriceValue = cardItemPrice.innerText;
    const price = parseFloat(getPriceValue);
    return price;
}
function setTotalPrice(productPrice){
    const getTotalPrice = document.getElementById('total-price');
    const totalPriceString = getTotalPrice.innerText;
    const prevTotalPrice = parseFloat(totalPriceString);

    const newTotalPrice = prevTotalPrice + productPrice;
    if(productPrice == 0){
        getTotalPrice.innerText = '00.00';
    }
    else getTotalPrice.innerText = newTotalPrice;

    return newTotalPrice;
}
function getCardName(cardNameId){
    const getCardName = document.getElementById(cardNameId);
    const cardName = getCardName.innerText;
    return cardName;
}

function addToPurchaseList(cardType){
    const purchaseList = document.getElementById('purchase-list');

    if(cardType == 'empty'){
        purchaseList.innerText = '';
    }
    else {
        const count = purchaseList.childElementCount;

        const p = document.createElement('p');
        p.classList.add('my-2','text-2xl','font-medium');
        p.innerHTML = `${count + 1}. ${cardType}`;
        purchaseList.appendChild(p);
    }
}
