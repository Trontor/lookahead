import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import {
  NotificationContent,
  NotificationDismiss,
  NotificationHeader,
  NotificationWrapper,
  NotificationMarkdown
} from "./NotificationStyles";

export default function Notifications() {
  const originalURL = "https://lookahead-v1.rohyl.io";
  let initialNotifications = [
    // {
    //   id: "remake",
    //   title: "**Remake**",
    //   content: `Been here before? This is a remake of ***Lookahead***. If you encounter any issues, feel free to use the [original](${originalURL}).`
    // },
    {
      id: "allocate-plus-introduction",
      title: "#**Important**: MyTimetable (Allocate+)",
      content: `From *November 11, 2019* the university will be launching a **new timetabling system** [MyTimetable](https://students.unimelb.edu.au/admin/class-timetable). Having partaken in the beta testing for this system, I can say there are some clear pro's and con's when compared with the current system. Make of it what you will when the time comes, but it is important to note that this will make the core functionality of **Lookahead** largely defunct as it is a **preference based system** as opposed to the **free for all system** we used to have. It is not clear how certain class preferences affect the outcome of other class preferences - so I will leave Lookahead as is for now. You may still find utility in using it as a general class information lookup tool.`,
      collapsed: false
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
  const toggleCollapse = id => {
    const currentNotifs = [...notifications];
    const currentNotif = currentNotifs.filter(notif => notif.id === id)[0];
    if (!currentNotif || currentNotif.collapsed === undefined) return;
    currentNotif.collapsed = !currentNotif.collapsed;
    setNotifications(currentNotifs);
  };
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

  return notifications.map(({ id, title, content, collapsed }) => (
    <NotificationWrapper key={id}>
      <NotificationHeader>
        <Markdown>{title}</Markdown>
      </NotificationHeader>
      <NotificationContent toggled={collapsed}>
        <NotificationMarkdown>{content}</NotificationMarkdown>
      </NotificationContent>
      <NotificationDismiss
        toggled={collapsed !== undefined}
        onClick={() => {
          if (collapsed !== undefined) {
            toggleCollapse(id);
          } else {
            hideNotification(id);
          }
        }}
      >
        {collapsed !== undefined ? (collapsed ? "?" : "k.") : "×"}
      </NotificationDismiss>
    </NotificationWrapper>
  ));
}
