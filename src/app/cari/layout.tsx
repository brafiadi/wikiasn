import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertWrapper } from "@/components/alert-wrapper";
import { WorkdayAlert, WorkdayAlertSkeleTon } from "@/components/workday-alert";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-gray-50/50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-white">
			<div className="container mx-auto px-4">
				<main className="mx-auto max-w-4xl p-4">
					<div className="mt-4 mb-12">
						<div className="w-full h-[20px]" />
					</div>
					<div className="text-center mb-8">
						<Link href="/">
							<h1 className="text-5xl font-serif mb-1">WikiASN</h1>
						</Link>
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

						{children}
					</div>
				</main>
			</div>
		</div>
	);
}
