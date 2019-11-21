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
      id: "allocate-plus-introduction2",
      title: "#**Important**: Allocate+",
      content: `From *November 11, 2019* the university will be launching a 
      **new timetabling system** [MyTimetable](https://students.unimelb.edu.au/admin/class-timetable). 
      As a part of the new system, there is a "planner" feature that you can try
      out and compare with *Lookahead*. Needless to say, I think there is definitely
      still some use for *Lookahead*, so it will be left up. The new timetabling
      system is a **preference based system** as opposed to the **free for all** first come, first serve system we
      used to have. It is not clear how certain class preferences affect the
      outcome of other class preferences. You may still find utility in using it as a general class information lookup tool.`,
      collapsed: false
    },
    {
      id: "2020-subjects",
      title: "2020 Subject Pool",
      content: `The 2020 subject pool has been added, it is now the default.`
    }
  ];
  let seenNotifications = localStorage.getItem("notifications");
  let collapsedNotifications = localStorage.getItem("collapsed-notifications");
  if (seenNotifications) {
    seenNotifications = JSON.parse(seenNotifications);
    initialNotifications = initialNotifications.filter(
      ({ id }) => !seenNotifications.includes(id)
    );
  }
  if (collapsedNotifications) {
    collapsedNotifications = JSON.parse(collapsedNotifications);
    initialNotifications.forEach(({ id }, idx) => {
      if (collapsedNotifications.includes(id)) {
        initialNotifications[idx].collapsed = true;
      }
    });
  }
  const [notifications, setNotifications] = useState(initialNotifications);
  const toggleCollapse = id => {
    const currentNotifs = [...notifications];
    const currentNotif = currentNotifs.filter(notif => notif.id === id)[0];
    if (!currentNotif || currentNotif.collapsed === undefined) return;
    currentNotif.collapsed = !currentNotif.collapsed;

    // Existing notifications
    let existingCollapsed = localStorage.getItem("collapsed-notifications");
    if (!existingCollapsed) {
      existingCollapsed = [];
    } else {
      existingCollapsed = JSON.parse(existingCollapsed);
    }
    if (!currentNotif.collapsed) {
      existingCollapsed = existingCollapsed.filter(
        id => !id === existingCollapsed.id
      );
    } else {
      existingCollapsed.push(id);
    }
    localStorage.setItem(
      "collapsed-notifications",
      JSON.stringify(existingCollapsed)
    );
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
