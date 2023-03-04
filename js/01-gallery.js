import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryItemsList = createGalleryItems(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', galleryItemsList);

function createGalleryItems(galleryItems){
return galleryItems
        .map(({ preview, original, description }) => {
return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`; }).join('');        
};
galleryContainer.addEventListener('click', handleGalleryContainerClick);

function handleGalleryContainerClick(event) {
        event.preventDefault();   
        if (event.target.nodeName !== 'IMG'){
                 return;        
        }
        const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`).show();   
        return instance;
};
// galleryContainer.addEventListener('click', onKeyboardClick);

// const onKeyboardClick = event => {
//   if (event.key === 'Escape') {
//           return instance.close();
//   }
// };


