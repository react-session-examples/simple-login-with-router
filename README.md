## Simple Logic Screen with Router

### React Router Demo

This demo showcases basic routing in React using `react-router-dom`. We'll set up three pages: Login, Dashboard, and a NotFound page.

## 1. Install NPM Modules

```bash
npm install react-router-dom history
```
(Or `yarn add react-router-dom history`)

## 2. Create Routes File

In your app root directory (or `src`), create `RoutesComponent.js`:

```javascript
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import NotFound from './pages/NotFound';
// import PageLoader from './components/PageLoader'; // Define or import your PageLoader

const RoutePaths = {
  Login: '/',
  DashBoard: '/dashboard',
  NotFound: '/not-found', // Note: The catch-all '*' route is used below for NotFound
}

const RoutesComponent = () => {
  return (
    // Ensure PageLoader is defined or use a simple fallback like <div>Loading...</div>
    <Suspense fallback={<div>Loading...</div> /* <PageLoader /> */}>
      <Routes>
        <Route path={RoutePaths.Login} exact element={<Login />} />
        <Route path={RoutePaths.DashBoard} element={<DashBoard />} />
        <Route path="*" element={<NotFound />} /> {/* Catches all undefined paths */}
      </Routes>
    </Suspense>
  )
}

export default RoutesComponent
```

**Next Steps:**
*   Ensure `Login`, `DashBoard`, `NotFound` (and `PageLoader` if used) page components exist.
*   Import and use `<RoutesComponent />` inside `<BrowserRouter>` in your `App.js`.

