/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchInstrument, fetchAllInstruments }from '../action';

const mapDispatchToProps = {
  fetchAllInstruments,
  fetchInstrument,
};

class Page extends PureComponent {
  componentDidMount() {
    this.props.fetchAllInstruments();
  }

  render() {
    return (
      <div>
        <div className="container-view">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <form>
                  <div className="form-group">
                    <label
                      htmlFor="exampleFormControlInput1"
                      id="exampleFormControlInput1"
                    >
                    Найти инструменты
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      onChange={this.handleChange }
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-9" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const { fetchInstrument } = this.props;
    fetchInstrument(value);
  };
}

export default connect(null, mapDispatchToProps)(Page);
