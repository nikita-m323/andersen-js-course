class Musician {
  constructor(albumsUrl) {
    this.albumsUrl = albumsUrl;
  }

  async getAlbums() {
    const response = await fetch(this.albumsUrl);
    const result = await response.json();
    return result;
  }
}

const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
musician.getAlbums().then(albums => console.log(albums));
