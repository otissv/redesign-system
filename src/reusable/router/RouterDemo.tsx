import React from 'react'

import { routes } from './router.example'
import { Link } from './Link'
import { Router } from './Router'
import { RouterProvider } from './RouterProvider'
import { ThemeProvider } from '../../ThemeContext/ThemeProvider'

export function RouterDemo() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <ul style={{ width: '200px', listStyle: 'none', display: 'flex' }}>
          <li style={{ paddingLeft: '10px' }}>
            <Link to="/router">Home</Link>
          </li>
          <li style={{ paddingLeft: '10px' }}>
            <Link to="/router/about">About</Link>
          </li>
          <li style={{ paddingLeft: '10px' }}>
            <Link to="/router/users/1">Users</Link>
          </li>
        </ul>
        <Router routes={routes} />
      </RouterProvider>
    </ThemeProvider>
  )
}
