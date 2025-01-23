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
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

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
	const handleNavigation = (url: string) => {
		router.push(url);
	};
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Menu Kontributor</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<Collapsible key={item.title} asChild defaultOpen>
						<SidebarMenuItem>
							{item.url ? (
								<SidebarMenuButton asChild tooltip={item.title}>
									<button
										type="button"
										onClick={() => item.url && handleNavigation(item.url)}
									>
										<item.icon />
										<span>{item.title}</span>
									</button>
								</SidebarMenuButton>
							) : (
								<>
									<SidebarMenuButton asChild tooltip={item.title}>
										<button type="button">
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
												<SidebarMenuSub>
													{item.items?.map((subItem) => (
														<SidebarMenuSubItem key={subItem.title}>
															<SidebarMenuSubButton asChild>
																<button
																	type="button"
																	onClick={() =>
																		subItem.url && handleNavigation(subItem.url)
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
