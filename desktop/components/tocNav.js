import React from 'react';
import TocItem from './tocItem';

class TocNav extends React.Component {
  constructor() {
    super();
    this.array = [];

    this.scrollTo  = this.scrollTo  .bind(this);
    this.renderTocItem = this.renderTocItem.bind(this)
  }

  generateHeaderArray(str) {
    var match;
    var array = [];
    var r_atx = /^(#{1,6})\s*(.+?)\s*#*$/gm;
    var magnitude;
    var bound1, bound2;
      
    bound1 = 0;
    while ((match = r_atx.exec(str)) != null) {
      bound2 = match.index;
      magnitude = match[1].length;
      var item = {name: match[2], mag: magnitude };
      array.push(item);
      bound1 = r_atx.lastIndex;
    }
    return array;
  }
  
  scrollTo(id, e) {
    this.props.scrollTo(id);
  }

  renderTocItem({name, mag}) {
    return (
      <li key={name} className={"toc-li-" + mag } onClick={this.scrollTo.bind(this, name)}>
          <span className="nd-color2">{name}</span>
      </li>
    );
  }

  render() {
    this.array = this.generateHeaderArray(this.props.info);
    return (
      <div className="toc-nav">
          <ul>
              {this.array.map(this.renderTocItem, this)}
          </ul>
      </div>
    );
  }
}

export default TocNav;