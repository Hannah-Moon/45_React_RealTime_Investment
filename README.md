# 🔄 React `Router`: Read Time Investment

- This project is a cryptocurrency review app with a realtime API.
- Users can review cryptocurrency prices in USD, EUR, KRW, JPY, and GBP.

<img alt='screen capture' src="/assets/realTime.gif">

## 🎬 Live Demo

The app is deployed. Please visit https://realtimeinvestment.netlify.app/ to explore Real-Time investment.

## ❓ Why Use React Router?

React Router is a vital tool in React development, facilitating seamless navigation between different pages within a web application. It enables the creation of sophisticated websites with multiple pages while maintaining the underlying structure of a single-page application. When users interact with links or buttons to navigate, React Router dynamically updates the content on the screen without reloading the entire page from the internet. This enhances the user experience, making it smooth and intuitive.

## 🛠️ Implementation Steps

### 0️⃣ Install Extension

- ES7 React/Redux/GraphQL/React-Native

### 1️⃣ Prepare the Project

```bash
$ npx create-react-app react-router-realtimepayment
```

### 2️⃣ Install the Router Library

```
$ npm i react-router-dom
```

### 3️⃣ Import Route and Routes in app.js

```
import { Route, Routes } from "react-router-dom";
```

### 4️⃣ Install Material UI

```
$ npm install @mui/material @emotion/react @emotion/styled
```

### 5️⃣ Install styled-components and lab

```
$ npm i @material-ui/core
$ npm i @mui/material @mui/styled-engine-sc styled-components
$ npm i @mui/lab @mui/material
```

### 6️⃣ Install react-alice-carousel and tailwind

```
npm i react-alice-carousel
npm install -D tailwindcss
npx tailwindcss init

```

### 7️⃣ Install html-react-parser

```
npm install html-react-parser
```

### 8️⃣ Install 'react-chartjs-2' chart.js for graph

```
npm i react-chartjs-2 chart.js
```

## 📚 API Reference

- All my end points are from www.coingecko.com/en/api.

## ❗ Encountered Error and issues

1. I used the makeStyles from MUI but learned that the makeStyles function is deprecated. To address this, create a separate CSS file.

2. Also, import the import useHistory hook was deprecated, so I used useNavigation instead.

3. CoinGecko API is being blocked by the CORS policy. Installing cores-anywhere resolved the problem.

```
npx cors-anywhere
```

## 🎖️ Credits

- Photo by fabio on Unsplash
- BannerBackground01 Photo by Shubham Dhage on Unsplash

## 📝 Roadblocks

- I've encountered frequent Axios fetch errors using the free API. For future enhancement, purchasing a paid API would solve the problem.
- Using a mixture of CSS, Tailwind, and MUI was tricky but it definitely gave me full freedom to design better styling.

## 🚀 React App

- This project was bootstrapped with Create React App.
