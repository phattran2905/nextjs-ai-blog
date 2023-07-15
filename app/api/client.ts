// https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
import { PrismaClient } from "@prisma/client";

let prismaImage: PrismaClient;

if (process.env.NODE_ENV === "production") {
	prismaImage = new PrismaClient();
} else {
	if (!(global as any).prisma) {
		(global as any).prisma = new PrismaClient();
	}

	prismaImage = (global as any).prisma;
}

export const prisma = prismaImage;
