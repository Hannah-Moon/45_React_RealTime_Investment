# React Router - Pages Mockup

## Why Use React-Router?

React Router is a vital tool in React development, facilitating seamless navigation between different pages within a web application. It enables the creation of sophisticated websites with multiple pages while maintaining the underlying structure of a single-page application. When users interact with links or buttons to navigate, React Router dynamically updates the content on the screen without reloading the entire page from the internet. This enhances the user experience, making it smooth and intuitive.

## Implementation Steps

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

### 4. Install Material UI v4

```
$ npm install @mui/material @emotion/react @emotion/styled
```

### 5. Install styled-components and lab

```
$ npm i @mui/material @mui/styled-engine-sc styled-components
$ npm i @mui/lab @mui/material
```

## API Reference

Explore the CoinGecko API at www.coingecko.com/en/api.

## Encountered Error

The makeStyles function is deprecated. To address this, create a separate CSS file.

```
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

const classes = useStyles();

```

Also, import the useNavigate hook from "react-router-dom".

## Credits

- Photo by fabio on Unsplash
- BannerBackground01 Photo by Shubham Dhage on Unsplash

## Getting Started with Create React App

- This project was bootstrapped with Create React App.
