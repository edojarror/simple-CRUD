import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';

export default function ButtonComponent ({ buttonType, buttonText, linkTo }) {

    return (
        buttonType === "linkButton"
            ?   <Box>
                    <Button variant='contained'>
                        <Link to={linkTo} style={{textDecoration: "none", color: "inherit"}}>
                            {buttonText}
                        </Link>
                    </Button>
                </Box>
            :   buttonType === "previewCardButton" 
                ?   <Box>
                        <Button variant='contained' >
                            <Link to={linkTo} style={{textDecoration: "none", color: "inherit"}}>
                                {buttonText}
                            </Link>
                        </Button>
                    </Box>
                :   <Box>
                        <Button variant='contained'>Detail</Button>
                    </Box>
    )
}