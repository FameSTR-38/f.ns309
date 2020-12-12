import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="footer">
      <MDBContainer fluid className="footer-container">
        <MDBRow>
          <MDBCol md="6">
            <div>
              <a href="https://www.facebook.com/">
                <GrFacebook className="nav-icon" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://www.instagram.com/">
                <GrInstagram className="nav-icon" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://twitter.com/">
                <GrTwitter className="nav-icon" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://www.youtube.com/">
                <GrYoutube className="nav-icon" />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="http://localhost:3000/"> baljka</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
