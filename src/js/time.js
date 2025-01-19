import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [marriageDiv, receptionDiv] = timeContainer.querySelectorAll('div div');
    const [mapLinkMarriage, mapLinkReception] = timeContainer.querySelectorAll('div a');
    const [addressParagraphMarriage, addressParagraphReception] = timeContainer.querySelectorAll('div p');
    // const mapLinkMarriage = marriageDiv.querySelector('a');
    // const addressParagraphMarriage = marriageDiv.querySelector('a + p');

    const createTimeListItem = (title, details) => (
        `<h3>${title}</h3>
         <p>${details.day}, ${details.date} ${details.month} ${details.year} <br> 
         Starting ${details.hours.start} till ${details.hours.finish}</p>`
    );

    marriageDiv.innerHTML = createTimeListItem('Nikah', data.time.marriage);
    mapLinkMarriage.href = data.link.mapMarriage;
    addressParagraphMarriage.textContent = data.time.address;

    receptionDiv.innerHTML = createTimeListItem('Dawat-e-Walima', data.time.reception);
    mapLinkReception.href = data.link.mapReception;
    addressParagraphReception.textContent = data.time.reception.address;
    // mapLink.href = data.link.map;
    // addressParagraph.textContent = data.time.address;
};
