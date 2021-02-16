class Api {
  constructor({ baseUrl, authentication }) {
    this._baseUrl = baseUrl;
  }
}

const api = new Api({
  baseUrl: "https://newsapi.org/v2/top-headlines?country=us&apiKey=29fdf2c3653342b698ddcf64e505ee71"
})

export default api;