import { Card } from "@/components/ui/card";

interface Holiday {
	month: string;
	date: string;
	name: string;
}

export default function HolidayCalendar() {
	const holidays: Holiday[] = [
		{ month: "Januari", date: "1", name: "Tahun Baru 2024 Masehi" },
		{ month: "Februari", date: "8", name: "Isra Mikraj Nabi Muhammad SAW" },
		{ month: "Februari", date: "9", name: "Cuti Bersama Tahun Baru Imlek" },
		{ month: "Februari", date: "10", name: "Tahun Baru Imlek 2575 Kongzili" },
		{ month: "Maret", date: "11", name: "Nyepi Tahun Baru Saka 1946" },
		{ month: "Maret", date: "12", name: "Cuti Bersama Hari Suci Nyepi" },
		{ month: "Maret", date: "29", name: "Wafat Isa Almasih" },
		{ month: "Maret", date: "31", name: "Hari Paskah" },
		{ month: "April", date: "8,9", name: "Cuti Bersama Idul Fitri 1445H" },
		{ month: "April", date: "10,11", name: "Hari Raya Idul Fitri 1445H" },
		{ month: "April", date: "12,15", name: "Cuti Bersama Idul Fitri 1445H" },
		{ month: "Mei", date: "1", name: "Hari Buruh Internasional" },
		{ month: "Mei", date: "9", name: "Kenaikan Isa Almasih" },
		{ month: "Mei", date: "10", name: "Cuti Bersama Isa Almasih" },
		{ month: "Mei", date: "23", name: "Hari Raya Waisak 2568 BE" },
		{ month: "Mei", date: "24", name: "Cuti Bersama Hari Raya Waisak" },
		{ month: "Juni", date: "1", name: "Hari Lahir Pancasila" },
		{ month: "Juni", date: "17", name: "Hari Raya Idul Adha 1445H" },
		{ month: "Juni", date: "18", name: "Cuti Bersama Idul Adha 1445H" },
		{ month: "Juli", date: "7", name: "Tahun Baru Islam 1446H" },
		{ month: "Agustus", date: "17", name: "Hari Kemerdekaan RI" },
		{ month: "September", date: "16", name: "Maulid Nabi Muhammad SAW" },
		{ month: "Desember", date: "25", name: "Hari Raya Natal" },
		{ month: "Desember", date: "26", name: "Cuti Bersama Hari Raya Natal" },
	];

	return (
		<div className="min-h-screen bg-sky-400 p-4 md:p-8">
			<div className="mx-auto max-w-6xl">
				{/* Header */}
				<div className="mb-8 rounded-lg bg-white/90 p-4">
					<h1 className="text-center text-2xl font-bold text-navy-900 md:text-4xl">
						HARI LIBUR NASIONAL
					</h1>
					<h2 className="text-center text-xl font-bold text-navy-900 md:text-3xl">
						DAN CUTI BERSAMA TAHUN 2024
					</h2>
				</div>

				{/* Calendar Grid */}
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
					{holidays.map((holiday, index) => (
						<Card
							key={index}
							className="flex flex-col overflow-hidden border-2 border-gray-200 bg-white"
						>
							<div className="bg-red-600 p-2">
								<h3 className="text-center text-sm font-semibold text-white md:text-base">
									{holiday.month}
								</h3>
							</div>
							<div className="flex flex-1 flex-col items-center p-2 text-center">
								<span className="text-2xl font-bold text-red-600 md:text-3xl">
									{holiday.date}
								</span>
								<span className="mt-1 text-xs text-red-600 md:text-sm">
									{holiday.name}
								</span>
							</div>
						</Card>
					))}
				</div>

				{/* Footer */}
				{/* <div className="mt-8 text-center text-sm text-white">
					<p>
						SUMBER: Sindonews.com • NASKAH: Binti Mufarida • INFOGRAFIS: David
					</p>
				</div> */}
			</div>
		</div>
	);
}
