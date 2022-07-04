import { Card, Typography, CardMedia, CardContent, Box} from '@mui/material';
import ButtonComponent from './ButtonComponent';
export default function PreviewCard ({ title, image, linkTo, isMovie }) {
    return (
        <div>
            <Card sx={{ border:"1px dotted black", marginTop: "50px", width: "260px",minWidth: "246px", padding: "10px auto", margin: "10px auto"}} >
                <Typography className="title" variant="h6" border="1px solid red" gutterBottom textAlign="center"  noWrap>
                    {title}
                </Typography>
                
                <CardMedia
                    component="img"
                    height={200}
                    image={image}
                    style={{objectFit: "scale-down"}}
                    alt={`${title} - image`}
                    border="2px dotted red"
                    sx={{margin: "15px 1px auto" }}
                />
                <CardContent>
                    <Box display="flex" justifyContent="center" alignItems="center" border="4px dotted orange">
                        {
                            isMovie 
                                ?   <ButtonComponent buttonText="detail" linkTo={linkTo} buttonType="previewCardButton" variant="contained" size="small" style={{textTransform: "capitalize"}} />
                                :   <ButtonComponent buttonText="detail" linkTo={linkTo} buttonType="previewCardButton" variant="contained" size="small" style={{textTransform: "capitalize"}} />
                        }
                            
                    </Box>         
                </CardContent>
            </Card>
        </div>
    )
}