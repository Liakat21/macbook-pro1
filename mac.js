//Set Costing for the selected Items
function setCosting(id, price) {
    document.getElementById(id).innerText = price;
    
}
//get Costing for the selected Items
function getCosting(id){
    const productCost = document.getElementById(id).innerText;
    const  number = parseFloat(productCost);
    return number;
}

//Total Calculation of all selected Items
function calculation(){
    const bestPrice = getCosting('bestPrice');
    const extraMemoryCost = getCosting('extraMemoryCost');
    const extraStorageCost = getCosting('extraStorageCost');
    const deliveryCharge = getCosting('deliveryCharge');
    const totalSubPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge; 
    document.getElementById("totalPrice").innerText = totalSubPrice;
    
};

//Promo Code Error alert.

function wrongPromo(){
    alert('You Have Entered an invalid Promo or Already Used.');
}

document.getElementById('extraMemory8').addEventListener('click', function () {
    setCosting('extraMemoryCost', 0);
    calculation()     
})

document.getElementById('extraMemory16').addEventListener('click', function () {
    setCosting('extraMemoryCost', 180); 
    calculation()
})

document.getElementById('ssdStorage256').addEventListener('click', function () {
    setCosting('extraStorageCost', 0); 
    calculation() 
})

document.getElementById('ssdStorage512').addEventListener('click', function () {
    setCosting('extraStorageCost', 100); 
    calculation()  
})

document.getElementById('ssdStorage1024').addEventListener('click', function () {
    setCosting('extraStorageCost', 180);
    calculation()    
})

document.getElementById('freeDelivery').addEventListener('click', function () {
    setCosting('deliveryCharge', 0); 
    calculation() 
})

document.getElementById('expressDelivery').addEventListener('click', function () {
    setCosting('deliveryCharge', 20);
    calculation()    
})

document.getElementById('inputPromo').addEventListener('click', function(){
    const getInputPromo = document.getElementById('inputPromo').value;
    const currentTotalPrice = parseInt(document.getElementById('totalPrice').innerText);
    const totalSubPrice = parseInt(document.getElementById('grandTotal').innerText);

    if ((getInputPromo == 'stevekaku') && (currentTotalPrice == totalSubPrice)) {
        const totalPrice = parseFloat(document.getElementById('grandTotal').innerText);
        const getPercentage = parseFloat((totalPrice * 20)/100);
        const grandTotal = (totalPrice - getPercentage);
        document.getElementById('grandTotal').innerText = grandTotal;
        document.getElementById('inputPromo').value = '';
    }
    else{
        wrongPromo();
        document.getElementById('inputPromo').value = '';
    }
});
