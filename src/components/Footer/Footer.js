/*
 * !Wing-Admin-Dashboard v0.1.0 (https://github.com/tayyab-khalid/wing-react-dashboard-1.git)
 * Licensed under MIT (https://github.com/tayyab-khalid/wing-react-dashboard-1/blob/master/LICENSE)
 * Contact (https://workcorp.herokuapp.com/contact.php)
 */

/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            <nav className="footer-nav">
              <a
                href="https://workcorp.herokuapp.com/contact.php"
                target="_blank"
              >
                Contact
              </a>
            </nav>
            <div className="credits ml-auto">
              <div className="copyright">
                {1900 + new Date().getYear()}
                {" | "}
                <a target="_blank" href="https://workcorp.herokuapp.com">
                  Workcorp
                </a>{" "}
                <i className="fa fa-heart heart" /> Good luck with your surf.
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
