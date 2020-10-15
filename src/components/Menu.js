import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { motion } from "framer-motion"


const NavBar = styled.nav`
    display: flex;
    justify-content: center;
    aListItemgn-items: center;
    margin: 20px;
    margin-bottom: 60px;
`;

const UlList = styled.ul`
    width: auto;
    list-style: none;
    text-align: center;
    padding: 0;
    border-bottom: 1px solid #fff;
`;

const ListItem = styled.li`
    display: inline-block;
    margin: 25px;
    color: white;
    
    .menuLink{
        text-decoration: none;
        font-family: 'Playfair Display', serif;
        font-size: 1.2em;
        color: white;
        transition: .2s;
        letter-spacing: 2px;
        &:hover {
            color: gray;
        }
    }
`;

const Menu = (props) => {
    const [ menu, setMenu ] = useState(false);
    
    const menuStyle = {
        width: '92%',
        height: '0',
        margin: '0 auto',
        backgroundColor: 'lightgray',
        marginBottom: '25px',
    }

    const variants = {
        open: { opacity: 1, height: '226px' },
        closed: { opacity: 0, height: 0 }
    }

    const openMenu = () => {
        if(menu){
            setMenu(false);
        } else {
            setMenu(true);
        }
    }

    return <> 
    {   props.isMobile && 
        <NavBar> 
            <UlList>
                    <ListItem>
                        <Link className="menuLink" to="/">Start</Link>
                    </ListItem>
                    <ListItem>
                        <Link className="menuLink" to="/oferta">Oferta</Link>
                    </ListItem>
                    <ListItem>
                        <Link className="menuLink" to="/instrukcja">Instrukcja palenia świeczki</Link>
                    </ListItem>
                    <ListItem>
                        <Link className="menuLink" to="/kontakt">Kontakt</Link>
                    </ListItem>
                    <ListItem>
                        <Link className="menuLink" to="/regulamin">Regulamin</Link>
                    </ListItem>
            </UlList>
        </NavBar>
    }
    {
        !props.isMobile && 
        <>
            <div style={{display: 'flex', textAlign: 'center', borderBottom: '1px solid #fff' }}>
                <div style={{width: '50%'}} ><Link to="/"><HomeIcon onClick={ () => setMenu(false) } style={{ fontSize: 60, color: 'white'}}/></Link></div>
                <div style={{width: '50%'}} ><DehazeIcon onClick={openMenu} style={{ fontSize: 60, color: 'white'}}/></div>
            </div>
            <motion.div style={menuStyle} initial={{ opacity: 0, height: 0 }} animate={ menu ? "open" : "closed" } variants={variants} >
                <UlList style={{ border: 'none' }}>
                    <ListItem>
                        <Link className="menuLink" style={{ fontSize: '1.3em', color: 'rgb(84, 84, 84)' }} onClick={openMenu} to="/oferta">Oferta</Link>
                    </ListItem>
                    <ListItem>
                        <Link className="menuLink" style={{ fontSize: '1.3em', color: 'rgb(84, 84, 84)' }} onClick={openMenu} to="/oferta">Instrukcja palenia świeczki</Link>
                    </ListItem>
                    <ListItem>
                        <Link className="menuLink" style={{ fontSize: '1.3em', color: 'rgb(84, 84, 84)' }} onClick={openMenu} to="/oferta">Kontakt</Link>
                    </ListItem>
                    <ListItem>
                        <Link className="menuLink" style={{ fontSize: '1.3em', color: 'rgb(84, 84, 84)' }} onClick={openMenu} to="/oferta">Regulamin</Link>
                    </ListItem>
                </UlList>
            </motion.div>
        </>
    }
    </> 
}

export default Menu;