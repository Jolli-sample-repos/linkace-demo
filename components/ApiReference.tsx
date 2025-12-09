'use client'

import { useState } from 'react'

export default function ApiReference() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 600,
          color: '#fff',
          backgroundColor: '#0070f3',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
        Open Interactive API
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              bottom: '20px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                zIndex: 1001,
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 500,
                color: '#666',
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              Close
            </button>
            <iframe
              src="/api-docs.html"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              title="API Reference"
            />
          </div>
        </div>
      )}
    </>
  )
}
