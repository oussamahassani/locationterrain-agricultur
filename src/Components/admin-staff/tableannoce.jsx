
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner } from "reactstrap";
import ToolkitProvider, { Search, CSVExport } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import Cookies from 'js-cookie'
import {
    delateannocee,updateannoces
} from "../../action/Annonce";
import Mid from  './modalannonce'
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
const TableComponent = (props) => {
  const handleClick = ( row) => {
    swal({
      title: "Voulez-vous vraiment supprimer ces données?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        props.delateannocee(row._id);
        swal("Données du produit supprimées avec succès", {
          icon: "success",
        });
      } else {
        swal("Votre donner a eteé sauvez");
      }
    });
  };

  const columns = [
    {
      dataField: "idannonce",
      text: "ID",
      sort: true,
      filter: textFilter({
        placeholder: 'N°'}),
      headerStyle: () => {
        return { width: "7%" };
      },
    },
    {
      dataField: "price",
      text: "Prix en DT",
      sort: true,
     
      filter: textFilter({
        placeholder: 'Prix'}),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "espace" ,
      text: "Espace en m²",
      sort: true,
      filter: textFilter({
        placeholder: 'Espace'}),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    
    {
      dataField: "typebien",
      text: "Type bien",
      sort: true,
      filter: textFilter({
        placeholder: 'Bien'}),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "typelocation",
      text: "Type location",
      sort: true,
      filter: textFilter({
        placeholder: 'Type'}),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "street",
      text: "Rue",
      sort: true,
      filter: textFilter({
        placeholder: 'Rue'}),
      headerStyle: () => {
        return { width: "10%"};
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
            <Mid donner= {row} />
          {/*  <Link to={"UpdateAnnonce/" + row._id}>
              <button  className="btn btn-warning">
              <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </Link> */}

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
      {props.annonce ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.annonce}
          columns={columns}
          defaultSorted={defaultSorted}
          search
          exportCSV
        >
          {(props) => (

            <div>
              <h4>Gestion Annonce</h4>
              <Row>
              {Cookies.get("typeuser") == "proprietaire" ?  <Col>
                  <Link to="/createListing">
                    <button className="btn btn-success"  labelPosition="left">
                   
                      Ajouter une annonces
                    </button>
                  </Link>
                </Col>
                : null}
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
              <h4>produit existe pas</h4>
            )}
          </div>
        )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    annonce : state.annonce
  };
};

export default connect(mapStateToProps, {
    delateannocee,
    updateannoces,
})(TableComponent);


//défili