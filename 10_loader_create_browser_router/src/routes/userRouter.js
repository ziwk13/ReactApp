import { createBrowserRouter } from 'react-router-dom';
import UserList from '../pages/UserList';
import UserDetail from '../pages/UserDetail';

export const userRouter = createBrowserRouter([
    // users
    {
        path: "/users",
        element: <UserList />,
        loader: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            return response.json();
        }
    },
    // users/1
    {
        path: "/users/:userId",
        element: <UserDetail />,
        loader: async ({ params }) => {  // params = { userId: "1" } -> 경로 변수만 꺼내서 사용
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            return response.json();
        }
    }
]);