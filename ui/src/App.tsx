import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { TabView } from "./views/tab-view/tab-view";

export const App = () => {
  return (
    <ChakraProvider>
      <TabView />
    </ChakraProvider>
  );
};
