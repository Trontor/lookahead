import {
  NotificationContent,
  NotificationDismiss,
  NotificationHeader,
  NotificationMarkdown,
  NotificationTitle,
  NotificationWrapper
} from "./NotificationStyles";
import React, { useState } from "react";

import Markdown from "markdown-to-jsx";

export default function Notifications() {
  let initialNotifications = [
    // {
    //   id: "remake",
    //   title: "**Remake**",
    //   content: `Been here before? This is a remake of ***Lookahead***. If you encounter any issues, feel free to use the [original](${originalURL}).`
    // },
    {
      id: "allocate-plus-introduction2",
      title: "#Information: MyTimetable",
      content: `The university has migrated to a new timetable management system, [MyTimetable](https://students.unimelb.edu.au/admin/class-timetable). The new system is **preference-based**, as opposed to our current **free-for-all** system.
      
A component of this new system  is a timetable planner, see how to use it [here](https://students.unimelb.edu.au/admin/class-timetable/plan-your-timetable).

This new system is a 3-stage process, learn more about it [here]( https://students.unimelb.edu.au/admin/class-timetable ).
      
The **[key dates]( https://students.unimelb.edu.au/admin/class-timetable/timetable-dates )** you should be aware of are:
      
###Preference Entry Period
**Start: ** 26th Nov, 2019  
**End: ** 3rd Feb, 2020, 10am
      
###Review and Adjustment Period
**Start: ** 10th Feb, 2020  
**End: ** 20th Mar, 2020, 10am
      `,
      collapsed: false,
      color: "#3645AD"
    },
    {
      id: "2020-subjects",
      title: "#2020 Subject Pool",
      content: `The 2020 subject pool has been added, it is now the default.`,
      color: "#2BA676"
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

  return notifications.map(({ id, title, content, collapsed, color }) => (
    <NotificationWrapper
      key={id}
      collapsable={collapsed !== undefined}
      color={color}
    >
      <NotificationHeader>
        <Markdown
          options={{
            overrides: {
              h1: NotificationTitle
            }
          }}
        >
          {title}
        </Markdown>
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
          {collapsed !== undefined ? (
            collapsed ? (
              "?"
            ) : (
              <i class="fas fa-chevron-up"></i>
            )
          ) : (
            "×"
          )}
        </NotificationDismiss>
      </NotificationHeader>
      <NotificationContent toggled={collapsed}>
        {(collapsed === undefined ||
          (collapsed !== undefined && !collapsed)) && (
          <NotificationMarkdown>{content}</NotificationMarkdown>
        )}
      </NotificationContent>
    </NotificationWrapper>
  ));
}
