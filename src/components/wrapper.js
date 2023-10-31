'use client';

import { Suspense } from 'react';
import Loading from '@/app/loading';

export default function Wrapper({ children }) {
	return (
		<div className='page-wrapper'>
			<Suspense fallback={<Loading />}>
				{children}
			</Suspense>
		</div>
	)
}