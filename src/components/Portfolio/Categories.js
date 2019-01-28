import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCategories = styled.ul`
  grid-column: 2 / -2;
  grid-row: span 1;
  list-style-type: none;
  margin: 0;
  padding: 4rem 0;
  li {
    display: inline-block;
    :not(:first-child) {
      margin-left: 5vw;
    }
  }
`;
const StyledCategory = styled.button`
  color: ${props => props.theme.grey};
  font-family: ${props => props.theme.fontDisplay};
  font-size: 1.25rem;
  font-weight: ${props => props.theme.fwNormal};
  text-transform: capitalize;
  background: none;
  border: none;
  outline: none;
  opacity: ${props => (props.selected ? '1' : '0.6')};
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Categories = ({ categories, handleClick, catSt }) => (
  <StyledCategories>
    {categories.map(category => (
      <li key={category}>
        <StyledCategory
          name={category}
          onClick={handleClick}
          selected={category === catSt}
          children={category}
        />
      </li>
    ))}
  </StyledCategories>
);

export default Categories;

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
  catSt: PropTypes.string.isRequired,
};
