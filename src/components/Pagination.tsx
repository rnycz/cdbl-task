import Box from "@mui/material/Box";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Typography } from "@mui/material";
import { PaginationProps } from "../assets/types";

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  const style = {
    cursor: "pointer",
    fontSize: 35,
    transition: "0.2s transform",
    "&:hover": {
      transform: "scale(1.2)",
    },
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="20px"
      gap="10px"
    >
      <KeyboardArrowLeftIcon
        onClick={() => {
          setPage((page) => (page <= 1 ? page : page - 1));
        }}
        sx={style}
      />
      <Typography id="page" component="span">
        {page}
      </Typography>
      <KeyboardArrowRightIcon
        onClick={() => {
          setPage((page) => (page >= 3 ? page : page + 1));
        }}
        sx={style}
      />
    </Box>
  );
};

export default Pagination;
