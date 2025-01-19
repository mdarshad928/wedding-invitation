import {
    formattedDate,
    formattedName,
    generateRandomColor,
    generateRandomId,
    getCurrentDateTime,
    renderElement
} from "../utils/helper.js";
import { data } from "../assets/data/data.js";
import { comentarService } from "../services/comentarService.js";

export const wishes = () => {
    const wishesContainer = document.querySelector('.wishes');
    const [_, form] = wishesContainer.children[2].children;
    const [peopleComentar, ___, containerComentar] = wishesContainer.children[3].children;
    const buttonForm = form.children[6];
    const pageNumber = wishesContainer.querySelector('.page-number');
    const [prevButton, nextButton] = wishesContainer.querySelectorAll('.button-grup button');

    // const listItemBank = (data) => (
    //     `  <figure data-aos="zoom-in" data-aos-duration="1000">
    //             <img src=${data.icon} alt="bank icon animation">
    //             <figcaption>No. Rekening ${data.rekening.slice(0, 4)}xxxx <br>A.n ${data.name}</figcaption>
    //             <button data-rekening=${data.rekening} aria-label="copy rekening">Salin No. Rekening</button>
    //        </figure>`
    // );

    // const initialBank = () => {
    //     const wishesBank = wishesContainer.children[1];
    //     const [_, __, containerBank] = wishesBank.children;

    //     renderElement(data.bank, containerBank, listItemBank);

    //     containerBank.querySelectorAll('button').forEach((button) => {
    //         button.addEventListener('click', async (e) => {
    //             const rekening = e.target.dataset.rekening;
    //             try {
    //                 await navigator.clipboard.writeText(rekening);
    //                 button.textContent = 'Berhasil menyalin';
    //             } catch (error) {
    //                 console.log(`Error : ${error.message}`);
    //             } finally {
    //                 setTimeout(() => {
    //                     button.textContent = 'Salin No. Rekening';
    //                 }, 2000);
    //             }
    //         });
    //     });
    // };

    const listItemComentar = (data) => {
        const name = formattedName(data.name);
        const newDate = formattedDate(data.date);
        let date = "";

        if (newDate.days < 1) {
            if (newDate.hours < 1) {
                date = `${newDate.minutes} minutes ago`;
            } else {
                date = `${newDate.hours} hour, ${newDate.minutes} minutes ago`;
            }
        } else {
            date = `${newDate.days} days, ${newDate.hours} hours ago`;
        }

        return ` <li data-aos="zoom-in" data-aos-duration="1000">
                     <div style="background-color: ${data.color}">${data.name.charAt(0).toUpperCase()}</div>
                     <div>
                         <h4>${name}</h4>
                         <p>${date} <br>${data.status}</p>
                         <p>${data.message}</p>
                     </div>
                 </li>`;
    };

    let lengthComentar;

    const initialComentar = async () => {
        containerComentar.innerHTML = `<h1 style="font-size: 1rem; margin: auto">Loading...</h1>`;
        peopleComentar.textContent = '...';
        pageNumber.textContent = '..';

        try {
            const response = await comentarService.getComentar();
            const { comentar } = response;

            lengthComentar = comentar.length;
            comentar.reverse();

            if (comentar.length > 0) {
                peopleComentar.textContent = `${comentar.length} Orang telah mengucapkan`;
            } else {
                peopleComentar.textContent = `Belum ada yang mengucapkan`;
            }

            pageNumber.textContent = '1';
            renderElement(comentar.slice(startIndex, endIndex), containerComentar, listItemComentar);
        } catch (error) {
            return `Error : ${error.message}`;
        }
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        buttonForm.textContent = 'Loading...';

        const comentar = {
            id: generateRandomId(),
            name: e.target.name.value,
            status: e.target.status.value === 'y' ? 'Hadir' : 'Tidak Hadir',
            message: e.target.message.value,
            date: getCurrentDateTime(),
            color: generateRandomColor(),
        };

        try {
            const response = await comentarService.getComentar();

            await comentarService.addComentar(comentar);

            lengthComentar = response.comentar.length;

            peopleComentar.textContent = `${++response.comentar.length} Orang telah mengucapkan`;
            containerComentar.insertAdjacentHTML('afterbegin', listItemComentar(comentar));
        } catch (error) {
            return `Error : ${error.message}`;
        } finally {
            buttonForm.textContent = 'Comment';
            form.reset();
        }
    });

    // click prev & next
    let currentPage = 1;
    let itemsPerPage = 4;
    let startIndex = 0;
    let endIndex = itemsPerPage;

    const updatePageContent = async () => {
        containerComentar.innerHTML = '<h1 style="font-size: 1rem; margin: auto">Loading...</h1>';
        pageNumber.textContent = '..';
        prevButton.disabled = true;
        nextButton.disabled = true;

        try {
            const response = await comentarService.getComentar();
            const { comentar } = response;

            comentar.reverse();

            renderElement(comentar.slice(startIndex, endIndex), containerComentar, listItemComentar);
            pageNumber.textContent = currentPage.toString();
        } catch (error) {
            console.log(error);
        } finally {
            prevButton.disabled = false;
            nextButton.disabled = false;
        }
    }

    nextButton.addEventListener('click', async () => {
        if (endIndex <= lengthComentar) {
            currentPage++;
            startIndex = (currentPage - 1) * itemsPerPage;
            endIndex = startIndex + itemsPerPage;
            await updatePageContent();
        }
    });

    prevButton.addEventListener('click', async () => {
        if (currentPage > 1) {
            currentPage--;
            startIndex = (currentPage - 1) * itemsPerPage;
            endIndex = startIndex + itemsPerPage;
            await updatePageContent();
        }
    });

    initialComentar().then();
    // initialBank();
};
