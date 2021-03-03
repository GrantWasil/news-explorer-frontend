class Api {
  constructor({ newsApi, nxplrApi }) {
    this._newsApi = newsApi;
    this._nxplrApi = nxplrApi;
  }

  getSearchData(input) {
    return fetch(`${this._newsApi}&q=${input}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  registerUser(email, password, name) {
    return fetch(`${this._nxplrApi}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
        name,
      }),
    })
      .then((res) => {
        try {
          if (res.status === 201) {
            return res.json();
          }
        } catch (e) {
          return e;
        }
      })
      .then((res) => {
        return res;
      });
  }

  loginUser(email, password) {
    return fetch(`${this._nxplrApi}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return data;
        }
      });
  }

  checkUserData() {
    return fetch(`${this._nxplrApi}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => res.json());
  }

  getArticles() {
    return fetch(`${this._nxplrApi}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => res.json());
  }

  saveArticle(keyword, title, text, date, source, link, image) {
    return fetch(`${this._nxplrApi}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    }).then((res) => res.json());
  }

  deleteArticle(id) {
    return fetch(`${this._nxplrApi}/articles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => res.json());
  }
}

const today = new Date().toISOString();
const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

const api = new Api({
  newsApi: `https://nomoreparties.co/news/v2/everything?apiKey=29fdf2c3653342b698ddcf64e505ee71&pageSize=100&from=${lastWeek}&to=${today}`,
  nxplrApi: `https://api.nxplr.com`,
});

export default api;
