// Task #2: Function to create a support ticket
function createSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById("ticketContainer");
// Creating the ticket div
    const ticketDiv = document.createElement("div");
    ticketDiv.setAttribute("class", "support-ticket");
// Creating and appending the heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = `Customer: ${customerName}`;
    ticketDiv.appendChild(nameHeading);
// Creating and appending the issue
    const descriptionPara = document.createElement("p");
    descriptionPara.textContent = `Issue: ${issueDescription}`;
    ticketDiv.appendChild(descriptionPara);
// Creating and appending the priority label
    const priorityLabel = document.createElement("p");
    priorityLabel.textContent = `Priority: ${priorityLevel}`;
    priorityLabel.setAttribute("class", "priority-label");
    ticketDiv.appendChild(priorityLabel);
// Task #4: Create and append the resolve button
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute("class", "resolve-button");
// Resolve button functionality
    resolveButton.addEventListener("click", function (event) {
        event.stopPropagation(); 
        ticketContainer.removeChild(ticketDiv); 
        console.log("Ticket resolved and removed."); 
    });
    ticketDiv.appendChild(resolveButton);
// Task #5: Create and append the edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("class", "edit-button");
// Inline editing
    editButton.addEventListener("click", function () {
        enableInlineEditing(ticketDiv, nameHeading, descriptionPara, priorityLabel);
    });
    ticketDiv.appendChild(editButton);
// Appending the ticket div
    ticketContainer.appendChild(ticketDiv);
}
// Task #3: Highlight urgent tickets (priority: High)
function highlightUrgentTickets() {
    const highPriorityTickets = document.querySelectorAll(".priority-label");
    const highPriorityArray = Array.from(highPriorityTickets);
    highPriorityArray.forEach((ticket) => {
        if (ticket.textContent.includes("High")) {
            ticket.parentElement.style.border = "2px solid red";
            ticket.parentElement.style.backgroundColor = "#ffdddd";
        }
    });
}
// Task #5: Enable inline editing of ticket details
function enableInlineEditing(ticketDiv, nameHeading, descriptionPara, priorityLabel) {
// Replacing with input fields
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = nameHeading.textContent.replace("Customer: ", "");

    const issueInput = document.createElement("input");
    issueInput.type = "text";
    issueInput.value = descriptionPara.textContent.replace("Issue: ", "");

    const priorityInput = document.createElement("input");
    priorityInput.type = "text";
    priorityInput.value = priorityLabel.textContent.replace("Priority: ", "");
// Creating and appending save button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.setAttribute("class", "save-button");
    saveButton.addEventListener("click", function () {
// Update the ticket details
        nameHeading.textContent = `Customer: ${nameInput.value}`;
        descriptionPara.textContent = `Issue: ${issueInput.value}`;
        priorityLabel.textContent = `Priority: ${priorityInput.value}`;
// Replace input with static text
        ticketDiv.replaceChild(nameHeading, nameInput);
        ticketDiv.replaceChild(descriptionPara, issueInput);
        ticketDiv.replaceChild(priorityLabel, priorityInput);
        ticketDiv.removeChild(saveButton);
    });
// Replace current elements
    ticketDiv.replaceChild(nameInput, nameHeading);
    ticketDiv.replaceChild(issueInput, descriptionPara);
    ticketDiv.replaceChild(priorityInput, priorityLabel);
    ticketDiv.appendChild(saveButton);
}
// Task #4: Event listener for ticket clicks
const ticketContainer = document.getElementById("ticketContainer");
ticketContainer.addEventListener("click", function () {
    console.log("Ticket clicked"); 
});
document.addEventListener('DOMContentLoaded', function() {
    createSupportTicket("Timmothy T.", "Network issue", "High");
    createSupportTicket("Jimothy B.", "Payment Issue", "Medium");
    createSupportTicket("John C.", "Login issue", "Low");
    createSupportTicket("Juan V.", "Privacy issue", "High");

});
//Final