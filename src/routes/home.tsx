import CreateUser from "@/components/create-user";
import TableForm from "@/components/table-form";

export default function Home() {
  return (
    <div className="space-y-6">
      <header className="border-b p-4 text-center text-xl font-medium">
        Synlabs Assignment
      </header>
      <div className="space-y-4 p-6 pt-0">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium">React Task</h1>
        </div>
        <TableForm />
      </div>
    </div>
  );
}
