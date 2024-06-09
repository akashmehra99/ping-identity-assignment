/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { TabLoader } from "../../components";
import { HospitalizedGraph, TestResultsGraph } from "../../components/graphs";
import { CountryApiType } from "../../@types";
import { Box } from "@chakra-ui/react";
import { DeathPositiveGraph } from "../../components/graphs/death-positive-graph/death-positive-graph";

export const CountryView: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countryData, setCountryData] = useState<CountryApiType[]>([]);
  const [countryCurrentData, setCountryCurrentData] =
    useState<CountryApiType | null>(null);

  useEffect(() => {
    fetchCountryData();
  }, []);

  const fetchCountryData = async () => {
    setIsLoading(true);
    try {
      const data = await fetch("http://localhost:4000/country");
      const dataJson = await data.json();
      formatDateToLocalString(dataJson);
      setCountryData(dataJson);
      await fetchCurrentCountryData();
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const fetchCurrentCountryData = async () => {
    const data = await fetch("http://localhost:4000/country/current");
    const dataJson = await data.json();
    setCountryCurrentData(dataJson);
  };

  const formatDateToLocalString = (data: CountryApiType[]) => {
    return data.forEach((value) => {
      value.dateChecked = value.dateChecked
        ? new Date(value.dateChecked).toLocaleDateString()
        : "";
    });
  };

  return (
    <TabLoader
      showLoader={isLoading}
      component={
        <Box display={"flex"} flexDirection={"column"} gap={10}>
          <HospitalizedGraph data={countryData} />
          <TestResultsGraph data={countryCurrentData} />
          <DeathPositiveGraph data={countryData} />
        </Box>
      }
    />
  );
};
