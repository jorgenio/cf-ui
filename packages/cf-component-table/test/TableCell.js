import React from 'react';
import renderer from 'react-test-renderer';
import { TableCell } from '../../cf-component-table/src/index';
import felaTestContext from '../../../felaTestContext';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(<TableCell>TableCell</TableCell>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render extra class name', () => {
  const component = renderer.create(
    felaTestContext(<TableCell className="extra">TableCell</TableCell>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with align', () => {
  const component = renderer.create(
    felaTestContext(<TableCell align="center">TableCell</TableCell>)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
