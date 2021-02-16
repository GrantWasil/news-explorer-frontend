class Api {
  constructor({ baseUrl, authentication }) {
    this._baseUrl = baseUrl;
  }
}

const api = new Api({
  baseUrl: "https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=29fdf2c3653342b698ddcf64e505ee71"
})

export default api;