const cardsContainer = document.querySelector('.frequenly-cards-container');
const cardIconOpen = './assets/icons/plus.svg';
const cardIconClose = './assets/icons/minus.svg';

const data = [
    {
        title: 'Is setup easy?',
        message: 'Is setup easy?'
    },
    {
        title: 'Will it race my prices to the bottom?',
        message: 'Is setup easy?'
    },
    {
        title: 'Do I need to install anything?',
        message: 'Is setup easy?'
    },
    {
        title: 'Can I cancel anytime?',
        message: 'No contracts or hidden fees.'
    },
    {
        title: 'Is my Amazon account secure?',
        message: 'Is setup easy?'
    }
];

const renderCards = () => {
    data.forEach(newElement => {
        const cardBox = document.createElement('div');
        const cardContent = document.createElement('div');
        const cardTitle = document.createElement('p');
        const cardIcon = document.createElement('img');
        const cardMessage = document.createElement('p');

        cardBox.classList.add('frequenly-card-box');
        cardContent.classList.add('frequenly-card-content');
        cardTitle.textContent = (newElement.title);
        cardTitle.classList.add('title-tertiary');
        cardIcon.src = cardIconOpen;
        cardIcon.classList.add('frequently-card-icon');
        cardMessage.textContent = newElement.message;
        cardMessage.classList.add('frequenly-card-message', 'hidden');

        cardIcon.addEventListener('click', () => {
            cardBox.classList.toggle('frequenly-card--expanded');
            cardMessage.classList.toggle('hidden');
            if (cardBox.classList.contains('frequenly-card--expanded')) {
                cardIcon.src = cardIconClose;
            } else {
                cardIcon.src = cardIconOpen;
            }
        });

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardIcon);
        cardBox.appendChild(cardContent);
        cardBox.appendChild(cardMessage);
        cardsContainer.appendChild(cardBox);
    });
};

renderCards();