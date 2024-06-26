/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { TabLoader } from "../../components";
import { Box, Select } from "@chakra-ui/react";
import { StatesCurrentApiType } from "../../@types";
import { HospitalizedGraph, TestResultsGraph } from "../../components/graphs";
import { DeathPositiveGraph } from "../../components/graphs/death-positive-graph/death-positive-graph";

type StateMap = { [key: string]: any };

export const StateView: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statesMap, setStatesMap] = useState<StateMap>({});
  const [selectedState, setSelectedState] = useState("");
  const [stateData, setStateData] = useState<StatesCurrentApiType[]>([]);
  const [stateCurrentData, setStateCurrentData] =
    useState<StatesCurrentApiType | null>(null);

  useEffect(() => {
    getStatesList();
  }, []);

  useEffect(() => {
    if (selectedState) {
      getStateData(selectedState.toLowerCase());
    }
  }, [selectedState]);

  const getStatesList = async () => {
    try {
      const data = await fetch("http://localhost:4000/state/map");
      const dataJson = await data.json();
      setStatesMap(dataJson);
    } catch (err) {
      console.error(err);
    }
  };

  const getStateData = async (stateCode: string) => {
    setIsLoading(true);
    try {
      const data = await fetch(`http://localhost:4000/states/${stateCode}`);
      const dataJson = await data.json();
      formatDateToLocalString(dataJson);
      setStateData(dataJson);
      await fetchCurrentStateData(stateCode);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const fetchCurrentStateData = async (stateCode: string) => {
    const data = await fetch(
      `http://localhost:4000/states/${stateCode}/current`
    );
    const dataJson = await data.json();
    setStateCurrentData(dataJson);
  };

  const formatDateToLocalString = (data: StatesCurrentApiType[]) => {
    return data.forEach((value) => {
      value.dateChecked = value.dateChecked
        ? new Date(value.dateChecked).toLocaleDateString()
        : "";
    });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={10}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Select
        placeholder="Select State"
        onChange={(event) => {
          setSelectedState(event.target.value);
        }}
      >
        {Object.keys(statesMap).map((key) => (
          <option value={key}>{statesMap[key]}</option>
        ))}
      </Select>
      <TabLoader
        showLoader={isLoading}
        component={
          <>
            {stateData.length ? <HospitalizedGraph data={stateData} /> : <></>}
            {stateCurrentData ? (
              <TestResultsGraph data={stateCurrentData} />
            ) : (
              <></>
            )}
            {stateData.length ? <DeathPositiveGraph data={stateData} /> : <></>}
          </>
        }
      />
    </Box>
  );
};
