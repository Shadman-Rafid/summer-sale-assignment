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
    getTotalPrice.innerText = newTotalPrice;
}

function spoonCard(){
    const spoon = getCardValue('spoon-price');  
    setTotalPrice(spoon);
}
function plateCard(){
    const plate = getCardValue('plate-price');  
    setTotalPrice(plate);
}
function cookerCard(){
    const cooker = getCardValue('cooker-price');
    setTotalPrice(cooker);
}
function blackCapCard(){
    const blackCap = getCardValue('cap-price');
    setTotalPrice(blackCap);
}
function jerseyCard(){
    const jersey = getCardValue('jersey-price');
    setTotalPrice(jersey);
}
function shoeCard(){
    const shoe = getCardValue('shoe-price');
    setTotalPrice(shoe);
}
function relaxChairCard(){
    const relaxChair = getCardValue('relaxChair-price');
    setTotalPrice(relaxChair);
}
function childPlayCard(){
    const childPlay = getCardValue('childPlay-price');
    setTotalPrice(childPlay);
}
function sofaCard(){
    const sofa = getCardValue('sofa-price');
    setTotalPrice(sofa);
}