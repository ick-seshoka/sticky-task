import React from "react";
import PropTypes from "prop-types";

import Member from "@components/member";

const Members = ({ members }) =>
  members.map((props) => <Member key={props.id} {...props} />);

Members.defaultProps = {
  members: [
    { id: 1, color: "#FFA000", name: "tshil" },
    { id: 2, color: "#E91E63", name: "kagiso" },
    { id: 3, color: "#2196F3", name: "isaac" },
  ],
};

Members.propTypes = {
  members: PropTypes.array,
};

export default Members;
