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

  const navigate = useNavigate();

  useEffect(() => {
    switch (value) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/login");
        break;
      case 2:
        navigate("/register");
        break;
      case 3:
        navigate("/cvtemplate");
        break;
        case 4:
          navigate("/hrdcv");
          break;
      case 5:
        navigate("/confirm");
        break;
      case 6:
        navigate("/reset");
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
        <Tab label="CV template" />
        <Tab label="Hrd CV" />
      </Tabs>
    </Paper>
  );
}
