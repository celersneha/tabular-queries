"use server";

import { prisma } from "@/lib/prisma";
import {
  Department as PrismaDepartment,
  Status as PrismaStatus,
} from "../../generated/prisma/client";

interface GetUsersParams {
  search: string;
  department: string;
  page: number;
  limit: number;
}

export async function getUsers({
  search,
  department,
  page,
  limit,
}: GetUsersParams) {
  const whereClause = {
    AND: [
      search
        ? {
            OR: [
              { name: { contains: search, mode: "insensitive" as const } },
              { email: { contains: search, mode: "insensitive" as const } },
            ],
          }
        : {},
      department !== "all"
        ? { department: department as PrismaDepartment }
        : {},
    ],
  };

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where: whereClause,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.user.count({
      where: whereClause,
    }),
  ]);

  return {
    users,
    total,
    totalPages: Math.ceil(total / limit),
  };
}

export async function toggleUserStatus(id: string, status: boolean) {
  await prisma.user.update({
    where: { id },
    data: { status: status ? PrismaStatus.ACTIVE : PrismaStatus.INACTIVE },
  });

  return { success: true };
}
