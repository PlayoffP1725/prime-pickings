'use client';

import { useState, useEffect } from 'react';
import { formatTimeRemaining } from '@/lib/utils';

interface CountdownTimerProps {
  expiresAt: string;
}

export default function CountdownTimer({ expiresAt }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(formatTimeRemaining(expiresAt));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(formatTimeRemaining(expiresAt));
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  const isExpired = timeRemaining === 'Expired';

  return (
    <div
      className={`flex items-center gap-2 text-sm font-mono ${
        isExpired ? 'text-red-600' : 'text-orange-600'
      }`}
    >
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{isExpired ? 'Deal Expired' : `Ends in ${timeRemaining}`}</span>
    </div>
  );
}
