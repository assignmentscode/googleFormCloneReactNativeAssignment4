import React from 'react';
import renderer from 'react-test-renderer';
import LandingPageCard from '../../../../src/components/landingPageCard/landingPageCard';

describe('MainPage', () => {
  it('snapshot should match the previous snapshot', () => {
    const tree = renderer.create(<LandingPageCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
