import React from "react";
import PropTypes from "prop-types";

import StickyTask from "@components/stickyTask";
import NewTaskCard from "@components/newTaskCard";

import { Container } from "./styles";

const StickyTasks = ({ tasks }) => {
  const stickyTasks = tasks.map((task, index) => (
    <StickyTask key={index} {...task} />
  ));

  return (
    <Container>
      {stickyTasks}
      <NewTaskCard />
    </Container>
  );
};

StickyTasks.defaultProps = {
  tasks: [
    {
      title: "Update your order for the work journals and follow up",
      status: "done",
      statusColor: "#FFA000",
      userColor: "#8BC34A",
      user: "Tshili",
      priority: "medium",
    },
    {
      title: "Debug service worker for SMS gateway in Prod",
      status: "in_progress",
      statusColor: "#F44336",
      userColor: "#E91E63",
      user: "Kagiso",
      priority: "high",
    },
    {
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
