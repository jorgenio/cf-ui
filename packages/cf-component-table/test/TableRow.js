import React from 'react';
import renderer from 'react-test-renderer';
import {
  TableRow,
  TableRowUnstyled,
  TableCellUnstyled
} from '../../cf-component-table/src/index';
import felaTestContext from '../../../felaTestContext';
import { mount } from 'enzyme';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<TableRow>TableRow</TableRow>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render extra class name', () => {
  const component = renderer.create(
    felaTestContext(<TableRow className="extra">TableRow</TableRow>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with type', () => {
  const component = renderer.create(
    felaTestContext(<TableRow type="error">TableRow</TableRow>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should pass down CSS query props', () => {
  const wrapper = mount(
    <table>
      <tbody>
        <TableRowUnstyled
          condensed
          striped
          bordered
          hover
          bare
          rowType={0}
          theadIndex={0}
          tbodyIndex={0}
          tfootIndex={0}
          rowIndex={0}
        >
          <TableCellUnstyled />
          <TableCellUnstyled />
        </TableRowUnstyled>
      </tbody>
    </table>
  );

  expect(
    wrapper.childAt(0).childAt(0).childAt(1).prop('condensed')
  ).toBeTruthy();
  expect(wrapper.childAt(0).childAt(0).childAt(1).prop('striped')).toBeTruthy();
  expect(
    wrapper.childAt(0).childAt(0).childAt(1).prop('bordered')
  ).toBeTruthy();
  expect(wrapper.childAt(0).childAt(0).childAt(1).prop('hover')).toBeTruthy();
  expect(wrapper.childAt(0).childAt(0).childAt(1).prop('bare')).toBeTruthy();
  expect(wrapper.childAt(0).childAt(0).childAt(1).prop('rowType')).toBe(0);
  expect(wrapper.childAt(0).childAt(0).childAt(1).prop('theadIndex')).toBe(0);
  expect(wrapper.childAt(0).childAt(0).childAt(1).prop('tbodyIndex')).toBe(0);
  expect(wrapper.childAt(0).childAt(0).childAt(1).prop('tfootIndex')).toBe(0);
  expect(wrapper.childAt(0).childAt(0).childAt(1).prop('rowIndex')).toBe(0);
  expect(wrapper.childAt(0).childAt(0).childAt(1).prop('cellIndex')).toBe(-1);
});
