import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Page() {
	const session = await auth();

	if (!session?.user) {
		redirect("/login");
	}
	return (
		<div className="flex-1 space-y-4 px-8 py-4">
			<div className="flex items-center justify-between space-y-2">
				<h3 className="text-2xl font-bold">Dashboard</h3>
			</div>
			<Tabs defaultValue="overview" className="space-y-4">
				<TabsList>
					<TabsTrigger value="overview">Rangkuman</TabsTrigger>
					<TabsTrigger value="analytics" disabled>
						Analisis
					</TabsTrigger>
					<TabsTrigger value="reports" disabled>
						Laporan
					</TabsTrigger>
				</TabsList>
				<TabsContent value="overview" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">....</CardTitle>
							</CardHeader>
							<CardContent>
								<Skeleton className="h-12" />
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">.....</CardTitle>
							</CardHeader>
							<CardContent>
								<Skeleton className="h-12" />
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">.....</CardTitle>
							</CardHeader>
							<CardContent>
								<Skeleton className="h-12" />
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">.....</CardTitle>
							</CardHeader>
							<CardContent>
								<Skeleton className="h-12" />
							</CardContent>
						</Card>
					</div>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
						<Card className="col-span-4 h-96">
							<CardHeader>
								<CardTitle className="text-xl">.....</CardTitle>
							</CardHeader>
							<CardContent>
								<Skeleton className="h-72" />
							</CardContent>
						</Card>
						<Card className="col-span-3">
							<CardHeader>
								<CardTitle className="text-xl">......</CardTitle>
							</CardHeader>
							<CardContent>
								<Skeleton className="h-72" />
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
