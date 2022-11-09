import { Flex, Grid, GridItem, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const RootLayout: React.FC = () => {
  return (
    <Flex h="full" justify="center">
      <Grid
        pos="relative"
        gap={1}
        templateColumns="repeat(8, 1fr)"
        templateRows="100vh"
        w="full"
        maxW="6xl"
      >
        <GridItem colSpan={2} pos="sticky" top={2} alignSelf="start">
          <LeftBar />
        </GridItem>
        <GridItem
          borderLeftWidth={1}
          borderRightWidth={1}
          borderColor="gainsboro"
          colSpan={4}
        >
          <Outlet />
        </GridItem>
        <GridItem colSpan={2}>
          <RightBar />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default RootLayout;
