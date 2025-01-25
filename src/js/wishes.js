import {
    formattedDate,
    formattedName,
    generateRandomColor,
    generateRandomId,
    getCurrentDateTime,
    renderElement
} from "../utils/helper.js";
import { data } from "../assets/data/data.js";
import { commentService } from "../services/commentService.js";

export const wishes = () => {
    const wishesContainer = document.querySelector('.wishes');
    const [_, form] = wishesContainer.children[2].children;
    const [peopleComment, ___, containerComment] = wishesContainer.children[3].children;
    const buttonForm = form.children[6];
    const pageNumber = wishesContainer.querySelector('.page-number');
    const [prevButton, nextButton] = wishesContainer.querySelectorAll('.button-grup button');

    const listItemComment = (data) => {
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

    let lengthComment;

    const initialComment = async () => {
        containerComment.innerHTML = `<h1 style="font-size: 1rem; margin: auto">Loading...</h1>`;
        peopleComment.textContent = '...';
        pageNumber.textContent = '..';

        try {
            const response = await commentService.getComment();
            const { comment } = response;

            lengthComment = comment.length;
            comment.reverse();

            if (comment.length > 0) {
                peopleComment.textContent = `${comment.length} Orang telah mengucapkan`;
            } else {
                peopleComment.textContent = `Belum ada yang mengucapkan`;
            }

            pageNumber.textContent = '1';
            renderElement(comment.slice(startIndex, endIndex), containerComment, listItemComment);
        } catch (error) {
            return `Error : ${error.message}`;
        }
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        buttonForm.textContent = 'Loading...';

        const comment = {
            id: generateRandomId(),
            name: e.target.name.value,
            status: e.target.status.value === 'y' ? 'Hadir' : 'Tidak Hadir',
            message: e.target.message.value,
            date: getCurrentDateTime(),
            color: generateRandomColor(),
        };

        try {
            const response = await commentService.getComment();

            await commentService.addComment(comment);

            lengthComment = response.comment.length;

            peopleComment.textContent = `${++response.comment.length} Orang telah mengucapkan`;
            containerComment.insertAdjacentHTML('afterbegin', listItemComment(comment));
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
        containerComment.innerHTML = '<h1 style="font-size: 1rem; margin: auto">Loading...</h1>';
        pageNumber.textContent = '..';
        prevButton.disabled = true;
        nextButton.disabled = true;

        try {
            const response = await commentService.getComment();
            const { comment } = response;

            comment.reverse();

            renderElement(comment.slice(startIndex, endIndex), containerComment, listItemComment);
            pageNumber.textContent = currentPage.toString();
        } catch (error) {
            console.log(error);
        } finally {
            prevButton.disabled = false;
            nextButton.disabled = false;
        }
    }

    nextButton.addEventListener('click', async () => {
        if (endIndex <= lengthComment) {
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

    initialComment().then();
};
