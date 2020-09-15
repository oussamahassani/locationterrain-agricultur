import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner } from "reactstrap";
import ToolkitProvider, { Search, CSVExport } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import {delatepartenair } from '../../action/Expair'
//import Mid from  './modal'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const { ExportCSVButton } = CSVExport;

/*------------*/
const { SearchBar } = Search;

/*---------------------------------*/
const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

/*-Tableau------------------------------------------------------------------------*/
const Tableexpaire = (props) => {
  const handleClick = ( row) => {
    swal({
      title: "Voulez-vous vraiment supprimer ces données?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        props.delatepartenair(row._id);
        swal("Données supprimées avec succès", {
          icon: "success",
        });
      } else {
        swal("Votre donner a eteé sauvez");
      }
    });
  };

  const columns = [
    
    {
      dataField: "Nom",
      text: "Nom",
      sort: true,
     
      filter: textFilter({
        placeholder: 'Nom'}),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "description" ,
      text: "Desciption",
      sort: true,
      filter: textFilter({
        placeholder: 'Desciption'}),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    
    {
      dataField: "Post",
      text: "Post",
      sort: true,
      filter: textFilter({
        placeholder: 'Post'}),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "Nivaux",
      text: "Nivaux",
      sort: true,
      filter: textFilter({
        placeholder: 'Nivaux'}),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    
    
   

    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "15%", textAlign: "center" };
      },
      /*-btn:details-edit----------------------------------------------------------*/
      formatter: (rowContent, row) => {
        return (
          <div className="flex-bettwen">
           {/* <Mid donner= {row} />*/}
         
           

             <button
              className="btn-danger"
              onClick={() => handleClick( row)}
            >
<i class="fa fa-trash" aria-hidden="true"></i>

            </button> 
          </div>
        );
      },
    },
  ];


  return (
    <Container >
      {props.Expair ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.Expair}
          columns={columns}
          defaultSorted={defaultSorted}
          search
          exportCSV
        >
          {(props) => (

            <div>
              <h2>Gestion D'expaire</h2>
              <Row>
                <Col>
                 <a  href="/Addexpaire">
                    <button className="btn btn-success"  labelPosition="left">
                   
                      Ajouter un expaire
                    </button>
          </a> 
                </Col>
                {/* <button><ExportCSVButton { ...props.csvProps }>Enregistrez</ExportCSVButton></button> */}
                <Col>
                <Link >
                    <ExportCSVButton {...props.csvProps}> Exporter</ExportCSVButton>
                  </Link>
                  </Col>
                  

                {/*-search-------------------*/}
                <Col>
                  <div className="float-right">
                    <SearchBar
                      className="styleb"
                      {...props.searchProps}
                      placeholder="Recherche avancée .."
                    />
                  </div>
                </Col>
              </Row>


              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
                filter={filterFactory()}
              />


            </div>
          )}
        </ToolkitProvider>
      ) : (
          /*-search---------------------- */
          <div className="text-center">
            { (
              <h4>Expair existe pas</h4>
            )}
          </div>
        )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    Expair: state.Expair
  };
};

export default connect(mapStateToProps, {
  delatepartenair,
})(Tableexpaire);
