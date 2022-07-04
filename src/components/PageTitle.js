import { Box, Typography } from '@mui/material';

export default function PageTitle ({ titleText }) {
    return (
        <Box margin={4} textAlign="center">
            <Typography variant='h4'>{titleText}</Typography>
        </Box>
    )
}