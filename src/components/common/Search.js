import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import React, { useState, useEffect } from 'react'
import { getUser, searchUser } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },



    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    result: {
        position: 'absolute',
        width: 500,
        maxHeight: 600,
        minHeight: 10,
        background: '#ddd'
    },
    icon:
    {
        width: 25,
        borderRadius: 50,
        margin: 5
    }

}))



function Search() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [Username, setUsername] = useState("")
    const data = useSelector(({ HomeScreen }) => HomeScreen.search)
    useEffect(() => {
        if (Username && Username !== "")
            dispatch(searchUser(Username))

    }, [Username])

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Username…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={ev => setUsername(ev.target.value)}
            />
            {(Username && Username !== "") && (<div className={classes.result}>
                <List>
                    <ListItem>
                        <ListItemAvatar > <img src={data.avatar_url} className={classes.icon} />
                        </ListItemAvatar>
                        <ListItemText primary={data.login}></ListItemText>
                    </ListItem>
                </List>
            </div>)
            }
        </div >
    )
}


export default Search
