import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  }));

export function LoadingLinePrimary() {
    const classes = useStyles();
  return (
    <div className={classes.root} style={{ marginTop: "10px" }}>
          <LinearProgress color="primary" />
        </div>
  )
}

export function LoadingLineSecondary() {
    const classes = useStyles();
    return (
      <div className={classes.root} style={{ marginTop: "10px" }}>
            <LinearProgress color="secondary" />
          </div>
    )
  }
