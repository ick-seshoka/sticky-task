import React, { useContext } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";
import { getMembersOptions } from "@helpers";

import Search from "./search";
import Select from "@components/select";
import Done from "./done";

import { Container } from "./styles";

const Navigation = () => {
  const { members, setMemberFilter } = useContext(StickyTasksContext);

  const options = getMembersOptions(members);

  const handleMemberChange = ({ value }) => {
    setMemberFilter(value);
  };

  return (
    <Container>
      <Search />
      <Select options={options} onChange={handleMemberChange} />
      <Done />
    </Container>
  );
};

export default Navigation;
