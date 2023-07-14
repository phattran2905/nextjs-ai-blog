import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "app/(shared)/Navbar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Blog AI App",
	description: "Blog built in NextJS that uses AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={openSans.className}
		>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
