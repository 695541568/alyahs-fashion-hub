const productsData = [
    {
        name: "Batiki Dress",
        price: "Rejareja: TZS 35,000 | Jumla (≥3): TZS 32,000",
        images: [
            "images/batiki.jpg",
            "images/batiki-2.jpg",
            "images/batiki-3.jpg",
            "images/batiki-4.jpg"
        ]
    },
    {
        name: "Casual Dress",
        price: "Rejareja: TZS 30,000 | Jumla (≥3): TZS 27,000",
        images: [
            "images/casual.jpg",
            "images/casual-2.jpg",
            "images/casual-3.jpg",
            "images/casual-4.jpg"
        ]
    },
    {
        name: "Two Piece Outfit",
        price: "Rejareja: TZS 38,000 | Jumla (≥3): TZS 35,000",
        images: [
            "images/two piece.jpg",
            "images/two piece-2.jpg",
            "images/two piece-3.jpg"
        ]
    },
    {
        name: "Rica Dress",
        price: "Rejareja: TZS 40,000 | Jumla (≥3): TZS 37,000",
        images: [
            "images/ricadress.jpg",
            "images/ricadress-2.jpg",
            "images/ricadress-3.jpg"
        ]
    },
    {
        name: "Short Dress",
        price: "Rejareja: TZS 28,000 | Jumla (≥3): TZS 25,000",
        images: [
            "images/short dress.jpg",
            "images/short dress-2.jpg",
            "images/short dress-3.jpg"
        ]
    },
    {
        name: "Long Maxi Dress",
        price: "Rejareja: TZS 45,000 | Jumla (≥3): TZS 42,000",
        images: [
            "images/maxi.jpg",
            "images/maxi-2.jpg",
            "images/maxi-3.jpg"
        ]
    }
];

const productsContainer = document.getElementById("products");
const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");

let slideInterval;
let currentImages = [];
let currentIndex = 0;

/* RENDER GRID */
productsData.forEach(product => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
    `;
    card.onclick = () => openViewer(product.images);
    productsContainer.appendChild(card);
});

/* FULLSCREEN AUTOSLIDE */
function openViewer(images) {
    currentImages = images;
    currentIndex = 0;
    viewerImage.src = currentImages[0];
    viewer.classList.remove("hidden");

    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % currentImages.length;
        viewerImage.src = currentImages[currentIndex];
    }, 2000);
}

function closeViewer() {
    clearInterval(slideInterval);
    viewer.classList.add("hidden");
}
