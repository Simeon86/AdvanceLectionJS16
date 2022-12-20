 // ;(() => {
 //     alert()
 // })()

 ////////////////////////////////////////

// ;(() => {
//     const hButton = document.querySelector('[js-hamburger-btn]');

//     hButton.addEventListener('click', function() {
//         // alert()
//         if (this.classList.contains('active')) {
//             this.classList.remove('active');
//             document.dispatchEvent(new CustomEvent('togleHamburger', {
//                 detail: {
//                     open: false
//                 }
//             }));
//             return;
//         }
//         this.classList.add('active')
//         document.dispatchEvent(new CustomEvent('togleHamburger', {
//             detail: {
//                 open: true
//             }
//         }));
//     });

//     function toggleHamburgerMenu(open) {
//         const hMenu = document.querySelector('[js-hamburger-menu]');
//         if (open && !hMenu.classList.contains('active')) {
//             hMenu.classList.add('active');
//             return
//         }
//         if (!open && hMenu.classList.contains('active')) {
//             hMenu.classList.remove('active');
//             return
//         }
//     }
//     document.addEventListener('togleHamburger', function(event) {
//         toggleHamburgerMenu(event.detail.open)
//     });
// })()

///////////////////////////////////////
// Shortcode

;(() => {

    function toggleHamburgerButton(open) {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            toggleHamburgerMenu(false);
            
            return;
        }

        this.classList.add('active');
        toggleHamburgerMenu(true);
    }

    function toggleHamburgerMenu(open) {
        const hMenu = document.querySelector('[js-hamburger-menu]');
        if (open && !hMenu.classList.contains('active')) {
            hMenu.classList.add('active');
            return
        }
        if (!open && hMenu.classList.contains('active')) {
            hMenu.classList.remove('active');
            return
        }
    }

    const hButton = document.querySelector('[js-hamburger-btn]');
    hButton.addEventListener('click', toggleHamburgerButton)
})()