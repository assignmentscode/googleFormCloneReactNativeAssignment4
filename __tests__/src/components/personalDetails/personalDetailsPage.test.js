import React from 'react';
import renderer from 'react-test-renderer';
import PersonalDetailsPage from '../../../../src/components/personalDetails/personalDetailsPage';

describe('PersonalDetailsPage', () => {
  it('snapshot should match the previous snapshot', () => {
    const tree = renderer.create(<PersonalDetailsPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
