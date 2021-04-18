import React, { useContext } from "react";
import PropTypes from "prop-types";

import { StickyTasksContext } from "@contexts/stickyTasksContext";
import StickyTask from "@components/stickyTask";
import NewTaskCard from "@components/newTaskCard";

import { Container } from "./styles";

const StickyTasks = ({ tasks }) => {
  const { newStickyTaskCardOn } = useContext(StickyTasksContext);
  const stickyTasks = tasks.map((task, index) => (
    <StickyTask key={index} {...task} />
  ));

  return (
    <Container>
      {stickyTasks}
      {newStickyTaskCardOn && <NewTaskCard />}
    </Container>
  );
};

StickyTasks.defaultProps = {
  tasks: [
    {
      id: "1",
      title: "Update your order for the work journals and follow up",
      status: "done",
      statusColor: "#FFA000",
      userColor: "#8BC34A",
      user: "Tshili",
      priority: "medium",
    },
    {
      id: "2",
      title: "Debug service worker for SMS gateway in Prod",
      status: "in_progress",
      statusColor: "#F44336",
      userColor: "#E91E63",
      user: "Kagiso",
      priority: "high",
    },
    {
      id: "3",
      title: "Conduct user research on social media app idea",
      status: "done",
      statusColor: "#FFC107",
      userColor: "#2196F3",
      user: "Isaac",
      priority: "low",
    },
  ],
};

StickyTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default StickyTasks;
