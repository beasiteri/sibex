import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import ToDoPage from '../pages/ToDoPage';
import HomePage from '../pages/HomePage';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <DashboardLayout />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         {
            path: 'todo',
            element: <ToDoPage />,
         },
      ],
   },
]);
