import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "theme.palette.background.paper",
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
}));

const Header = ({
  totalJob,
  totalAccept,
  totalInterview,
  totalReject,
  totalWait,
}) => {
  const classes = useStyles();
  return (
    <header>
      <AppBar style={{ backgroundColor: "#F5756B" }} position="relative">
        <Toolbar>
          <TaskIcon className={classes.icon} />
          <Typography variant="h6">Job Application Tracker</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Job Application Tracker
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              You currently have {totalJob} applications.
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Accepted: {totalAccept} | Interviewing: {totalInterview} |
              Rejected: {totalReject} | Waiting: {totalWait}
            </Typography>
          </Container>
        </div>
      </main>
    </header>
  );
};

export default Header;
