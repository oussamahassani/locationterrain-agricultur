import React ,{Component}  from 'react'
let contenu = ""
export default class Recherche extends Component {
 
  render(){
    return (
        <div>
            <div>
    <br/>
<div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                            <div class="card card-sm">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                 
                                    </div>
                                
                                    <div class="col">
                                 

                                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Nom annonce  Adreesse" onChange = {(e) => contenu= e.target.value} />
                                    </div>
                                
                                    <div class="col-auto">
                                        <button class="btn btn-lg btn-success" onClick={() => this.props.rechercheannonce(contenu)}>Rechercher    <i class="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                               
                                </div>
                         </div>
                        </div>
                 
    </div> 

</div>
</div>
   

    )
}

}