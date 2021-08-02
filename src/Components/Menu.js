import React from 'react';



const Menu = ({menuData})=> {

    const displayedMenu = menuData.items.map(
        menuItem => {
            return <li key={menuItem.menuId}><a href={menuItem.url}>{menuItem.name}</a></li>
        }
    )

    return (
        <nav>
            <h3>{menuData.title}</h3>
            <ul>
                {displayedMenu}
            </ul>
        </nav>
    )
};

export default Menu;