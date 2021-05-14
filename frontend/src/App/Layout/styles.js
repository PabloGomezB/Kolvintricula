import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#231F20",
    },
    secondary: {
      main: "#01A299",
    },
  },
});

theme = responsiveFontSizes(theme);

const useStyle = makeStyles(() => ({
  root: {
    width: "auto",
    margin: theme.spacing(2),

    // [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
    //   width: 500,
    //   marginLeft: "auto",
    //   marginRight: "auto",
    // },
    // backgroundColor: theme.palette.background.default,
    // color: theme.palette.text.primary,
  },
  paper: {
    margin: theme.spacing(3),

    // textAlign: "center",
    padding: theme.spacing(3),
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: theme.breakpoints.values.md,
      // padding: theme.spacing(3),
    },
  },
  footerAppbar: {
    flexDirection: "row",
  },
  footerToolbar: {
    [theme.breakpoints.up("sm")]: {
      alignItems: "flex-start",
    },
  },

  // main: {
  //   flexGrow: 1
  // },
  // title: {
  //   flexGrow: 1
  // },
  // appBar: {
  //   backgroundColor: '#333'
  // },
  // toolBar: {
  //   height: '350px',
  //   width: '1500px'
  // },
  // typography: {
  //   width: '250px',
  //   height: '200px',
  //   marginTop: '-100px',
  //   marginRight: '50px'
  // },
  // div: {
  //   display: 'flex'
  // },
  // p: {
  //   borderLeft: '5px solid white',
  //   marginRight: '10px'
  // },
  // a: {
  //   textDecoration: 'none',
  //   color: 'white'
  // },
  // pp: {
  //   color: "#fff",
  //   fontSize: "12px",
  //   background: "#006dcc",
  //   textShadow: "0 1px 1px rgb(255 255 255 / 75%)",
  //   borderRadius: "3px",
  //   padding: "5px",
  //   textDecoration: "none"
  // },
  formOptionInput: {
    // display: 'flex',
    width: "20%",
  },
}));

export { theme, useStyle };
