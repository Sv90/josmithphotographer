const modalController = (modal, btnOpen, btnClose) => {
    const buttonElem = document.querySelector(btnOpen);
    const modalElem = document.querySelector(modal);

    modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;

`;

    const closeModal = event => {
        const target = event.target;
        if (target === modalElem || target.closest(btnClose)) {
        
            modalElem.style.opacity = 0;
            setTimeout(() => {
                modalElem.style.visibility = 'hidden';
            }, 300)
        }
    };

    const openModal = () => {
        event.preventDefault();
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
    };
    document.addEventListener('click', (event) => {
        if (event.target.matches('.products__item-btn')) {
            openModal();
        }
    });
    buttonElem.addEventListener('click', openModal);
    modalElem.addEventListener('click', closeModal);

};

modalController(
    '.modal_1',
    '.products__item-btn_1',
    '.modal__close'
);

modalController(
    '.modal_2',
    '.products__item-btn_2',
    '.modal__close'
);

modalController(
    '.modal_3',
    '.products__item-btn_3',
    '.modal__close'
);







