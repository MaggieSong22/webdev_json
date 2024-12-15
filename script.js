fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('art-container');

    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-aos', 'fade-up');

      const imgLink = document.createElement('a');
      imgLink.href = item.image;
      imgLink.setAttribute('data-lightbox', 'art-gallery'); 
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.title;
      imgLink.appendChild(img);

      card.appendChild(imgLink);

     
      const content = document.createElement('div');
      content.classList.add('content');

      const title = document.createElement('h3');
      title.textContent = item.title;
      content.appendChild(title);

      const artist = document.createElement('p');
      artist.textContent = `Artist: ${item.artist}`;
      content.appendChild(artist);

      const year = document.createElement('p');
      year.textContent = `Year: ${item.year}`;
      content.appendChild(year);

      const description = document.createElement('p');
      description.textContent = item.description;
      content.appendChild(description);

      card.appendChild(content);
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));
