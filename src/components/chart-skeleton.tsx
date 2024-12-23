import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface ChartSkeletonProps {
	height?: number;
	showLegend?: boolean;
}

export function ChartSkeleton({
	height = 350,
	showLegend = true,
}: ChartSkeletonProps) {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center gap-4">
				<div className="flex flex-col gap-2 flex-1">
					<Skeleton className="h-5 w-1/3" />
					<Skeleton className="h-4 w-1/2" />
				</div>
			</CardHeader>
			<CardContent>
				<div style={{ height: `${height}px` }} className="relative">
					{/* Y-axis ticks */}
					<div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between py-6">
						{Array.from({ length: 5 }).map((_, i) => (
							<Skeleton key={`y-tick-${i}`} className="h-4 w-8" />
						))}
					</div>

					{/* Chart area */}
					<div className="ml-12 h-full flex flex-col justify-end">
						<div className="relative h-[90%] w-full">
							{/* Chart line skeleton */}
							<div className="absolute inset-0 flex items-end">
								{Array.from({ length: 12 }).map((_, i) => (
									<div
										key={`bar-${i}`}
										className="flex-1 mx-1"
										style={{
											height: `${Math.random() * 60 + 20}%`,
										}}
									>
										<Skeleton className="h-full w-full" />
									</div>
								))}
							</div>
						</div>

						{/* X-axis ticks */}
						<div className="h-6 mt-4 flex justify-between items-center">
							{Array.from({ length: 6 }).map((_, i) => (
								<Skeleton key={`x-tick-${i}`} className="h-4 w-12" />
							))}
						</div>
					</div>
				</div>

				{/* Legend */}
				{showLegend && (
					<div className="mt-6 flex items-center justify-center gap-4">
						{Array.from({ length: 2 }).map((_, i) => (
							<div key={`legend-${i}`} className="flex items-center gap-2">
								<Skeleton className="h-3 w-3 rounded-full" />
								<Skeleton className="h-4 w-20" />
							</div>
						))}
					</div>
				)}
			</CardContent>
		</Card>
	);
}
