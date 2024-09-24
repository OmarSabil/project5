// 1 Input: Donation input field
function getDonationById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
// 2 Output: Account balance(-) & Total Donation(+)
function donationDistribute(id){
    const outputValue = parseFloat(document.getElementById(id).innerText);
    return outputValue;
}






