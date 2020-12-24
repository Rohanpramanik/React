import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import SimpleDialog from './Dailog';
import { selectedUser } from '../../store/actions';

const useStyles = makeStyles({
    root: {
        width: "70%",
        marginLeft: "15%",
        marginTop: 50
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    icon: {
        width: 40,
        borderRadius: 50
    }
});

export default function SimpleCard() {
    const classes = useStyles();
    const users = useSelector(({ HomeScreen }) => HomeScreen.users);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const handleClose = () => {
        setOpen(false)
    }
    if (!users) {
        return null;
    }
    const selectUser = data => {
        setSelected(data)
        setOpen(true)
    }
    return (
        <div className={classes.root}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>admin</TableCell>
                            <TableCell align="right">profile page</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map(row => (
                                <TableRow key={row.id} onClick={() => selectUser(row.login)}>
                                    <TableCell component="th" scope="row">
                                        <img className={classes.icon} src={row.avatar_url} />
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.login}
                                    </TableCell>
                                    <TableCell >{row.site_admin ? "yes" : "no"}</TableCell>
                                    <TableCell align="right">
                                        <Link>{row.html_url}</Link></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <SimpleDialog selectedValue={selected} open={open} onClose={handleClose} />
        </div>
    );
}