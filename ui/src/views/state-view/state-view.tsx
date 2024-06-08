import { FC, useEffect, useState } from "react";
import { TabLoader } from "../../components";
import { Box, Select } from "@chakra-ui/react";
import { StatesCurrentApiType } from "../../@types";
import { HospitalizedGraph } from "../../components/graphs";

type StateMap = { [key: string]: any };

export const StateView: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statesMap, setStatesMap] = useState<StateMap>({});
  const [selectedState, setSleectedState] = useState("");
  const [stateData, setStateData] = useState<StatesCurrentApiType[]>([]);

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
      setStateData(dataJson);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
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
          setSleectedState(event.target.value);
        }}
      >
        {Object.keys(statesMap).map((key) => (
          <option value={key}>{statesMap[key]}</option>
        ))}
      </Select>
      <TabLoader
        showLoader={isLoading}
        component={
          stateData.length ? <HospitalizedGraph data={stateData} /> : <></>
        }
      />
    </Box>
  );
};
