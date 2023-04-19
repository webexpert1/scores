import React from 'react';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';
import MatchItem, { liveStatusFormatter } from '../components/match';



describe('liveStatusFormatter', () => {
  it('should format the live status correctly', () => {
    expect(liveStatusFormatter('FT')).toBe('FT');
    expect(liveStatusFormatter('Canceled')).toBe('');
    expect(liveStatusFormatter('HT')).toBe('HT');
    expect(liveStatusFormatter('-')).toBe('');
    expect(liveStatusFormatter('test')).toBe('test`');
  });
});

