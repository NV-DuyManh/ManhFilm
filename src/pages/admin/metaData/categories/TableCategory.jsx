import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { CategoriesContext } from '../../../../contexts/CategoryProvider';
import ModalDelete from '../../../../components/admin/ModalDelete';
import { deleteDocument } from '../../../../services/firebaseService';
import PaginationAdmin from '../../../../components/admin/PaginationAdmin';
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
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



function TableCategory({ handleClickOpen, setCategory, category }) {
    const categories = useContext(CategoriesContext);
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleClickOpenDele = (row) => {
        setOpen(true);
        setCategory(row);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleEdit = (row) => {
        handleClickOpen();
        setCategory(row);
    }
    const handleDeleted = async () => {
        await deleteDocument("Categories", category);
        handleClose();
    }

    const handleChangePage = (event, newPage) => {
            console.log("vvs");
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const count = Math.ceil(categories?.length / rowsPerPage);

    return (
        <div className='p-5'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="right">NAME</StyledTableCell>
                            <StyledTableCell align="right">DESCRIPTION</StyledTableCell>
                            <StyledTableCell align="right">ACTION</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell>{index + 1}</StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.description}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <button onClick={() => handleEdit(row)} className="bg-blue-500 cursor-pointer text-white px-3 py-1 rounded mr-2"><CiEdit /></button>
                                    <button onClick={() => handleClickOpenDele(row)} className="bg-red-600 px-3 cursor-pointer  text-white py-1 rounded"><RiDeleteBin6Fill /></button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ModalDelete
                handleClose={handleClose}
                open={open}
                handleDeleted={handleDeleted}
            />
            <PaginationAdmin
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                rowsPerPage={rowsPerPage}
                count={count}
            />
        </div>
    );
}   

export default TableCategory;