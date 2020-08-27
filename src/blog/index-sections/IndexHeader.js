
import React from "react";


// core components

function IndexHeader() {
  return (
    <div className="haderblog">
     <div className="container">
<h2>Fiches jardinage du potager </h2>
	
	<div className="item tm1">
		<img src={require("../../assest/img/kaki.jpg")}/>
	<p>kaki</p>
</div>


	<div className="item tm2">
		<img src={require("../../assest/img/page-1-image-2-7-276x410.jpg")}/>
	<p>Capucine de flamme </p>
	</div>

		<div className="item tm3">
			<img src={require("../../assest/img/Campanula-carpatica-campanule-carpates.jpg")}/>
	<p className="ar">Campanula carpatica</p>
	</div>

	<div className="item tm4">
		<img src={require("../../assest/img/cerisier-arbre.jpg")}/>
	<p>Cerisier </p>
	</div>
	<br/>

		<div className="item tm5">
		<img src={require("../../assest/img/Achillea-umbellata.jpg")}/>
	<p>Achillea umbellata</p>
</div>


	<div className="item tm6">
		<img src={require("../../assest/img/laurier-rose.jpg")}/>
	<p>Laurier rose</p>
	</div>

		<div className="item tm7">
			<img src={require("../../assest/img/tomate-roma.jpg")}/>
	<p>Tomate</p>
	</div>
	<div className="item tm8">
		<img src={require("../../assest/img/vigne.jpg")}/>
	<p>Moto Safari</p>
</div>

<br/>

	

	</div>

    </div>
  );
}

export default IndexHeader;
