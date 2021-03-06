class Api {
  constructor({ baseUrl, authentication }) {
    this._baseUrl = baseUrl;
  }

  getSearchData(input) {
    return fetch(`${this._baseUrl}&q=${input}`, {
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
  }
}

const today = new Date().toISOString();
const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

const api = new Api({
  baseUrl: `https://newsapi.org/v2/everything?apiKey=29fdf2c3653342b698ddcf64e505ee71&pageSize=100&from=${lastWeek}&to=${today}`
})

export default api;