import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import range from 'lodash/range';
import {Link} from 'gatsby'

export default class PaginationNav extends React.Component {

  constructor(props) {
    super(props);
    
    this.numPages = props.numPages;
    this.currPage = props.currentPage;
    this.incrementArray = this.incrementArray.bind(this);
    this.decrementArray = this.decrementArray.bind(this);

    // How many numbers to show on the left/right of the centered number in the nav bar
    this.neighbors = 1;

    //this.numPages = 10;
    //this.currPage = 3;

    // Total number of items that will be shown in the nav bar
    this.totalNums = this.neighbors * 2 + 1;

    // left/right - disable left and right arrows? True if yes, False if no.
    // pages - contains array of page numbers
    let disableLeft, disableRight, pages;

    // If we have more pages than the number of pages we want to show in the bar
    if (this.numPages > this.totalNums) {
      // start page will either be 1, or the current page - 1
      const startPage = Math.max(1, this.currPage - this.neighbors)
      // end page can't be higher than number of pages
      const endPage = Math.min(this.numPages, this.currPage + this.neighbors)

      // create array of numbers based on start and end
      pages = range(startPage, endPage + 1)
      
      // If start page is higher than 2, we don't disable left arrow
      disableLeft = !(startPage > 2);
      // If we have more pages left, then we don't disable right arrow
      disableRight = !((this.numPages - endPage) > 1);

    // If we have less, disable the arrow functions and set pages
    // to whatever number of pages we have
    } else {
      disableLeft = true;
      disableRight = true;
      pages = range(1, this.numPages + 1)
    }

    this.state = {
      disableLeft: disableLeft,
      pages: pages,
      disableRight: disableRight,
    }

  }

  incrementArray() {
    let pages = [];
    let disableRight = this.state.disableRight;
    for (let index = 0; index < this.state.pages.length; ++index) {
      let item = this.state.pages[index]
      if (item + 1 > this.numPages) {
        disableRight = true;
        break
      }
      pages.push(item + 1)
    }

    this.setState({
      pages: pages,
      disableRight: disableRight,
      disableLeft: this.state.left,
    })
  }

  decrementArray() {
    let pages = [];
    let disableleft = this.state.disableleft;
    // TODO: Fix this method so that it adds in 3 items instead of 2 based on state length
    for (let index = 0; index < this.state.pages.length; ++index) {
      let item = this.state.pages[index]
      if (item - 1 < 1) {
        disableleft = true;
        break
      }
      pages.push(item + 1)
    }
    this.setState({
      pages: pages,
      disableRight: this.state.disableRight,
      disableLeft: disableleft,
    })

  }


  // TODO: Fix the URLs for the pagination so that it directs to the correct blog type. For example, clicking the numbers in the pagination
  // in the NA page leads back to destinations.
  render() {

    return (
      <Pagination size="lg" cssModule={{display:"flex", 'align-item':'center'}} aria-label="Page navigation">
        <PaginationItem disabled={this.currPage === 1} >
          <PaginationLink tag={Link} to={this.currPage - 1 === 1 ? "/destinations/" : "/destinations/" + (this.currPage - 1)}>
            Previous Page
          </PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={this.state.disableLeft} >
          <PaginationLink previous onClick={this.decrementArray}>
          </PaginationLink>
        </PaginationItem>
        {
          this.state.pages.map((item) => {
            return (
              <PaginationItem key={item} active={this.currPage === item ? true : false} >
                <PaginationLink tag={Link} to={item === 1 ? "/destinations/" : "/destinations/" + item}>
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
          })
        }
        
        <PaginationItem disabled={this.state.disableRight}>
          <PaginationLink next onClick={this.incrementArray}>
          </PaginationLink>
        </PaginationItem>

        <PaginationItem disabled={this.currPage === this.numPages} >
          <PaginationLink tag={Link} to={"/destinations/" + (this.currPage + 1)}>
            Next Page
          </PaginationLink>
        </PaginationItem>
      </Pagination>

    );
  }
}
