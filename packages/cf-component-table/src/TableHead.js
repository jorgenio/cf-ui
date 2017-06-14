import React from 'react';
import PropTypes from 'prop-types';
import { filterStyle, mapChildren } from 'cf-style-container';

class TableHead extends React.Component {
  render() {
    const {
      className,
      styles,
      striped,
      hover,
      bordered,
      condensed,
      bare,
      theadIndex,
      children,
      ...props
    } = this.props;

    return (
      <thead
        className={className || (styles && styles.tableHead)}
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
              theadIndex,
              rowIndex: isLast ? -index : index
            });
          }
          return child;
        })}
      </thead>
    );
  }
}

TableHead.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.node
};

export default TableHead;
