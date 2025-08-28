const reviews = [
    {
        stars: 5,
        text: "We were fighting price wars. Price Optimizer Pro helped us win the Buy Box profitably.",
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        initials: "NW",
        name: "Nik Waider",
        company: "ATL Company"
    },
    {
        stars: 5,
        text: "This tool boosted our sales and saved us countless hours of manual price adjustments.",
        initials: "JS",
        img: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Julia Smith",
        company: "EcomExperts"
    },
    {
        stars: 5,
        text: "The automation is fantastic. Our revenue grew 20% in just two months!",
        initials: "RB",
        img: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Robert Brown",
        company: "TechMart"
    },
    {
        stars: 5,
        text: "Good tool, the support could be faster. Still, very useful overall.",
        initials: "LM",
        img: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Laura Martinez",
        company: "MarketPro"
    },
    {
        stars: 5,
        text: "This tool is saving me a great deal of work in inventory management.",
        initials: "CD",
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Chris Damon",
        company: "SendXpress"
    }
];

let currentIndex = 0;

const starsBox = document.getElementById('stars-box');
const reviewText = document.getElementById('review-text');
const userInitials = document.getElementById('user-initials');
const userImg = document.getElementById('user-img');
const userName = document.getElementById('user-name');
const userCompany = document.getElementById('user-company');
const dotsContainer = document.getElementById('dots-container');
const reviewBox = document.querySelector('.review-slider-box-content');

function renderDots() {
    dotsContainer.innerHTML = "";
    reviews.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = index === currentIndex ? 'review-navigation-dot--active' : 'review-navigation-dot--inactive';
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlide();
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    });
}

function renderStars(starCount) {
    starsBox.innerHTML = '';
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'stop-list-icon';
        star.innerHTML = `<img src="./assets/icons/Star.svg" alt="Star">`;
        starsBox.appendChild(star);
    }
}

function updateSlide() {
    reviewBox.classList.add('fade-out');
    reviewBox.classList.remove('fade-in'); // Remove fade-in class to allow re-triggering the animation

    setTimeout(() => {
        const review = reviews[currentIndex];
        renderStars(review.stars);
        reviewText.textContent = `"${review.text}"`;
        /* userInitials.textContent = review.initials; */
        userImg.innerHTML = '';
        const imgElement = document.createElement('img');
        imgElement.src = review.img;
        imgElement.alt = `${review.name} from ${review.company}`
        imgElement.classList.add('review-avatar');
        userImg.appendChild(imgElement);
        userName.textContent = review.name;
        userCompany.textContent = review.company;
        renderDots();

        reviewBox.classList.remove('fade-out');
        reviewBox.classList.add('fade-in');
    }, 500); // Set a delay that is half of your animation duration (e.g., 0.5s for 1s animation)
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateSlide();
    resetAutoSlide();
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateSlide();
    resetAutoSlide();
});

let autoSlide = setInterval(nextSlide, 3000);

function nextSlide() {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateSlide();
};

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 2500);
};