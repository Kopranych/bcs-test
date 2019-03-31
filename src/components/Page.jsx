/* eslint-disable react/prop-types */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {fetchAllInstruments, fetchInstrument} from '../action';
import ReactAutocomplete from 'react-autocomplete';

const mapDispatchToProps = {
  fetchAllInstruments,
  fetchInstrument,
};

const mapStateToProps = state => {
  return {
    instruments: state.instruments.instruments,
  }
};

class Page extends PureComponent {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      selected: []
    };
  }

  componentDidMount() {
    this.props.fetchAllInstruments();
  }

  onChange = event => {
    const target = event.target;
    const newValue = target.value;
    this.setState({
      value: newValue,
      suggestions: this.getSuggestions(newValue)
    });
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const {instruments} = this.props;
    return inputLength === 0 ? [] : instruments.filter(instrument =>
        instrument.symbol.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  onSelect = value => {
    const inputValue = value.trim().toLowerCase();
    const oldSelected = this.state.selected;
    const {instruments} = this.props;
    const instrument = instruments.filter(
        instrument => instrument.symbol.toLowerCase() === inputValue);
    console.log('INSTRUMENT ', instrument);
    const newInstrument = {
      symbol: instrument[0].symbol,
      name: instrument[0].name,
      date: instrument[0].date
    };
    oldSelected.push(newInstrument);
    this.setState({
          value: value,
          selected: oldSelected
        }
    )
  };

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
                          htmlFor="inputTicker"
                          id="inputTicker"
                      >
                        Add instrument
                      </label>
                    </div>
                    <ReactAutocomplete
                        items={this.state.suggestions}
                        getItemValue={item => item.symbol}
                        renderItem={(item, highlighted) =>
                            <div
                                key={item.symbol}
                                style={{
                                  backgroundColor: highlighted ? '#eee'
                                      : 'transparent'
                                }}
                            >
                              {item.symbol}
                            </div>
                        }
                        value={this.state.value}
                        onChange={this.onChange}
                        onSelect={this.onSelect}
                    />
                  </form>
                  <div>
                    {this.state.selected.map(instrument =>
                        <div>
                          <span>{`ticker: ${instrument.symbol}, name: ${instrument.name}, date: ${instrument.date}`}</span>
                        </div>)}
                  </div>
                </div>
                <div className="col-md-9"/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
