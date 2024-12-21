import HolidayCalendar from "./hari-libur";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hari Libur Nasional dan Cuti Bersama - WikiASN",
};

// export const dynamic = "force-dynamic";

export default function HariLiburPage() {
	return (
		<div className=" bg-gray-50/50 w-full">
			<HolidayCalendar />
		</div>
	);
}
