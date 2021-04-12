import { makeStyles } from "@material-ui/core";
import { keyframes } from "styled-components";

const styles = makeStyles((theme) => ({
  root: {
    background: "rgb(234,231,220)",
    padding: "30px",
  },

  Part1: {
    display: "inline-block",
    alignItems: "center",
    width: "50%",
    padding: "10px",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  image1: {
    height: "70%",
    width: "70%",
    "@media (max-width : 700px)": {
      paddingTop: "60px",
    },
  },

  Part2: {
    textAlign: "center",
    display: "inline-block",
    width: "50%",
    padding: "10px",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  heading: {
    textAlign: "center",
  },

  subheading: {
    paddingTop: "20px",
  },

  button: {
    marginTop: "40px",
    backgroundColor: "#e85a4f",
  },
}));

export default styles;