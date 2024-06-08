import React, { FC, useEffect, useState } from "react";
import { TabLoader } from "../../components";
import { HospitalizedGraph } from "../../components/graphs";
import { CountryApiType } from "../../@types";
import { Box } from "@chakra-ui/react";

export const CountryView: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countryData, setCountryData] = useState<CountryApiType[]>([]);
  useEffect(() => {
    fetchCountryData();
  }, []);
  const fetchCountryData = async () => {
    setIsLoading(true);
    try {
      const data = await fetch("http://localhost:4000/country");
      const dataJson = await data.json();
      setIsLoading(false);
      setCountryData(dataJson);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };
  return (
    <TabLoader
      showLoader={isLoading}
      component={
        <Box>
          <HospitalizedGraph data={countryData} />
        </Box>
      }
    />
  );
};
