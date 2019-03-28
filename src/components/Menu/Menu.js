import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

const MenuItem = ({label, path}) => {
    return (
        <NavLink
            exact
            to={path}
        >
            <div className='menu-item'>{label}</div>
        </NavLink>
    )
}

class Menu extends Component {


    render() {
        const { items } = this.props;

        return (
            <aside className='container-menu'>

                <div className='container-logo'>

                    <i className="logo fas fa-utensils"></i>

                    <div className='logo-title'>
                        Menu
                    </div>

                    <div className='logo-subtitle'>
                        main menu
                    </div>
                </div>

                <div className='menu'>
                    {
                        items && items.map((item) => (<MenuItem 
                            key={item.label}
                            {...item}
                        />))
                    }


                  
                </div>


            </aside >
        )
    }

}

export default Menu;