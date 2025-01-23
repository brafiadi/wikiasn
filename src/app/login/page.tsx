import { LoginForm } from "./login-form";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Page() {
	const session = await auth();

	if (session?.user) {
		redirect("/kontributor");
	}

	return (
		<Suspense fallback={<Loading />}>
			<div className="flex w-full items-center justify-center px-4 ">
				<LoginForm />
			</div>
		</Suspense>
	);
}

function Loading() {
	return (
		<div className="flex flex-col items-center justify-center p-2">
			<div className="relative w-8 h-8">
				<div className="absolute inset-0 border-[4px] border-red-500 rounded-full border-t-transparent animate-spin" />
			</div>
		</div>
	);
}
