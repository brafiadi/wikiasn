"use client";
import type * as React from "react";
import { BookOpen, LayoutDashboard } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";

const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: LayoutDashboard,
		},
		{
			title: "Manajemen Konten",
			url: "/dashboard/manajemen-konten",
			icon: BookOpen,
			items: [
				{
					title: "Standar Biaya Masukan",
					url: "/dashboard/manajemen-konten/standar-biaya-masukan",
				},
				{
					title: "Peraturan",
					url: "/dashboard/manajemen-konten/peraturan",
				},
				{
					title: "Tunjangan Kinerja",
					url: "/dashboard/manajemen-konten/tunjangan-kinerja",
				},
			],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { data: session } = useSession();
	const router = useRouter();

	const user = {
		name: session?.user?.name || "",
		email: session?.user?.email || "",
		avatar: session?.user?.image || "",
	};

	const handleNavigation = (url: string) => {
		router.push(url);
	};

	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Button variant={"ghost"} onClick={() => handleNavigation("/")}>
								<div className="flex aspect-square size-8 items-center justify-center ">
									<Image src="/favicon.svg" width={64} height={64} alt="logo" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold font-serif">
										WikiASN
									</span>
									<span className="truncate text-xs">Enskilopedia ASN</span>
								</div>
							</Button>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				{/* <NavProjects projects={data.projects} />
				<NavSecondary items={data.navSecondary} className="mt-auto" /> */}
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={user} />
			</SidebarFooter>
		</Sidebar>
	);
}
