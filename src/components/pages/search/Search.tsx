import { FormControl, IconButton, Input, Select, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "../../../css/search.css";

const Search = () => {
  const searchTextboxHandler = (e: React.FormEvent<HTMLInputElement>) => {};
  const onSearchHandler = (e: React.FormEvent<HTMLInputElement>) => {};

  return (
    <div style={{ margin: "1rem" }}>
      <FormControl onSubmit={onSearchHandler} style={{ left: "38%" }}>
        <Input
          placeholder="Search Item"
          width="32rem"
          onChange={searchTextboxHandler}
        />
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon />}
          style={{ marginBottom: "5px" }}
          onClick={() => onSearchHandler}
        />
      </FormControl>
      <div style={{ marginLeft: "auto", width: "10rem" }}>
        <Select placeholder="Select Page">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
    </div>
  );
};

export default Search;
