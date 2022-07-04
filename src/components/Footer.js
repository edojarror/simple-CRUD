import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function Footer () {
    return (
        <Box sx={{backgroundColor: "#1976d2", height: "40px", color: "#ffff", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <CopyrightIcon /> <Typography variant='body2'>Simple CRUD App By Edo </Typography>
        </Box>
    )
}