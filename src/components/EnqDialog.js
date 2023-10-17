import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import { FiPhoneCall, FiChevronRight } from "react-icons/fi";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { FiCheckCircle } from "react-icons/fi";
import stylesMy from '../../Styles/home.module.css'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs({ Type }) {
    const [open, setOpen] = useState(Type);
    const [FormBox, setFormBox] = useState(true);
    const [Loading, setLoading] = useState(false);
    const [MobileNumber, setMobileNumber] = useState('');
    const [FullName, setFullName] = useState('');
    const [assignedTo, setAssignedTo] = useState('none');
    const [Email, setEmail] = useState('');
  
    const [Qualification, setQualification] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeName = () => {
        const N = document.querySelector('#FullName').value
        setFullName(N)

    }
    const handleChangeEmail = () => {
        const Em = document.querySelector('#Email').value
        setEmail(Em)

    }
    const handleChangeMob = () => {
        const Mob = document.querySelector('#Mobile').value
        setMobileNumber(Mob)

    }
   
   

    const handleChangeQualification = (event) => {
        setQualification(event.target.value);
        
    };

    const FromSubmitbtn = async () => {
        if (FullName !== '' && MobileNumber !== '' && Qualification !== '') {
            
            SendEnq()
            

        } else {
            alert('Please enter all required fields')
        }


    }

    const SendEnq = async () => {
        if (MobileNumber.length == 10) {
            setLoading(true)
            const sendUM = { FullName: FullName, Email: Email, Mobile: MobileNumber, Qualification: Qualification,assignedTo: assignedTo }
            const data = await fetch("/api/SendEnq", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    setLoading(false)
                    if (parsed.status == true) {
                        setFormBox(false)  
                    }
                    
                })
            
        } else {
            alert('Invalid Mobile Number')
        }


    }
    return (
        <div>
            {!Type &&
                <div className={stylesMy.FotterBtnBtn} style={{ backgroundColor: '#0e2b48' }} onClick={handleClickOpen}>
                    <FiPhoneCall /> <span>Get Callback</span>
                </div>
            }

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >

                {FormBox &&

                    <div className={stylesMy.DialogBox}>
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                            Get a Free Callback
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                        <DialogContent dividers>
                            <div className={stylesMy.mainbox}>
                                <div className={stylesMy.inputBox}>
                                    <lable>Full Name</lable>
                                    <input type="text" placeholder='Name' id='FullName' onChange={handleChangeName} value={FullName} />
                                </div>
                                <div className={stylesMy.inputBox}>
                                    <lable>Email (optional)</lable>
                                    <input type="text" placeholder='Email' id='Email' onChange={handleChangeEmail} value={Email} />
                                </div>
                                <div className={stylesMy.inputBox}>
                                    <lable>Mobile Number</lable>
                                    <input type="number" placeholder='10 digit'  id='Mobile' onChange={handleChangeMob} value={MobileNumber} />
                                </div>
                                
                                <div className={stylesMy.inputBox}>
                                    <lable>Current Qualification Status</lable>
                                    <select value={Qualification} onChange={handleChangeQualification}>
                                        <option value="Graduate">Select</option>
                                        <option value="Graduate">Graduate</option>
                                        <option value="Post Graduate">Post Graduate</option>
                                        <option value="Pursuing graduate">Pursuing graduate</option>
                                    </select>
                                </div>
                            </div>

                        </DialogContent>
                        <DialogActions>
                            <div className={stylesMy.CenterDilog}>
                                <div className={stylesMy.FotterBtnBtn} onClick={FromSubmitbtn} style={{ backgroundColor: '#0e2b48' }}>
                                    <FiChevronRight /> <span>Submit Form</span>
                                </div>
                            </div>
                        </DialogActions>
                    </div>
                }
                {Loading && 
                    <div className={stylesMy.Loadingbox}>
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    </div>
                }
                {!FormBox &&

                    <div className={stylesMy.FormDonebox}>
                        <div className={stylesMy.FormDoneboxIcon}>
                            <span><FiCheckCircle /></span>
                        </div>
                        <div className={stylesMy.FormDoneboxText}>
                            <span>Form Successfully Submitted our Team will be get back to you asap.</span>
                        </div>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                }


            </BootstrapDialog>
        </div>
    );
}
