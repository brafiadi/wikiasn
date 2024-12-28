import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import Header from "@/components/header";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-gray-50/50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-white">
			<div className="container mx-auto max-w-7xl bg-white shadow-lg min-h-screen">
				<Header />
				<main className="bg-gray-100">{children}</main>
			</div>
		</div>
	);
}
