import React from 'react';
import PropTypes from 'prop-types';
import { filterStyle } from 'cf-style-container';

class TableCell extends React.Component {
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
      align,
      // Stop ignoring...
      ...props
    } = this.props;

    return (
      <td
        className={className || (styles && styles.tableCell)}
        {...filterStyle(props)}
      >
        {this.props.children}
      </td>
    );
  }
}

TableCell.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node
};

TableCell.defaultProps = {
  align: 'left'
};

export default TableCell;
