const target = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

export const TicketCounter = () => {
    target.innerHTML = `Total tickets purchased:`
    eventHub.addEventListener("fullPackageTicketPurchased", => {

})
}

