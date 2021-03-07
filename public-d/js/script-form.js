let iconMenu = document.querySelector('.menu')
let navList = document.querySelector('.nav-list')
const scrollT = document.querySelector('#buttonTop')

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
        }else{
            scrollT.classList.remove('shows')
        }

        scrollT.addEventListener('click', () =>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    }
