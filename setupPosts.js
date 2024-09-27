function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

function clicked() {
    console.log("clicked");
}

function toggleHeart(event, element) {
    event.stopPropagation();

    if (element.src.includes("heart-icon-full.png")) {
        element.src = "heart-icon-empty.png";
        return;
    }

    element.src = "heart-icon-full.png";
}

function toggleBookmark(event, element) {
    event.stopPropagation();

    if (element.src.includes("bookmarks-icon-full")) {
        element.src = "bookmarks-icon-empty.png";
        return;
    }

    element.src = "bookmarks-icon-full.png";
}

function toggleTagsPanel() {
    document.getElementsByClassName("tags-panel-container")[0].classList.toggle("tags-panel-container-movement");

}

function selectPage(element) {
    if (element.classList.contains("page-item-container-clicked"))
        return;

    let pages = document.getElementsByClassName("page-item-container");

    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        page.classList.remove("page-item-container-clicked");
    }

    element.classList.add("page-item-container-clicked");

    let containerElement = document.getElementsByClassName("posts-container")[0];
    containerElement.innerHTML = "";
    scrollToTop();
    LoadPosts();
}

function LoadPages() {
    let pageContainer = document.getElementsByClassName("pages-container")[0];

    for (let i = 0; i < 5; i++) {
        pageContainer.innerHTML += `
        <div class="page-item-container clickable-el" onclick="selectPage(this)">
            <div class="page-number">${i + 1}</div>
        </div>
        `;
    }

    let firstPage = document.getElementsByClassName("page-item-container")[0];
    selectPage(firstPage);
}

function LoadPosts() {
    let actualImages = [
        "-20240819x1.jpg",
        "aleksandra-alekseeva-14-1.jpg",
        "alexandra-fomina-1.jpg",
        "alexis-rives-otachan-post-apo-illu.jpg",
        "alex-out-moonlight.jpg",
        "bayard-wu-alleria-bw.jpg",
        "bayard-wu-thrall-bw.jpg",
        "bx-moon-art-studio-hok-clazroom-bx-moon-art-studio.jpg",
        "esuthio-20240916.jpg",
        "hangfevef-.jpg",
        "hanwool-lee-20240926.jpg",
        "igor-staritsin-lightsamuraironin-istaritsin.jpg",
        "kev-chan-asset.jpg",
        "kevin-adi-img-8462.jpg",
        "kooka-fu-h4mtaiaa0cnc.jpg",
        "kotokate-2024-wanderer-and-mini-durin-by-kotokate.jpg",
        "maracuja-studio-arte.jpg",
        "mx-boogie-creations-board-final02-wip01-copy.jpg",
        "orson-captainsass-illu-as.jpg",
        "peter-ocampo-halfres.jpg",
        "philipp-a-urlich-cpncept697.jpg",
        "rachel-ho-img-9361.jpg",
        "raja-nandepu-predawn.jpg",
        "song-nan-li-.jpg",
        "stephen-sitton-escaping-wonderland-key-art.jpg",
        "xt-art-100-20240523-2.jpg",
        "zimmy-2.jpg",
        "zoe-work1renderedconcept4png.jpg"
    ]

    let images = [
        "71cd9b3bd90aacb4b555ac9ca9015769.png",
        "72c6c5d2891f05319e5cf67919ee384a-sample.jpg",
        "72c9135c7dbdbc6a98a1bd67add108de-sample.jpg",
        "74b167e5da40b272a3f737af8fca2b88.png",
        "76a205fc463077305fdfdf1695f3e450-sample.jpg",
        "76ed0da157c6c1d6522894b768381376.png",
        "77e7128a68e8fdf3c6f6d9f4426a9eb8-sample.jpg",
        "78e5c4a613a4050f1700cdbfec36c908-sample.jpg",
        "79b64ed4-2e95-4e79-a5fd-4be6a2d7ef21.jpg",
        "81d19f8bee1e60bc0de72675bb9d6ab9-sample.jpg",
        "83fa8739077f56482869eea3991d23fe-sample.jpg",
        "84dc125dfcdb344e27c0a04478aca08a-sample.jpg",
        "85a156ef889bab66c8681b7365e8c348.jpg",
        "85ea3d58a22034ccda7f37795347b6b1-sample.jpg",
        "85ede73b189387f203c90819b72aa956.jpg",
        "87b980568747a72d491b43111e62147b-sample.jpg",
        "94d07d87-5ea0-4951-9a06-e5aef596e656.jpg",
        "94f1101b81697026822242a85c741026.jpg",
        "95a26712741fa550515091a4a97f9c7c-sample.jpg",
        "95dd4d43c0e9d011e844f8b58e06983c-sample.jpg",
        "96f6dd74a47385ba5ab80363b62e7c0d-sample.jpg",
        "98a0dce125cca1a0d4150bbd5d91d724-sample.jpg",
        "98bf2d720e7101223eb2d8da3f80ec80-sample.jpg",
        "103d21813207bcd48ee5fc1df4d3cadf-sample.jpg",
        "122a08d692cc2a09fe67d2964b68883e.png",
        "131d1ed1388886588ddc9bc408a1a56a-sample.jpg",
        "132c818011dbc288e09638704a63462d-sample.jpg",
        "155a531ccf3b63b9eba7e01ab1bae434-sample.jpg"
    ]

    shuffle(actualImages);

    let titleNames = ["publication", "height", "extreme", "ignorant", "panic", "loot", "prey", "horn", "harbor", "claim", "single", "age", "kettle", "citizen", "coincide", "slam", "rest", "kit", "squash", "slow", "solid", "dull", "lamp", "note", "blade", "omission", "cope", "fuss"];
    shuffle(titleNames);

    let containerElement = document.getElementsByClassName("posts-container")[0];

    for (let i = 0; i < actualImages.length; i++) {
        let fileName = actualImages[i];
        let title = titleNames[i];
        title = title.charAt(0).toUpperCase() + title.slice(1);

        containerElement.innerHTML += `
            <div class="post clickable-el" onclick="clicked()">
                <img class="post-thumbnail horizontal-centered-el" src="actual-images/${fileName}">
                <div class="bookmark-container">
                    <img src="bookmarks-icon-empty.png" onclick="toggleBookmark(event, this)">
                </div>
                <div class="post-short-info">
                    <div class="post-title-container">
                        <div class="post-title">${title}</div>
                    </div>
                    <div class="likes">
                        <img class="likes-icon" src="heart-icon-empty.png" onclick="toggleHeart(event, this)">
                        <div class="likes-amount">${parseInt(getRandomInt(100000))}</div>
                    </div>
                    <div class="comments">
                        <div class="comments-amount">${parseInt(getRandomInt(100000))}</div>
                        <img class="comments-icon" src="comment-icon.png">
                    </div>
                </div>
            </div>
        `;
    }
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let mybutton = document.getElementsByClassName("scroll-to-top")[0];

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";

    } else {
        mybutton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    });
}

document.addEventListener('DOMContentLoaded', function () {
    LoadPages();
    LoadPosts();
}, false);
