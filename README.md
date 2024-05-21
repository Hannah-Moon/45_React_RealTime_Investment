# 🔄 React `Router`: Read Time Investment

- This project is a cryptocurrency review app with a realtime API.
- Users can review cryptocurrency prices in USD, EUR, KRW, JPY, and GBP.

## 🎬 Live Demo

The app is deployed. Please visit https://realtimeinvestment.netlify.app/ to explore Real-Time investment.
<img alt='screen capture' src="/assets/realTime.gif">

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

## 🛑 Roadblocks

1. **Deprecated `makeStyles` from MUI**:

   - I initially used the `makeStyles` function from MUI but learned that it is deprecated. To address this issue, I created a separate CSS file for styling.

2. **Deprecated `useHistory` Hook**:

   - The `useHistory` hook has been deprecated, so I replaced it with the `useNavigation` hook.

3. **CoinGecko API and CORS Policy**:

   - The CoinGecko API was being blocked by the CORS policy. To resolve this issue, I installed `cors-anywhere` using the following command:

     ```bash
     npx cors-anywhere
     ```

4. **Axios Fetch Errors**:

   - I encountered frequent fetch errors using Axios with the free API. To enhance future functionality and reliability, purchasing a paid API is recommended.

5. **Styling Challenges**:
   - Combining CSS, Tailwind, and MUI for styling was challenging, but it provided full freedom to create better designs and styling.

## 🎖️ Credits

- Photo by fabio on Unsplash
- BannerBackground01 Photo by Shubham Dhage on Unsplash

## 🚀 React App

- This project was bootstrapped with Create React App.
