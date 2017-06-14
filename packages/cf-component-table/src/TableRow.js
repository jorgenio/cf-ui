import React from 'react';
import PropTypes from 'prop-types';
import { filterStyle, mapChildren } from 'cf-style-container';
import TablePropTypes from './TablePropTypes';

class TableRow extends React.Component {
  render() {
    const {
      className,
      styles,
      type,
      children,
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
      ...props
    } = this.props;

    return (
      <tr
        className={className || (styles && styles.tableRow)}
        {...filterStyle(props)}
      >
        {mapChildren(children, (child, index, children) => {
          const isLast = index === children.length - 1;
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
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
              cellIndex: isLast ? -index : index
            });
          }
          return child;
        })}
      </tr>
    );
  }
}

TableRow.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
  type: TablePropTypes.rowType,
  children: PropTypes.node
};

TableRow.defaultProps = {
  type: 'default'
};

export default TableRow;
