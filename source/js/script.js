//@@include('app/dynamic_adapt.js');
//@@include('app/tabs.js');
//@@include('app/spoller.js');

// Функция для проверки на мобильные устрайства
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.querySelector('html').classList.add('_touch');
}
// \\\\ Функция для проверки на мобильные устрайства

const body = document.body;
// Функция для проверки поддерживает ли браузер формат изображений .webp
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('html').classList.add('webp');
    } else {
        document.querySelector('html').classList.add('no-webp');
    }
});
//  \\\

window.onload = function () {

    document.addEventListener("click", ducumentActions);

    function ducumentActions(e) {
        const targerElement = e.target;
        if (window.innerWidth > 100) {
            if (targerElement.closest(".menu__item.menu__arrow")) {
                console.log(targerElement);
                if (targerElement.closest(".menu__link")) {
                    console.log('link')
                }
                targerElement.closest('.menu__item').classList.toggle('_hover');
            }
            if (!targerElement.closest('.menu__item.menu__arrow')) {

                let targerElementHover = document.querySelectorAll('.menu__item._hover');
                var targerElementHoverArray = Array.prototype.slice.call(targerElementHover);
                for (var i = 0; i < targerElementHoverArray.length;) {
                    targerElementHoverArray[i].classList.remove('_hover');
                    ++i
                }
            }

        }

        if (window.innerWidth > 600) {
            if (targerElement.closest("#profile")) {
                targerElement.closest('#profile').classList.toggle('active');
            }
            if (!targerElement.closest("#profile") && document.querySelector('#profile.active')) {
                console.log("test");
                console.log(targerElement);
                let profileActive = document.querySelector('#profile.active');
                profileActive.classList.remove('active');
            }
        }
        if (window.innerWidth < 600 && targerElement.closest("#profile")) {
            let hrefProfile = document.querySelector('#profile').getAttribute("data-href");
            document.location.href = hrefProfile;
        }
    }

}



// buger
let htmlTag = document.documentElement;
let burgerBtns = [...document.querySelectorAll(".burger")];
for (const burgerBtn of burgerBtns) {
    burgerBtn.addEventListener("click", function () {
        body.classList.toggle("active");
        htmlTag.classList.toggle("lock");
    });
}
//  \\\



window.addEventListener("load", windowLoad);

function windowLoad() {

    console.log('ree')
    const htmlBlock = document.documentElement;

    const saveUserTheme = localStorage.getItem('user-theme');


    let userTheme;
    if (window.matchMedia) {
        userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        console.log(userTheme)
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        !saveUserTheme ? changeTheme() : null;
    });

    // 3mixna memu no Kniky
    const themeButton = document.querySelector('.page__theme');
    const resetButton = document.querySelector('.page_reset');
    if (themeButton) {
        themeButton.addEventListener("click", function (e) {
            // resetButton.classList.add('active');
            changeTheme(true);
        });
    }
    if (resetButton) {
        resetButton.addEventListener("click", function (e) {
            resetButton.classList.remove('active');
            localStorage.setItem('user-theme', '');
        });
    }

    function setThemeClass() {
        if (saveUserTheme) {
            htmlBlock.classList.add(saveUserTheme)
            resetButton.classList.add('active');
        } else {
            htmlBlock.classList.add(userTheme);
        }
    }
    setThemeClass();


    function changeTheme(saveTheme = false) {

        let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
        let newTheme;

        if (currentTheme === 'light') {
            newTheme = 'dark';
        } else if (currentTheme === 'dark') {
            newTheme = 'light';
        }


        htmlBlock.classList.remove(currentTheme);
        htmlBlock.classList.add(newTheme);
        saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
    }

}