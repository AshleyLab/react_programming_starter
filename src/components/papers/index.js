import React, { Component } from 'react';
import { Link } from 'react-router';

const papers = [
  {
    id: '10639324',
    title: 'Polarization of cell growth in yeast. I. Establishment and maintenance of polarity states'
  },
  {
    id: '29931311',
    title: 'Patterns of Conservation and Diversification in the Fungal Polarization Network'
  },
  {
    id: '11850928',
    title: 'Zirconium granuloma following treatment of rhus dermatitis'
  },
  {
    id: '11482001',
    title: 'Adverse and beneficial effects of plant extracts on skin and skin disorders'
  }
];

class PapersIndex extends Component {
  renderPaperList () {
    let listNodes = papers.map( (d) => {
      let url = `/papers/${d.id}`;
      return (
        <div key={`paperList${d.id}`}>
          <Link to={url}>{d.title}</Link>
          <hr />
        </div>
      );
    });
    return (
      <div>
        {listNodes}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Papers</h1>
        {this.renderPaperList()}
      </div>
    );
  }
}

export default PapersIndex;
