import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "WikiASN - Ensiklopedia Aparatur Sipil Negara",
	description: "Ensiklopedia Aparatur Sipil Negara",
	verification: {
		google: "v3X9GMlhi_PCQTrpxwM_hDFIy0gc7ZJYQkrYtE4OT7U",
	},
	icons: {
		icon: "/favicon-96x96.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-1SM9R762R2"
				/>
				<script id="google-analytics">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-1SM9R762R2');
					`}
				</script>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
