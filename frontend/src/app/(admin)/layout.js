import React from 'react';

import ClientLayout from '../components/ClientLayout';
import Navbar from './navBar';


export default async function AdminLayout({ children }) {

  return (
     <ClientLayout>
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
          <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
            <Navbar/>
            <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
              <div className="app-container container-fluid d-flex flex-grow-1">
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                  <div className="d-flex flex-column flex-column-fluid">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ClientLayout>
     
  );
}
