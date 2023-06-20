import React from 'react';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import Home from "./pages/Home";
import { SelectFilterProvider} from "./contexts/FilterContext";
import {PaginationProvider} from "./contexts/PaginationContext";

export const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <ChakraProvider>
              <div className="App">
                  <SelectFilterProvider>
                      <PaginationProvider>
                          <Home />
                      </PaginationProvider>
                  </SelectFilterProvider>
              </div>
          </ChakraProvider>
      </QueryClientProvider>
  );
}

export default App;
