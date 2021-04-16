export const newStickyTask = {
  title: "",
  status: "",
  statusColor: "#FFA000",
  userColor: "#90A4AE",
  user: "",
  priority: "",
};

export const newMember = {
  color: "#90A4AE",
  name: "",
};

export const members = [
  { id: 1, color: "#FFA000", name: "tshil" },
  { id: 2, color: "#E91E63", name: "kagiso" },
  { id: 3, color: "#2196F3", name: "isaac" },
];

export const stickyTasksData = [
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
];
