'use client';

import { useRouter } from 'next/navigation';

export default function useActiveTab() {
  const { query } = useRouter();
  const activeTab = query?.activeTab || 'dashboard';
  return activeTab;
}