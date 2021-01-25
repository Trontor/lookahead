import {
  NotificationContent,
  NotificationDismiss,
  NotificationHeader,
  NotificationMarkdown,
  NotificationTitle,
  NotificationWrapper,
} from './NotificationStyles';
import React, {useState, useEffect} from 'react';
import * as contentful from 'contentful';
import Markdown from 'markdown-to-jsx';

const filterNotifications = notifcations => {
  let seenNotifications = localStorage.getItem('notifications');
  let collapsedNotifications = localStorage.getItem('collapsed-notifications');
  if (seenNotifications) {
    seenNotifications = JSON.parse(seenNotifications);
    notifcations = notifcations.filter(({id}) => !seenNotifications.includes(id));
  }
  if (collapsedNotifications) {
    collapsedNotifications = JSON.parse(collapsedNotifications);
    notifcations.forEach(({id}, idx) => {
      if (collapsedNotifications.includes(id)) {
        notifcations[idx].collapsed = true;
      }
    });
  }
  return notifcations;
};

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  // On component load, fetch notifications from Contentful space
  useEffect(() => {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: 'ijvt5o1mpw83',
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: 'jQ6S8Bh5C1isiIlYOc3Q_AGq4Dz8RsTanTgP2_wS8ic',
    });
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
    client.getEntries('notifications').then(data => {
      const rawNotifs = data.items.map(item => {
        const parsedItem = {...item.fields};
        return parsedItem;
      });
      console.log('Raw Notifications');
      console.log(rawNotifs);
      setNotifications(filterNotifications(rawNotifs));
    });
  }, []);

  // Handles the toggle of a collapse of a notification
  const toggleCollapse = id => {
    const currentNotifs = [...notifications];
    const currentNotif = currentNotifs.filter(notif => notif.id === id)[0];
    if (!currentNotif || currentNotif.collapsed === undefined) return;
    currentNotif.collapsed = !currentNotif.collapsed;

    // Existing notifications
    let existingCollapsed = localStorage.getItem('collapsed-notifications');
    if (!existingCollapsed) {
      existingCollapsed = [];
    } else {
      existingCollapsed = JSON.parse(existingCollapsed);
    }
    if (!currentNotif.collapsed) {
      existingCollapsed = existingCollapsed.filter(id => !id === existingCollapsed.id);
    } else {
      existingCollapsed.push(id);
    }
    localStorage.setItem('collapsed-notifications', JSON.stringify(existingCollapsed));
    setNotifications(currentNotifs);
  };
  const hideNotification = id => {
    // Existing notifications
    let existingNotifications = localStorage.getItem('notifications');
    if (!existingNotifications) {
      existingNotifications = [];
    } else {
      existingNotifications = JSON.parse(existingNotifications);
    }
    existingNotifications.push(id);
    localStorage.setItem('notifications', JSON.stringify(existingNotifications));
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  return notifications.map(({id, title, content, collapsed, color}) => (
    <NotificationWrapper key={id} collapsable={collapsed !== undefined} color={color}>
      <NotificationHeader>
        <Markdown
          options={{
            overrides: {
              h1: NotificationTitle,
            },
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
          {collapsed !== undefined ? collapsed ? '?' : <i class="fas fa-chevron-up"></i> : '×'}
        </NotificationDismiss>
      </NotificationHeader>
      <NotificationContent toggled={collapsed}>
        {(collapsed === undefined || (collapsed !== undefined && !collapsed)) && (
          <NotificationMarkdown>{content}</NotificationMarkdown>
        )}
      </NotificationContent>
    </NotificationWrapper>
  ));
}
