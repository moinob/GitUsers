import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {actions} from './actions';
import {getUserError, getUserSuccess, getUserPending} from './reducers';


import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HyperLink from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign: "left",
  },
  avatar: { marginRight: theme.spacing(5) },
}));
type Props = {
  match: any,
  error: any,
  pending: any,
  loadUser: any,
  user: any,
  }
const User = (props: Props) => {
  const classes = useStyles();
  const { match, user, error, pending} = props;
  const {
    params: { login },
  } = match;

  useEffect(() => {
    if (!user || user.login !== login) props.loadUser(login);
  },[login]);

  
  if (!user || pending) return <CircularProgress />
  return (
    <>
   <Link className={"App-link"} to={`/`}>Back to the List</Link>
    
    <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar
                  alt={`${login} Avatar`}
                  src={user.avatar_url}
                  className={classes.avatar}
                />
      }
      title={<Typography gutterBottom variant="h5" component="h2">
      {user.login}
    </Typography>}
      subheader={user.name}
    />
    {user.bio && (<CardContent>
    <Typography variant="h6" component="h4">
        Bio:
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {user.bio}
      </Typography>
    </CardContent>)}
    
    
      <CardContent>
      <Typography variant="h6" component="h4">
      Git address: 
      </Typography>
      
      <Typography variant="body2" color="textSecondary" component="p">
      <HyperLink href={user.html_url} target="_blank" rel="noopener">{user.html_url}</HyperLink>
      </Typography>
    
      </CardContent>
  </Card></>
    
  );
}
const mapStateToProps = (state : any) => ({
  error: getUserError(state),
  pending: getUserPending(state),
  user: getUserSuccess(state),
})


const mapDispatchToProps = (dispatch: any) => {
  return {
    loadUser: (login: string) => dispatch(actions.getUser(login)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);