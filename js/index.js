// global declaration
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');
const donationButton = document.getElementById('btn-donation');
const historyButton = document.getElementById('btn-history');

const noakhaliTitle = document.getElementById('noakhali-title');
const feniTitle = document.getElementById('feni-title');
const quotaTitle = document.getElementById('quota-title');

const footer = document.getElementById('footer');

const blogButton = document.getElementById('blog-btn')
blogButton.addEventListener("click", function(){
    window.location.href = "/blog.html";
})
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
    footer.classList.add(
        "hidden"
    )


})




/* ***** - Main: Donation Functionals - ***** */
// Noakhali Flood Donation
const donateNowButton1 = document.getElementById('noakhali-btn');
donateNowButton1.addEventListener("click", function () {

    const donationInput = getDonationById('noakhali-input');
    const totalDonation = donationDistribute('noakhali-total');
    const accountBalanceAmount = donationDistribute('account-balance-amount');

    // add Modal Noakhali
    const myModal = document.getElementById('my_modal_5')
    if (typeof (donationInput) === 'number' && !isNaN(donationInput)) {
        my_modal_5.showModal()
    }
    else {
        alert("Donation Amount is Invalid")
    }


    // Calculations
    const newBalanceRemaining = accountBalanceAmount - donationInput;
    if (typeof (donationInput) === 'number' && !isNaN(donationInput)) {
        document.getElementById('account-balance-amount').innerText = newBalanceRemaining;
    }


    const newDonatedTotal = totalDonation + donationInput;
    if (typeof (donationInput) === 'number' && !isNaN(donationInput)) {
        document.getElementById('noakhali-total').innerText = newDonatedTotal;
    }

    // Noakhali History
    const historyItems = document.createElement("div");
    historyItems.id = "history-items";
    historyItems.classList =
        "border-2 w-full h-28 p-5 rounded-md";

    historyItems.innerHTML = `
    <p>$${newDonatedTotal.toFixed(2)} taka is donated for ${noakhaliTitle.innerText}</p>
    <p class="">Date: ${new Date().toLocaleDateString()}</p>
    `

    const historyContainer = document.getElementById("history-section");
    if (typeof (donationInput) === 'number' && !isNaN(donationInput)) {
    historyContainer.insertBefore(historyItems, historyContainer.appendChild(historyItems));
    }

});

// Feni Flood Donation
const donateNowButton2 = document.getElementById('feni-btn');
donateNowButton2.addEventListener("click", function () {

    const donationInput = getDonationById('feni-input');
    const totalDonation = donationDistribute('feni-total');
    const accountBalanceAmount = donationDistribute('account-balance-amount');

    // add Modal Feni
    const myModal = document.getElementById('my_modal_5')
    if (typeof (donationInput) === 'number' && !isNaN(donationInput)) {
        my_modal_5.showModal()
    }
    else {
        alert("Donation Amount is Invalid");
    }


    // Calculations
    const newBalanceRemaining = accountBalanceAmount - donationInput;
    if (typeof (donationInput) === 'number' && !isNaN(donationInput)) {
        document.getElementById('account-balance-amount').innerText = newBalanceRemaining;
    }

    const newDonatedTotal = totalDonation + donationInput;
    if (typeof (donationInput) === 'number' && !isNaN(donationInput)) {
        document.getElementById('feni-total').innerText = newDonatedTotal;
    }

    // Feni History
    const historyItems = document.createElement("div");
    historyItems.classList =
        "border-2 w-full h-28 p-5 rounded-md";

    historyItems.innerHTML = `
    <p>$${newDonatedTotal.toFixed(2)} taka is donated for ${feniTitle.innerText}</p>
    <p class="">${new Date().toLocaleDateString()}</p>
    `
    const historyContainer = document.getElementById("history-section");
    if (typeof (donationInput) === 'number' && !isNaN(donationInput)) {
    historyContainer.insertBefore(historyItems, historyContainer.firstChild);
    }
})


// Quota Injured Donation
const donateNowButton3 = document.getElementById('quota-btn');
donateNowButton3.addEventListener("click", function () {

    const donationInput = getDonationById('quota-input');
    const totalDonation = donationDistribute('quota-total');
    const accountBalanceAmount = donationDistribute('account-balance-amount');


    // add Modal Quota
    const myModal = document.getElementById('my_modal_5')
    if (typeof (donationInput) === 'number' && !isNaN(donationInput)) {
        my_modal_5.showModal()
    }
    else {
        alert("Donation Amount is Invalid")
    }

    // Calculations
    const newBalanceRemaining = accountBalanceAmount - donationInput;
    if (typeof (donationInput) === 'number' && !isNaN(donationInput)) {
        document.getElementById('account-balance-amount').innerText = newBalanceRemaining;
    }
    const newDonatedTotal = totalDonation + donationInput;
    if (typeof (donationInput) === 'number' && !isNaN(donationInput)) {
        document.getElementById('quota-total').innerText = newDonatedTotal;
    }

    // Quota History
    const historyItems = document.createElement("div");
    historyItems.classList =
        "border-2 w-full h-28 p-5 rounded-md";

    historyItems.innerHTML = `
    <p>$${newDonatedTotal.toFixed(2)} taka is donated for ${quotaTitle.innerText}</p>
    <p class="">${new Date().toLocaleDateString()}</p>
    `
    const historyContainer = document.getElementById("history-section");
    if (typeof (donationInput) === 'number' && !isNaN(donationInput)) {
    historyContainer.insertBefore(historyItems, historyContainer.firstChild);
    }
})

/* ***** - Main: History Functionals - ***** */
// document.getElementById("donation-history").classList.add("hidden");





