import React from 'react';
import TocItem from './tocItem';

class TocNav extends React.Component {
  constructor() {
    super();
    this.array = [];
    this.pagesArray = [];
    this.state = {
      zoom: 'in'
    }

    this.scrollTo  = this.scrollTo.bind(this);
    this.renderTocItem = this.renderTocItem.bind(this);
    this.renderPageItem = this.renderPageItem.bind(this)
    this.selectPreviousPage = this.selectPreviousPage.bind(this);
    this.selectNextPage = this.selectNextPage.bind(this);
    this.createNewPage = this.createNewPage.bind(this);
    this.deletePage = this.deletePage.bind(this);
    this.extractLastPageHeader = this.extractLastPageHeader.bind(this);
    this.extractNextPageHeader = this.extractNextPageHeader.bind(this);
    this.pageContentView = this.pageContentView.bind(this);
    this.pagesView = this.pagesView.bind(this);
    this.folderview = this.folderview.bind(this);
    this.extractPageHeader = this.extractPageHeader.bind(this);
    this.generatePagesArray = this.generatePagesArray.bind(this);

  }

  componentDidUpdate() {
    // this.array = this.generatePageArray();
  }

  componentWillUpdate() {
    // this.array = this.generatePageArray();
  }

  generatePageArray() {
    try {
      var all = document.getElementById('renderField').querySelectorAll("h1, h2, h3, h4, h5, h6");
      var array = [];
      for (var i=0, max=all.length; i < max; i++) {
        array.push({
          ref: all[i],
          name: all[i].innerHTML,
          id: i,
          mag: all[i].localName
        })
      }
      this.array = array;
    } catch (err){}     
  }

  generatePagesArray() {
    var array = [];
    var state = this.props.store.getState();
    var pages = state.notes.folders[state.state.folderIndex].pages;
    var i;
    for(i=0; i < pages.length; i++){
      var pageItem = {
        name: this.extractPageHeader(pages[i]),
        id: pages[i]._id,
        index: i
      } 
      array.push(pageItem);
    }
    return array;
  }
  
  scrollTo(ref, e) {
    ref.parentNode.scrollTop = ref.offsetTop;    
    // ref.scrollIntoView();
  }

  changePage(index, e) {
    this.props.store.dispatch({type: 'SELECT_PAGE', index: index});
  }

  renderTocItem({ref, name, id, mag}) {
    return (
      <li key={id} className={"toc-li-" + mag } onClick={this.scrollTo.bind(this, ref)}>
          <span className="toc-li">{name}</span>
      </li>
    );
  }

  renderPageItem({name, id, index}) {
    var currentIndex = this.props.store.getState().state.pageIndex;
    console.log(`Current Page Index: ${currentIndex} Current Page Item: ${index}`)
    return (
      <li key={id} onClick={this.changePage.bind(this, index)}>
          <span className="toc-li"><i className={'icon-arrow-right ' + (index == currentIndex ? '' : 'hidden')} aria-hidden="true"></i>{name}</span>
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
    this.setState({
      zoom: 'in',
    });
  }

  pagesView() {
    this.setState({
      zoom: 'out',
    });
  }

  folderview() {
    this.props.store.dispatch({type: 'FOLDER_MODE'});
  }

  extractPageHeader(page) {
    return page.content.split('\n')[0];
  }

  hasNextPage() {
    var state = this.props.store.getState();
    if (state.state.pageIndex < state.notes.folders[state.state.folderIndex].pages.length-1) {
      return true
    }
    return false;
  }

  hasPrevPage() {
    var state = this.props.store.getState();
    if (state.state.pageIndex != 0) {
      return true;
    }
    return false;
  }

  extractLastPageHeader() {
    var state = this.props.store.getState();
    if (this.hasPrevPage()) {
      return this.extractPageHeader(state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex-1]);
    } else {
      return 'Undefined';
    }
  }

  extractNextPageHeader() {
    var state = this.props.store.getState();
    if (this.hasNextPage()) {
       return this.extractPageHeader(state.notes.folders[state.state.folderIndex].pages[state.state.pageIndex+1]);
    } else {
      return 'Undefined';
    }
  }

  render() {
    var state = this.props.store.getState();
    // console.log(JSON.stringify(state.notes.folders[state.state.folderIndex].pages));
    this.generatePageArray();
    this.pagesArray = this.generatePagesArray();
    try {
      if (this.state.zoom == 'in') {
        return (      
          <div className="toc-nav">
            <div className="toc-nav-btns">
              <span className="toc-btn" onClick={this.folderview}><i className="icon-folderview" aria-hidden="true"></i></span>
              &nbsp;&nbsp;&nbsp;
              <span className="toc-btn" onClick={this.pagesView}><i className="icon-search-minus" aria-hidden="true"></i></span>
              &nbsp;&nbsp;&nbsp;
              <span className="toc-btn" onClick={this.createNewPage}><i className="icon-file-text" aria-hidden="true"></i></span>
              &nbsp;&nbsp;&nbsp;
              <span className="toc-btn" onClick={this.deletePage}><i className="icon-trash" aria-hidden="true"></i></span>
            </div>
            <br/>
            <div>
              <span className={'toc-btn left ' + (this.hasPrevPage() ? '' : 'hidden')} onClick={this.selectPreviousPage}>
                <i className="icon-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;{this.extractLastPageHeader()}
              </span>  
              <span className={'toc-btn right ' + (this.hasNextPage() ? '' : 'hidden')} onClick={this.selectNextPage}>
                {this.extractNextPageHeader()}&nbsp;&nbsp;<i className="icon-arrow-right" aria-hidden="true"></i>
              </span>
              <span className={'toc-btn right ' + (this.hasNextPage() ? 'hidden' : '')} onClick={this.createNewPage}>
                <i className="icon-file-text" aria-hidden="true"></i>&nbsp;&nbsp;<i className="icon-arrow-right" aria-hidden="true"></i>
              </span>
            </div>
            <br/>
            <div className="toc-nav-content">
              <span className="title">Table of Contents</span>
              <ul>
                {this.array.map(this.renderTocItem, this)}
              </ul>
            </div>
        </div>
      );
      } else if (this.state.zoom == 'out') {
        return (      
          <div className="toc-nav">
            <span>
              <span className="toc-btn" onClick={this.folderview}><i className="icon-folderview" aria-hidden="true"></i></span>
              &nbsp;&nbsp;&nbsp;
              <span className="toc-btn" onClick={this.pageContentView}><i className="icon-search-plus" aria-hidden="true"></i></span>
            </span>
            <br/>
            <div className="toc-nav-content">
              <span className="title">Table of Pages</span>
              <ul>
                {this.pagesArray.map(this.renderPageItem, this)}
              </ul>
            </div>
        </div>
      );
      }
    } catch (err) { console.log(err); return null; }
  }
}

export default TocNav;