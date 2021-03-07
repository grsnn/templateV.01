let iconMenu = document.querySelector('.menu')
let navList = document.querySelector('.nav-list')
let loadImg = document.getElementById('contItem')
const scrollT = document.querySelector('#buttonTop')
var scroll = new SmoothScroll('a[href*="#"]')
const nav = document.getElementById('nav')

window.addEventListener('load', () => {
    iconMenu.addEventListener('click', () =>{
        iconMenu.classList.toggle('active')
        navList.classList.toggle('nav-open')
    })

    navList.addEventListener('click', () =>{
        iconMenu.classList.remove('active')
        navList.classList.remove('nav-open')
    })

    window.onscroll = () => {
        if(document.documentElement.scrollTop > 100){
            scrollT.classList.add('shows')
            nav.classList.add('activeNav')
        }else{
            scrollT.classList.remove('shows')
            nav.classList.remove('activeNav')
        }

        scrollT.addEventListener('click', () =>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    }

    const template = new Muuri('.cont-item', {
        layout: {
            rounding: false
        }
    });

    template.refreshItems().layout();
    loadImg.classList.add('load-img');

    // Agregamos los listener de los enlaces para filtrar por categoria.
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('active-btn'));
            evento.target.classList.add('active-btn');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? template.filter('[data-categoria]') : template.filter(`[data-categoria="${categoria}"]`);
        });
    });

    // Agregamos el listener para la barra de busqueda
    document.querySelector('#search').addEventListener('input', (e) => {
        const searchI = e.target.value.toLowerCase();
        template.filter((item) => item.getElement().dataset.labels.includes(searchI));
    });
})
