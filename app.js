const starsHtml = document.querySelector('.stars')



class Star {
/**
 * @param {string} name
 * @param {number} age
 * @param {string} color
 * @param {string} galaxy
 * @param {number} distance
 */
    constructor(name, age, color, galaxy, distance) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.galaxie = galaxy;
    this.distance = distance;
}


    toHtml() {
        const divHtml = document.createElement('div');
        divHtml.classList.add('div-star');

        const entries = Object.entries(this);

        for(let entry of entries){
            let pHtml = document.createElement('p');
            pHtml.textContent = entry[0] + ': ' + entry[1];
            divHtml.appendChild(pHtml);
        }
        return divHtml;
    }
}


const stars = [
new Star("45IR1", 690000, "#F4F6F4", "Andromeda", 100054),
new Star("45IR2", 680000, "#F4F5F4", "Andromeda", 100353),
new Star("45IR3", 670000, "#F4F4F4", "Andromeda", 100454),
new Star("45IR4", 660000, "#F4F3F4", "Andromeda", 100554),
new Star("45IR5", 650000, "#F4F2F4", "Andromeda", 100654),
new Star("45IR6", 640000, "#F4F1F4", "Andromeda", 100754),
new Star("45IR7", 630000, "#F4F0F4", "Andromeda", 100854),
];

for(let star of stars) {
    starsHtml.appendChild(star.toHtml());
}

