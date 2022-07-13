import '@fontsource/alata/400.css';
import '@fontsource/josefin-sans/300.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'; 
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>  
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
