const cardsContainer = document.querySelector('.frequenly-cards-container');
const cardIconOpen = './assets/icons/plus.svg';
const cardIconClose = './assets/icons/minus.svg';

const data = [
    {
        title: 'What is Price Optimizer Pro?',
        message: `Price Optimizer Pro is an advanced Amazon repricing and competitor analytics tool built for serious
sellers. It analyzes competitor inventory, sell-through rates, and market demand to optimize your prices
for maximum profit—not just for the lowest price.`
    },
    {
        title: 'Will it undercut my margins?',
        message: `
        No. You control your min/max price rules, ROI targets, and custom conditions. Price Optimizer Pro
ensures your listings stay profitable while still winning the Buy Box when it makes sense.
        `
    },
    {
        title: 'Is it complicated to set up?',
        message: `
         Not at all. Setup takes just a few minutes—connect your Amazon account, import your listings, and
apply your rules. Our guided onboarding walks you through step by step.
        `
    },
    {
        title: 'How much does it cost?',
        message: `
        Pricing is simple and flexible. <a href="#beta-section">See our Pricing Plans</a>.
        `
    },
    {
        title: 'Can I try it before committing?',
        message: `
        Yes. We offer a free trial so you can see how Price Optimizer Pro increases your sales and profits
before choosing a plan.
        `
    },
    {
        title: 'Will it help me win the Buy Box?',
        message: `
        Yes. Price Optimizer Pro is designed with Amazon’s Buy Box algorithm in mind. It balances competitive pricing, profit protection, and inventory signals to maximize your Buy Box share without unnecessary margin loss.
`
    },
    {
        title: `Do I need technical skills to use it?`,
        message: `
        No. The interface is simple and intuitive. If you can manage your Amazon Seller Central account,
you’ll have no trouble with Price Optimizer Pro.
        `
    },
    {
        title: 'Which marketplaces does it support?',
        message: `
        Currently, Price Optimizer Pro supports Amazon US, Canada, Mexico, and Brazil, with additional
marketplaces being added soon.
        `
    },
    {
        title: 'How often does it update my prices?',
        message: `
        Prices update continuously, based on real-time competitor and sales data. You can also adjust the
frequency or pause repricing rules at any time.
`
    },
    {
        title: 'What kind of sellers benefit most?',
        message: `
        Price Optimizer Pro is built for private-label, wholesale, and resellers who want smarter pricing—not
just the lowest price—especially those managing large catalogs or multiple marketplaces.
        `
    },
    {
        title: 'Does Price Optimizer Pro integrate with Amazon directly?',
        message: `
        Yes. Price Optimizer Pro connects through Amazon’s official Selling Partner API (SP-API), ensuring
accurate real-time data and secure integration.
        `
    },
    {
        title: 'How is Price Optimizer Pro different from other repricers?',
        message: `
        Most repricers only race to the bottom. Price Optimizer Pro uses competitor inventory tracking and
demand signals to know when you can raise prices as well as when to lower them, maximizing
profitability while keeping sales velocity strong.
        `
    },
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
        cardMessage.innerHTML = newElement.message;
        cardMessage.classList.add('frequenly-card-message', 'hidden');

        cardBox.addEventListener('click', () => {
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