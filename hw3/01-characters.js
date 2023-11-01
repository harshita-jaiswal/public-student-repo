// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

let app = document.getElementById("results");
let list = document.getElementById("list");

const dataToDOM = (data) => {
    //character card
    let card = document.createElement("div");
    card.classList.add("card");

    //character image
    let image = document.createElement("img");
    image.src = data.imageUrl;
    image.alt = `picture of ${data.fullName}`;
    image.height = 250;
    image.width = 200;
    card.append(image);

    //character name
    let name = document.createElement("h1");
    name.textContent = data.fullName;
    card.append(name);

    //character title
    let title = document.createElement("p");
    title.textContent = data.title;
    title.classList.add("title");
    card.append(title);

    list.append(card);
};

const fetchApiData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        data.forEach((character) => dataToDOM(character));
    } catch (error) {
        console.log(error);
    }
};

fetchApiData(url);