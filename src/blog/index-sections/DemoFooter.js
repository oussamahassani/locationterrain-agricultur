
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
   <div className="footerblog">
   	<div className="row">
    <div className="col-md-12">
		<h5 className="text-center">SOCIAL ICONS WITH NICE EFFECTS and  unusual position</h5>
                            <div className="col-md-6 .col-md-offset-3">
                                 <ul className="social">
                                  <li className="facebook"><a href="http://facebook.com/alterowo"><i className="fa fa-facebook fa-3x"></i></a></li>
                                  <li className="twitter"><a href="http://twitter.com/Kyokushinowa"><i className="fa fa-twitter fa-3x"></i></a></li>
                                  <li className="pinterest"><a href="http://www.pinterest.com/beatagibalska/"><i className="fa fa-pinterest-p fa-3x"></i></a></li>
                                  <li className="behance"><a href="https://www.behance.net/Kurnikowa"><i className="fa fa-behance fa-3x"></i></a></li>
                                </ul>
                          </div>
    </div>
    </div>
   </div>
  );
}

export default DemoFooter;
