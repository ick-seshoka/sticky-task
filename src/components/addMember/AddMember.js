import React from "react";
import PropTypes from "prop-types";

import {
  AddMemberButtob,
  ColorInput,
  Container,
  MemberIcon,
  NameInput,
  Note,
  Title,
  Bold,
} from "./styles";

const AddMember = ({
  memberName,
  colorCode,
  onNameChange,
  onColorChange,
  handleAddMember,
}) => (
  <Container>
    <MemberIcon />
    <Title>Add a new member</Title>
    <NameInput
      value={memberName}
      onChange={onNameChange}
      placeholder="member name"
    />
    <ColorInput
      value={colorCode}
      onChange={onColorChange}
      placeholder="color code"
    />
    <AddMemberButtob onClick={handleAddMember}>add member</AddMemberButtob>
    <Note>
      <Bold>Note:</Bold> member color code has to be a valid color code: #2196F3
    </Note>
  </Container>
);

AddMember.defaultProps = {
  memberName: "",
  colorCode: "",
  onNameChange: () => {},
  onColorChange: () => {},
  handleAddMember: () => {},
};

AddMember.propTypes = {
  memberName: PropTypes.string,
  colorCode: PropTypes.string,
  onNameChange: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  handleAddMember: PropTypes.func.isRequired,
};

export default AddMember;
