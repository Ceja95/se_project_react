export const weatherTypes = [
  {
    day: true,
    condition: "clear",
    url: new URL("../images/day/clear.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "cloudy",
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
    condition: "cloudy",
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
    link: "/src/images/snapback.png",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "/src/images/anime hoodie.jpg",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "/src/images/neon-jacket.jpg",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "/src/images/crazy8.jpg",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "/src/images/gucci-polo.jpeg",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "/src/images/gucci-coat.jpg",
  },
];

export const coordinates = {
  latitude: 39.526901,
  longitude: -119.813278,
};

export const APIkey = "2236f68d84d73282e5dbf6bfa77d1fa6";
