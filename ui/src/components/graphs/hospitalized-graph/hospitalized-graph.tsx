import React, { FC } from "react";
import { CountryApiType, StatesCurrentApiType } from "../../../@types";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
} from "recharts";
import { Box, Heading } from "@chakra-ui/react";

type HospitalizedGraphPropsType = {
  data: CountryApiType[] | StatesCurrentApiType[];
};
export const HospitalizedGraph: FC<HospitalizedGraphPropsType> = ({ data }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
    >
      <Heading as="h4" size="md">
        Hostipatization Data
      </Heading>
      <AreaChart
        width={800}
        height={460}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
      >
        <defs>
          <linearGradient
            id="colorHospitalizedCurrently"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="colorOnVentilatorCurrently"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorInIcuCurrently" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#c3ca82" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#baca82" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          height={100}
          angle={-30}
          tickMargin={12}
          dataKey="dateChecked"
        ></XAxis>
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Area
          name="hospitalized"
          type="monotone"
          dataKey="hospitalizedCumulative"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorHospitalizedCurrently)"
        />
        <Area
          name="on ventilator"
          type="monotone"
          dataKey="onVentilatorCurrently"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorOnVentilatorCurrently)"
        />
        <Area
          name="in ICU"
          type="monotone"
          dataKey="inIcuCurrently"
          stroke="#c3ca82"
          fillOpacity={1}
          fill="url(#colorInIcuCurrently)"
        />
      </AreaChart>
    </Box>
  );
};
