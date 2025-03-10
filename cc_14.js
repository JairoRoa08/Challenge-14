// (Task #2) Adding Support Tickets Dynamically
function createSupportTicket(customerName, issueDescription, priorityLevel) {
// Get the ticket container
    const ticketContainer = document.getElementById("ticketContainer");
// Creating the ticket div
    const ticketDiv = document.createElement("div");
    ticketDiv.setAttribute("class", "support-ticket");
// Creating and appending the customer name heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = `Customer: ${customerName}`;
    ticketDiv.appendChild(nameHeading);
// Creating and appending the issue description paragraph
    const descriptionPara = document.createElement("p");
    descriptionPara.textContent = `Issue: ${issueDescription}`;
    ticketDiv.appendChild(descriptionPara);
// Creating and appending the priority label
    const priorityLabel = document.createElement("p");
    priorityLabel.textContent = `Priority: ${priorityLevel}`;
    priorityLabel.setAttribute("class", "priority-label");
    ticketDiv.appendChild(priorityLabel);
// Creating and appending the resolve button
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute("class", "resolve-button");
    resolveButton.onclick = function () {
        ticketContainer.removeChild(ticketDiv);
    };
    ticketDiv.appendChild(resolveButton);
    ticketContainer.appendChild(ticketDiv);
}
// (Task #3) Converting NodeLists to Arrays for Bulk Updates
function highlightUrgentTickets () {
    const highPriorityTickets = document.querySelectorAll(".priority-label");
    const highPriorityArray = Array.from(highPriorityTickets);
    highPriorityArray.forEach((ticket) => {
        if (ticket.textContent.includes("High")) {
            ticket.parentElement.style.border = "2px solid red";
            ticket.parentElement.style.border = "2px solid red";
        }
    })

}
