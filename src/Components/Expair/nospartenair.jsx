import React, { Component } from 'react'
import css from './partenair.css' 
import {Getpartenair} from '../../action/Expair'
import {connect} from 'react-redux'
import  Pagination  from "../compossant/pagination";
 class Nospartenair extends Component {
    state = {
        totalRecords: "",
        totalPages: "",
        pageLimit: 6,
        currentPage: "",
        startIndex: "",
        endIndex: "",
        
    }
    componentDidMount(){
        this.props.Getpartenair()
    }
    onChangePage = data => {
        this.setState({
          pageLimit: data.pageLimit,
          totalPages: data.totalPages,
          currentPage: data.page,
          startIndex: data.startIndex,
          endIndex: data.endIndex
        });
      };
      
    render() {
        let  {
            totalPages,
            currentPage,
            pageLimit,
            startIndex,
            endIndex
        } = this.state;
      
        let rowsPerPage = [];
        rowsPerPage = this.props.Expair.slice(startIndex,endIndex + 1);
        return (
            <div>
            
<section id="team" class="pb-5">
    <div class="container">
    <h3 className="title-container">Nos Expaire</h3>
    <div class="row">
    { rowsPerPage.map(el => <>

        <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src={`/image/${el.Photo}`} alt="card image"/></p>
                                    <h4 class="card-title">{el.Nom}</h4>
                                    <p class="card-text">{el.Post}</p>
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">{el.Nivaux}</h4>
                                    <p class="card-text" style={{width:"250px"}}>{el.description}</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href={el.Linkedden}>
                                            <i class="fa fa-linkedin-square"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href={el.resauxsociaux}>
                                            <i class="fa fa-file-text-o"></i>
                                            </a>
                                        </li>
                                    
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
    </>)

    } </div>
     <Pagination
            totalRecords={ this.props.Expair.length}
            pageLimit={pageLimit || 6}
            initialPage={1}
            pagesToShow={totalPages}
            onChangePage={this.onChangePage}
          />
    </div>
    </section>
    </div>
            
        )
    }
}
const mapstatetoprops = (state) => ({
    Expair: state.Expair
   })
   const mapdispatchtoprops = (disptach) => ({
    Getpartenair : () => disptach(Getpartenair()) ,

   
    
   
   })
export default connect (mapstatetoprops,mapdispatchtoprops)(Nospartenair)