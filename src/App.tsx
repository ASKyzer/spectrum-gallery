import '@frigi/comet/dist/comet.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import RootLayout from './pages/Root';
import SupportPage from './pages/SupportPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage />, errorElement: <NotFoundPage /> },
      {
        path: '/support',
        element: <SupportPage />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
