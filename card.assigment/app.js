const gamesInfo = [
    {
        id: '1',
        title: 'Red Dead Redemption 2',
        description: 'Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption',
        releaseDate: 'October 26, 2018',
        Platforms : [' PlayStation 4', 'Xbox One', 'Windows'],
        Publishers: 'Woody Jackson',
        image : 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg'
    },

    {
        id: '2',
        title: 'FC25',
        description: 'EA Sports FC 25 is a football video game published by Electronic Arts. It is the second instalment in the EA Sports FC series and the 32nd overall instalment of EA Sports football simulation games',
        releaseDate: 'September 27, 2024',
        Platforms : ['Windows'],
        Publishers : 'Electronic Arts, EA Sports',
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202407/1814/07a6fda04cc8874d465605538724103f78e3f4deeede69d3.png'
    },

    {
        id: '3',
        title: 'call of duty',
        description: 'Call of Duty is a military video game series and media franchise published by Activision, starting in 2003. The games were first developed by Infinity Ward, then by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers.',
        releaseDate: 'October 25, 2024',
        Platforms : ['Windows', 'PS4', 'XONE'],
        Publishers : 'Activision, Activision Blizzard, Nokia',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Call_Of_Duty_%282003%29%2CCover%2CUpdated.jpg'
    },

    {
        id: '4',
        title: "Assassin's Creed Origins",
        description: "Assassin's Creed Origins is a 2017 action role-playing game developed by Ubisoft Montreal and published by Ubisoft. It is the tenth major installment in the Assassin's Creed series, following 2015's Assassin's Creed Syndicate.",
        releaseDate: 'October 27, 2017',
        Platforms : ['Windows', 'PS4', 'XONE'],
        Publishers : 'Sarah Schachner',
        image: 'https://image.api.playstation.com/cdn/EP0001/CUSA08393_00/fDW19KMU6CYk5WZ1oHatLa6zX9HAZ0pC.png?w=440'
    }
]


const divElement = document.querySelector('.game-info');

function displayGame(index) {
    if (index >= gamesInfo.length) return; 
    const first = gamesInfo[index];

    const img = document.createElement("img");
    img.src = first.image;
    img.style.width = '100px';

    const titleElement = document.createElement("h2");
    titleElement.textContent = first.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = first.description;

    const releaseDateElement = document.createElement("p");
    releaseDateElement.textContent = `Release Date: ${first.releaseDate}`;

    const platformsElement = document.createElement("p");
    platformsElement.textContent = `Platforms: ${first.Platforms.join(" ")}`;

    const  PublishersElemt = document.createElement('p');
    PublishersElemt.textContent = `{editor} : ${first.Publishers}`
    setTimeout(() => { displayGame(index + 1); }, 10000);


   

    divElement.appendChild(img);
    divElement.appendChild(titleElement);
    divElement.appendChild(descriptionElement);
    divElement.appendChild(releaseDateElement);
    divElement.appendChild(platformsElement);
    ;

     
}

displayGame(0);
