import React from "react";
import "../styles/footer.css"
const date = new Date()
const year = date.getFullYear()

function Footer() {
  return (
    <footer>
      <p className="footertxt">Copyright &copy; {year} </p>
    </footer>
  );
}


export default Footer