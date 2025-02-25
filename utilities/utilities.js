function getInputValueById(id){
    const ammout = document.getElementById(id).value;
    const convertedAmmount = parseInt(ammout);
    return convertedAmmount;
};
function getInnerTextById(id){
    const ammout = document.getElementById(id).innerText;
    const convertedAmmount = parseInt(ammout);
    return convertedAmmount;
};
function setInnerTextByIdAndValue(id, value){
    document.getElementById(id).innerText = value;
}