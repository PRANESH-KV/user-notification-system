import React, { useState, useEffect } from "react";

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
  const interval = setInterval(() => {
    // Always add a new notification every 3 minute
    setNotifications((prev) => [
      ...prev,
      { message: "tring tring sms 🔔" },
    ]);
  }, 5000);

  return () => clearInterval(interval);
}, []);


  return (
    <div style={styles.container}>
      <h2>User Notifications</h2>
      {notifications.length === 0? (
        <p>No notifications yet...</p>
      ) : (
        <ul style={styles.list}>
          {notifications.map((note, idx) => (
            <li key={idx} style={styles.item}>
              {note.message}
            </li>
          ))}
        </ul>
      )}

      {/* Manual trigger button */}
      <button
        style={styles.button}
        onClick={() =>
          setNotifications((prev) => [
            ...prev,
            { message: "ooo message onakei varuthu🔔" },
          ])
        }
      >
        Add Notification
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "20px auto",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  item: {
    background: "#e6f7ff",
    margin: "5px 0",
    padding: "10px",
    borderRadius: "5px",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default NotificationSystem;

