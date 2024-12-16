"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Cell,
} from "recharts";

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

const CustomTooltip = ({ active, payload, label }: any) => {
	if (active && payload && payload.length) {
		const item = payload[0].payload;
		return (
			<div className="bg-white p-2 border border-gray-200 rounded shadow-lg">
				<p className="font-bold">{label}</p>
				<p>{`Min: Rp ${item.min.toFixed(2)}M`}</p>
				<p>{`Max: Rp ${item.max.toFixed(2)}M`}</p>
			</div>
		);
	}
	return null;
};

export default function SalaryRangeChart() {
	const minSalary = Math.min(...data.map((item) => item.min));
	const maxSalary = Math.max(...data.map((item) => item.max));

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>
					Range Tunjangan Kinerja Pegawai di Instansi Pemerintah Pusat
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[600px] w-full">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							data={data}
							layout="vertical"
							margin={{ top: 20, right: 30, left: 200, bottom: 5 }}
						>
							<XAxis
								type="number"
								domain={[minSalary, maxSalary]}
								tickFormatter={(value) => `${value}M`}
							/>
							<YAxis dataKey="name" type="category" width={180} />
							<Tooltip content={<CustomTooltip />} />
							<Bar dataKey="min" stackId="a" fill="transparent" />
							<Bar dataKey="max" stackId="a">
								{data.map((entry, index) => (
									<Cell key={`cell-${index}`} fill="hsl(var(--primary))" />
								))}
							</Bar>
						</BarChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
}
