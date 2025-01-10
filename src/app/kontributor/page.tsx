import { auth, signOut } from "../../../auth";
import { LoginForm } from "../login/login-form";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { loginUser } from "@/lib/auth";
import CheckContributorButton from "./cek-kontributor.button";

export default async function Page() {
	const session = await auth();

	return (
		<>
			<div className="flex w-full items-center justify-center px-4 ">
				{!session?.user ? (
					<LoginForm />
				) : (
					<div>
						<h2 className="text-md text-gray-500 text-center mb-4">
							Akses kontributor masih dalam pengembangan
						</h2>
						<div className="mt-4 text-center text-sm">
							<div className="grid gap-4">
								{/* <pre className="whitespace-pre-wrap break-all px-4 py-6">
									{JSON.stringify(session, null, 2)}
								</pre> */}

								<div className="flex items-center gap-4 p-4 ">
									<Avatar className="h-12 w-12">
										<AvatarImage
											src={session?.user?.image ?? undefined}
											alt="Profile picture"
										/>
										<AvatarFallback>
											{session?.user?.name?.charAt(0) || "U"}
										</AvatarFallback>
									</Avatar>
									<div className="flex flex-col text-left">
										<div className="font-semibold">{session?.user?.name}</div>
										<div className="	">{session?.user?.email}</div>
									</div>
								</div>

								<div className="flex flex-col gap-4 items-center">
									<form
										action={async () => {
											"use server";
											await signOut({ redirectTo: "/login" });
										}}
									>
										<Button variant="outline" className="shadow-sm">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												x="0px"
												y="0px"
												width="120"
												height="120"
												viewBox="0 0 48 48"
											>
												<title>Google Logo</title>
												<path
													fill="#FFC107"
													d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
												/>
												<path
													fill="#FF3D00"
													d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
												/>
												<path
													fill="#4CAF50"
													d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
												/>
												<path
													fill="#1976D2"
													d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
												/>
											</svg>
											Keluar
										</Button>
									</form>

									{/* {session?.user?.email && (
										<CheckContributorButton email={session.user.email} />
									)} */}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
