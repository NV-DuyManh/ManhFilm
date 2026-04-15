import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { FaSpinner } from 'react-icons/fa';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCategory({ open, onChangeInput, handleClose, addCategory, error, loading, category }) {

    return (
        <React.Fragment>
            <Dialog
                open={open}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
            >
                <DialogTitle> 
                    {category.id ? "Update Category" : "Add Categoy"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        name='name'
                        onChange={onChangeInput}
                        fullWidth sx={{ mt: 2 }}
                        label="Name"
                        variant="outlined"
                        value={category.name}
                        helperText={error.name}
                        error={!!error.name}
                    />
                    <TextField
                        name='description'
                        onChange={onChangeInput}
                        fullWidth sx={{ mt: 2 }}
                        multiline rows={3}
                        label="Description"
                        variant="outlined"
                        value={category.description}
                        helperText={error.description}
                        error={!!error.description}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Disagree
                    </Button>
                    <Button disabled={loading} onClick={addCategory}>{loading ? (
                        <FaSpinner className="spin" />
                    ) : (
                        
                        category.id ? "UPDATE" : "ADD"
                    )}</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}


