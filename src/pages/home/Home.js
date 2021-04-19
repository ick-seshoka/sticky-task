import React, { useContext, useState } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";
import { isColor } from "@helpers";

import Toolbar from "@components/toolbar";
import Header from "@components/header";
import Status from "@components/status";
import Overlay from "@components/overlay";
import AddMember from "@components/addMember";
import StickyTasks from "@containers/stickyTasks";

import { Container, Main } from "./styles";

const Home = () => {
  const { stickyTasks, addMember } = useContext(StickyTasksContext);
  const [state, setState] = useState({
    showOverlay: false,
    memberName: "",
    colorCode: "",
    isValidColor: true,
  });

  const { showOverlay, memberName, colorCode, isValidColor } = state;

  const handleShowOverlay = () => {
    setState({ ...state, showOverlay: true });
  };

  const handleHideOverlay = () => {
    setState({ ...state, showOverlay: false });
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    setState({ ...state, memberName: value });
  };

  const handleColorChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    setState({ ...state, colorCode: value, isValidColor: true });
  };

  const handleAddMember = () => {
    addMember({ color: colorCode, name: memberName });
    setState({
      showOverlay: false,
      memberName: "",
      colorCode: "",
      isValidColor: true,
    });
  };

  const handleValidateColor = () => {
    if (!isColor(colorCode)) {
      setState({ ...state, isValidColor: false });
    }
  };

  return (
    <Container>
      <Toolbar
        handleShowOverlay={handleShowOverlay}
        handleHideOverlay={handleHideOverlay}
        showOverlay={showOverlay}
      />
      <Main>
        <Overlay showOverlay={showOverlay}>
          <AddMember
            memberName={memberName}
            colorCode={colorCode}
            onNameChange={handleNameChange}
            onColorChange={handleColorChange}
            handleAddMember={handleAddMember}
            handleValidateColor={handleValidateColor}
            isValidColor={isValidColor}
          />
        </Overlay>
        <Header />
        <Status />
        <StickyTasks tasks={stickyTasks} />
      </Main>
    </Container>
  );
};

export default Home;
