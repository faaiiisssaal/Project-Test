document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("data-form");
    const cardContainer = document.getElementById("card-container");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.elements.name.value;
        const gender = form.elements.gender.value;
        const calendar = form.elements.calendar.value;
        const message = form.elements.message.value;

        const newCard = document.createElement("div");
        newCard.classList.add("data-card");
        newCard.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Calendar:</strong> ${calendar}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

        cardContainer.appendChild(newCard);
        form.reset();

        // Show the submitted data section after submission
        cardContainer.classList.add("data-visible");
    });
});
