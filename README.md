# Node Weather App

[![GitHub Stars](https://img.shields.io/github/stars/IlyasKohistani/node-weather-app.svg)](https://github.com/IlyasKohistani/node-weather-app/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/IlyasKohistani/node-weather-app.svg)](https://github.com/IlyasKohistani/node-weather-app/issues) [![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/IlyasKohistani/node-weather-app)[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://mik-weather-app.herokuapp.com/)

A simple application to search for any place's weather built with `Express.js` and `handlebars.js` view engine. I have used `Request` package to call `api.mapbox.com` to get the searched location all information like: Name, Longitued, latitude an then make a call with these information to `api.weatherstack.com` to get the weather information in that location. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own.


---

## Buy me a coffee

Whether you use this project, have learned something from it, or just like it, please consider supporting it by buying me a coffee, so I can dedicate more time on open-source projects like this :)

<a href="https://www.buymeacoffee.com/ilyaskohistani" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

---

## Features

-   Search place
-   See All Weather Information

---

## Setup

-   After you clone this repo to your desktop, go to its root directory using `cd node-weather-app` command on your cmd or terminal.
-   run `npm install` on your cmd or terminal to install dependencies.
-   Copy .env.example file to .env on the root folder using `copy .env.example .env` if using command prompt Windows or `cp .env.example .env` if using terminal, Ubuntu.
-   Go to `https://weatherstack.com/` and `https://www.mapbox.com/` signup and generate an access token for yourself. 
-   Open your `.env` file and change the (WEATHERSTACK_ACCESS_KEY) and (MAPBOX_ACCESS_TOKEN) with the keys you got.
-   Run `npm run dev` to start project.
-   Open http://localhost:3000/ in your browser.

---

## Usage

After you are done with the setup open http://localhost:3000/ in your browser. You can play with it and change anything you want. Enjoy!

---

## License

> You can check out the full license [here](https://github.com/IlyasKohistani/node-weather-app/blob/master/LICENSE)
> This project is licensed under the terms of the **MIT** license.