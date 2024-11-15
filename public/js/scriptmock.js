document.addEventListener('DOMContentLoaded', function() {
    var addIcon = document.getElementById('add-icon');
    var cardContainer = document.getElementById('card-container');

    addIcon.onclick = function() {
        // Create a new card div
        var newCard = document.createElement('div');
        newCard.className = 'card new-card';

        // Create a new input field
        var newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.placeholder = 'Name';

        // Append input to the new card
        newCard.appendChild(newInput);

        // Append new card to the card container
        cardContainer.appendChild(newCard);
    };
});
