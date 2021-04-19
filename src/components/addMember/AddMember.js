import React from "react";
import PropTypes from "prop-types";

import {
  AddMemberButton,
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
  handleValidateColor,
  isValidColor,
}) => {
  return (
    <Container>
      <MemberIcon />
      <Title>Add a new member</Title>
      <NameInput
        value={memberName}
        onChange={onNameChange}
        placeholder="member name"
        required
        maxLength="15"
      />
      <ColorInput
        value={colorCode}
        onChange={onColorChange}
        placeholder="color code"
        required
        maxLength="45"
        onBlur={handleValidateColor}
        isValidColor={isValidColor}
      />
      <AddMemberButton disabled={!isValidColor} onClick={handleAddMember}>
        add member
      </AddMemberButton>
      <Note>
        <Bold>Note:</Bold> member color code has to be a valid css color value
        e.g. #2196F3 , yellow, rgba(255, 255, 255)
      </Note>
    </Container>
  );
};

AddMember.defaultProps = {
  memberName: "",
  colorCode: "",
  onNameChange: () => {},
  onColorChange: () => {},
  handleAddMember: () => {},
  handleValidateColor: () => {},
  isValidColor: true,
};

AddMember.propTypes = {
  memberName: PropTypes.string,
  colorCode: PropTypes.string,
  onNameChange: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  handleAddMember: PropTypes.func.isRequired,
  handleValidateColor: PropTypes.func.isRequired,
  isValidColor: PropTypes.bool.isRequired,
};

export default AddMember;
