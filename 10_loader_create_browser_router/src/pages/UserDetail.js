import { useLoaderData } from 'react-router-dom';

const UserDetail = () => {
    const user = useLoaderData();
    return (
        <div>
            <h2>{user.name}</h2>
            <p>이름: {user.name}</p>
            <p>이메일: {user.email}</p>
            <p>전화: {user.phone}</p>
            <p>회사: {user.company?.name}</p>
        </div>
    );
};

export default UserDetail;