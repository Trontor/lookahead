import React, { useState } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";

const NotificationWrapper = styled.div`
  position: relative;
  background-color: #4caf50;
  border-radius: 2px;
  color: white;
  font-family: "Karla", sans-serif;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.12);
  padding: 10px;
  margin: 6px 0;
  a {
    color: inherit;
  }
`;
const NotificationHeader = styled.div`
  font-size: 16px;
`;
const NotificationContent = styled.div`
  margin: 6px 0;
  font-size: 13px;
  font-weight: normal;
`;
const NotificationDismiss = styled.span`
  position: absolute;
  top: 0px;
  cursor: pointer;
  right: 7px;
  font-weight: bold;
  font-size: 24px;
`;

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
