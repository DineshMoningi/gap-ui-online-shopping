import { Flex, Progress, Text } from "@chakra-ui/react";

const PageLoader = () => {
  return (
    <Flex
      data-testid="page-loader"
      zIndex={10000}
      background="#AAAAAAAD"
      position="fixed"
      left={0}
      top={0}
      right={0}
      bottom={0}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        direction="column"
        bg="white"
        justify="center"
        align="center"
        boxShadow="md"
        paddingTop="8"
        paddingBottom="8"
        paddingLeft="10"
        paddingRight="10"
        rounded="md"
      >
        <Text mb="4px" fontSize="12px">
          Loading...
        </Text>
        <Progress size="sm" w="200px" borderRadius="8px" isIndeterminate />
      </Flex>
    </Flex>
  );
};

export default PageLoader;
