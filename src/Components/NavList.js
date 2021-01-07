import React, { Component } from 'react'
import { Link, LinkNav } from 'react-router-dom'

class NavList extends Component {
    render() {
        return (
            <>
                <Link to="/dares"> قدها ؟</Link>
                <Link to="/guess"> على طرف لساني</Link>
                <Link to="/wink"> غمزة</Link>
            </>
        );
    }
}

export default NavList;
