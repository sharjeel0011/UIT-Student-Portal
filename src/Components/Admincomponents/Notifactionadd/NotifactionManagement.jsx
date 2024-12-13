import React, { useState } from "react";
import AdminNav from "../../AdminNav";

const NotificationManagement = ({ batch }) => {
  const [notifications, setNotifications] = useState(batch.notifications || []);
  const [newNotification, setNewNotification] = useState({
    title: "",
    description: "",
    date: "",
    link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNotification({ ...newNotification, [name]: value });
  };

  const addNotification = () => {
    setNotifications([...notifications, { ...newNotification, id: Date.now(), isActive: true }]);
    setNewNotification({ title: "", description: "", date: "", link: "" });
  };

  const updateNotification = (index, field, value) => {
    const updated = [...notifications];
    updated[index][field] = value;
    setNotifications(updated);
  };

  const removeNotification = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // Simulate saving notifications
    console.log("Submitted Notifications:", notifications);
    alert("Notifications saved successfully!");
  };

  return (
    <div>
      <AdminNav/>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Manage Notifications for Batch {batch.batchId}
      </h1>
      {notifications.map((notification, index) => (
        <div key={notification.id} className="mb-6 p-4 border rounded-lg">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={notification.title}
            onChange={(e) => updateNotification(index, "title", e.target.value)}
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={notification.description}
            onChange={(e) => updateNotification(index, "description", e.target.value)}
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <input
            type="date"
            name="date"
            value={notification.date}
            onChange={(e) => updateNotification(index, "date", e.target.value)}
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <input
            type="url"
            placeholder="Link"
            name="link"
            value={notification.link}
            onChange={(e) => updateNotification(index, "link", e.target.value)}
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <button
            type="button"
            onClick={() => removeNotification(index)}
            className="text-red-500 underline"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mb-6">
        <input
          type="text"
          name="title"
          placeholder="Notification Title"
          value={newNotification.title}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded-lg"
        />
        <input
          type="text"
          name="description"
          placeholder="Notification Description"
          value={newNotification.description}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded-lg"
        />
        <input
          type="date"
          name="date"
          value={newNotification.date}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded-lg"
        />
        <input
          type="url"
          name="link"
          placeholder="Notification Link"
          value={newNotification.link}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded-lg"
        />
        <button
          type="button"
          onClick={addNotification}
          className="mt-2 text-blue-500 underline"
        >
          + Add Notification
        </button>
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Notifications
      </button>
    </div>
    </div>
  );
};

export default NotificationManagement;
