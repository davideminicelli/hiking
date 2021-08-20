import React from 'react';

const Menu = ({menuData, accordion= "off", icon = null, children})=> {

    // STYLES based on "accordion" value
    const styles = {
        on:
            {
                navStyle: "text-2xl fixed w-full py-5 px-5 flex justify-between items-center text-gray-50",
                h3Style:"",
                ulStyle: "hidden transition flex flex-col justify-between items-center",
                liStyle:"my-3"
            },
        off: {
                navStyle: "flex flex-col justify-evenly",
                h3Style:"text-gray-50 text-xl",
                ulStyle: "",
                liStyle:""
            }
        };

    const displayedMenu = menuData.items.map(
        menuItem => {
            return <li className={styles[accordion].liStyle} key={menuItem.menuId}><a href={menuItem.url}>{menuItem.name}</a></li>
        }
    )

    const reveal = ()=> {
        if (accordion === "on") {
            const target = document.querySelector("ul");
            target.classList.toggle("hidden");
        }
    };

    return (
        <nav className={styles[accordion].navStyle}>
            {icon}
            <h3 onClick={reveal} className={styles[accordion].h3Style}>{menuData.title}</h3>
            <ul className={styles[accordion].ulStyle}>
                {displayedMenu}
                {children}
            </ul>
        </nav>
    )
};

export default Menu;