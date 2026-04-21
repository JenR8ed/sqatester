import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

describe('App Component Tab Switching', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('should switch tabs when clicked', () => {
    const { getByText, queryByText, getByTitle } = render(<App />);

    // 1. Initial State: Agentic AI Prototypes
    expect(getByText('Live Agent Log: ConversationOrchestrator')).toBeInTheDocument();
    expect(queryByText('Lead QA Automation Engineer')).not.toBeInTheDocument();
    expect(document.querySelector('iframe[title="Certifications"]')).toBeNull();

    // 2. Click on "SDET & DevOps Foundation" tab
    const experienceTab = getByText('SDET & DevOps Foundation');
    fireEvent.click(experienceTab);

    // Verify Experience content is shown
    expect(getByText('Lead QA Automation Engineer')).toBeInTheDocument();
    // Verify Agentic content is hidden
    expect(queryByText('Live Agent Log: ConversationOrchestrator')).not.toBeInTheDocument();

    // 3. Click on "Certifications" tab
    const certificationsTab = getByText('Certifications');
    fireEvent.click(certificationsTab);

    // Verify Certifications content is shown
    expect(getByTitle('Certifications')).toBeInTheDocument();
    // Verify Experience content is hidden
    expect(queryByText('Lead QA Automation Engineer')).not.toBeInTheDocument();
  });
});
