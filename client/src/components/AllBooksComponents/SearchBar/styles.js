import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  topContainer: {
    position: "relative",
    width: "100%",
    textAlign: "center",
    color: "white",
    height: "200px",
    marginBottom: "20px",
    backgroundImage:
      "url(https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    "@media (max-width : 700px)": {
      height: "225px",
      paddingTop: "40px",
    },
  },

  head: {
    color: "white",
    fontSize: "50px",
    paddingLeft: "8%",
    position: "absolute",
    bottom: "8px",
    left: "16px",
    "@media (max-width : 700px)": {
      fontSize: "30px",
      paddingLeft: "4%",
    },
  },

  middleContainer: {
    margin: "0px 70px",
    "@media (max-width : 700px)": {
      margin: "0px 10px",
    },
  },

  searchboxes: {
    padding: "10px 25px",
  },

  root: {
    flexGrow: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    padding: theme.spacing(2),
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#DF4C73",
    marginBottom: "25px",
    "@media (max-width : 700px)": {
      marginBottom: "10px",
    },
  },
  advance: {
    backgroundColor: "#DF4C73",
    float: "right",
    marginBottom: "10px",
    marginRight: "60px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    justifyContent: "center",
    textAlign: "center",
  },
  accordian: {
    width: "400px",
    position: "relative",
    display: "flex",
    AlignItems: "center",
    justifyContent: "center",
  },
  //  gridContainer: {
  //   display:"flex",
  //   alignItems:"center",
  //   justifyContent:"center",
  //  },
  gridItem: {
    border: "1px solid blue",
    borderRadius: "10px",
  },
  formControl: {
    backgroundColor: "white",
    border: "1 px solid grey",
    borderRadius: "8px",
  },
  //  adv : {
  //    cursor : "pointer",
  //    textAlign :"center",
  //    width :"200px",
  //    height :"40px",
  //    position :"relative",
  //    left :"800px",
  //    fontSize : "20px"
  //  },
  paper: {
    textAlign: "center",
  },
}));

export default styles;