import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#231F20"
    },
    secondary: {
      main: "#00AEEF"
    },
  },
});
theme = responsiveFontSizes(theme);
const useStyle = makeStyles(() => ({
  root: {
    width: "auto",
    margin: theme.spacing(2)
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
      width: theme.breakpoints.values.md
    },
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  footerContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  btn: { margin: theme.spacing(2) },
  alignRight: {
    textAlign: "right"
  },
  dblock: {
    display: "block"
  },
  dflex: {
    display: "flex"
  },
  flexend: {
    justifyContent: "flex-end"
  },
  paddingTop: {
    paddingTop: theme.spacing(1),
  },
  // footerDiv: {
  //   margin: theme.spacing(2),
  // },
  // footerToolbar: {
  //   [theme.breakpoints.up("sm")]: {
  //     alignItems: "flex-start",
  //   },
  // },

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
  a: {
    textDecoration: 'none',
    color: 'white'
  },
  pp: {
    color: "#fff",
    fontSize: "12px",
    background: "#006dcc",
    textShadow: "0 1px 1px rgb(255 255 255 / 75%)",
    borderRadius: "3px",
    padding: "5px",
    textDecoration: "none"
  },
  // display: 'flex',
  dialogTitleSuccess: {
    border: "3px solid green",
    borderBottom: "0"
  },
  dialogContentSuccess: {
    border: "3px solid green",
    borderTop: "0"
  },
  dialogTitleError: {
    border: "3px solid red",
    borderBottom: "0"
  },
  dialogContentError: {
    border: "3px solid red",
    borderTop: "0"
  },
  dialogButtonSuccess: {
    float: "right",
    marginTop: "-30px",
    marginRight: "-20px",
    padding: "-20px"
  },
  mainContainer: {
    flexGrow: 1,
    backgroundImage: 'linear-gradient(black, black), url("https://myfin.by/source/thumb_440_880/1/1458643080site.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '-35px',
    height: '500px',
    borderRadius: '10px',
    backgroundBlendMode: 'saturation'
  },
  title: {
    textAlign: 'center',
    fontSize: '50px'
  },
  loadData: {
    padding: '10px',
    borderRadius: '10px',
    fontWeight: 'bolder'
  },
  textFieldNIF: {
    marginBottom: '20px'
  },
  buttonDisabled: {
    padding: '10px',
    textAlign: 'center',
    width: '200px',
    borderRadius: '10px',
    marginBottom: '50px',
    border: '5px solid #231F20',
    backgroundColor: '#dddddd'
  },
  buttonEnabled: {
    padding: '10px',
    textAlign: 'center',
    width: '200px',
    borderRadius: '10px',
    marginBottom: '50px',
    border: '5px solid #231F20',
    color: 'white',
    fontWeight: 'bolder',
    backgroundColor: '#231F20'
  },
  errorPhoto: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bolder'
  },
  photoPosition: {
    float: "right"
  },
  studentData: {
    paddingTop: '120px'
  },
  academicData: {
    marginBottom: '1.5%'
  },
  addCustodian: {
    marginTop: '5%',
    border: '5px solid #231F20',
    borderRadius: '10px',
    backgroundColor: 'white',
  }
}));

export { theme, useStyle };
