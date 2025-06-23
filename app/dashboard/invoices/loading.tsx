export default function Loading() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search invoices..."
            className="w-full rounded border p-2"
          />
        </div>
        <button className="rounded bg-blue-500 px-4 py-2 text-white">
          Create Invoice
        </button>
      </div>
      <div className="mt-5">
        {/* Skeleton for loading state */}
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-full"></div>
          <div className="h-6 bg-gray-200 rounded w-full"></div>
          <div className="h-6 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
}
