import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const galleryItemsList = createGalleryItems(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', galleryItemsList);

function createGalleryItems(galleryItems){
return galleryItems
        .map(({ preview, original, description }) => {
return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`; }).join('');        
};




const lightbox = new SimpleLightbox(`.gallery__item`, { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });