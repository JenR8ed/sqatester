import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import App from '../src/App';

describe('App Component Clock Interval', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('should clear the clock interval when the component is unmounted', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval');
    const setIntervalSpy = vi.spyOn(global, 'setInterval');

    // Render the component to start the interval
    const { unmount } = render(<App />);

    // Check that setInterval was called
    expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), 1000);

    // Get the intervalId that was created
    const intervalId = setIntervalSpy.mock.results[0].value;

    // Unmount the component to trigger cleanup
    unmount();

    // Check that clearInterval was called with the correct intervalId
    expect(clearIntervalSpy).toHaveBeenCalledWith(intervalId);
  });
});
