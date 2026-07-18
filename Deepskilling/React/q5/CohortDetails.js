import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails(props) {
  const headingStyle = {
    color: props.status.toLowerCase() === "ongoing" ? "green" : "blue",
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{props.title}</h3>

      <dl>
        <dt>Current Status</dt>
        <dd>{props.status}</dd>

        <dt>Coach</dt>
        <dd>{props.coach}</dd>

        <dt>Trainer</dt>
        <dd>{props.trainer}</dd>

        <dt>Start Date</dt>
        <dd>{props.startDate}</dd>

        <dt>End Date</dt>
        <dd>{props.endDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;