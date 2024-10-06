import { useState } from "react";

import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import { Edit2, Trash2 } from "lucide-react";
import { set } from "react-hook-form";
import { toast } from "sonner";

import type { User } from "@/types/user";

import { deleteUser, fetchUsers, updateUser } from "@/api-client";

import TableSkeleton from "./image-load/table-skelton";
import StoreForm from "./store-form";
import { Button } from "./ui/button";
import { DialogDescription, DialogHeader, DialogTrigger } from "./ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function TableForm() {
  const [user, setUser] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (isLoading) {
    return (
      <div>
        <TableSkeleton />
      </div>
    );
  }
  console.log(data);
  console.log(
    "user",
    user,
    data?.find((u) => u.id === user)
  );

  function handleClick(id: number) {
    setIsDialogOpen(true);
    setUser(id);
  }
  function handleDelete(id: string) {
    setIsDeleteDialogOpen(true);
    setUser(id);
  }
  const selectedUser = data?.find((u) => u.id === user);

  return (
    <>
      {isLoading ?
        <TableSkeleton />
      : <Table className="rounded-md border">
          <TableCaption className="font-bold">Table Form</TableCaption>
          <TableHeader>
            <TableRow className="!bg-foreground *:font-bold *:text-background">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Website</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Zipcode</TableHead>
              <TableHead>Street</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((user: User) => (
              <TableRow key={user.id} className="even:bg-muted">
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell className="text-blue-500">{user.website}</TableCell>
                <TableCell>{user.company.name}</TableCell>
                <TableCell>{user.address.city}</TableCell>
                <TableCell>{user.address.zipcode}</TableCell>
                <TableCell>{user.address.street}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleClick(user.id)}
                  >
                    <Edit2 className="size-4" />
                  </Button>
                  <Dialog
                    open={isDeleteDialogOpen}
                    onOpenChange={setIsDeleteDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="icon">
                        <Trash2 className="size-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                      <div className="w-1/3 rounded-lg bg-white p-6 shadow-lg">
                        <DialogHeader>
                          <DialogTitle>Delete User</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete this user?
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 flex gap-4">
                          <Button
                            variant="destructive"
                            onClick={() => {
                              toast.promise(deleteUser(user.id), {
                                loading: "Deleting user...",
                                success: () => {
                                  setIsDeleteDialogOpen(false);
                                  return "User deleted successfully!";
                                },
                                error: "Failed to delete user",
                              });
                            }}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setIsDeleteDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }

      <StoreForm
        initialValues={{
          name: selectedUser?.name ?? "",
          email: selectedUser?.email ?? "",
          phone: selectedUser?.phone ?? "",
          website: selectedUser?.website ?? "",
          company: {
            name: selectedUser?.company.name ?? "",
          },
          address: {
            city: selectedUser?.address.city ?? "",
            zipcode: selectedUser?.address.zipcode ?? "",
            street: selectedUser?.address.street ?? "",
          },
        }}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
}
