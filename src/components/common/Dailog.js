import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { DialogContent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/actions';
import dateFormat from 'dateformat';
const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    image: {
        width: 200,
        marginLeft: "25%"
    }
});

export default function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
    const dispatch = useDispatch();
    const user = useSelector(({ HomeScreen }) => HomeScreen.user);
    useEffect(() => {
        dispatch(getUser(selectedValue))
    }, [])
    if (!user)
        return null;
    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} fullWidth aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">{user.name}</DialogTitle>
            <DialogContent>
                <img className={classes.image} src={user.avatar_url} />
                <List>
                    <ListItem>
                        <ListItemText primary="Username" secondary={user.login} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Company" secondary={user.company} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Location" secondary={user.location} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Repositories" secondary={user.public_repos} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Followers" secondary={user.followers} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Following" secondary={user.following} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Repo Url" secondary={user.repos_url} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Blog" secondary={user.blog} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Created At" secondary={dateFormat(user.created_at, "fullDate")} />
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>
    );
}
