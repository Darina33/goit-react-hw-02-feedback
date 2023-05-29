import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
    return <p>{message}</p>
}

Notification.PropTypes = {
message: PropTypes.string,
}

export default Notification