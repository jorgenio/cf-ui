import React from 'react';
import PropTypes from 'prop-types';
import { filterStyle } from 'cf-style-container';

class TableHeadCell extends React.Component {
  render() {
    const {
      className,
      styles,
      children,
      // Start ignoring, because Fela...
      condensed,
      striped,
      bordered,
      hover,
      bare,
      rowType,
      theadIndex,
      tbodyIndex,
      tfootIndex,
      rowIndex,
      cellIndex,
      // Stop ignoring...
      ...props
    } = this.props;

    return (
      <th
        className={className || (styles && styles.tableHeadCell)}
        {...filterStyle(props)}
      >
        {this.props.children}
      </th>
    );
  }
}

TableHeadCell.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.node
};

export default TableHeadCell;
