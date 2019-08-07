import React from 'react'

const Users = React.lazy(() => import('./Users.example'))

export const routes = [
  { path: `/router`, component: () => 'Home Page' },
  { path: `/router/about`, component: () => 'About Page' },
  {
    component: (props: any) => <Users {...props} />,
    children: [
      { path: `/router/users/1`, component: () => 'Users 1' },
      { path: `/router/users/2`, component: () => 'Users 2' },
    ],
  },
]
