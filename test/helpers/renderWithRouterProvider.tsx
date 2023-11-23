// import {ReactElement} from "react";
//
// import {setupListeners} from '@reduxjs/toolkit/query';
// import {render} from '@testing-library/react';
//
// import {AppStore, PreloadState, setupStore} from '../../app/store/store';
//
// interface IOptions {
//   preloadedState?: PreloadState;
//   store?: AppStore;
//   initialEntries?: string[];
//   initialIndex?: number;
// }
//
// function renderProvider(
//   ui?: ReactElement | null,
//   {
//     preloadedState,
//     store = setupStore(preloadedState),
//     initialEntries,
//     initialIndex,
//   }: IOptions = {},
// ) {
//   setupListeners(store.dispatch);
//
//   // const routes = ui ? [{ path: '/', element: ui }] : ROUTES;
//   // const router = createMemoryRouter(routes, {
//   //   initialEntries,
//   //   initialIndex,
//   // });
//
//   console.log(initialEntries);
//   console.log(initialIndex);
//
//   return {
//     store,
//     ...render(
//       // <Provider store={store}>
//       //   {/* <RouterProvider router={router} /> */}
//       // </Provider>,
//         ui
//     ),
//   };
// }
//
// export default renderProvider;
