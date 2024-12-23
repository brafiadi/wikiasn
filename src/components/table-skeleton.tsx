import { Skeleton } from "@/components/ui/skeleton";

interface TableSkeletonProps {
	rows?: number;
	columns?: number;
}

export function TableSkeleton({ rows = 8, columns = 4 }: TableSkeletonProps) {
	return (
		<div className="w-full">
			<div className="">
				<div className="">
					<div className="flex">
						{Array.from({ length: columns }).map((_, index) => (
							<div key={index} className="flex-1 p-4">
								<Skeleton className="h-4 w-full" />
							</div>
						))}
					</div>
				</div>
				<div>
					{Array.from({ length: rows }).map((_, rowIndex) => (
						<div key={rowIndex} className="flex border-b last:border-b-0">
							{Array.from({ length: columns }).map((_, colIndex) => (
								<div key={colIndex} className="flex-1 p-4">
									<Skeleton className="h-4 w-full" />
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
