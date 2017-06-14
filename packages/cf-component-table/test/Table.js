import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import felaTestContext from '../../../felaTestContext';
import {
  Table,
  TableUnstyled,
  TableHeadUnstyled,
  TableBodyUnstyled,
  TableFootUnstyled
} from '../../cf-component-table/src/index';
import { mount } from 'enzyme';

test('should render', () => {
  const component = renderer.create(felaTestContext(<Table>Table</Table>));
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render extra class names', () => {
  const component = renderer.create(
    felaTestContext(<Table className="extra">Table</Table>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render striped', () => {
  const component = renderer.create(
    felaTestContext(<Table striped>Table</Table>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render hover', () => {
  const component = renderer.create(
    felaTestContext(<Table hover>Table</Table>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render not bordered', () => {
  const component = renderer.create(
    felaTestContext(<Table bordered={false}>Table</Table>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render condensed', () => {
  const component = renderer.create(
    felaTestContext(<Table condensed>Table</Table>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should pass down CSS query props', () => {
  const wrapper = mount(
    <TableUnstyled striped hover bordered condensed bare>
      <TableHeadUnstyled />
      <TableHeadUnstyled />
      <TableBodyUnstyled />
      <TableBodyUnstyled />
      <TableFootUnstyled />
      <TableFootUnstyled />
    </TableUnstyled>
  );

  expect(wrapper.childAt(0).prop('condensed')).toBeTruthy();
  expect(wrapper.childAt(0).prop('striped')).toBeTruthy();
  expect(wrapper.childAt(0).prop('bordered')).toBeTruthy();
  expect(wrapper.childAt(0).prop('hover')).toBeTruthy();
  expect(wrapper.childAt(0).prop('bare')).toBeTruthy();
  expect(wrapper.childAt(0).prop('theadIndex')).toBe(0);

  expect(wrapper.childAt(1).prop('condensed')).toBeTruthy();
  expect(wrapper.childAt(1).prop('striped')).toBeTruthy();
  expect(wrapper.childAt(1).prop('bordered')).toBeTruthy();
  expect(wrapper.childAt(1).prop('hover')).toBeTruthy();
  expect(wrapper.childAt(1).prop('bare')).toBeTruthy();
  expect(wrapper.childAt(1).prop('theadIndex')).toBe(-1);

  expect(wrapper.childAt(2).prop('condensed')).toBeTruthy();
  expect(wrapper.childAt(2).prop('striped')).toBeTruthy();
  expect(wrapper.childAt(2).prop('bordered')).toBeTruthy();
  expect(wrapper.childAt(2).prop('hover')).toBeTruthy();
  expect(wrapper.childAt(2).prop('bare')).toBeTruthy();
  expect(wrapper.childAt(2).prop('tbodyIndex')).toBe(0);

  expect(wrapper.childAt(3).prop('condensed')).toBeTruthy();
  expect(wrapper.childAt(3).prop('striped')).toBeTruthy();
  expect(wrapper.childAt(3).prop('bordered')).toBeTruthy();
  expect(wrapper.childAt(3).prop('hover')).toBeTruthy();
  expect(wrapper.childAt(3).prop('bare')).toBeTruthy();
  expect(wrapper.childAt(3).prop('tbodyIndex')).toBe(-1);

  expect(wrapper.childAt(4).prop('condensed')).toBeTruthy();
  expect(wrapper.childAt(4).prop('striped')).toBeTruthy();
  expect(wrapper.childAt(4).prop('bordered')).toBeTruthy();
  expect(wrapper.childAt(4).prop('hover')).toBeTruthy();
  expect(wrapper.childAt(4).prop('bare')).toBeTruthy();
  expect(wrapper.childAt(4).prop('tfootIndex')).toBe(0);

  expect(wrapper.childAt(5).prop('condensed')).toBeTruthy();
  expect(wrapper.childAt(5).prop('striped')).toBeTruthy();
  expect(wrapper.childAt(5).prop('bordered')).toBeTruthy();
  expect(wrapper.childAt(5).prop('hover')).toBeTruthy();
  expect(wrapper.childAt(5).prop('bare')).toBeTruthy();
  expect(wrapper.childAt(5).prop('tfootIndex')).toBe(-1);
});
