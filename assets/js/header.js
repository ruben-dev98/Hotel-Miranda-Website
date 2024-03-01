displayMenu = (list, icon_to_hide, icon_to_show, isHiding) => {
    let display = 'none';
    if(isHiding) {
        display = 'block'
    }
    list.setAttribute('style', `display: ${display}`);
    icon_to_hide.setAttribute('style', `display: none`);
    icon_to_show.setAttribute('style', `display: inline-block`);

}

document.querySelector('.header__menu').addEventListener('click', (event) => {
    event.target.classList.toggle('--visible');
    document.querySelector('.header__nav').classList.toggle('--visible');
});