import { Flex, Grid, GridItem } from "@chakra-ui/react";
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
        alignItems="start"
        maxW="6xl"
      >
        <GridItem colSpan={2} pos="fixed" h="100vh" top={0}>
          <LeftBar />
        </GridItem>
        <GridItem gridColumnStart={3} borderColor="gainsboro" colSpan={4}>
          <Outlet />
        </GridItem>
        <GridItem colSpan={2} top={0} pos="sticky">
          <RightBar />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default RootLayout;
