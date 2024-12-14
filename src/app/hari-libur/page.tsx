import HolidayCalendar from "./hari-libur";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "WikiASN - Hari Libur Nasional dan Cuti Bersama",
};

export default function HariLiburPage() {
	return (
		<div className="container mx-auto bg-gray-50/50 w-full">
			<HolidayCalendar />
		</div>
	);
}
