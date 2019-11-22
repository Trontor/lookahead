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
      content: `The university has migrated to a new timetable management system, [MyTimetable](https://students.unimelb.edu.au/admin/class-timetable). The new system is a **preference** based system as opposed to our current **free for all** system. A component of this new system  is a timetable planner, you can see how to use it [here](https://students.unimelb.edu.au/admin/class-timetable/plan-your-timetable) (I have a feeling you'll come back, though). This new system is a three stage process, learn more about it [here]( https://students.unimelb.edu.au/admin/class-timetable ). The [key dates]( https://students.unimelb.edu.au/admin/class-timetable/timetable-dates ) you have to be aware of are
      
###Preference Entry Period
**26th November 2019** until **3rd February 2020, 10am**
      
###Review and Adjustment Period
**10th February 2020** until **20th March 2020, 10am**
      `,
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
    <NotificationWrapper key={id} collapsable={collapsed !== undefined}>
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
