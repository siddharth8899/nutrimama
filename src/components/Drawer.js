import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Routing from './Routing';
import MenuIcon from '@mui/icons-material/Menu';
import img from '../assets/logo/logo.png';
import '../css/Nutrimama.css';
import { Link } from 'react-router-dom';

export default function TempDrawer() {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    return (
        <div>
            <div className='hdr'>
                <MenuIcon onClick={toggleDrawer(true)} />
                <div className='logo'>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <img src={img} alt='logo' height='100px' width='100%' />
                    </Link>
                </div>
            </div>
            <Drawer
                anchor={'left'}
                open={state}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={250}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Routing />
                </Box>
            </Drawer>
        </div>
    );
}
