"use client";

import { Switch } from "@/components/ui/switch";
import { toggleUserStatus } from "@/actions/users";
import { Button } from "@/components/ui/button";
import { User, Status } from "@/types/user";

interface Props {
  data: User[];
  setData: React.Dispatch<React.SetStateAction<User[]>>;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  loading: boolean;
}

export default function ResultTable({
  data,
  setData,
  page,
  setPage,
  totalPages,
  loading,
}: Props) {
  const handleToggle = async (id: string, currentStatus: Status) => {
    console.log(
      "🔄 Toggle clicked for user:",
      id,
      "Current status:",
      currentStatus,
    );

    const newStatus = currentStatus === Status.ACTIVE ? false : true;
    const newStatusEnum = newStatus ? Status.ACTIVE : Status.INACTIVE;

    console.log("➡️ New status will be:", newStatusEnum);

    // Optimistic update - update UI immediately
    setData((prevData) =>
      prevData.map((user) =>
        user.id === id ? { ...user, status: newStatusEnum } : user,
      ),
    );

    try {
      // Call server action
      await toggleUserStatus(id, newStatus);
      console.log("✅ Status updated successfully in database");
    } catch (error) {
      console.error("❌ Failed to update status:", error);
      // Revert on error
      setData((prevData) =>
        prevData.map((user) =>
          user.id === id ? { ...user, status: currentStatus } : user,
        ),
      );
    }
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
