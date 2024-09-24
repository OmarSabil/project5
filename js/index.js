/* ***** - nav: Donation & History */ 
// global declaration
const donationSection = document.getElementById('donation-section')
const historySection = document.getElementById('history-section')
const donationButton = document.getElementById('btn-donation')
const historyButton = document.getElementById('btn-history')

donationButton.addEventListener("click", function () {
    donationButton.classList.add(
        "bg-lime-400",
        "font-bold"
    );
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
    historySectionSection.classList.add(
        "hidden"
    )

})
historyButton.addEventListener("click", function () {
    historyButton.classList.add(
        "bg-lime-400",
        "font-bold"
    );
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