import React from 'react';
import PropTypes from 'prop-types';
import { filterStyle, filterNone, mapChildren } from 'cf-style-container';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFoot from './TableFoot';

function issubclass(childType, Type) {
  return (
    childType === Type || (childType && childType.prototype instanceof Type)
  );
}

class Table extends React.Component {
  render() {
    const {
      className,
      styles,
      striped,
      hover,
      bordered,
      condensed,
      bare,
      children,
      ...props
    } = this.props;

    const sectionCount = React.Children.toArray(children).reduce((
      acc,
      child
    ) => {
      if (issubclass(child.type, TableHead)) acc.theads++;
      else if (issubclass(child.type, TableBody)) acc.tbodies++;
      else if (issubclass(child.type, TableFoot)) acc.tfoots++;
      return acc;
    }, { theads: 0, tbodies: 0, tfoots: 0 });

    const { theads, tbodies, tfoots } = sectionCount;
    let theadsSeen = 0, tbodiesSeen = 0, tfootsSeen = 0;

    return (
      <table
        className={className || (styles && styles.table)}
        {...filterStyle(props)}
      >
        {mapChildren(children, (child, index, children) => {
          if (React.isValidElement(child)) {
            if (issubclass(child.type, TableHead)) theadsSeen++;
            else if (issubclass(child.type, TableBody)) tbodiesSeen++;
            else if (issubclass(child.type, TableFoot)) tfootsSeen++;

            const isLastThead = theadsSeen == theads;
            const isLastTbody = tbodiesSeen == tbodies;
            const isLastTfoot = tfootsSeen == tfoots;

            return React.cloneElement(
              child,
              filterNone({
                condensed,
                striped,
                bordered,
                hover,
                bare,
                theadIndex: issubclass(child.type, TableHead)
                  ? (theadsSeen - 1) * (isLastThead ? -1 : 1)
                  : undefined,
                tbodyIndex: issubclass(child.type, TableBody)
                  ? (tbodiesSeen - 1) * (isLastTbody ? -1 : 1)
                  : undefined,
                tfootIndex: issubclass(child.type, TableFoot)
                  ? (tfootsSeen - 1) * (isLastTfoot ? -1 : 1)
                  : undefined
              })
            );
          }
          return child;
        })}
      </table>
    );
  }
}

Table.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  bordered: PropTypes.bool,
  condensed: PropTypes.bool,
  bare: PropTypes.bool,
  children: PropTypes.node
};

Table.defaultProps = {
  striped: false,
  hover: false,
  bordered: true,
  condensed: false,
  bare: false
};

export default Table;
