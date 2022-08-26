import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TableCell, TableHead, TableRow, TableSortLabel, Box, Paper, TableContainer, Table, TableBody, TablePagination, TextField, Button, Grid } from '@mui/material';
import PageTitle from '../components/PageTitle';

const mapStateToProps = state => ({rows: state.moviesData})
const keys = ["title", "release-date", "duration", "director", "writers", "stars", "genre"];

    
const headCells = [
    {
        id: 'title',
        numeric: false,
        disablePadding: true,
        label: 'Title'
    },
    {
        id: 'release-date',
        numeric: false,
        disablePadding: true,
        label: 'Release Date'
    },
    {
        id: 'duration',
        numeric: false,
        disablePadding: true,
        label: 'Duration'
    },
    {
        id: 'director',
        numeric: false,
        disablePadding: true,
        label: 'Director'
    },
    {
        id: 'writers',
        numeric: false,
        disablePadding: true,
        label: 'Writers'
    },
    {
        id: 'stars',
        numeric: false,
        disablePadding: true,
        label: 'Stars'
    },
    {
        id: 'genre',
        numeric: false,
        disablePadding: true,
        label: 'Genre'
    },
    {
        id: 'action',
        numeric: false,
        disablePadding: true,
        label: 'Action Buttons'
    },
]

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
                        headCell.id === "action" ||  headCell.id === "director" ||  headCell.id === "writer" ||  headCell.id === "stars" ||  headCell.id === "genre"
                            ?   <TableCell 
                                    key={headCell.id}
                                    align="center"
                                    padding={headCell.disablePadding ? "none" : "normal"}
                                    sortDirection={orderBy === headCell.id ? order : false}>
                                    <TableSortLabel 
                                        active={orderBy === headCell.id}
                                        direction={orderBy === headCell.id ? order : 'asc'}
                                        onClick={createSortHandler(headCell.id)}
                                        >
                                        {headCell.label}
                                    </TableSortLabel>
                                </TableCell>
                            
                            :   <TableCell 
                                    key={headCell.id}
                                    align={headCell.numeric ? "right" : "left" }
                                    padding={headCell.disablePadding ? "none" : "normal"}
                                    sortDirection={orderBy === headCell.id ? order : false}
                                    sx={{paddingLeft : headCell.id === "title" ? "16px" : "none"}}
                                    >
                                    <TableSortLabel 
                                        active={orderBy === headCell.id}
                                        direction={orderBy === headCell.id ? order : 'asc'}
                                        onClick={createSortHandler(headCell.id)}
                                        >
                                        {headCell.label}
                                    </TableSortLabel>
                                </TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    )
}

const MoviesTable = ({rows}) => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('random');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [moviesListData, setMoviesListData] = useState(rows);
    const [filteredMoviesData, setFilteredMoviesData] = useState(moviesListData);
    const [textAtFilter, setTextAtFilter] = useState("");

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

    const filteredMoviesList = moviesListData.filter(movie => keys.some(key => movie[key].toLowerCase().includes(textAtFilter.toLocaleLowerCase())))

    const handleDeleteButton = (movieId, event) => {
        event.preventDefault();
        let currentMoviesData = moviesListData.slice(0, moviesListData.length);
        let searching = currentMoviesData.findIndex( movie => movie.id === movieId);
        currentMoviesData.splice(searching, 1);
        setMoviesListData(currentMoviesData);
        setFilteredMoviesData(currentMoviesData);
        setRowsPerPage(rowsPerPage);
        rows.splice(searching, 1);
    }

    const handleEditButton = (currentMovie) => {
        localStorage.clear();
        localStorage.setItem("id", currentMovie.id);
        localStorage.setItem("title", currentMovie.title);
        localStorage.setItem("release-date", currentMovie["release-date"]);
        localStorage.setItem("duration", currentMovie.duration);
        localStorage.setItem("director", currentMovie.director);
        localStorage.setItem("writers", currentMovie.writers);
        localStorage.setItem("stars", currentMovie.stars);
        localStorage.setItem("genre", currentMovie.genre);
        localStorage.setItem("image", currentMovie.image);
        localStorage.setItem("description", currentMovie.description);
    }

    useEffect(() => {
        setFilteredMoviesData(filteredMoviesList)
    }, [textAtFilter]);

    return (
        <Box>
            <PageTitle titleText="Movies Table" />
            <Box margin={5} display="flex" justifyContent="center">
                <TextField 
                    value={textAtFilter} 
                    placeholder="Search for ..." 
                    onChange={(event) => setTextAtFilter(event.target.value) }
                    fullWidth
                />    
            </Box>
            
            <Paper>
                <TableContainer>
                    <Table 
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size="medium"
                    >
                        <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={onRequestSort} />
                        <TableBody>
                            {stableSort(filteredMoviesData, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell align="left">{row.title}</TableCell>
                                            <TableCell align="left">{row["release-date"]}</TableCell>
                                            <TableCell align="left">{row.duration}</TableCell>
                                            <TableCell align="left">{row.director}</TableCell>
                                            <TableCell align="left">{row.writers}</TableCell>
                                            <TableCell align="left">{row.stars}</TableCell>
                                            <TableCell align="left">{row.genre}</TableCell>
                                            <TableCell align="left">
                                                <Grid container flexDirection="column" justifyContent="center" spacing={2}>
                                                    <Grid item>
                                                        <Button variant='contained' color='primary'>
                                                            <Link to={`/movies/${row.id}`} style={{textDecoration: "none", color: "inherit"}}>Detail</Link>
                                                        </Button>    
                                                    </Grid>
                                                    
                                                    <Grid item>
                                                        <Button 
                                                            variant="contained" 
                                                            color='secondary'
                                                            onClick={() => handleEditButton(row)}
                                                            >
                                                            <Link to={`/edit-movie/${row.id}`} style={{textDecoration: "none", color: "inherit"}}>Edit</Link>
                                                        </Button>    
                                                    </Grid>
                                                   
                                                    <Grid item>
                                                        <Button 
                                                            variant='contained' 
                                                            color="error" 
                                                            onClick={(event) => handleDeleteButton(row.id, event)}>
                                                                Delete
                                                        </Button>    
                                                    </Grid>
                                                    
                                                </Grid>
                                                
                                            </TableCell>
                                        </TableRow>
                                      );
                                    })}
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


export default connect(mapStateToProps) (MoviesTable)