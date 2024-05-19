# React `Router`: Build Your Investment

- This project is a cryptocurrency review app with a realtime API.
- Users can review cryptocurrency prices in USD, EUR, and KRW.

<img alt='screen capture' src="/assets/realTime.gif">

## Why Use React Router?

React Router is a vital tool in React development, facilitating seamless navigation between different pages within a web application. It enables the creation of sophisticated websites with multiple pages while maintaining the underlying structure of a single-page application. When users interact with links or buttons to navigate, React Router dynamically updates the content on the screen without reloading the entire page from the internet. This enhances the user experience, making it smooth and intuitive.

## Implementation Steps

### 0. Install Extension

- ES7 React/Redux/GraphQL/React-Native

### 1. Prepare the Project

```bash
$ npx create-react-app react-router-realtimepayment
```

### 2. Install the Router Library

```
$ npm i react-router-dom
```

### 3. Import Route and Routes in `app.js`

```
import { Route, Routes } from "react-router-dom";
```

### 4. Install Material UI

```
$ npm install @mui/material @emotion/react @emotion/styled
```

### 5. Install styled-components and lab

```
$ npm i @material-ui/core
$ npm i @mui/material @mui/styled-engine-sc styled-components
$ npm i @mui/lab @mui/material
```

### 6. Intall react-alice-carousel and tailwind

npm i react-alice-carousel
npm install -D tailwindcss
npx tailwindcss init

## API Reference

Explore the CoinGecko API at www.coingecko.com/en/api. It is completely free.

## Encountered Error and issues

1. I used the makeStyles from MUI but learned that the `makeStyles` function is deprecated. To address this, create a separate CSS file.

2. Also, import the import `useHistory` hook was deprecated, so I usued `useNavigation` instead.

3. CoinGecko API is being blocked by the CORS policy. Installing cores-anywhere resolved the problem.

```
npx cors-anywhere
```

## Credits

- Photo by fabio on Unsplash
- BannerBackground01 Photo by Shubham Dhage on Unsplash

## Takeaway

- Using mixtures of css, tailwind, and mui of better styling

## Getting Started with Create React App

- This project was bootstrapped with Create React App.
