import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner } from "reactstrap";
import ToolkitProvider, { Search, CSVExport } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import ModalUpdateProduit from './ModalUpdateProduit'
import {deleteproduitt ,updateproduitt} from '../../action/Produit'
import Mid from  './modal'
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
const TableProduit = (props) => {
  const handleClick = ( row) => {
    swal({
      title: "Voulez-vous vraiment supprimer ces données?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        props.deleteproduitt(row._id);
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
      dataField: "idproduit",
      text: "ID",
      sort: true,
      filter: textFilter({
        placeholder: 'N°'}),
      headerStyle: () => {
        return { width: "7%" };
      },
    },
    {
      dataField: "Titel",
      text: "Titre Produit",
      sort: true,
     
      filter: textFilter({
        placeholder: 'Titel'}),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "Prix" ,
      text: "Prix en DT",
      sort: true,
      filter: textFilter({
        placeholder: 'Prix'}),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    
    {
      dataField: "Discount",
      text: "Remise",
      sort: true,
      filter: textFilter({
        placeholder: 'Remise'}),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "Description",
      text: "Description",
      sort: true,
      filter: textFilter({
        placeholder: 'Description'}),
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
          <ModalUpdateProduit Produit={row}/>
            <Mid donner= {row} />
         
           

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
      {props.Produit ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.Produit}
          columns={columns}
          defaultSorted={defaultSorted}
          search
          exportCSV
        >
          {(props) => (

            <div>
              <h2>Gestion Produis</h2>
              <Row>
                <Col>
                  <Link to="/ajouterproduit">
                    <button className="btn btn-success"  labelPosition="left">
                   
                      Ajouter nouvaux Produit
                    </button>
                  </Link>
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
              <h4>produit existe pas</h4>
            )}
          </div>
        )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    Produit : state.Produit
  };
};

export default connect(mapStateToProps, {
  deleteproduitt,
    updateproduitt,
})(TableProduit);
