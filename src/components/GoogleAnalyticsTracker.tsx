'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function AnalyticsTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
      // Fire page_view config event to GA4 on route change
      (window as any).gtag('config', gaId, {
        page_path: url,
        page_location: window.location.href,
      });
    }
  }, [pathname, searchParams, gaId]);

  return null;
}

export default function GoogleAnalyticsTracker({ gaId }: { gaId: string }) {
  return (
    <Suspense fallback={null}>
      <AnalyticsTracker gaId={gaId} />
    </Suspense>
  );
}
