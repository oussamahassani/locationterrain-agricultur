import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getcarteFromApi } from '../../actions/Plataction';

class Mycard extends Component {
  
    render(){
return(
<>
<h1> </h1>
</>
)
    }
}
const mapStateToProps = (state) => ({
  card: state.card,
});

const mapDispatchToProps = (dispatch) => ({
  getcarteFromApi: () => dispatch(getcarteFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mycard);
