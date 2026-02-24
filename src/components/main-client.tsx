"use client";
import { useData } from "@/hooks/useData";
import QuerySection from "./query-section";
import ResultTable from "./result-table";

export default function ClientPage() {
  const {
    search,
    setSearch,
    department,
    setDepartment,
    page,
    setPage,
    data,
    setData,
    totalPages,
    loading,
  } = useData();

  return (
    <div className="p-6">
      <QuerySection
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
      />

      <ResultTable
        data={data}
        setData={setData}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        loading={loading}
      />
    </div>
  );
}
