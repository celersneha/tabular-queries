"use client";

import { useEffect, useState } from "react";
import { getUsers } from "@/actions/users";
import { User } from "@/types/user";

const LIMIT = 10;

export function useData() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [page, setPage] = useState(1);

  const [data, setData] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // 🔥 Debounce ONLY for search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // 🚀 Data Fetch Effect (search + dropdown + page)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getUsers({
          search: debouncedSearch,
          department,
          page,
          limit: LIMIT,
        });

        setData(res.users as User[]);
        setTotalPages(res.totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearch, department, page]);

  return {
    search,
    setSearch,
    department,
    setDepartment,
    page,
    setPage,
    data,
    totalPages,
    loading,
  };
}
