import TablePagination from '@mui/material/TablePagination';
export default function PaginationAdmin({
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    count
}) {
    return (
        <>
         <h1 className='text-amber-50'>bfdbdbdb</h1>
        <TablePagination
            component="div"
            color="primary"
            count={count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 15]}
            sx={{
                "& .MuiPaginationItem-root": {
                    color: "white", // màu chữ

                },
                "& .Mui-selected": {
                    color: "white",
                },
                "& .css-1c5o7vy-MuiPagination-ul": {
                    justifyContent: "center"
                }
            }}
        />
        </>
    );
}
