"use client";

import { Switch } from "@/components/ui/switch";
import { toggleUserStatus } from "@/actions/users";
import { Button } from "@/components/ui/button";
import { User } from "@/types/user";
import { Status } from "../../generated/prisma/enums";

interface Props {
  data: User[];
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  loading: boolean;
}

export default function ResultTable({
  data,
  page,
  setPage,
  totalPages,
  loading,
}: Props) {
  const handleToggle = async (id: string, currentStatus: Status) => {
    const newStatus = currentStatus === Status.ACTIVE ? false : true;
    await toggleUserStatus(id, newStatus);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <table className="w-full border rounded-lg">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.department}</td>
              <td className="p-3">
                <Switch
                  checked={user.status === Status.ACTIVE}
                  onCheckedChange={() => handleToggle(user.id, user.status)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>

        <span className="px-3 py-2">
          Page {page} of {totalPages}
        </span>

        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
