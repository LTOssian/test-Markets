import React from 'react';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <ChakraProvider>
              <div className="App">

              </div>
          </ChakraProvider>
      </QueryClientProvider>
  );
}

export default App;
