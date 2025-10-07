export function contactRender() {
    const contentContainer = document.getElementById('content');
    const contactContainer = document.createElement('div');
    contactContainer.id = "contactContent";
    contactContainer.classList.add('notActiveContent');

    const foh = document.createElement('div');
    const fohTitle = document.createElement('h1');
    fohTitle.innerText = "Front of House";
    const fohText = document.createElement('p');
    fohText.innerText = "555-555-555 - foh@fakeemail.com";

    const boh =  document.createElement('div');
    const bohTitle = document.createElement('h1');
    bohTitle.innerText = "Back of House";
    const bohText = document.createElement('p');
    bohText.innerText = "555-555-555 - boh@fakeemail.com";

    const soh = document.createElement('div');
    const sohTitle = document.createElement('h1');
    sohTitle.innerText = "Side of House";
    const sohText = document.createElement('p');
    sohText.innerText = "555-555-555 - soh@fakeemail.com";

    contentContainer.appendChild(contactContainer);
    contactContainer.append(foh, boh, soh);
    foh.append(fohTitle, fohText);
    boh.append(bohTitle, bohText);
    soh.append(sohTitle, sohText);
}