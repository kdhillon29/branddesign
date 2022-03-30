

 const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav');

   console.log("in script",menu);
            menu.addEventListener('click', () => {
                nav.classList.add('open-nav')
                console.log("click event added");
            })

            close.addEventListener('click', () => {
                nav.classList.remove('open-nav')
            })

