'use client';
import { useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { NotificationsProvider, setUpNotifications } from 'reapop';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_ENDPOINTS_URL;
const ClientLayout = ({ children }) => {

  useEffect(() => {
    setUpNotifications({
      defaultProps: {
        position: 'top-right',
        dismissible: true,
      },
    });
   
  }, []);
  return <NotificationsProvider>{children}</NotificationsProvider>;
};

export default ClientLayout;