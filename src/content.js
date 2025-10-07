import restaurantImage from "./jason-leung-poI7DelFiVA-unsplash.jpg";

export function content() {

        const contentDiv = document.getElementById('content');
        const homeContainer = document.createElement('div');
        const headingContainer = document.createElement('div')
        const textContainer = document.createElement('div');

        const image = document.createElement('img');
        const header = document.createElement('h1');
        const blurb = document.createElement('p');
        const photoCred = document.createElement('p');

        image.src = restaurantImage;
        image.alt = 'restaurant-photo';
        header.innerText = "Josh's Big Fancy Restaurant";
        blurb.innerText = " Josh's Big Fancy Restaurant is the greatest restaurant ever, with a groundbreaking 4 Michelin stars and zero stressed chefs in the kitchen. A vision of peace and tranquility to satisfy your taste buds.";
        photoCred.innerText = "photo - Jason Leung";

        contentDiv.appendChild(homeContainer);
        homeContainer.id = "homeContent";
        homeContainer.classList.add('activeContent')
        textContainer.id = "blurbContainer";
        homeContainer.append(headingContainer, image, textContainer);
        headingContainer.append(header)
        textContainer.append(blurb, photoCred);
    
}
