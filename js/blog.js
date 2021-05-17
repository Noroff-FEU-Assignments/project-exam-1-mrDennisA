const container = document.querySelector("#container");
container.innerHTML = ` 
<section>
    <h2 class="c07">.<span class="c06 spacing">${pageTitle02}</span></h2>
    <div id="articleContainer"></div>
</section>`;

let cardWidth = validateWidth();
let cardNewSize = 0;
let cardOffset = 0;

function validateWidth() {
    if (window.innerWidth <= 767) {
        return 3;
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        return 6;
    }
    if (window.innerWidth >= 992) {
        return 9;
    }
}

function blog(posts) {
    article(posts);

    window.addEventListener("scroll", () => {
        setTimeout(() => {
            if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2) {
                cardWidth = cardNewSize + validateWidth();
                cardNewSize += validateWidth();
                article(posts);
            }
        }, 600);
    });
}

fetchApi();
