import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import ChapterPage from '../pages/ChapterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'chapters/:chapterId',
        element: <ChapterPage />,
      },
    ],
  },
]);

export default router;
