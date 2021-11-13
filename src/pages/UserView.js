import React from 'react'
import AppBarTop from '../Layouts/AppBarTop'
import UserUpload from '../Layouts/UserUpload'
import AppBarTopUser from '../Layouts/AppBarTopUser'

function UserView() {
    return (
        <div>
            <AppBarTopUser />
            <UserUpload />
        </div>
    )
}

export default UserView
