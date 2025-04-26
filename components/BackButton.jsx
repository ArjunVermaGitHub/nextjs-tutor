'use client';
import { useRouter } from 'next/navigation';

export default function BackButton({children}) {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} style={{
      background: 'none',
      border: 'none',
      color: '#0070f3',
      cursor: 'pointer',
      padding: '0.5rem 0',
      fontSize: '1rem',
      textDecoration: 'underline',
      display: 'inline-block',
      marginBottom: '1rem',
    }}>
      {children || '← Back to Lessons'}
    </button>
  );
}
