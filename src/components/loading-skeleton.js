'use client';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function LoadingSkeleton({ count = 5 }) {
	return (
		<SkeletonTheme baseColor="#202020" highlightColor="#444">
			<p>
				<Skeleton count={count} />
			</p>
		</SkeletonTheme>
	);
}