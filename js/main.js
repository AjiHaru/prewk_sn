'use strict';
{
    // ハンバーガーボタンクリック時
    const openClose = document.getElementById("openClose");
    const nav = document.querySelector(".nav-menu");
    const navMenu = document.getElementById("js-header");
    const overlap = document.querySelector(".overlap");

    openClose.addEventListener('click', () => {
        nav.classList.toggle('active');
        openClose.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlap.classList.toggle('active');
    });

    // 黒い画面のどこかをクリックするとトップページに戻る
    overlap.addEventListener('click', () => {
        overlap.classList.remove('active');
        nav.classList.remove('active');
        openClose.classList.remove('active');
    });

    // スクロール時に画像をフェードインさせる
    const fadeinTarget = document.querySelectorAll(".item-fadein");
    console.log(fadeinTarget);
    document.addEventListener("scroll", function () {
        for (let i = 0; i < fadeinTarget.length; i++) {
            const getElementDistance = fadeinTarget[i].
                getBoundingClientRect().top + fadeinTarget[i].clientHeight * .6
            /*↑ブラウザの上端からの距離を求める処理*/
            /*↑要素の6割の高さを足す (=要素がある程度見えてからアニメーションがつくようにする)*/
            console.log(getElementDistance)
            if (window.innerHeight > getElementDistance) {
                fadeinTarget[i].classList.add("show");
            }
        }
    })

    // ページ内リンククリック時にトップページに戻る
    const pageLink = document.querySelector(".nav-link");

    pageLink.addEventListener('click', () => {
        overlap.classList.remove('active');
        nav.classList.remove('active');
        openClose.classList.remove('active');
    });

}