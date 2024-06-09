import React, { FC } from "react";
import { CountryApiType, StatesCurrentApiType } from "../../../@types";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { Box, Heading } from "@chakra-ui/react";

type TestResultsGraphPropsType = {
  data: CountryApiType | StatesCurrentApiType | null;
};
type PieGraphDataType = {
  name: string;
  value: number | null;
  fill: string;
};

export const TestResultsGraph: FC<TestResultsGraphPropsType> = ({ data }) => {
  const createPieGraphData = (
    data: CountryApiType | StatesCurrentApiType | null
  ) => {
    let pieGraphData: PieGraphDataType[] = [];
    if (data) {
      const { totalTestResults, positive, negative } = data;
      pieGraphData = [
        {
          name: "Total Test Results",
          value: totalTestResults,
          fill: "#57c0e8",
        },
        {
          name: "Positive",
          value: positive,
          fill: "#FF6565",
        },
        {
          name: "Negative",
          value: negative,
          fill: "#FFDA83",
        },
      ];
    } else {
      pieGraphData = [
        {
          name: "Total Test Results",
          value: 0,
          fill: "#57c0e8",
        },
        {
          name: "Positive",
          value: 0,
          fill: "#FF6565",
        },
        {
          name: "Negative",
          value: 0,
          fill: "#FFDA83",
        },
      ];
    }
    return pieGraphData;
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignSelf={"center"}
      flexDirection={"column"}
    >
      <Heading as="h4" size="md" textAlign={"center"}>
        Testing Data
      </Heading>
      <PieChart width={730} height={250}>
        <Pie
          data={createPieGraphData(data)}
          dataKey="value"
          nameKey="name"
          fill="#FFF"
        />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
      </PieChart>
    </Box>
  );
};
