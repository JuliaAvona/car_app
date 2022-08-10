document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior:"smooth"});
}

var buttons = document.getElementsByClassName("button1");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior:"smooth"});
    }
}

document.getElementById("price").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле Ваш телефон!");
    } else if (document.getElementById("price-input").value === "") {
        alert("Выберете автомобиль в форме!");
    } else {
        alert("Спасибо за заявку!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-img');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
});

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.5 * window.pageYOffset) + 'px';
})
});