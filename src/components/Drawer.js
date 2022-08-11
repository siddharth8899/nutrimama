import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Routing from './Routing';
import MenuIcon from '@mui/icons-material/Menu';
import img from '../assets/logo/nutrimama.png';
import '../css/Nutrimama.css';

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
                <img src={img} alt='logo' height='100px' width='100%' />
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
