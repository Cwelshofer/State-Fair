const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)


    }
}

)
eventHub.addEventListener("click", foodEvent => {
    if (foodEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
}
)

eventHub.addEventListener("click", gameEvent => {
    if (gameEvent.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
}
)

eventHub.addEventListener("click", sideshowEvent => {
    if (sideshowEvent.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
    }
}
)

eventHub.addEventListener("click", fullPackageEvent => {
    if (fullPackageEvent.target.id === "fullPackageTicket") {
        const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased")
        eventHub.dispatchEvent(fullPackageEvent)
    }
}
)

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">SideShow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
    something.innerHTML = `Total tickets purchased: ${yourStateVariable}`
}

