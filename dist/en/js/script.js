window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    // scrolling

    const scrolling = (selector) => {
        const upelem = document.querySelector(selector);
        
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 1700) {
                upelem.classList.add('animated', 'fadeIn');
                upelem.classList.remove('fadeOut');
            } else {
                upelem.classList.remove('fadeIn');
                upelem.classList.add('fadeOut');
            }
        });
    
        let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;
        
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
    
                let widthTop = document.documentElement.scrollTop,
                    hash = this.hash,
                    toBlock = document.querySelector(hash).getBoundingClientRect().top,
                    start = null;
    
                requestAnimationFrame(step);
    
                function step(time) {
                    if (start === null) {
                        start = time;
                    }
    
                    let progress = time - start,
                        r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));
    
                        document.documentElement.scrollTo(0, r);
    
                    if (r != widthTop + toBlock) {
                        requestAnimationFrame(step);
                    } else {
                        location.hash = hash;
                    }
                }
            });
        });
    };

    scrolling('.pageup');

    //menu

    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            menu.classList.remove('active');
        }
    });

    // ratings

    const percentage = document.querySelectorAll('.skills__ratings-counter'),
    line = document.querySelectorAll('.skills__ratings-line span');

    percentage.forEach((elem, i) => {
        line[i].style.width = elem.innerHTML;
    });

    // forms

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();    
    };

    const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'), 
        comments = document.querySelectorAll('[name="message"]');
        
    const message = {
        loading: '',
        success: '',
        error: '',
        spinner: 'icons/spinner.gif',
        ok: 'icons/ok.png',
        fail: 'icons/fail.png'
    };

    const html = document.querySelector('[lang]');
    console.log(html.id);

    if (html.id === 'en') {
        message.loading = 'Loading...';
        message.success = 'Thanks! We will contact you soon...';
        message.error = 'Something goes wrong :(';
    } else if (html.id === 'ru') {
        message.loading = 'Загрузка...';
        message.success = 'Спасибо! Мы с вами скоро свяжемся...';
        message.error = 'Что-то пошло не так...:(';
    } else if (html.id === 'tr') {
        message.loading = 'Yükleniyor...';
        message.success = 'Teşekkürler! Sizinle iletişime geçeceğiz :)';
        message.error = 'Bir hata oluştu :(';
    } else {
        message.loading = 'Юкланмоқда...';
        message.success = 'Раҳмат! Яқинда сиз билан боғланамиз ...';
        message.error = 'Бир хатолик юзага келди :(';
    }
    console.log(message);

    const path = 'server.php';

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        comments.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');

            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.style.color = '#ffffff';
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);

            postData(path, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    textMessage.textContent = message.error;
                    statusImg.setAttribute('src', message.fail);
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'grid';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
            });
        });
    };

    forms();

    // menu

    const menuBlock = document.querySelector('.menu'),
    policyBlock = document.querySelector('.policy');

    if (policyBlock) {
        menuBlock.style.display = 'none';
        menuBlock.nextSibling.style.display = 'none';
    }

});





