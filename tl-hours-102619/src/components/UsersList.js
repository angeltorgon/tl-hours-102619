import React from 'react';

function UsersList(props) {

    return (
        <div>
            {
                props.users.map((user) => (
                    <div>
                        <h1>{user.name}</h1>

                    </div>
                )
                )
            }
        </div>
    )
}

export default UsersList;