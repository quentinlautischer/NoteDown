import React from 'react';
import TocItem from './tocItem';

class TocNav extends React.Component {
  render() {
    return (
      <div className="toc-nav">
        <p>Chapter 1</p><br/>
        <span>&nbsp;&nbsp;&nbsp;</span><p href="" >Chapter 1.1</p><br/>
        <span>&nbsp;&nbsp;&nbsp;</span><p href="" >Chapter 1.2</p><br/>
        <p href="" >Chapter 2</p><br/>
      </div>
    );
  }
}

export default TocNav;