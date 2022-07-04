import { Box, Typography } from '@mui/material';

export default function DetailedText ({ firstText, secondText, marginBtm }) {
    return (
        <Box boxSizing="border-box" border="1px solid black" padding={2} marginBottom={marginBtm}>
            <Typography component="p" variant='body1'> {firstText} 
                <Typography component="span" variant='body2'> {secondText}</Typography>
            </Typography>    
        </Box>
    )
}