import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  container : {
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress color="secondary" />
    </div>
  );
}