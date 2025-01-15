import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard Kontributor - WikiASN",
};

export default async function Page() {
	const session = await auth();

	if (!session?.user) {
		redirect("/login");
	}
	return (
		<>
			<h1>Dashboard Kontributor</h1>
		</>
	);
}
