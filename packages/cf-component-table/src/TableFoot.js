import React from 'react';
import PropTypes from 'prop-types';
import { filterStyle, mapChildren } from 'cf-style-container';

class TableFoot extends React.Component {
  render() {
    const {
      className,
      styles,
      striped,
      hover,
      bordered,
      condensed,
      bare,
      tfootIndex,
      children,
      ...props
    } = this.props;

    return (
      <tfoot
        className={className || (styles && styles.tableFoot)}
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
              tfootIndex,
              rowIndex: isLast ? -index : index
            });
          }
          return child;
        })}

      </tfoot>
    );
  }
}

TableFoot.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.node
};

export default TableFoot;
