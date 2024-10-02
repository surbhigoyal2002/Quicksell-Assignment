import React from "react";
import avatar from "../assets/avatar.png";
import './Card.css'

const Card = ({ id, title, status, priority, userId, userName, tag }) => {
  return (
    <div className="card-container">
      <div className="card" key={id}>
        <div className="card-header">
          <span className="ticket-id">{id}</span>
          <div>
            <img src={avatar} alt="img" className="user-avatar-box" />
          </div>
          
        </div>
        <div className="card-body">
          <input type="checkbox" className="custom-checkbox" />
          <span className="ticket-title">{title}</span>
        </div>
        <div className="card-footer">
          <span className="grey-dot">•</span>
          <span className="ticket-tag">{tag}</span>
        </div>
        {/* <div className="card-status">
          <span className="ticket-status">{status}</span>
        </div>
        <div className="card-userName">
          <span className="ticket-userName">{userName}</span>
        </div>
        <div className="card-userId">
          <span className="ticket-userId">{userId}</span>
        </div>
        <div className="card-priority">
          <span className="ticket-priority">{priority}</span>
        </div> */}
      </div>
    </div>
  );
};

export default Card;