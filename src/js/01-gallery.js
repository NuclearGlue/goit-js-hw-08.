import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const imagesList = document.querySelector('.gallery');

const addImages = galleryItems.map((picture) =>
  `<a
    class="gallery__item"
    href="${picture.original}"
  ><img  class="gallery__image" src='${picture.preview}' alt='${picture.description}'> </a>
  `);
imagesList.insertAdjacentHTML("beforeend", addImages.join(''));

var lightbox = new SimpleLightbox('.gallery a', { captionsData : 'alt',
    captionType : 'attr',
    captionsDelay: 250,
});
    
console.log(galleryItems);
