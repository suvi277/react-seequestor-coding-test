import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const PaginationList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin-top: 20px;
`

const PaginateItem = styled.li``

const Button= styled.button`
  padding: 10px 15px;
  border: 1px solid #000000AD;
  background-color: #8BDBFF;
  color: #000000AD;
  cursor: pointer;

  &.active {
      background-color: #000000AD;
      color: #FFFFFF
  }
  
  &:not(.active):hover {
      background-color: #000000AD;
      color: #FFFFFF
  }
`

/**
 * Component for showing pagination.
 *
 * @component
 * @example
 * const currentPage = 2;
 * const total = 15;
 * const itemsPerPage = 5;
 * const paginate = () => {}
 * return (
 *   <Pagination currentPage={currentPage} total={total} perPage={itemsPerPage} paginate={paginate}  />
 * )
 */

const Pagination = ({ currentPage, perPage, total, paginate}) => {
  const pages = [];

  for(let i = 1; i <= Math.ceil(total / perPage); i++) {
    pages.push(i)
  } 

  return (
    <PaginationList>
    {pages.map(page => (
      <PaginateItem data-testid="paginate-item" key={page}>
        <Button className={page === currentPage ? 'active': ''} type="button" onClick={() => paginate(page)}>{page}</Button>
      </PaginateItem>
    ))}
    </PaginationList>
  )
}

Pagination.propTypes = {
  /**
   * current active page of the pagination
   */
  currentPage: PropTypes.number,
  /**
   * Number of items per page
   */
  perPage:PropTypes.number,
  /**
   * Total number of items
   */
  total: PropTypes.number,
  /**
   * function to paginate through buttons
   */
  paginate: PropTypes.func
}

export { Pagination }