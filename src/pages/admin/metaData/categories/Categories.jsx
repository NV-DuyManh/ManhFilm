import React, { useState } from 'react';
import ModalCategory from './ModalCategory';
import Search from "../../../../components/admin/Search";
import { addDocument } from '../../../../services/firebaseService';
import TableCategory from './TableCategory';
const inner = { name: "", description: "" };
function Categories(props) {
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = useState(inner);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onChangeInput = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }
    const addCategory = async () => {
        console.log(category);

        await addDocument("Categories", category);
        handleClose();
    }
    return (
        <div>
            <Search
                open={open}
                name={"Categories"}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose} />
            <ModalCategory
                addCategory={addCategory}
                onChangeInput={onChangeInput}
                open={open}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose} />
            <TableCategory
                setCategory={setCategory}
                handleClickOpen={handleClickOpen}
            />
        </div>
    );
}

export default Categories;