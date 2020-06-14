import { generateMenu } from './menu';
import { list } from './menu/data';


const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
navMenu.innerHTML = generateMenu(list);
navMenu.addEventListener('click', (event: MouseEvent) => {
    const el: HTMLElement = event.target as HTMLElement;
    if (!el.classList.contains('title')) {
        return;
    }
    const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
    parentLi.classList.toggle('menu-open')
})
