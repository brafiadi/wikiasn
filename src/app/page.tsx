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
import { AlertWrapper } from "@/components/alert-wrapper";
import { WorkdayAlert, WorkdayAlertSkeleTon } from "@/components/workday-alert";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Loader, { MiniLoader } from "@/components/loader";
import SearchForm from "@/components/search.form";

// export const dynamic = "force-dynamic";

export const revalidate = 3600; // invalidate every hour

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

export default async function Page() {
	return (
		<div className="min-h-screen bg-gray-50/50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-white">
			<div className="container mx-auto px-4">
				<main className="mx-auto max-w-4xl p-4">
					<div className="mt-4 mb-12">
						<Suspense fallback={<WorkdayAlertSkeleTon />}>
							<AlertWrapper>
								<WorkdayAlert />
							</AlertWrapper>
						</Suspense>
					</div>
					<div className="text-center mb-8">
						<h1 className="text-5xl font-serif mb-1">WikiASN</h1>
						<p className="text-gray-600">Ensiklopedia Aparatur Sipil Negara</p>
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
							<Suspense fallback={null}>
								<SearchForm />
							</Suspense>
						</div>

						<Suspense fallback={<CardLoading />}>
							<Menu />
							<div className="mb-8 text-red-500 underline text-sm">
								<Link href="/login">Akses sebagai kontributor</Link>
							</div>
						</Suspense>
					</div>
				</main>
			</div>
		</div>
	);
}

async function Menu() {
	const data = await getData();

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mb-2">
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
					<TooltipProvider>
						<Tooltip delayDuration={0}>
							<TooltipTrigger asChild>
								<Card
									className={`${item.aktif === true && "hover:border-red-500 hover:border-2 b"} p-3 md:p-4 h-22 md:h-28 ${item.aktif === false && "bg-gray-100"}`}
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
							</TooltipTrigger>
							{item.aktif === false && (
								<TooltipContent
									side="top"
									className="bg-gray-50"
									sideOffset={-10}
								>
									<p>Dalam pengembangan</p>
								</TooltipContent>
							)}
						</Tooltip>
					</TooltipProvider>
				</Link>
			))}
		</div>
	);
}

function CardLoading() {
	return (
		<div className="my-8">
			<MiniLoader />
		</div>
	);
}
