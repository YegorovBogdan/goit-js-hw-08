// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

//gallery
const galleryComponent = document.querySelector('.gallery');
const addedGalleryCard = galleryCards(galleryItems);


//список изображений
function galleryCards(gallery){
    return gallery
    .map(({ original, preview, description }) => {
        return `<div class="gallery__items">
        <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
      </a>
      </div>` ;
    })
    .join('');
}

galleryComponent.insertAdjacentHTML('beforeend', addedGalleryCard);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// Do something…
});




