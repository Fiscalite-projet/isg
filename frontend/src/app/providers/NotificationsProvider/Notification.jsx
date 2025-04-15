'use client';
import React from 'react';
import NotificationsSystem, { bootstrapTheme, SlideTransition, useNotifications } from 'reapop';

const Notifications = () => {
  // 1. Retrieve the notifications to display, and the function used to dismiss a notification.
  const { notifications, dismissNotification } = useNotifications();
  return (
    <div>
      <NotificationsSystem
        smallScreenBreakpoint={500}
        // 1. Replace the default `Transition` component.
        components={{ Transition: SlideTransition }}
        // 2. Pass the notifications you want Reapop to display.
        notifications={notifications}
        // 3. Pass the function used to dismiss a notification.
        dismissNotification={(id) => dismissNotification(id)}
        // 4. Pass a builtIn theme or a custom theme.
        theme={bootstrapTheme}
      />
    </div>
  );
};
export default Notifications;
