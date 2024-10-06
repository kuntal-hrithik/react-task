import React from "react";

import { Skeleton } from "../ui/skeleton";

export default function TableSkeleton() {
  // Mimic 5 rows with skeleton cells corresponding to table columns
  return (
    <div className="size-full rounded-md border">
      <div className="bg-foreground p-2 text-center font-bold text-background">
        Table Form
      </div>
      <div className="table w-full">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell p-2 font-bold">Name</div>
            <div className="table-cell p-2 font-bold">Email</div>
            <div className="table-cell p-2 font-bold">Phone</div>
            <div className="table-cell p-2 font-bold">Website</div>
            <div className="table-cell p-2 font-bold">Company</div>
            <div className="table-cell p-2 font-bold">City</div>
            <div className="table-cell p-2 font-bold">Zipcode</div>
            <div className="table-cell p-2 font-bold">Street</div>
            <div className="table-cell p-2 font-bold">Actions</div>
          </div>
        </div>
        <div className="table-row-group">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="table-row even:bg-muted">
              <div className="table-cell p-2">
                <Skeleton className="h-6 w-full rounded-md" />
              </div>
              <div className="table-cell p-2">
                <Skeleton className="h-6 w-full rounded-md" />
              </div>
              <div className="table-cell p-2">
                <Skeleton className="h-6 w-full rounded-md" />
              </div>
              <div className="table-cell p-2">
                <Skeleton className="h-6 w-full rounded-md" />
              </div>
              <div className="table-cell p-2">
                <Skeleton className="h-6 w-full rounded-md" />
              </div>
              <div className="table-cell p-2">
                <Skeleton className="h-6 w-full rounded-md" />
              </div>
              <div className="table-cell p-2">
                <Skeleton className="h-6 w-full rounded-md" />
              </div>
              <div className="table-cell p-2">
                <Skeleton className="h-6 w-full rounded-md" />
              </div>
              <div className="flex gap-2 p-2">
                <Skeleton className="h-6 w-6 rounded-md" />
                <Skeleton className="h-6 w-6 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
