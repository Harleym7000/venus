import { render } from '@testing-library/react';
import React from "react";
import App from '../../App';

test('example test', () => {
  render (<App/>);
  expect(true).toBe(true);
});
