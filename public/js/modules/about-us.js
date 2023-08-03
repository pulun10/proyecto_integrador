
console.warn('🆗: Módulo PageNosotros cargado.');

class PageNosotros {

    static async init () {
        const accordionTitle = document.querySelectorAll('.accordion_title');
        const accordionContent = document.querySelectorAll('.accordion_content');

        for (let i = 0; i < accordionTitle.length; i++) {
        accordionTitle[i].addEventListener('click', () => {
            accordionContent[i].classList.toggle('accordion_content_active');
        })
        }
    }
}

export default PageNosotros;
