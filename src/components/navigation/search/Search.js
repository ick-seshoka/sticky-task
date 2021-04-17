import React, { useContext } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";

import { Container, Input, Magnifyglass } from "./styles";

const Search = () => {
  const { searchFilter, setSearchFilter } = useContext(StickyTasksContext);

  const handleSearchChange = (e) => {
    e.preventDefault();

    const { value } = e.target;
    setSearchFilter(value);
  };

  return (
    <Container>
      <Magnifyglass />
      <Input
        placeholder="Search"
        value={searchFilter}
        onChange={handleSearchChange}
      />
    </Container>
  );
};

export default Search;
