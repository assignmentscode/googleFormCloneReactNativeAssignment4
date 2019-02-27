import React from 'react';
import renderer from 'react-test-renderer';
import CreateFormPage from '../../../../src/components/createFormPage/createFormPage';

describe('createFormPage', () => {
  it('snapshot should match the previous snapshot', () => {
    const tree = renderer.create(<CreateFormPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
