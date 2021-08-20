import React from 'react';

const ImagesMenu = ({items})=> {

    const currentItems = items.map(
            item => {
                return (
                <a key={item.id} href={item.url}>
                    <div>
                        <p>{item.name}</p>
                    </div>
                </a>
                )
            }
    );

    return (
        <section>
            {currentItems}
        </section>
    )
};

export default ImagesMenu;