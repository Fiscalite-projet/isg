'use client';
import React from 'react';
import { NotificationsProvider as ReapopNotificationsProvider, setUpNotifications } from 'reapop';

export function NotificationsProvider({ children }) {
  return <ReapopNotificationsProvider>{children}</ReapopNotificationsProvider>;
}

// run this function when your application starts before creating any notifications
setUpNotifications({
  defaultProps: {
    position: 'top-right',
    dismissible: true,
    dismissAfter: 5000,
  },
  generateId: () => new Date().getTime().toString(),
});
