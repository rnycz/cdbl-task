import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useFetch } from "../hooks/useFetch";
import { FetchData, UseFetchType, UseStateContextType } from "../assets/types";
import TextField from "@mui/material/TextField";
import Pagination from "./Pagination";
import { useStateContext } from "../contexts/ContextProvider";
import DataModal from "./DataModal";
import { useLocation, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const DataTable: React.FC = () => {
  const { setOpenModal, setSelectedRow }: UseStateContextType =
    useStateContext();

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams: URLSearchParams = new URLSearchParams(location.search);
  const [page, setPage] = useState<number>(
    parseInt(searchParams.get("page")!) || 1
  );
  const [filterId, setFilterId] = useState<number>(
    parseInt(searchParams.get("filter")!) || 0
  );

  const url: string = `https://reqres.in/api/products?per_page=${5}&page=${page}`;
  const { data, loading, error, makeApiCall }: UseFetchType = useFetch(url);

  useEffect(() => {
    makeApiCall();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    searchParams.set("page", page.toString());
    searchParams.set("filter", filterId.toString());
    navigate(`?${searchParams.toString()}`);
    // eslint-disable-next-line
  }, [page, filterId]);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterId(parseInt(e.target.value));
  };
  const handleRowClick = (row: FetchData) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        marginTop="15px"
        gap="10px"
      >
        <TextField
          type="number"
          id="filter-id"
          label="Filter ID"
          variant="outlined"
          helperText="Only positive numbers"
          InputProps={{
            inputProps: { min: 0 },
          }}
          onChange={handleIdChange}
          value={filterId}
        />
        {loading && (
          <Typography id="loading-info" component="span">
            Loading table...
          </Typography>
        )}
        {error && (
          <Typography id="error-info" component="span" sx={{ color: "red" }}>
            Error: {error}
          </Typography>
        )}
      </Box>
      <TableContainer component={Paper} sx={{ mt: "10px" }}>
        <Table
          sx={{ minWidth: 300 }}
          aria-label="display data from API in table"
        >
          <TableHead sx={{ background: "black" }}>
            <TableRow>
              <TableCell align="center" sx={{ color: "white" }}>
                ID
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Name
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Year
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterId
              ? data &&
                data.data.map((row: FetchData) => (
                  <>
                    {row.id === filterId && (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          bgcolor: row.color,
                        }}
                        onClick={() => handleRowClick(row)}
                      >
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.year}</TableCell>
                      </TableRow>
                    )}
                  </>
                ))
              : data &&
                data.data.map((row: FetchData) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      backgroundColor: row.color,
                    }}
                    onClick={() => handleRowClick(row)}
                  >
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.year}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DataModal />
      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default DataTable;
