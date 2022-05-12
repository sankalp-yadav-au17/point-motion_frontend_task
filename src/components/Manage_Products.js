import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";

const Input = styled("input")({
  display: "none",
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("", "Frozen yoghurt", 6.0, 24, 4.0),
  createData("", "Ice cream sandwich", 9.0, 37, 4.3),
  createData("", "Eclair", 16.0, 24, 6.0),
  createData("", "Cupcake", 3.7, 67, 4.3),
  createData("", "Gingerbread", 16.0, 49, 3.9),
];

function Manage_Products() {
  const dispatch = useDispatch();
  const { add_product } = bindActionCreators(actionCreators, dispatch);
  const [Inputs, setInputs] = useState({
    product_name: "",
    price: "",
    product_description: "",
    product_image: "",
  });

  const handleSubmit = () => {
    add_product(Inputs);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...Inputs, [name]: value });
    // console.log(Inputs);
  };

  return (
    <>
      <main>
        <div className="d-flex">
          <div className="m-2">
            <TextField
              name="product_name"
              onChange={handleInput}
              id="filled-basic"
              label="Product name"
              variant="filled"
              helperText="Enter product name."
            />
          </div>
          <div className="m-2">
            <TextField
              onChange={handleInput}
              name="price"
              id="filled-basic"
              label="Price"
              variant="filled"
              helperText="Enter price."
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="m-2">
            <h6>Product Description (optional)</h6>
            <TextareaAutosize
              onChange={handleInput}
              name="product_description"
              aria-label="minimum height"
              minRows={3}
              placeholder="Enter Discription"
              style={{ width: 200 }}
            />
          </div>
          <div className="m-2">
            <h6>Product Image (optional)</h6>
            <div className="mt-2 d-flex">
              <label className="me-2" htmlFor="contained-button-file">
                <Input
                  onChange={handleInput}
                  name="product_image"
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
              <TextField
                disabled
                name="product_image"
                value={Inputs.product_image}
                id="filled-disabled"
                label="File-Name"
                defaultValue="Hello World"
                variant="filled"
              />
            </div>
          </div>
        </div>
        <div className="m-2">
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>
        <div className="shadow mt-5">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Picture</StyledTableCell>
                  <StyledTableCell align="">Name</StyledTableCell>
                  <StyledTableCell align="">Description</StyledTableCell>
                  <StyledTableCell align="">Price</StyledTableCell>
                  <StyledTableCell align="">Remove</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="">{row.calories}</StyledTableCell>
                    <StyledTableCell align="">{row.fat}</StyledTableCell>
                    <StyledTableCell align="">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="">
                      <a href="/">Remove</a>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </main>
    </>
  );
}

export default Manage_Products;
