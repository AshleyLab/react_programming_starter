import React, { Component } from "react";
import PropTypes from "prop-types";

// depends on global $

class PapersShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchPaperData();
  }

  fetchPaperData() {
    let paperId = this.props.params.id;
    var _url = `http://www.yeastgenome.org/webservice/reference/${paperId}/overview`;
    // depends on global $
    $.ajax({
      url: _url,
      dataType: "JSONP",
      success: (_data) => {
        this.setState({ data: { title: _data.title, abstract: _data.abstract.text } });
      },
      error: function (xhr, textStatus, errorThrown) { throw("API error: ", errorThrown); }
    });
  }

  render() {
    let data = this.state.data || {};
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.abstract}</p>
      </div>
    );
  }
}

PapersShow.propTypes = {
  params: PropTypes.object
};

export default PapersShow;
