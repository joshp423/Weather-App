import { content } from "./content.js";
import { menuRender } from "./menu.js";
import { contactRender } from "./contact.js";
import './style.css';

const tabs = document.querySelectorAll('nav>div');

content();

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        if (!tab.classList.contains('active')) {
                tabs.forEach((tab) => {
                    tab.classList.remove('active')
                     tab.classList.add('notActive')
                })

                const mainContainer = document.getElementById('content')
                while (mainContainer.hasChildNodes()) {
                    mainContainer.removeChild(mainContainer.firstChild)
                }

                tab.classList.add('active');
                tab.classList.remove('notActive');

                switch (tab.id) {
                    case "home": 
                        content();
                        const homeContent = document.getElementById('homeContent');
                        homeContent.classList.add('activeContent');
                        homeContent.classList.remove('notActiveContent');
                        break;
                    
                    case "menu":
                        menuRender();
                        const menuContent = document.getElementById('menuContent');
                        menuContent.classList.add('activeContent');
                        menuContent.classList.remove('notActiveContent');
                        break;

                    case "contact":
                        contactRender();
                        const contactContent = document.getElementById('contactContent');
                        contactContent.classList.add('activeContent');
                        contactContent.classList.remove('notActiveContent');
                        
                }
            }
        })

    });



console.log("this is working :)")
