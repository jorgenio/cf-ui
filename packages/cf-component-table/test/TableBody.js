import React from 'react';
import renderer from 'react-test-renderer';
import {
  TableBody,
  TableBodyUnstyled,
  TableRowUnstyled
} from '../../cf-component-table/src/index';
import felaTestContext from '../../../felaTestContext';
import { mount } from 'enzyme';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<TableBody>TableBody</TableBody>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render extra class names', () => {
  const component = renderer.create(
    felaTestContext(<TableBody className="extra">TableBody</TableBody>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should pass down CSS query props', () => {
  const wrapper = mount(
    <table>
      <TableBodyUnstyled striped hover bordered condensed bare tbodyIndex={0}>
        <TableRowUnstyled />
        <TableRowUnstyled />
      </TableBodyUnstyled>
    </table>
  );

  expect(wrapper.childAt(0).childAt(1).prop('condensed')).toBeTruthy();
  expect(wrapper.childAt(0).childAt(1).prop('striped')).toBeTruthy();
  expect(wrapper.childAt(0).childAt(1).prop('bordered')).toBeTruthy();
  expect(wrapper.childAt(0).childAt(1).prop('hover')).toBeTruthy();
  expect(wrapper.childAt(0).childAt(1).prop('bare')).toBeTruthy();
  expect(wrapper.childAt(0).childAt(1).prop('tbodyIndex')).toBe(0);
  expect(wrapper.childAt(0).childAt(1).prop('rowIndex')).toBe(-1);
});
