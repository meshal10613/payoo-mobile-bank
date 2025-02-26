function getInputValueById(id){
    const ammout = document.getElementById(id).value;
    const convertedAmmount = parseFloat(ammout);
    return convertedAmmount;
};
function getInnerTextById(id){
    const ammout = document.getElementById(id).innerText;
    const convertedAmmount = parseFloat(ammout);
    return convertedAmmount;
};
function setInnerTextByIdAndValue(id, value){
    document.getElementById(id).innerText = value;
}