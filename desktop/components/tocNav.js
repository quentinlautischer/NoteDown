import React from 'react';
import TocItem from './tocItem';

class TocNav extends React.Component {
  constructor() {
    super();
    this.array = [];

    // All Data
    this.data = {
      previousPages: [], //List of Pages Identified by first Header
      currentPage: [], //List of (Headers, Mag) on current page
      nextPages: [] //List of Pages Identified by Header that are after
    }
    // this.scope // Some tracker of current zoom

    // Going to need a return to folder button or something

    this.scrollTo  = this.scrollTo.bind(this);
    this.renderTocItem = this.renderTocItem.bind(this)
    this.selectPreviousPage = this.selectPreviousPage.bind(this);
    this.selectNextPage = this.selectNextPage.bind(this);
    this.createNewPage = this.createNewPage.bind(this);
    this.deletePage = this.deletePage.bind(this);
    this.extractLastPageHeader = this.extractLastPageHeader.bind(this);
    this.extractNextPageHeader = this.extractNextPageHeader.bind(this);

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
          <span className="toc-li">{name}</span>
      </li>
    );
  }

  selectPreviousPage() {
    var state = this.props.store.getState();
    this.props.store.dispatch({type: 'SELECT_PAGE', index: state.state.pageIndex-1})
  }

  selectNextPage() {
    var state = this.props.store.getState();
    this.props.store.dispatch({type: 'SELECT_PAGE', index: state.state.pageIndex+1})
  }

  createNewPage() {
    var state = this.props.store.getState();
    this.props.store.dispatch({type: 'ADD_PAGE', folderIndex: state.state.folderIndex, index: state.state.pageIndex+1});
    this.props.store.dispatch({type: 'SELECT_PAGE', index: state.state.pageIndex+1})
  }

  deletePage() {
    var state = this.props.store.getState();
    if (state.state.pageIndex != 0) {
      this.props.store.dispatch({type: 'SELECT_PAGE', index: state.state.pageIndex-1})
      this.props.store.dispatch({type: 'DELETE_PAGE', folderIndex: state.state.folderIndex, index: state.state.pageIndex})
    }
  }

  pageContentView() {
    //Todo
  }

  pagesView() {
    //Todo
  }

  extractLastPageHeader() {
    var state = this.props.store.getState();
    if (state.state.pageIndex != 0) {
      var firstLine = state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex-1].content.split('\n')[0];
      return firstLine;
    } else {
      return 'Undefined';
    }
  }

  extractNextPageHeader() {
    var state = this.props.store.getState();
    if (state.state.pageIndex < state.notes.folders[state.state.folderIndex].pages.length-1) {
      var firstLine = state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex+1].content.split('\n')[0];
      return firstLine;
    } else {
      return 'Undefined';
    }
  }

  render() {
    var state = this.props.store.getState();
    console.log(JSON.stringify(state.notes.folders[state.state.folderIndex].pages));
    this.array = this.generateHeaderArray(this.props.info);
    return (      
      <div className="toc-nav">
          <span>
            <span className="toc-btn" onClick={this.createNewPage}><i className="icon-file-text" aria-hidden="true"></i></span>
            &nbsp;&nbsp;&nbsp;
            <span className="toc-btn" onClick={this.deletePage}><i className="icon-trash" aria-hidden="true"></i></span>
            &nbsp;&nbsp;&nbsp;
            <span className="toc-btn" onClick={this.pageContentView}><i className="icon-search-plus" aria-hidden="true"></i></span>
            &nbsp;&nbsp;&nbsp;
            <span className="toc-btn" onClick={this.pagesView}><i className="icon-search-minus" aria-hidden="true"></i></span>
          </span>
          <br/>
          <div>
            <span style={{float: 'left'}} className="toc-btn" onClick={this.selectPreviousPage}><i className="icon-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;{this.extractLastPageHeader()} </span>  
            <span style={{float: 'right'}}  className="toc-btn" onClick={this.selectNextPage}>{this.extractNextPageHeader()}&nbsp;&nbsp;<i className="icon-arrow-right" aria-hidden="true"></i></span>
          </div>
          <br/>
          <div className="toc-nav-content">
            <ul>
              {this.array.map(this.renderTocItem, this)}
            </ul>
          </div>
      </div>
    );
  }
}

export default TocNav;