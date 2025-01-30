"use client";
import { ChevronRight, type LucideIcon } from "lucide-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url?: string;
		icon: LucideIcon;
		isActive?: boolean;
		items?: {
			title: string;
			url: string;
		}[];
	}[];
}) {
	const router = useRouter();
	const pathname = usePathname();
	const handleNavigation = (url: string) => {
		router.push(url);
	};
	// console.log('path', pathname)
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Menu Kontributor</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<Collapsible key={item.title} asChild defaultOpen>
						<SidebarMenuItem>
							{!item.items || item.items.length === 0 ? (
								<SidebarMenuButton asChild tooltip={item.title}>
									<button
										type="button"
										onClick={() => item.url && handleNavigation(item.url)}
										className={
											pathname === item.url
												? "bg-white border font-semibold shadow-sm"
												: "text-neutral-500"
										}
									>
										<item.icon />
										<span>{item.title}</span>
									</button>
								</SidebarMenuButton>
							) : (
								<>
									<SidebarMenuButton asChild tooltip={item.title}>
										<button
											type="button"
											onClick={() =>
												item.items &&
												item.items.length > 0 &&
												handleNavigation(item.items[0].url)
											}
											className={
												pathname.includes(item.url ?? "")
													? "bg-white border font-semibold shadow-sm"
													: "text-neutral-500"
											}
										>
											<item.icon />
											<span>{item.title}</span>
										</button>
									</SidebarMenuButton>

									{item.items?.length ? (
										<>
											<CollapsibleTrigger asChild>
												<SidebarMenuAction className="data-[state=open]:rotate-90">
													<ChevronRight />
													<span className="sr-only">Toggle</span>
												</SidebarMenuAction>
											</CollapsibleTrigger>
											<CollapsibleContent>
												<SidebarMenuSub className="mt-1">
													{item.items?.map((subItem) => (
														<SidebarMenuSubItem key={subItem.title}>
															<SidebarMenuSubButton asChild className="w-full">
																<button
																	type="button"
																	onClick={() =>
																		subItem.url && handleNavigation(subItem.url)
																	}
																	className={
																		pathname.includes(subItem.url ?? "")
																			? "bg-gray-100"
																			: "text-neutral-400/70"
																	}
																>
																	<span>{subItem.title}</span>
																</button>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
													))}
												</SidebarMenuSub>
											</CollapsibleContent>
										</>
									) : null}
								</>
							)}
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
