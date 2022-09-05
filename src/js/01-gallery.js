// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector('.gallery');

const galleryMarckup = makeGalleryMarkup(galleryItems);

divGallery.insertAdjacentHTML('beforeend', galleryMarckup);

function makeGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href=${original}>
          <img class="gallery__image" src=${preview} alt=${description} />
      </a>
      `;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
