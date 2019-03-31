/* eslint-disable react/prop-types,react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllInstruments } from '../action';

const mapDispatchToProps = {
  fetchInstruments: fetchAllInstruments,
};

class SearchInstrument extends Component {
  componentDidMount() {
    this.props.fetchInstruments();
  }

  render() {
    return (
      <div>
          instrument
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(SearchInstrument);
