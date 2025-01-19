import { data } from "../assets/data/data.js";

export const gallery = () => {
    const galleryElement = document.querySelector('.gallery');
    const showAllContainer = galleryElement.querySelector('div:nth-of-type(2)');

    const [_, figureElement, paginationElement, prevButton, nextButton, showAllButton] = galleryElement.children[0].children;
    const [__, showAllBox, closeButton] = showAllContainer.children;

    const initializeGallery = () => {
        const initialImage = data.gallery[0];
        figureElement.innerHTML = `<img src="${initialImage.image}" alt="gallery image" id="${initialImage.id}">`;

        data.gallery.forEach((item, index) => {
            paginationElement.innerHTML += `<li data-id="${item.id}" ${index === 0 ? 'class="active"' : ''}></li>`;
        });

        updateNavigationButtons(initialImage.id);
    };

    const updateGalleryImage = (id) => {
        const selectedImage = data.gallery.find(item => item.id === id);

        if (selectedImage) {
            figureElement.innerHTML = `<img src="${selectedImage.image}" alt="gallery image" id="${selectedImage.id}">`;

            paginationElement.querySelectorAll('li').forEach((li) => {
                li.classList.toggle('active', parseInt(li.dataset.id) === id);
            });
        }
    };

    const updateNavigationButtons = (id) => {
        nextButton.dataset.id = `${id}`;
        prevButton.dataset.id = `${id}`;
    };

    const autoPlayGallery = () => {
        let id = parseInt(nextButton.dataset.id);
        id = (id < data.gallery.length) ? id + 1 : 1;
        updateNavigationButtons(id);
        updateGalleryImage(id);
    };

    nextButton.addEventListener('click', () => {
        let id = parseInt(nextButton.dataset.id);
        if (id < data.gallery.length) {
            id++;
            updateNavigationButtons(id);
            updateGalleryImage(id);
        }
    });

    prevButton.addEventListener('click', () => {
        let id = parseInt(prevButton.dataset.id);
        if (id > 1) {
            id--;
            updateNavigationButtons(id);
            updateGalleryImage(id);
        }
    });

    showAllButton.addEventListener('click', () => {
        showAllBox.innerHTML = data.gallery.map(item => `<img src="${item.image}" alt="image gallery">`).join('');
        showAllContainer.classList.add('active');
    });

    closeButton.addEventListener('click', () => {
        showAllBox.innerHTML = '';
        showAllContainer.classList.remove('active');
    });

    initializeGallery();
    setInterval(autoPlayGallery, 3000);

    paginationElement.querySelectorAll('li').forEach((pagination) => {
        pagination.addEventListener('click', (e) => {
            const id = +e.target.dataset.id;
            updateGalleryImage(id);
        })
    })
};
