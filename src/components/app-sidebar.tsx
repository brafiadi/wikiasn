"use client";

import type * as React from "react";
import {
	BookOpen,
	Bot,
	Command,
	Frame,
	LayoutDashboard,
	LifeBuoy,
	PieChart,
	Send,
	Settings2,
	SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
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
import { useSession } from "next-auth/react";

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
			// url: "/dashboard/konten",
			icon: BookOpen,
			items: [
				{
					title: "Standar Biaya Masukan",
					url: "/dashboard/manajemen-konten/standar-biaya-masukan",
				},
				{
					title: "Peraturan",
					url: "#",
				},
				{
					title: "Tunjangan Kinerja",
					url: "#",
				},
			],
		},
		// {
		// 	title: "Documentation",
		// 	url: "#",
		// 	icon: BookOpen,
		// 	items: [
		// 		{
		// 			title: "Introduction",
		// 			url: "#",
		// 		},
		// 		{
		// 			title: "Get Started",
		// 			url: "#",
		// 		},
		// 		{
		// 			title: "Tutorials",
		// 			url: "#",
		// 		},
		// 		{
		// 			title: "Changelog",
		// 			url: "#",
		// 		},
		// 	],
		// },
		// {
		// 	title: "Settings",
		// 	url: "#",
		// 	icon: Settings2,
		// 	items: [
		// 		{
		// 			title: "General",
		// 			url: "#",
		// 		},
		// 		{
		// 			title: "Team",
		// 			url: "#",
		// 		},
		// 		{
		// 			title: "Billing",
		// 			url: "#",
		// 		},
		// 		{
		// 			title: "Limits",
		// 			url: "#",
		// 		},
		// 	],
		// },
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { data: session } = useSession();

	const user = {
		name: session?.user?.name || "",
		email: session?.user?.email || "",
		avatar: session?.user?.image || "",
	};

	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link href="/">
								<div className="flex aspect-square size-8 items-center justify-center ">
									<Image src="/favicon.svg" width={64} height={64} alt="logo" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold font-serif">
										WikiASN
									</span>
									<span className="truncate text-xs">Enskilopedia ASN</span>
								</div>
							</Link>
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
