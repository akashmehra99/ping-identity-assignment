import React, { FC, ReactElement, ReactNode } from "react";
import { Box, CircularProgress } from "@chakra-ui/react";

type TabLoaderType = {
  showLoader: boolean;
  component: ReactElement | ReactNode;
};

export const TabLoader: FC<TabLoaderType> = ({ showLoader, component }) => {
  return (
    <>
      {showLoader ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
          height={"75vh"}
        >
          <CircularProgress thickness={"4px"} size={"3em"} isIndeterminate />
        </Box>
      ) : (
        component
      )}
    </>
  );
};
