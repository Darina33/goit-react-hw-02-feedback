import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, addFeedback }) => {
  return (<ul>{options.map(option => {
    return (<button type="button" key={option} onClick={() => addFeedback(option)}>{option}</button>)
  })}</ul>
)
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  addFeedback: PropTypes.func,
};

export default FeedbackOptions
