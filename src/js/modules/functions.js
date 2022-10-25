//проверка поддержки Webp, добавление класса Webp или no-webp для HTML
export function isWebp(){
    //проверка поддержки Webp
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2)
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA"
    }
    //добавление класса Webp или no-webp для HTML
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });

}