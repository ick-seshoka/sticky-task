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

  const handleMemberChange = (option) => {
    if (option) {
      setMemberFilter(option.value);
      return;
    }
    setMemberFilter("");
  };

  return (
    <Container>
      <Search />
      <Select options={options} onChange={handleMemberChange} isClearable />
      <Done />
    </Container>
  );
};

export default Navigation;
