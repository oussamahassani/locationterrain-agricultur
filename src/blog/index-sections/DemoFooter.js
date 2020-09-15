
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <div className="footerblog">
      <div className="row">
        <div className="col-md-12">
          <h5 className="text-center">Vous pouvez suivir nous sur les reseuax sociaux</h5>
          <div className="col-md-6 .col-md-offset-3">
            <ul className="social">
              <li className="facebook"><a href="https://www.facebook.com/potagerfacile/"><i className="fa fa-facebook fa-3x"></i></a></li>
              <li className="twitter"><a href="https://twitter.com/mjardinpotager?lang=en"><i className="fa fa-twitter fa-3x"></i></a></li>
              <li className="pinterest"><a href="http://www.pinterest.com/beatagibalska/"><i className="fa fa-pinterest-p fa-3x"></i></a></li>
              <li className="behance"><a href="https://sites.google.com/site/aupotagerdupaysan/"><i class="fa fa-google fa-3x"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoFooter;
