import { PrismaClient } from "../../generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: [
            {
                emit: "event",
                level: "query",
            },
            {
                emit: "stdout",
                level: "error",
            },
            {
                emit: "stdout",
                level: "info",
            },
            {
                emit: "stdout",
                level: "warn",
            },
        ],
        transactionOptions: {
            maxWait: 10000,
            timeout: 10000,
        },
    });


if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
