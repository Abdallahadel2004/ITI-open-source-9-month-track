'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px', color: '#ef4444' }}>Error</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Something went wrong!</h2>
      <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Failed to load products data.</p>
      <button onClick={() => reset()} className="btn">
        Try again
      </button>
    </div>
  );
}
