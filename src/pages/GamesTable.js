import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TableCell, TableHead, TableRow, TableSortLabel, Box, Paper, TableContainer, Table, TableBody, TablePagination, Button, TextField, Grid } from '@mui/material';
import PageTitle from '../components/PageTitle';


const keys = ["title", "release", "genre", "developer", "mode", "platform"];

    
const headCells = [
    {
        id: 'title',
        numeric: false,
        disablePadding: true,
        label: 'Title'
    },
    {
        id: 'release',
        numeric: false,
        disablePadding: true,
        label: 'Release'
    },
    {
        id: 'genre',
        numeric: false,
        disablePadding: true,
        label: 'Genre'
    },
    {
        id: 'developer',
        numeric: false,
        disablePadding: true,
        label: 'Developer'
    },
    {
        id: 'mode',
        numeric: false,
        disablePadding: true,
        label: 'Mode'
    },
    {
        id: 'platform',
        numeric: false,
        disablePadding: true,
        label: 'Platform'
    },
    {
        id: 'action',
        numeric: false,
        disablePadding: true,
        label: 'Action'
    }
]

const mapStateToProps = state => ({rows : state.gamesData})

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
        return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function descendingComparator(a, b, orderBy) {
if (b[orderBy] < a[orderBy]) {
    return -1;
}
if (b[orderBy] > a[orderBy]) {
    return 1;
}
return 0;
}

function getComparator(order, orderBy) {
return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead (props) {
    const {order, orderBy, onRequestSort} = props;
    const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
   }
    return (
        <TableHead>
            <TableRow sx={{borderTop: "1px solid rgba(224, 224, 224, 1)", height: "50px"}}>
                {
                    headCells.map(headCell => (
                        headCell.id === "action"
                            ?   <TableCell 
                                    key={headCell.id}
                                    align="center"
                                    padding={headCell.disablePadding ? "none" : "normal"}
                                    sortDirection={orderBy === headCell.id ? order : false}>
                                    <TableSortLabel 
                                        active={orderBy === headCell.id}
                                        direction={orderBy === headCell.id ? order : 'asc'}
                                        onClick={createSortHandler(headCell.id)}>
                                        {headCell.label}
                                    </TableSortLabel>
                                </TableCell>
                            :   <TableCell 
                                    key={headCell.id}
                                    align={headCell.numeric ? "right" : "left" }
                                    padding={headCell.disablePadding ? "none" : "normal"}
                                    sortDirection={orderBy === headCell.id ? order : false}
                                    sx={{paddingLeft : headCell.id === "title" ? "16px" : "none"}} >
                                    <TableSortLabel 
                                        active={orderBy === headCell.id}
                                        direction={orderBy === headCell.id ? order : 'asc'}
                                        onClick={createSortHandler(headCell.id)}>
                                        {headCell.label}
                                    </TableSortLabel>
                                </TableCell>
                        
                    ))
                }
            </TableRow>
        </TableHead>
    )
}

const GamesTable = ({rows}) =>  {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('random');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [gamesListData, setGamesListData] = useState(rows);
    const [filteredGamesData, setfilteredGamesData] = useState(gamesListData);
    const [textAtFilter, setTextAtFilter] = useState("")

    const onRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
      // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    
    const filteredGamesList = gamesListData.filter(row => keys.some(key => row[key].toString().toLowerCase().includes(textAtFilter.toLocaleLowerCase())));
    const handleDeleteButton = (event, rowId) => {
        let copyOfDataGames = gamesListData.slice(0, gamesListData.length);
        let currentDataGameIndex = copyOfDataGames.findIndex(game => game.id === rowId);
        copyOfDataGames.splice(currentDataGameIndex, 1);
        setGamesListData(copyOfDataGames);
        setfilteredGamesData(copyOfDataGames);
        setRowsPerPage(rowsPerPage);
        rows.splice(currentDataGameIndex, 1);
    }
    const handleEditButton = (currentGame) => {
        let { id, title, release, developer, publisher, mode, genre, platform, image, description, storyline } = currentGame;
        localStorage.clear();
        localStorage.setItem("id", id);
        localStorage.setItem("title", title);
        localStorage.setItem("release", release);
        localStorage.setItem("developer", developer);
        localStorage.setItem("publisher", publisher);
        localStorage.setItem("mode", mode);
        localStorage.setItem("genre", genre);
        localStorage.setItem("platform", platform);
        localStorage.setItem("image", image);
        localStorage.setItem("description", description);
        localStorage.setItem("storyline", storyline);
    }
    
    useEffect(() => {
        setfilteredGamesData(filteredGamesList);
    },[textAtFilter])

    return (
        <Box>
            <PageTitle titleText="Games Table" />
            <Paper>
                <TableContainer>
                    <Box margin={5}>
                        <TextField 
                            label="Search for  ..." 
                            value={textAtFilter}
                            onChange={(event) => setTextAtFilter(event.target.value)}
                            fullWidth
                         />    
                    </Box>
                    
                    <Table 
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size='medium'
                    >
                        <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={onRequestSort} />
                        <TableBody>
                            {stableSort(filteredGamesData, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow key={row.id}>
                                          <TableCell align="left">{row.title}</TableCell>
                                          <TableCell align="left">{row["release"]}</TableCell>
                                          <TableCell align="left">{row.genre}</TableCell>
                                          <TableCell align="left">{row["developer"]}</TableCell>
                                          <TableCell align="left">{row.mode}</TableCell>
                                          <TableCell align="left">{row.platform}</TableCell>
                                          <TableCell align="left">
                                            <Grid container 
                                                flexDirection="column" 
			                                    justifyContent="center" 
			                                    spacing={2}>
                                                <Grid item>
                                                    <Button variant='contained' color='primary'>
                                                        <Link to={`/games/${row.id}`} style={{textDecoration: "none", color: "inherit"}}>Detail</Link>
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button variant="contained" color='secondary' sx={{margin: "0 10px"}} onClick={() => handleEditButton(row)}>
                                                        <Link style={{textDecoration: "none", color: "inherit"}} to={`/edit-game/${row.id}`}>
                                                            Edit
                                                        </Link>
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button 
                                                        variant='contained' 
                                                        color='error'
                                                        onClick={(event) => handleDeleteButton(event, row.id)}>
                                                            Delete
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                            
                                          </TableCell>
                                        </TableRow>
                                      );
                                })
                            }
                            {emptyRows > 0 && (
                              <TableRow
                                style={{
                                  height: 53 * emptyRows,
                                }}
                              >
                                <TableCell colSpan={6} />
                              </TableRow>
                            )}                       
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>    
        </Box>
    )
}

export default connect(mapStateToProps) (GamesTable)