import React, { useState, Suspense, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Components.
import { ErrorHandler } from '@app/components'
import LoginPage from './pages/Login';
import Dashboard from './pages/dashboard';
import NotFound from './pages/NotFound';

const browserHistory = createBrowserHistory();

const RoutePaths = {
  Login: '/',
  DashBoard: '/dashboard',
  NotFound: '*', // Note: The catch-all '*' route is used below for NotFound
}

function App() {
  return (
    <>
      <ErrorHandler>
        <BrowserRouter history={browserHistory}>
          <Suspense fallback={<span>Loading Page</span>}>
            <Routes>
              <Route path={RoutePaths.Login} exact element={<LoginPage />} />
              <Route path={RoutePaths.DashBoard} element={<Dashboard />} />
              <Route path={RoutePaths.NotFound} element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorHandler>
    </>
  )
}

export default App
