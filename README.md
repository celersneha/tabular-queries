# Tabular Queries

A modern user data management system built with **Next.js 16**, **Prisma ORM**, and **PostgreSQL**. It features advanced filtering, searching, and pagination capabilities with a responsive UI using **shadcn/ui** components.

## Features

- 🔍 **Real-time Search** - Search users by name or email with debouncing
- 🏢 **Department Filtering** - Filter users by department with instant results
- 📑 **Pagination** - Navigate through large datasets efficiently
- 🔄 **Status Toggle** - Update user status (ACTIVE/INACTIVE) directly from the table
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Server Actions** - Secure server-side data fetching with Next.js 16
- 🎨 **Modern UI** - Built with shadcn/ui for a professional look

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **UI Components**: shadcn/ui, Radix UI, Tailwind CSS
- **Backend**: Next.js Server Actions
- **Database**: PostgreSQL with Prisma ORM
- **State Management**: React Hooks
- **Styling**: Tailwind CSS

## Project Structure

```
src/
├── actions/
│   └── users.ts              # Server actions for user operations
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── components/
│   ├── query-section.tsx     # Search and filter controls
│   ├── result-table.tsx      # Data table with pagination
│   ├── main-client.tsx       # Client wrapper
│   └── ui/                   # shadcn/ui components
├── hooks/
│   └── useData.ts            # Custom hook for data fetching
├── lib/
│   ├── prisma.ts             # Prisma client instance
│   └── utils.ts              # Utility functions
└── types/
    └── user.ts               # User type definitions
```

## Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- `.env.local` file with `DATABASE_URL`

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/tabular_queries"
```

### 3. Set Up Database

Push the Prisma schema to PostgreSQL and generate prisma client:

```bash
npm run db:push
npm run db:generate
```

### 4. Seed Sample Data

Populate the database with 50 sample users:

```bash
npm run seed
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Database
npm run db:push      # Sync Prisma schema with database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Create database migrations
npm run db:reset     # Reset database
npm run db:studio    # Open Prisma Studio

# Setup
npm run db:setup     # Run migrations and generate client
npm run seed         # Seed sample data

# Production
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## How It Works

### Data Flow

1. **User interacts** with search input and department dropdown
2. **Query Section** captures input and triggers `useData` hook
3. **Debounced search** (500ms) prevents excessive API calls
4. **Server Action** (`getUsers`) handles filtering, searching, and pagination
5. **Results** are validated against Prisma enums before querying
6. **Result Table** displays paginated data with status toggle
7. **Toggle updates** immediately via `toggleUserStatus` action

### Key Features Explained

#### Search & Filter

- Search debounces after 500ms to optimize performance
- Department filter validates against enum values
- Both can be used independently or together

#### Status Toggle

- Click the switch to toggle user status
- Only accepts valid enum values (ACTIVE/INACTIVE)
- Updates immediately without page reload

#### Pagination

- Shows 10 users per page
- Navigate using Prev/Next buttons
- Current page indicator displays position

## User Enum Values

### Departments

- `HR` - Human Resources
- `TECHNICAL` - Technical/Engineering
- `SALES` - Sales
- `MARKETING` - Marketing
- `FINANCE` - Finance
- `OPERATIONS` - Operations

### Status

- `ACTIVE` - User is active
- `INACTIVE` - User is inactive

### Roles

- `ADMIN` - Administrator
- `USER` - Regular user
- `MANAGER` - Manager

## Database Schema

The `User` model includes:

- `id` - UUID primary key
- `name` - User's name
- `email` - User's email address
- `department` - Department enum
- `role` - User role enum
- `status` - User status enum
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## Troubleshooting

### Database Connection Error

- Verify PostgreSQL is running
- Check `DATABASE_URL` is correct
- Run `npm run db:push` to sync schema

### Invalid Department Error

- Ensure dropdown uses valid enum values
- Check `src/types/user.ts` for valid departments
- Reseed database if needed: `npm run db:reset && npm run seed`

### Type Errors

- Run `npm run db:generate` to regenerate Prisma types
- Clear `.next` folder: `rm -rf .next`
- Restart development server

## Performance Optimizations

- **Debounced Search**: Reduces database queries
- **Server Actions**: Minimizes client-side logic
- **Pagination**: Efficiently handles large datasets
- **Enum Validation**: Prevents invalid queries

## Future Enhancements

- [ ] User creation/editing interface
- [ ] Bulk actions (status updates, deletions)
- [ ] Advanced filters and sorting
- [ ] Export to CSV/Excel
- [ ] User role-based access control
- [ ] Activity logging
- [ ] User profile pages

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

This project is optimized for deployment on [Vercel](https://vercel.com):

```bash
npm run build
npm start
```

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
