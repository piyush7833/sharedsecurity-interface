import React, { useEffect } from "react";
import Section from "../Layout/Section";
import { Center, Spinner, Stack, Tab, TabList, Tabs } from "@chakra-ui/react";
import CustomTable from "../DataDisplay/CustomTable";
import { ecosystemData } from "../../utils/constant";
import { protocols } from "../../config/aezProtocols.json";
import { useAez } from "../../hooks/useAez";
import { useRecoilValue } from "recoil";
import { ecosystemState } from "../../context/ecosystemState";

const Ecosystem = () => {
  const { getParsedEcosystemData } = useAez();
  const data = useRecoilValue(ecosystemState);
  useEffect(() => {
    if (!data.length) getParsedData();
    console.log(data);
  }, []);

  const getParsedData = async () => {
    const data = await getParsedEcosystemData();
    console.log(data);
  };
  return (
    <Section heading="Ecosystem">
      <Stack>
        {/* <Tabs
          border="1px solid rgba(255, 255, 255, 0.10)"
          variant="soft-rounded"
          colorScheme="green"
          width={"fit-content"}
          borderRadius={"10px"}
        >
          <TabList>
            <Tab bg={"transparent"}>24 Hours</Tab>
            <Tab bg={"transparent"}>7 Days</Tab>
            <Tab bg={"transparent"}>30 Days</Tab>
          </TabList>
        </Tabs> */}
        {data && data.length ? (
          <CustomTable keys={data.length && Object.keys(data[0])} data={data} />
        ) : (
          <Center>
            <Spinner />
          </Center>
        )}
      </Stack>
    </Section>
  );
};

export default Ecosystem;
