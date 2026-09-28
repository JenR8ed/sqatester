import { vi, describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';

const mockRender = vi.fn();

vi.mock('react-dom/client', () => {
  return {
    default: {
      createRoot: vi.fn(() => ({
        render: mockRender,
      })),
    },
  };
});

vi.mock('../src/App.jsx', () => {
  return {
    default: () => <div>Mock App</div>
  };
});

describe('main.jsx entry point', () => {
  beforeEach(() => {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
    vi.clearAllMocks();
  });

  it('calls ReactDOM.createRoot with root element and renders App', async () => {
    vi.resetModules();
    await import('../src/main.jsx');

    const rootElement = document.getElementById('root');
    expect(ReactDOM.createRoot).toHaveBeenCalledWith(rootElement);
    expect(mockRender).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
});
