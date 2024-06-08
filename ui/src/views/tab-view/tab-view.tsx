import {
  Box,
  Card,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { FC } from "react";
import { CountryView } from "../country-view/country-view";
import { StateView } from "../state-view/state-view";

export const TabView: FC = () => {
  return (
    <Box
      width="100vw"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      alignContent={"center"}
    >
      <Card width={"95vw"} mt={"2em"} minH={"90vh"}>
        <Tabs isLazy isFitted variant="enclosed" padding={"2em"}>
          <TabList mb="1em">
            <Tab>Country</Tab>
            <Tab>State</Tab>
          </TabList>
          <TabPanels minH={"80vh"}>
            <TabPanel>
              <CountryView />
            </TabPanel>
            <TabPanel>
              <StateView />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Box>
  );
};
