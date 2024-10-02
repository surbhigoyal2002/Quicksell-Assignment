
import React from "react";
import Card from "./Card";
import { getUserName } from "../utils/grouping";

const GroupedByUser = ({ groupedTasksByUser, users }) => {
  return (
    <div style={{ display: "flex", gap: "0px" }}>
      {Object.keys(groupedTasksByUser).map((userName) => (
        <div key={userName} style={{ width: "280px" }}>
          <h3>User: {userName}</h3>
          {groupedTasksByUser[userName].map((task) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.title}
              status={task.status}
              priority={task.priority}
              userName={getUserName(task.userId, users)}
              tag={task.tag[0]} // Fetch user name based on userId
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GroupedByUser;
