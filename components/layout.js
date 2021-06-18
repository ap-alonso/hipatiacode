import Link from 'next/link';
import { useState, useEffect } from 'react';

function loadMenu(menuItem) {
    if(menuItem.items){
        return (
            <div className="menu-item dropdown">
                <span>{menuItem.text}</span>
                <div className="menu-items">
                    {
                        menuItem.items && menuItem.items.map((subitem, index)=>{
                            return loadMenu(subitem);
                        })
                    }
                </div>
            </div>
        );
    }else{
        return <div className="menu-item"><Link href={menuItem.url}><a>{menuItem.text}</a></Link></div>;
    }
}

function Layout({ children }) {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(()=>{
        fetch('/api/menu')
        .then((jsonSerialize) => jsonSerialize.json())
        .then((data)=> {
            setMenuItems(data.menuItems);
        });
    }, []);

    return (
        <>
            <header>
                <div className="menu-container">
                    {
                        menuItems && menuItems.map((menuItem, index)=> {
                            return loadMenu(menuItem);
                        })
                    }
                </div>
            </header>
            {
                children
            }
            <footer></footer>
        </>
    );
}

export default Layout;