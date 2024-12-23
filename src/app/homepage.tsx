import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleUserRound, Search } from "lucide-react";
import { AlertWrapper } from "@/components/alert-wrapper";
import { WorkdayAlert, WorkdayAlertSkeleTon } from "@/components/workday-alert";
import { Suspense } from "react";

const apiUrl = process.env.API_URL;

const getData = async () => {
	const res = await fetch(`${apiUrl}/master-data/menu`);
	const data = await res.json();
	return data.data;
};

interface MenuData {
	id: number;
	menu: string;
	link: string;
	deskripsi: string;
	aktif: boolean;
}

export default async function WikiAsnHomepage() {
	// const data = await fetch('https://app.brafiadi.space/api/wikiasn/master-data/menu')
	const data = await getData();
	if (!data) {
		return <div>Loading...</div>;
	}
	// console.log(data);

	return (
		<div className="min-h-screen bg-gray-50/50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-white">
			<div className="container mx-auto px-4">
				<nav className="flex justify-end gap-8 py-4 text-sm align-middle">
					{/* <select className="bg-transparent">
						<option>Choose Language</option>
						<option>English</option>
						<option>Español</option>
						<option>Français</option>
					</select> */}
					{/* <Link href="#" className="text-gray-600 hover:text-gray-900">
						Libur Nasional
					</Link>*/}
					{/* <Link href="#" className="text-gray-400 hover:text-gray-900 pt-1">
							Peraturan
						</Link>  */}
					<TooltipProvider>
						<Tooltip delayDuration={100}>
							<TooltipTrigger>
								<Link
									href="/login"
									className="text-gray-400 hover:text-gray-700"
								>
									<CircleUserRound />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Masuk sebagai kontributor</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>

				<main className="mx-auto max-w-4xl p-4">
					<div className="mb-12">
						<Suspense fallback={<WorkdayAlertSkeleTon />}>
							<AlertWrapper>
								<WorkdayAlert />
							</AlertWrapper>
						</Suspense>
					</div>
					<div className="text-center mb-8">
						<h1 className="text-5xl font-serif mb-1">WikiASN</h1>
						<p className="text-gray-600">Ensikolpedia Aparatur Sipil Negara</p>
					</div>

					<div className="flex flex-col items-center gap-8">
						<Image
							src="/garuda.png"
							alt="WikiASN"
							width={200}
							height={200}
							className="mb-4"
						/>

						<div className="w-full max-w-2xl relative">
							<Input
								type="search"
								placeholder="Cari apa yang ingin kamu ketahui"
								className="w-full pl-4 pr-12 py-6 text-sm md:text-md rounded-full border-gray-200 shadow-sm"
							/>
							<Button
								size="icon"
								className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
							>
								<Search className="h-5 w-5" />
							</Button>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mb-8">
							<Suspense>
								{data.map((item: MenuData) => (
									<Link
										href={
											item.aktif === true
												? item.link === "/hari-libur"
													? `/hari-libur/${new Date().getFullYear()}`
													: item.link
												: "#"
										}
										key={item.id}
									>
										<Card
											className={`${item.aktif === true && "hover:border-red-500 hover:border-2"} p-3 md:p-4 h-22 md:h-28 `}
										>
											<div className="flex gap-2 md:gap-4">
												<div>
													<h2 className="font-medium text-md md:text-sm md:mb-2 text-red-600">
														{item.menu}
													</h2>
													<p className="text-xs text-gray-600 mb-2">
														{item.deskripsi}
													</p>
												</div>
											</div>
										</Card>
									</Link>
								))}
							</Suspense>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
