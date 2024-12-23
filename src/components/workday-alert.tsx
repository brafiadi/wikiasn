import { CalendarDays, Briefcase } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const isWorkDay = (date: Date): boolean => {
	const day = date.getDay();
	return day >= 1 && day <= 5; // Monday to Friday are work days
};

const apiUrl = process.env.API_URL;

const getHariIniData = async () => {
	const res = await fetch(`${apiUrl}/hari-libur/hari-ini`);
	const data = await res.json();
	return data.data;
};

export async function WorkdayAlert() {
	const data = await getHariIniData();

	const isWork = !data.libur;

	// console.log(data);

	return (
		<div
			className={`rounded-lg p-4 ${isWork ? "bg-orange-100" : "bg-red-100"} shadow-sm`}
		>
			<div className="flex items-center">
				{isWork ? (
					<Briefcase className="h-4 w-4 text-orange-600 mr-2" />
				) : (
					<CalendarDays className="h-4 w-4 text-red-600 mr-2" />
				)}
				<h2
					className={`text-md font-semibold ${isWork ? "text-orange-800" : "text-red-800"}`}
				>
					{isWork ? "Hari Kerja" : `Libur ${data.hari_libur}`}
				</h2>
			</div>
			<p
				className={`mt-1  text-sm ${isWork ? "text-orange-700" : "text-red-700"}`}
			>
				{isWork
					? `Hari ini ${data.hari_ini}. ${data.pesan}!`
					: `Hari ini ${data.hari_ini}. ${data.pesan}`}
			</p>
		</div>
	);
}

export function WorkdayAlertSkeleTon() {
	return <Skeleton className="w-full h-full" />;
}
