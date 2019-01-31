import React, { Component } from "react";
import { Link } from "react-router-dom";

const papers = [
  {
    id: "S000046605",
    title: "Polarization of cell growth in yeast. I. Establishment and maintenance of polarity states. J Cell Sci 113 ( Pt 3):365-75"
  },
  {
    id: "S000073427",
    title: "Molecular cloning of the actin gene from yeast Saccharomyces cerevisiae"
  }
];

class PapersIndex extends Component {
  renderPaperList() {
    let listNodes = papers.map((d) => {
      let url = `papers/${d.id}`;
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
