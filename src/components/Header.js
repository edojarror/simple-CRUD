import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Grid, Divider, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ListAtDrawer from './ListAtDrawer';

export default function Header () {
  let navigates = useNavigate();
  function pageURL () {
      navigates("/")
  }
  const [myDrawer, setMyDrawer] = useState(false);       
  const toggleMyDrawer = () => () => {
    setMyDrawer(!myDrawer)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
          onClick={() => pageURL()}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, flexGrow: 0 }}>
            <HomeIcon  />
          </IconButton>

          <Fragment >
              <Grid container display="flex" justifyContent="flex-end">
                  <IconButton
                  onClick={toggleMyDrawer()}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2, display: "flex", alignItems: "flex-end", justifyContent: "flex-end"}}>
                    <MenuIcon  />
                      
                  </IconButton>    
              </Grid >            
              <Drawer
                  anchor='top'
                  open={myDrawer}
                  onClose={toggleMyDrawer()}
                  >

                  {
                  [["/movies-list", "Movies List", "list"], ["/movies-table", "Movies Table", "table"], ["/add-movie", "Add New Movie", "add"]]
                      .map(index => 
                      (<ListAtDrawer key={index[1]}
                          onClick={toggleMyDrawer} 
                          onKeyDown={toggleMyDrawer}  
                          linkTo={index[0]}
                          primary={index[1]}
                          iconVariant={index[2]} />
                      ))
                  }
                  <Divider />
                  {
                  [["/games-list", "Games List", "list"], ["/games-table", "Games Table", "table"], ["/add-game", "Add New Game", "add"]]
                      .map(index => 
                      (<ListAtDrawer key={index[1]}
                          onClick={toggleMyDrawer} 
                          onKeyDown={toggleMyDrawer}  
                          linkTo={index[0]}
                          primary={index[1]}
                          iconVariant={index[2]}  />
                      ))
                  }                   

              </Drawer>   
          </Fragment>
        </Toolbar>
      </AppBar>
    </Box>    
  );
}