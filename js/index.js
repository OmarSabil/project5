// global declaration
const donationSection = document.getElementById('donation-section')
const historySection = document.getElementById('history-section')
const donationButton = document.getElementById('btn-donation')
const historyButton = document.getElementById('btn-history')


/* ***** - Nav: Donation & History tab functionals - ***** */
donationButton.addEventListener("click", function () {
    donationButton.classList.add(
        "bg-lime-400",
        "font-bold"
    )
    donationButton.classList.remove(
        "btn-outline",
        "border-lime-900"
    )
    historyButton.classList.add(
        "btn-outline",
        "border-lime-900"
    )
    historyButton.classList.remove(
        "bg-lime-400",
        "font-bold"
    )
    donationSection.classList.remove(
        "hidden"
    )
    historySection.classList.add(
        "hidden"
    )

})
historyButton.addEventListener("click", function () {
    historyButton.classList.add(
        "bg-lime-400",
        "font-bold"
    )
    historyButton.classList.remove(
        "btn-outline",
        "border-lime-900"
    )
    donationButton.classList.add(
        "btn-outline",
        "border-lime-900"
    )
    donationButton.classList.remove(
        "bg-lime-400",
        "font-bold"
    )
    donationSection.classList.add(
        "hidden"
    )
    historySection.classList.remove(
        "hidden"
    )

})




/* ***** - Main: Donation Functionals - ***** */
const donateNowButton1 = document.getElementById('noakhali-btn');
donateNowButton1.addEventListener("click", function () {

    const donationInput = getDonationById('noakhali-input');
    const totalDonation = donationDistribute('noakhali-total');
    const accountBalanceAmount = donationDistribute('account-balance-amount');


    const newBalanceRemaining = accountBalanceAmount - donationInput;
    document.getElementById('account-balance-amount').innerText = newBalanceRemaining;

    const newDonatedTotal = totalDonation + donationInput;
    document.getElementById('noakhali-total').innerText = newDonatedTotal;
})

const donateNowButton2 = document.getElementById('feni-btn');
donateNowButton2.addEventListener("click", function () {

    const donationInput = getDonationById('feni-input');
    const totalDonation = donationDistribute('feni-total');
    const accountBalanceAmount = donationDistribute('account-balance-amount');


    const newBalanceRemaining = accountBalanceAmount - donationInput;
    document.getElementById('account-balance-amount').innerText = newBalanceRemaining;

    const newDonatedTotal = totalDonation + donationInput;
    document.getElementById('feni-total').innerText = newDonatedTotal;
})

const donateNowButton3 = document.getElementById('quota-btn');
donateNowButton3.addEventListener("click", function () {

    const donationInput = getDonationById('quota-input');
    const totalDonation = donationDistribute('quota-total');
    const accountBalanceAmount = donationDistribute('account-balance-amount');


    const newBalanceRemaining = accountBalanceAmount - donationInput;
    document.getElementById('account-balance-amount').innerText = newBalanceRemaining;

    const newDonatedTotal = totalDonation + donationInput;
    document.getElementById('quota-total').innerText = newDonatedTotal;
})

/* ***** - Main: History Functionals - ***** */
document.getElementById("donation-history").classList.add("hidden");





