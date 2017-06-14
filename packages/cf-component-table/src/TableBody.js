import React from 'react';
import PropTypes from 'prop-types';
import { filterStyle, mapChildren } from 'cf-style-container';

class TableBody extends React.Component {
  render() {
    const {
      className,
      styles,
      striped,
      hover,
      bordered,
      condensed,
      bare,
      tbodyIndex,
      children,
      ...props
    } = this.props;

    return (
      <tbody
        className={className || (styles && styles.tableBody)}
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
              tbodyIndex,
              rowIndex: isLast ? -index : index
            });
          }
          return child;
        })}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.node
};

export default TableBody;
