export const fetchImages = searchText => {
  const searchParams = new URLSearchParams({
    key: '48213456-ebc0266b477643e50c8486310',
    q: searchText.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams.toString()}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.total === 0) {
        return []
      }
      return data.hits
    })
};