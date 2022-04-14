import React from 'react';
import { makeStyles } from '@material-ui/core';
//import { Select } from '@material-ui/core';
import { Dialog, IconButton, Button } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
//import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { CloseIcon } from '../assets';
//import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';

const useStyles = makeStyles((theme) => ({
    WindowHeader: {
        background: '#2A3E4C',
        borderRadius: '10px 10px 0px 0px',
        position: 'static',
    },
    Title: {
        color: '#FFFFFF',   
        font: 'Ubuntu',
        fontWeight: 'normal',
    },
    TopRightMenu: {
        position: 'fixed',
        top: '80px',
        right: '170px',
        display: 'flex',
    },
    Dropdown: {
        width: '180px',
        color: '#FFFFFF',
        background: '#283A46',
        border: '1px solid #356680',
        borderRadius: 10,
        paddingLeft: '20px',
        paddingTop: '3px',
        paddingBottom: '3px',
    },
    ViewText: {
        paddingTop: '16px', 
        paddingRight: '25px',
        font: 'Ubuntu',
        fontWeight: 'normal',
        fontSize: '17px',
        letterSpacing: '0.33px',
        color: '#C0C6CA',
    },
    Body: {
        fontSize: '15px',
        color: '#97A1A9',
        background: '#2A3E4C',
    },
    tableHeading: {
        backgroundColor: '#273D49CC',
        color: '#97A1A9',
        fontSize: '13px',
        borderBottom: 'none',
        opacity: '100%',
    },
    tableBody: {
        "&:nth-of-type(odd)": {
            backgroundColor: '#273D49CC',
        },
        "&:nth-of-type(even)": {
            backgroundColor: "#283A46"
        },
        color: '#FFFFFF',
    },
    tableRow: {
        color: '#FFFFFF',
        borderBottom: 'none',
        height: '10px',
        fontSize: '14px',
    },
    dialogPaper: {
        minHeight: '80vh', 
        maxHeight: '80vh',
        minWidth: '80vw',
        maxWidth: '80vw',
        background: '#000000',
    },
    CancelButton: {
        color: '#14AFF1',
        textTransform: 'none',
    },
    DownloadButton: {
        color: '#FFF',
        textTransform: 'none',
        background: '#14AFF1',
        borderRadius: '10px',
        height: '30px',
        paddingLeft: '15px',
        paddingRight: '15px'
    },
}));

//function createData(invoiceNumber, PONumber, invoiceDate, dueDate, currency, openAmount) {
//    return { invoiceNumber, PONumber, invoiceDate, dueDate, currency, openAmount };
//}

//const rows = [
//    createData('73457346735', '73457346735', '23-Jan-2021', '02-Jan-2021', 'USD', '122.55K'),
//    createData('54723243652', '54723243652', '15-Jan-2021', '15-Jan-2021', 'USD', '1.45K'),
//]

  
 
       
  
 

const ViewCorrespondencePage = ({ open, setOpen, selectedInvoiceDetails }) => {
    const classes = useStyles();
    const [ maxWidth ] = React.useState('lg');
    const [ fullWidth ] = React.useState(false); 


    const handleClose = () => {
        setOpen(false);
    }

     

     

    return (
        <Dialog onClose={handleClose} open={open} maxWidth={maxWidth} fullWidth={fullWidth} classes={{ paper: classes.dialogPaper }}>
            <MuiDialogTitle className={classes.WindowHeader} >
                <div style={{ display: 'flex', paddingTop: '5px' }}>
                    <div className={classes.Title}>
                        Advanced Search
                    </div>
                    <div className={classes.TopRightMenu} >
                         
                         
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                </div>
            </MuiDialogTitle>
            <MuiDialogContent className={classes.Body}>

                 
            </MuiDialogContent>
            <MuiDialogActions style={{ background: '#2A3E4C', borderRadius: '0px 0px 10px 10px' }}>
                <div style={{ paddingRight: '20px' }}>
                    <Button autofocus onClick={handleClose} className={classes.CancelButton}>Cancel</Button>
                </div>
                 
            </MuiDialogActions>
        </Dialog>
    )
}

export default ViewCorrespondencePage;