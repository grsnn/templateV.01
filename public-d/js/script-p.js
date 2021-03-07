let iconMenu = document.querySelector('.menu')
let navList = document.querySelector('.nav-list')
let loadImg = document.getElementById('contItem')
const scrollT = document.querySelector('#buttonTop')
const nav = document.getElementById('nav')
let input = document.getElementById('url')
let buttonCopiar = document.querySelector('.button-copiar')


window.addEventListener('load', () => {
    iconMenu.addEventListener('click', () =>{
        iconMenu.classList.toggle('active')
        navList.classList.toggle('nav-open')
    })

    navList.addEventListener('click', () =>{
        iconMenu.classList.remove('active')
        navList.classList.remove('nav-open')
    })

    buttonCopiar.addEventListener('click', () =>{
        input.focus()
        document.execCommand('selectAll')
        document.execCommand('copy')

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Copiado al portapapeles',
            showConfirmButton: false,
            timer: 2000
        })

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
})
