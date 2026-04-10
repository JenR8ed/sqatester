import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import App from '../src/App';

describe('App Component', () => {
  it('renders correctly', () => {
    render(<App />);
    expect(screen.getByText('Jennifer McKinley')).toBeInTheDocument();
  });
});
