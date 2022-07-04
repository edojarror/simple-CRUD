import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemButton, ListItemText} from '@mui/material';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import TableRowsIcon from '@mui/icons-material/TableRows';
import AddCardIcon from '@mui/icons-material/AddCard';

export default function ListAtDrawer ({ onClick, onKeyDown, linkTo, primary, iconVariant }) {
    return (
        <Box
            role="presentation"
            onClick={onClick()}
            onKeyDown={onKeyDown()}>
            <List>
            <ListItem>
                <ListItemButton>
                <ListItemIcon>
                    {
                        iconVariant === "list" ? <ListAltOutlinedIcon /> : iconVariant === "table" ? <TableRowsIcon /> : <AddCardIcon />
                    }
                </ListItemIcon>
                <Link to={linkTo} style={{textDecoration: "none", color: "inherit"}}>
                    <ListItemText primary={primary} />
                </Link>
                </ListItemButton>
            </ListItem>
            </List>
        </Box>
    )
}