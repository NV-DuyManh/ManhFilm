import React from 'react';
import DashBoard from '../pages/admin/dashBoard/DashBoard';
import MetaData from '../pages/admin/metaData/MetaData';
import Movies from '../pages/admin/movies/Movies';
import Users from '../pages/admin/community/Users';
import Cast from '../pages/admin/cast/Cast';
import Plans from '../pages/admin/plans/Plans';

function AdminRouters(props) {
    const adminRouter = [
        {
            path: "/",
            element: <DashBoard />
        },
        {
            path: "/metaData",
            element: <MetaData />
        },
        {
            path: "/movies",
            element: <Movies />
        },
        {
            path: "/users",
            element: <Users />
        },
        {
            path: "/cast",
            element: <Cast />
        },
        {
            path: "/plans",
            element: <Plans />
        },
        {
            path: "/vip",
            element: <Vip />
        },
    ]
    return (
        <Routes>
            {adminRouter.map((p, index) => (
                <Route path={p.path} element={p.element} />
            ))}
        </Routes>
    );
}

export default AdminRouters;