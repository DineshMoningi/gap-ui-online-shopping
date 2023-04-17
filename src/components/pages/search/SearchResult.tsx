import { Card, CardBody, Grid } from "@chakra-ui/react";
import "../../../css/searchResult.css";

const SearchResult = () => {
  return (
    <div
      style={{ margin: "2rem 2rem 20rem 5rem" }}
      className="search-result-card"
    >
      <Card>
        <Grid templateColumns="repeat(6, 1fr)" gap={5}>
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
          <Card w="15rem" h="16rem" bg="blue.500" />
        </Grid>
      </Card>
    </div>
  );
};

export default SearchResult;
