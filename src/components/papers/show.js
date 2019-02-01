import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
    const _url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${paperId}`;
    // depends on global $
    axios.get(_url)
      .then(response => {
        const result = response.data.result;
        this.setState({
          data: {
            title: result[paperId]['title'],
            journalname: result[paperId]['fulljournalname'],
            authors: result[paperId]['authors']
          }
        });
      })
      .catch(err => {
        throw('API error: ', err);
      });
  }

  renderAuthors(authorList) {
    let authors = [];
    if (authorList.length) {
      authorList.forEach(author => {
        authors.push(author.name);
      });
      return <span>{authors.join(', ')}</span>;
    }
  }

  render() {
    let data = this.state.data || {title: null, journalname: null, authors: []};
    return (
      <div>
        <h1>{data.title}</h1>
        <h4>Journal: {data.journalname}</h4>
        <p>Authors: {this.renderAuthors(data.authors)}</p>
      </div>
    );
  }
}

PapersShow.propTypes = {
  params: PropTypes.object
};

export default PapersShow;
