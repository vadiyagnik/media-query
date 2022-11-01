import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';

    return (
        <React.Fragment>
            <h2>uesr 1</h2>
            <h2>uesr 2</h2>
            <h2>uesr 3</h2>
            <Outlet />
            <div>
                <button onClick={()=> setSearchParams({ filter: 'active' })}>Active Users</button>
                <button onClick={()=> setSearchParams({})}>Reset Filter</button>
            </div>
            {
                showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showing All Users</h2>
            }
        </React.Fragment>
    );
};

export default Users;
