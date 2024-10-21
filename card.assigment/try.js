const divElement = document.querySelector('.game-info');

const displayGames = () => {
    for (let i = 0; i < gamesInfo.length; i++) {
        setTimeout(() => {
            const game = gamesInfo[i]; // Access the current game

            // Clear previous content
            divElement.innerHTML = '';

            const img = document.createElement("img");
            img.src = game.image;
            img.style.width = '100px';

            const titleElement = document.createElement("h2");
            titleElement.textContent = game.title;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = game.description;

            const releaseDateElement = document.createElement("p");
            releaseDateElement.textContent = `Release Date: ${game.releaseDate}`;

            const platformsElement = document.createElement("p");
            platformsElement.textContent = `Platforms: ${game.Platforms.join(', ')}`;

            const publishersElement = document.createElement("p");
            publishersElement.textContent = `Publishers: ${game.Publishers}`;

            divElement.appendChild(img);
            divElement.appendChild(titleElement);
            divElement.appendChild(descriptionElement);
            divElement.appendChild(releaseDateElement);
            divElement.appendChild(platformsElement);
            divElement.appendChild(publishersElement);
        }, i * 10000); // Delay for each game: i * 10000 milliseconds
    }
};

// Start displaying games
displayGames();
