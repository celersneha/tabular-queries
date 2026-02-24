"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Department } from "@/types/user";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  department: string;
  setDepartment: (value: string) => void;
}

export default function QuerySection({
  search,
  setSearch,
  department,
  setDepartment,
}: Props) {
  return (
    <div className="flex items-center gap-4 mb-6">
      {/* Search Bar */}
      <Input
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />

      {/* Department Dropdown */}
      <Select value={department} onValueChange={setDepartment}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="All Departments" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Departments</SelectItem>
          <SelectItem value={Department.HR}>{Department.HR}</SelectItem>
          <SelectItem value={Department.TECHNICAL}>
            {Department.TECHNICAL}
          </SelectItem>
          <SelectItem value={Department.SALES}>{Department.SALES}</SelectItem>
          <SelectItem value={Department.MARKETING}>
            {Department.MARKETING}
          </SelectItem>
          <SelectItem value={Department.FINANCE}>
            {Department.FINANCE}
          </SelectItem>
          <SelectItem value={Department.OPERATIONS}>
            {Department.OPERATIONS}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
