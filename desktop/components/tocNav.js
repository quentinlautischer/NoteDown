import React from 'react';
import TocItem from './tocItem';

class TocNav extends React.Component {
  constructor() {
    super();
  }

  generateTableOfContents(str) {
    var match;
    var tempText = "<ul>";
    var r_atx = /^(#{1,6})\s*(.+?)\s*#*$/gm;
    var magnitude;
    var bound1, bound2;
      
    bound1 = 0;
    while ((match = r_atx.exec(str)) != null) {
      bound2 = match.index;
      magnitude = match[1].length;
      tempText += "<li class=\"toc-li-" + magnitude + "\"><span class=\"nd-color2\">" + match[2] + "</span></li>";
      bound1 = r_atx.lastIndex;
    }
      
    return tempText + "</ul>";
  }
  
  //  //
  render() {
    console.log("TOC RE-RENDERING");
    return (
      <div className="toc-nav" dangerouslySetInnerHTML= {{__html: this.generateTableOfContents(this.props.info)}}>
      </div>
    );
  }
}

export default TocNav;