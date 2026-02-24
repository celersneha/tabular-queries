import "dotenv/config";
import {
  PrismaClient,
  Department,
  Role,
  Status,
} from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const users = [
    {
      name: "john doe",
      department: Department.TECHNICAL,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "JANE SMITH",
      department: Department.HR,
      role: Role.ADMIN,
      status: Status.ACTIVE,
    },
    {
      name: "Alice Brown",
      department: Department.SALES,
      role: Role.MANAGER,
      status: Status.ACTIVE,
    },
    {
      name: "bob johnson",
      department: Department.MARKETING,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "CHARLIE WILSON",
      department: Department.FINANCE,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "diana lee",
      department: Department.OPERATIONS,
      role: Role.MANAGER,
      status: Status.ACTIVE,
    },
    {
      name: "Edward Davis",
      department: Department.TECHNICAL,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "fiona garcia",
      department: Department.HR,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "GEORGE MARTINEZ",
      department: Department.SALES,
      role: Role.ADMIN,
      status: Status.ACTIVE,
    },
    {
      name: "hannah rodriguez",
      department: Department.MARKETING,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "Ian Lopez",
      department: Department.FINANCE,
      role: Role.MANAGER,
      status: Status.ACTIVE,
    },
    {
      name: "Julia Gonzalez",
      department: Department.OPERATIONS,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "kevin perez",
      department: Department.TECHNICAL,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "LAURA TAYLOR",
      department: Department.HR,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "michael anderson",
      department: Department.SALES,
      role: Role.MANAGER,
      status: Status.ACTIVE,
    },
    {
      name: "NATALIE THOMAS",
      department: Department.MARKETING,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "Oliver Jackson",
      department: Department.FINANCE,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "paula white",
      department: Department.OPERATIONS,
      role: Role.ADMIN,
      status: Status.ACTIVE,
    },
    {
      name: "QUINN HARRIS",
      department: Department.TECHNICAL,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "rachel clark",
      department: Department.HR,
      role: Role.MANAGER,
      status: Status.ACTIVE,
    },
    {
      name: "SAM LEWIS",
      department: Department.SALES,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "tina robinson",
      department: Department.MARKETING,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "ULYSSES WALKER",
      department: Department.FINANCE,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "victoria hall",
      department: Department.OPERATIONS,
      role: Role.MANAGER,
      status: Status.ACTIVE,
    },
    {
      name: "william allen",
      department: Department.TECHNICAL,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "XAVIER YOUNG",
      department: Department.HR,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "yvonne king",
      department: Department.SALES,
      role: Role.ADMIN,
      status: Status.ACTIVE,
    },
    {
      name: "ZACHARY WRIGHT",
      department: Department.MARKETING,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "amelia lopez",
      department: Department.FINANCE,
      role: Role.MANAGER,
      status: Status.ACTIVE,
    },
    {
      name: "BENJAMIN HILL",
      department: Department.OPERATIONS,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "charlotte green",
      department: Department.TECHNICAL,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "DANIEL ADAMS",
      department: Department.HR,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "elizabeth baker",
      department: Department.SALES,
      role: Role.MANAGER,
      status: Status.ACTIVE,
    },
    {
      name: "FRANKLIN NELSON",
      department: Department.MARKETING,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "gabriella carter",
      department: Department.FINANCE,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "HENRY MITCHELL",
      department: Department.OPERATIONS,
      role: Role.ADMIN,
      status: Status.ACTIVE,
    },
    {
      name: "isabella perez",
      department: Department.TECHNICAL,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "JACKSON ROBERTS",
      department: Department.HR,
      role: Role.MANAGER,
      status: Status.ACTIVE,
    },
    {
      name: "katherine turner",
      department: Department.SALES,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "LIAM PHILLIPS",
      department: Department.MARKETING,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "madison campbell",
      department: Department.FINANCE,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "NATHAN PARKER",
      department: Department.OPERATIONS,
      role: Role.MANAGER,
      status: Status.ACTIVE,
    },
    {
      name: "olivia evans",
      department: Department.TECHNICAL,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "PATRICK EDWARDS",
      department: Department.HR,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "quinn collins",
      department: Department.SALES,
      role: Role.ADMIN,
      status: Status.ACTIVE,
    },
    {
      name: "REBECCA STEWART",
      department: Department.MARKETING,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "samuel sanchez",
      department: Department.FINANCE,
      role: Role.MANAGER,
      status: Status.ACTIVE,
    },
    {
      name: "TAYLOR MORRIS",
      department: Department.OPERATIONS,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "ursula rogers",
      department: Department.TECHNICAL,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "VICTOR REED",
      department: Department.HR,
      role: Role.USER,
      status: Status.ACTIVE,
    },
    {
      name: "wendy cook",
      department: Department.SALES,
      role: Role.MANAGER,
      status: Status.ACTIVE,
    },
    {
      name: "XANDER MORGAN",
      department: Department.MARKETING,
      role: Role.USER,
      status: Status.ACTIVE,
    },
  ].map((user) => ({
    ...user,
    email: user.name.toLowerCase().replace(/\s+/g, ".") + "@example.com",
  }));

  await prisma.user.createMany({
    data: users,
  });

  console.log("Seeded 50 users successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
