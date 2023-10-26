import { createBrowserRouter } from 'react-router-dom';
import LandingView from 'src/views/LandingView.tsx';
import Search from 'src/views/Search.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingView />,
  },
  {
    path: '/search',
    element: <Search />,
  },
]);

export default router;
