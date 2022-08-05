import Typography from '@mui/material/Typography';
import React from 'react'
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

const Routing = ({ onClose }) => {
    return (
        <>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} className='menuItem' onClick={onClose}>
                <Typography textAlign="center">
                    <Link style={{ textDecoration: 'none' }} to="/about">About Us</Link>
                </Typography>
            </Button>

            <Button sx={{ my: 2, color: 'white', display: 'block' }} className='menuItem' onClick={onClose}>
                <Typography textAlign="center">
                    <Link style={{ textDecoration: 'none' }} to="/products">Our Products</Link>
                </Typography>
            </Button>

            <Button sx={{ my: 2, color: 'white', display: 'block' }} className='menuItem' onClick={onClose}>
                <Typography textAlign="center">
                    <Link style={{ textDecoration: 'none' }} to="/contact">Contact us</Link>
                </Typography>
            </Button>
        </>
    )
}
export default Routing
