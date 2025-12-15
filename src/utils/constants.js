export const weatherTypes = [
  {
    day: true,
    condition: "clear",
    url: new URL("../images/day/clear.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "clouds",
    url: new URL("../images/day/cloudy.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "fog",
    url: new URL("../images/day/fog.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "rain",
    url: new URL("../images/day/rain.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "snow",
    url: new URL("../images/day/snow.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "storm",
    url: new URL("../images/day/storm.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "clear",
    url: new URL("../images/night/clear-night.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "clouds",
    url: new URL("../images/night/cloudy-night.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "fog",
    url: new URL("../images/night/fog-night.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "rain",
    url: new URL("../images/night/rain-night.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "snow",
    url: new URL("../images/night/snow-night.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "storm",
    url: new URL("../images/night/storm-night.png", import.meta.url).href,
  },
];

export const defaultWeatherTypes = {
  day: {
    url: new URL("../images/day/default.png", import.meta.url).href,
  },

  night: {
    url: new URL("../images/night/default-night.png", import.meta.url).href,
  },
};

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: new URL("../images/snapback.png", import.meta.url).href, 
    like: [],
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: new URL("../images/anime hoodie.jpg", import.meta.url).href,
    like: [],
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: new URL("../images/neon-jacket.jpg", import.meta.url).href,
    like: [],
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: new URL("../images/crazy8.jpg", import.meta.url).href,
    like: [],
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: new URL("../images/gucci-polo.jpeg", import.meta.url).href,
    like: [],
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: new URL("../images/gucci-coat.jpg", import.meta.url).href,
    like: [],
  },
];

export const coordinates = {
  latitude: 39.526901,
  longitude: -119.813278,
};

export const APIkey = "2236f68d84d73282e5dbf6bfa77d1fa6";

export const baseUrl = 
  process.env.NODE_ENV === "production"
    ? "https://api.www.WWTWR.ignorelist.com"
    : "http://localhost:3001";