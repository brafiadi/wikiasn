import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
	return (
		<header className="border-b shadow-sm sticky top-0 bg-white z-50">
			<div className="container flex items-center justify-between py-4 px-4 md:px-12">
				<div className="flex items-center gap-2">
					<Link href="/" className="text-2xl font-serif flex align-middle">
						WikiASN
					</Link>
				</div>
				<div className="flex-1 max-w-xl mx-8">
					<div className="relative">
						<input
							type="search"
							placeholder=""
							className="md:w-full border-b outline-0 px-4 py-2 md:pr-10"
						/>
						<Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
					</div>
				</div>
			</div>
		</header>
	);
}
