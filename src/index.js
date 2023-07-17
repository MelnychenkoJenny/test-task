import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/constants/theme';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import useStore from 'store/recipes/store';
// import { persist, createJSONStorage } from 'zustand/middleware'
// import {  ZustandProvider } from 'zustand';

// const persistedStore = persist(
//   useStore,
//   {
//     name: 'recipes-storage', // Унікальне ім'я для збереження
//     getStorage: () => createJSONStorage(() => localStorage), // Використовуємо localStorage
//   }
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename="/test-task">
      {/* <ZustandProvider store={persistedStore}> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* </ZustandProvider> */}
    </BrowserRouter>
  //  </React.StrictMode>
);
