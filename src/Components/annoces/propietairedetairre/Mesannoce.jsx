
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
} from "../../../action/Annonce";
import Mid from  '../../compossant/modal'
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
const MesannonceTableComponent = (props) => {
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
      text: "idannonce",
      sort: true,
      filter: textFilter(),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "price",
      text: "price",
      sort: true,
      filter: textFilter(),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "espace",
      text: "espace",
      sort: true,
      filter: textFilter(),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "longitude",
      text: "longitude",
      sort: true,
      filter: textFilter(),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "altitude",
      text: "altitude",
      sort: true,
      filter: textFilter(),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "houseNumber",
      text: "houseNumber",
      sort: true,
      filter: textFilter(),
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "street",
      text: "street",
      sort: true,
      filter: textFilter(),
      headerStyle: () => {
        return { width: "10%"};
      },
    },
    
   

    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "24%", textAlign: "center" };
      },
      /*-btn:details-edit----------------------------------------------------------*/
      formatter: (rowContent, row) => {
        return (
          <div className="flex-bettwen">
            <Mid donner= {row} />
            <Link to={"edit/" + row._id}>
              <button  className="btn btn-warning">
              <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </Link>

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
      {console.log(props.annonce )}
      {props.annonce ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.annonce.filter(annonce => annonce.idcreateur == Cookies.get('_id') )}
          columns={columns}
          defaultSorted={defaultSorted}
          search
          exportCSV
        >
          {(props) => (

            <div>
              <Row>
                <Col>
                  <Link to="/createListing">
                    <button className="btn btn-success"  labelPosition="left">
                   
                      Ajouter une annoces
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
              <h4>prosuit existe pas</h4>
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
})(MesannonceTableComponent);


//défili