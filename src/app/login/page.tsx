import { LoginForm } from "./login-form";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function Page() {
	const session = await auth();

	if (session?.user) {
		redirect("/kontributor");
	}

	return (
		<>
			<div className="flex w-full items-center justify-center px-4 ">
				<LoginForm />
			</div>
		</>
	);
}
