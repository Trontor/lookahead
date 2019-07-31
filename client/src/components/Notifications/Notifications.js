import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import {
  NotificationContent,
  NotificationDismiss,
  NotificationHeader,
  NotificationWrapper
} from "./NotificationStyles";

export default function Notifications() {
  const originalURL = "https://lookahead-v1.rohyl.io";
  let initialNotifications = [
    {
      id: "remake",
      title: "**Remake**",
      content: `Been here before? This is a remake of ***Lookahead***. If you encounter any issues, feel free to use the [original](${originalURL}).`
    }
  ];
  let seenNotifications = localStorage.getItem("notifications");
  if (seenNotifications) {
    seenNotifications = JSON.parse(seenNotifications);
    initialNotifications = initialNotifications.filter(
      ({ id }) => !seenNotifications.includes(id)
    );
  }
  const [notifications, setNotifications] = useState(initialNotifications);
  const hideNotification = id => {
    // Existing notifications
    let existingNotifications = localStorage.getItem("notifications");
    if (!existingNotifications) {
      existingNotifications = [];
    } else {
      existingNotifications = JSON.parse(existingNotifications);
    }
    existingNotifications.push(id);
    localStorage.setItem(
      "notifications",
      JSON.stringify(existingNotifications)
    );
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  return notifications.map(({ id, title, content }) => (
    <NotificationWrapper key={id}>
      <NotificationHeader>
        <Markdown>{title}</Markdown>
      </NotificationHeader>
      <NotificationContent>
        <Markdown>{content}</Markdown>
      </NotificationContent>
      <NotificationDismiss onClick={() => hideNotification(id)}>
        ×
      </NotificationDismiss>
    </NotificationWrapper>
  ));
}
