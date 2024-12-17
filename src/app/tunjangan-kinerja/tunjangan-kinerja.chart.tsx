"use client";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	LabelList,
	Cell,
} from "recharts";
import { useEffect, useState } from "react";
import { formatRupiah } from "@/utils/currency";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const unsortedData = [
	{ name: "Otoritas JKN", min: 2.5, max: 8.0 },
	{ name: "DJP Kemenkeu", min: 3.0, max: 9.0 },
	{ name: "PPATK", min: 2.8, max: 8.5 },
	{ name: "Kementreg", min: 2.7, max: 7.5 },
	{ name: "Kemenkeu", min: 3.2, max: 9.5 },
	{ name: "BPK", min: 2.9, max: 8.7 },
	{ name: "BPKP", min: 2.6, max: 7.8 },
	{ name: "KemenPAN RB", min: 2.8, max: 8.2 },
	{ name: "Kementerian PPN/Bappenas", min: 3.1, max: 9.1 },
	{ name: "Kementerian PUPR", min: 3.0, max: 8.9 },
];

const data = [...unsortedData].sort((a, b) => b.max - a.max);

const apiUrl = "https://app.brafiadi.space/api/wikiasn";

const getListTunjanganKinerjaData = async () => {
	const res = await fetch(`${apiUrl}/tunjangan-kinerja`);
	const data = await res.json();
	return data.data;
};

interface TunjanganKinerja {
	instansi_id: number;
	nama: string;
	mean: number;
	median: number;
	min: number;
	max: number;
	tautan: string;
	dasar_hukum: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
	const colors = {
		min: "#6366f1", // Indigo for min
		median: "#a855f7", // Purple for median
		mean: "#ec4899", // Pink for mean
		max: "#f97316", // Orange for max
	};

	if (active && payload && payload.length) {
		const item = payload[0].payload;
		return (
			<div className="bg-white p-2 border border-gray-200 rounded shadow-lg text-sm text-gray-700">
				<p className="font-semibold">{label}</p>

				<p>{`Min: ${formatRupiah(item.min)}`}</p>
				<p>{`Max: ${formatRupiah(item.max)}`}</p>
				<p>{`Median: ${formatRupiah(item.median)}`}</p>
				<p>{`Mean: ${formatRupiah(item.mean)}`}</p>
			</div>
		);
	}
	return null;
};

const renderCustomizedLabel = (props) => {
	const { x, y, width, height, value, type } = props;
	const radius = 10;
	const colors = {
		min: "#6366f1", // Indigo for min
		median: "#a855f7", // Purple for median
		mean: "#ec4899", // Pink for mean
		max: "#f97316", // Orange for max
	};

	return (
		<g className="z-40">
			<circle cx={x + width + 2} cy={y + 1} r={radius} fill={colors[type]} />
		</g>
	);
};

export default function TunjanganKinerjaChart() {
	const [data, setData] = useState<TunjanganKinerja[]>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	// const data =  getListTunjanganKinerjaData()

	// console.log(data)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${apiUrl}/tunjangan-kinerja`);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const result = await response.json();
				setData(result.data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchData();
	}, []); // Empty dependency array means this runs once on mount

	if (loading)
		return <div className="h-[600px] rounded-lg bg-white my-4">Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	// const minSalary = Math.min(...data.map((item) => item.min));
	// const maxSalary = Math.max(...data.map((item) => item.max));

	const minSalary = 1000000;
	const maxSalary = 100000000;

	// if (!data) {
	// 	return <>Loading ...</>;
	// }

	return (
		<div className="h-[600px] rounded-lg bg-white my-4">
			{data ? (
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={data}
						layout="vertical"
						margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
						barSize={3}
					>
						<XAxis
							type="number"
							domain={[minSalary, maxSalary]}
							tickFormatter={(value) => `${formatRupiah(value)}`}
						/>
						<YAxis dataKey="nama" type="category" width={100} />
						<Tooltip content={<CustomTooltip />} />
						<Bar dataKey="min" stackId="a" fill="transparent">
							<LabelList
								dataKey="nama"
								content={renderCustomizedLabel}
								type="min"
							/>
						</Bar>
						<Bar dataKey="median" stackId="a" fill="hsl(var(--primary))">
							<LabelList
								dataKey="nama"
								content={renderCustomizedLabel}
								type="median"
							/>
						</Bar>

						<Bar dataKey="mean" stackId="a" fill="hsl(var(--primary))">
							<LabelList
								dataKey="nama"
								content={renderCustomizedLabel}
								type="mean"
							/>
						</Bar>

						<Bar dataKey="max" stackId="a">
							{data.map((item: TunjanganKinerja) => (
								<Cell
									key={`cell-${item.instansi_id}`}
									fill="hsl(var(--primary))"
								/>
							))}
							<LabelList
								dataKey="nama"
								content={renderCustomizedLabel}
								type="max"
							/>
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			) : (
				<></>
			)}
		</div>
	);
}
