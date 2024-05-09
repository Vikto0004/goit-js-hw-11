import { returnPromise } from './js/pixabay-api';
import { returnMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const elSearchForm = document.querySelector('.js-search-form');
const elSearchList = document.querySelector('.js-search-list');
const elLoader = document.querySelector('.js-loader');

elSearchForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchInpVal = elSearchForm.elements.enterForSearsh.value.trim();
  if (!searchInpVal) return;
  elSearchList.innerHTML = '';
  elLoader.classList.add('loader-active');

  returnPromise(searchInpVal)
    .then(response => {
      if (!response.total) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        elSearchForm.reset();
        return;
      }

      elSearchList.innerHTML = `${returnMarkup(response.hits)}`;
      lightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => elLoader.classList.remove('loader-active'));
});

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
