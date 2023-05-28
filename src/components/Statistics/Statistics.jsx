import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, percentage}) => {
    return(<ul><p>Statistics</p>
        <li><p>Good:{good}</p></li>
        <li><p>Neutral:{neutral}</p></li>
        <li><p>Bad:{bad}</p></li>
        <li><p>Total:{total}</p></li>
        <li><p>Positive feedback:{percentage}%</p></li>
      </ul>)
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};

export default Statistics;
