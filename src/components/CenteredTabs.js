import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigage = useNavigate();

  useEffect(() => {
    switch (value) {
      case 0:
        navigage("/");
        break;
      case 1:
        navigage("/login");
        break;
      case 2:
        navigage("/register");
        break;
    }
  }, [value]);
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" />
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
      </Tabs>
    </Paper>
  );
}
