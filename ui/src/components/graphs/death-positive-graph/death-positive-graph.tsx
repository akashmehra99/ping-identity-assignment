import React, { FC } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CountryApiType, StatesCurrentApiType } from "../../../@types";
import { Box, Heading } from "@chakra-ui/react";

type GraphPropsType = {
  data: CountryApiType[] | StatesCurrentApiType[];
};

export const DeathPositiveGraph: FC<GraphPropsType> = ({ data }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading as="h4" size="md">
        Deatch and ICU
      </Heading>
      <LineChart
        width={730}
        height={450}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          height={100}
          tickMargin={12}
          angle={-30}
          dataKey="dateChecked"
        ></XAxis>
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey="death"
          stroke="#8884d8"
          strokeWidth={1}
        />
        <Line
          type="monotone"
          dataKey="inIcuCumulative"
          stroke="#caa282"
          strokeWidth={1}
        />
      </LineChart>
    </Box>
  );
};
