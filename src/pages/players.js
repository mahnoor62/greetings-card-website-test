import { useEffect, useState } from 'react';
import Head from 'next/head';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import FilterHelper, { applyPagination } from '../utils/helper';

const PLayers_Detail = () => {

  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);
  // search bar stats
  const [searchQuery, setSearchQuery] = useState('');
  // pagination stats
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // api function
  const FetchPlayersDeatail = async () => {
    setLoading(true);
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const token = window.localStorage.getItem('token');
    try {
      if (token) {
        const response = await axios.get(
          `${API_BASE_URL}/api/user/player/get-details`,
          {
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': token
            }
          }
        );
        setPlayers(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    FetchPlayersDeatail();
    // Polling mechanism: Fetch leaderboard data every 30 seconds
    const intervalId = setInterval(FetchPlayersDeatail, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

//filter function
  const filtered = FilterHelper(players,
    searchQuery,
    ['playerId.email', 'playerId.name', 'playerId.phoneNumber', 'gameId.name']);
  const paginatedList = applyPagination(filtered, page, rowsPerPage);
  const totalCount = filtered.length;

  return (
    <>
      <Head>
        <title>PLayers | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 1000,
            px: 3,
            py: '80px',
            width: '100%'
          }}
        >
          <Box sx={{
            display: 'flex',
            width: '100%',
            flexWrap: { xs: 'wrap', md: 'nowrap' }
          }}>

            <Box sx={{ width: '100%' }}>
              <Typography variant="h4">Players</Typography>
            </Box>

            <TextField
              variant="filled"
              placeholder="Search..."
              sx={{
                '&::placeholder': {
                  color: 'rgba(71, 85, 105, 1)'
                },
                height: { xs: '30%', md: '40%' },
                width: { xs: '100%', md: '40%' },
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '25px',
                marginTop: { xs: '20px', md: '0' }

              }}
              onChange={event => setSearchQuery(event.target.value)}
              InputProps={{
                endAdornment: (
                  <Button variant="text" disabled={true}>
                    <SearchIcon sx={{ mt: 1.5, color: 'rgba(71, 85, 105, 1)' }}/>
                  </Button>
                )
              }}
            />
          </Box>

          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: '#add540' }}>
                  <TableRow sx={{ backgroundColor: '#add540' }}>
                    <TableCell style={{ backgroundColor: '#add540' }}>Name</TableCell>
                    <TableCell style={{ backgroundColor: '#add540' }}>Email</TableCell>
                    <TableCell style={{ backgroundColor: '#add540' }}>Phone Number</TableCell>
                    <TableCell style={{ backgroundColor: '#add540' }}>Game</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedList.map((players, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {players.playerId.name}
                      </TableCell>
                      <TableCell>{players.playerId.email}</TableCell>
                      <TableCell>{players.playerId.phoneNumber}</TableCell>
                      <TableCell>{players.gameId.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/*pagination*/}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <TablePagination
                component="div"
                count={totalCount}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Box>
          </div>
        </Box>
      </Box>

    </>
  )
    ;
};

PLayers_Detail.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default PLayers_Detail;