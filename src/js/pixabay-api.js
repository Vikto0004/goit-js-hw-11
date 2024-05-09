const API_KEY = '43795533-00e69c3734dde476e8d836fd2';
const BASE_URL = 'https://pixabay.com/api/';

export const returnPromise = wordSearch => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: wordSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};
