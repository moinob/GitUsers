
import React,{ useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {actions} from './actions';
import {getUsersError, getUsersSuccess, getUsersPending} from './reducers';


import CircularProgress from '@material-ui/core/CircularProgress';

import { List, ListItem, makeStyles, Divider, Box, useTheme, Theme, createStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Pagination from "@material-ui/lab/Pagination";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  item: {
    padding: theme.spacing(1.2)
  },
  avatar: { marginRight: theme.spacing(5) },
  paginator: {
    justifyContent: "center",
    padding: "10px",
  }
}));


type Props = {
users: any,
error: any,
pending: any,
loadUsers: any,
}

const UsersList = (props: Props) => {
    const {users, pending} = props;
    const classes = useStyles();
const itemsPerPage = 10;
const [page, setPage] = React.useState(1);

    useEffect(() => {
      if (users.length === 0) props.loadUsers();
    },[]);

    
    if (pending) return <CircularProgress />
    const handleChange = (event: any, value: any) => {
      setPage(value);
    };
    return (
      <div>
        <Box component="span">
        <Pagination
          count={Math.ceil(users.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        />
      </Box>
      <Divider />
      <List>
        {users
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((user: any) => {
            
            return (
              <ListItem
                key={user.id}
              >
                <Link to={`/user/${user.login}`}><ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${user + 1}`}
                    src={user.avatar_url}
                    className={classes.avatar}
                  />
                </ListItemAvatar></Link>
                
                <ListItemText
                  
                  primary={user.login}
                  className={classes.item}
                />
              </ListItem>
            );
          })}
      </List>
      
      
    </div>
    )

}
const mapStateToProps = (state : any) => ({
  error: getUsersError(state),
  users: getUsersSuccess(state),
  pending: getUsersPending(state),
  currentUser: getUsersSuccess(state),
})


const mapDispatchToProps = (dispatch: any) => {
  return {
    loadUsers: () => dispatch(actions.getUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);