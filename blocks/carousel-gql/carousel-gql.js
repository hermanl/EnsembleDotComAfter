import { createOptimizedPicture } from '../../scripts/aem.js';
import { fetchPersistedQuery } from '../../api/persistedQueries.js';

async function fetchCarouselData(block) {
  const persistedQuery = 'EDS-Workshop/anothaone';
  const queryParameters = {};

  let data = [];

  try {
    const { data: gqlData, error } = await fetchPersistedQuery(
      persistedQuery,
      queryParameters,
    );

    if (error) {
      console.error('Failed to fetch GraphQL data:', error);
      return data;
    }

    data = gqlData.edsWorkshopCarouselList.items;
  } catch (e) {
    console.error('Unexpected error while fetching GraphQL data:', e);
  }

  return data;
}

function groupDataByTitle(data) {
  const groupedData = {};
  data.forEach(item => {
    const groupKey = item.title.toLowerCase().replace(/\s+/g, '-');
    groupedData[groupKey] = item;
  });
  return groupedData;
}

function createCarouselCard(card, key) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card', key);
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-wrapper');
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-wrapper');

  const title = document.createElement('p');
  title.textContent = card.title;

  const services = document.createElement('p');
  services.textContent = card.services;

  const description = document.createElement('p');
  description.textContent = card.description;

  const image = createOptimizedPicture(card.referenceImage, card.title, true, [
    { width: '210' },
  ]);

  infoContainer.appendChild(title);
  infoContainer.appendChild(services);
  infoContainer.appendChild(description);
  imageContainer.appendChild(image);
  cardContainer.appendChild(imageContainer);
  cardContainer.appendChild(infoContainer);

  return cardContainer;
}

function renderData(groupedData, block) {
  const carouselInner = document.createElement('div');
  carouselInner.classList.add('carousel-container');

  const navContainer = document.createElement('div');
  navContainer.classList.add('carousel-nav');
  const prevButton = document.createElement('button');
  const prevIcon = document.createElement('img');
  prevIcon.src = '/icons/left-arrow.png';
  prevButton.classList.add('left-arrow');
  prevButton.appendChild(prevIcon);

  const nextButton = document.createElement('button');
  const nextIcon = document.createElement('img');
  nextIcon.src = '/icons/right-arrow.png';
  nextButton.classList.add('right-arrow');
  nextButton.appendChild(nextIcon);

  block.appendChild(prevButton);
  block.appendChild(carouselInner);
  block.appendChild(nextButton);
  navContainer.appendChild(prevButton);
  navContainer.appendChild(nextButton);
  block.appendChild(navContainer);

  Object.keys(groupedData).forEach((key, index) => {
    const card = groupedData[key];
    const cardElement = createCarouselCard(card, key);
    let currentIndex = 0;
    if (index >= currentIndex && index < currentIndex + 3) {
      cardElement.classList.add('active');
    }
    carouselInner.appendChild(cardElement);
  });

  let currentIndex = 0;
  const totalItems = Object.keys(groupedData).length;

  function updateActiveCard() {
    const cards = carouselInner.querySelectorAll('.card');
    cards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + 3) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 3 + totalItems) % totalItems;
    updateActiveCard();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 3) % totalItems;
    updateActiveCard();
  });
}

export default async function decorate(block) {
  const data = await fetchCarouselData();
  const groupedData = groupDataByTitle(data);
  renderData(groupedData, block);
}
