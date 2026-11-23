import { useNotificationStore } from "../store/notificationStore";

const sampleMessages = [
  "New Assignment Posted",
  "Quiz Opens Tomorrow",
  "Project Due Friday",
];

function NotificationPanel() {
  const { notifications, addNotification, clearNotifications } =
    useNotificationStore();

  // cycles through the sample messages so each click adds a different one
  const handleAdd = () => {
    addNotification(sampleMessages[notifications.length % sampleMessages.length]);
  };

  return (
    <div>
      <h3>Notifications ({notifications.length})</h3>

      <button onClick={handleAdd}>Add Notification</button>

      <button onClick={clearNotifications}>Clear Notifications</button>

      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationPanel;
