import React, { useContext } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";
import { getMembersProperties } from "@helpers";

import Search from "./search";
import Select from "@components/select";
import Done from "./done";

import { Container } from "./styles";

const Navigation = () => {
  const { members, memberFilter, setMemberFilter } = useContext(
    StickyTasksContext
  );

  const { memberOptions, defaultMember } = getMembersProperties(
    members,
    memberFilter
  );

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
      <Select
        options={memberOptions}
        onChange={handleMemberChange}
        isClearable
        defaultValue={defaultMember}
      />
      <Done />
    </Container>
  );
};

export default Navigation;
