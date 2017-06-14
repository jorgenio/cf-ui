import React from 'react';
import renderer from 'react-test-renderer';
import {
  TableFoot,
  TableFootUnstyled,
  TableRowUnstyled
} from '../../cf-component-table/src/index';
import felaTestContext from '../../../felaTestContext';
import { mount } from 'enzyme';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<TableFoot>TableFoot</TableFoot>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render extra class name', () => {
  const component = renderer.create(
    felaTestContext(<TableFoot className="extra">TableFoot</TableFoot>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should pass down CSS query props', () => {
  const wrapper = mount(
    <table>
      <TableFootUnstyled striped hover bordered condensed bare tfootIndex={0}>
        <TableRowUnstyled />
        <TableRowUnstyled />
      </TableFootUnstyled>
    </table>
  );

  expect(wrapper.childAt(0).childAt(1).prop('condensed')).toBeTruthy();
  expect(wrapper.childAt(0).childAt(1).prop('striped')).toBeTruthy();
  expect(wrapper.childAt(0).childAt(1).prop('bordered')).toBeTruthy();
  expect(wrapper.childAt(0).childAt(1).prop('hover')).toBeTruthy();
  expect(wrapper.childAt(0).childAt(1).prop('bare')).toBeTruthy();
  expect(wrapper.childAt(0).childAt(1).prop('tfootIndex')).toBe(0);
  expect(wrapper.childAt(0).childAt(1).prop('rowIndex')).toBe(-1);
});
