import React from 'react';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  MAIN = '/',
}

export const publicRoutes: IRoute[] = [
  // { path: RouteNames.MAIN, exact: true, component: MainPage },
];

// export const privateRoutes: IRoute[] = [
//   { },
// ];
