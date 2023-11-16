'use client';

import Link from 'next/link';
import classNames from 'classnames';
import useActiveTab from '@/hooks/useActiveTab';
import { usePathname } from 'next/navigation';

export function LinkItem({ href, label }) {
	
	const activeTab = useActiveTab();
	const pathname = usePathname();

	return (
		<div
			className={classNames(
				'link-item',
				{ 'link-item-active': pathname.endsWith(href)
			})}
		>
      <Link href={href}>{label}</Link>
		</div>	
	);
}