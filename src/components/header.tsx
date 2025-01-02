import Link from "next/link";
import { Search } from "lucide-react";
import SearchHeader from "./search-header";

export default function Header() {
	return (
		<header className="border-b shadow-sm sticky top-0 bg-white z-50">
			<div className="container flex items-center justify-between py-4 px-8 md:px-28">
				<div className="flex items-center gap-2">
					<Link href="/" className="text-2xl font-serif flex align-middle">
						WikiASN
					</Link>
				</div>
				<div className="flex-1 max-w-xl ml-8 md:pl-16 justify-items-end">
					{/* <div className="relative">
						<input
							type="search"
							placeholder=""
							className="w-full border-b outline-0 px-8 py-2 md:pr-10"
						/>
						<Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
					</div> */}
					<SearchHeader />
				</div>
			</div>
		</header>
	);
}
