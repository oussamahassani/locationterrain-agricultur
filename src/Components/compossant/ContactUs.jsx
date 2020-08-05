import React from 'react'
import {MapDisplay} from '../../Components'
import {sendemaill} from '../../action/Email'
import {connect} from 'react-redux'
function ContactUs(props) {
  const obj = {
 name : null,
 prenom: null,
 email : null,
 subject : null,
 message:null,
   }
   
    const sendformcontact = () => {
   props.sendemaill(obj)
      alert(`${obj.name} + ${obj.email}`)
    }
    return (
        <div>
            <section className="counts section-bg" id="contact">
    <h1 style={{textAlign:"center",fontWeight:"bold",color:"#347FBF",marginBottom:"20px"}}>Contactez-nous</h1>
    <div className="container" style={{backgroundColor:"#FFFFFF" ,padding:"50px"}}>

        

        <div className="row">

          <div className="col-md-6">

            <div className="count-box">
                
                <p style={{fontWeight:"bold",fontSize:"16px"}}>Service Client </p>
                <p style={{fontSize:"20px"}}>(+216) 22 000 000</p>

            </div>

          </div>

          <div className="col-md-6">

            <div className="count-box">

              <p  style={{fontWeight:"bold",fontSize:"16px"}}>Service CLient</p>
                  <p style={{fontSize:"20px"}}>(+33) 4 28 38 41 77</p>

            </div>
          
          </div>

          <div className="col-md-6">

            <div className="count-box">

              <p style={{fontSize:"20px"}}>Adresse</p>
                <p style={{fontSize:"20px"}}>rue chath bath tunise 7071</p>

              </div>
          
          </div>

          <div className="col-md-6">

          <div className="count-box">
          <p style={{fontSize:"20px"}}>Notre courrier électronique</p>
          <p style={{fontSize:"20px"}}>contact@mazertetna.com</p>

          </div>
          
          </div>

          <div className="col-lg-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up">

          <div className="form"  >
              <div className="form-row">
                <div className="col-lg-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Votre nom" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required onChange={(e) => (obj.name = e.target.value)}/>
                  <div className="validate"></div>
                </div>
                <div className="col-lg-6 form-group">
                  <input type="text" class="form-control" name="prenom" id="prenom" placeholder="Votre prénom" data-rule="email" data-msg="Please enter a valid email" required onChange={(e) => (obj.prenom = e.target.value)}/>
                  <div class="validate"></div>
                </div>
              </div>

              <div className="form-group">
                <input type="email" className="form-control" name="email" placeholder="Votre adresse E-mail" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" onChange={(e) => (obj.email = e.target.value)}/>
                <div className="validate"></div>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Sujet" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" onChange={(e) => (obj.subject = e.target.value)}/>
                <div class="validate"></div>
              </div>

              

              <div className="form-group">
                <textarea className="form-control" name="message" rows="7" data-rule="required" data-msg="Please write something for us" placeholder="Message"onChange={(e) => (obj.message = e.target.value)} ></textarea>
                <div className="validate"></div>
              </div>
              
              <div className="row">

                <div className="col-md-6"><div className="text-center">(Recaptcha)</div></div>

                <div className="col-md-6"><div className="text-center"><button className="btn btn-primary" onClick={() => sendformcontact()}>Envoyer</button></div></div>

              </div>

            </div>

          </div>
          <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">

              <div style={{width:"100%",border:"0px" ,solid :"3000000",height:"400" }}>

              <MapDisplay lat ="10.6369900" lon="35.8253900" />
              </div>

              <br/>

          </div>

        </div>

      </div>
    </section>
        </div>
    )
}

 const mapstatetoprops = (state) => ({
  
 })
 const mapdispatchtoprops = (disptach) => ({
  sendemaill : (obj) => disptach(sendemaill(obj))
 
 })
 export default connect (mapstatetoprops,mapdispatchtoprops) (ContactUs);
 
