import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { DataTable } from "@/components/data-table"
import { LeadCards } from "@/components/lead-cards"
import { columns } from "@/components/columns"
import { tasks } from "@/data/tasks"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="flex-1 space-y-4 p-4">
        <DashboardHeader />
        <LeadCards />
        <DataTable data={tasks} columns={columns} />
      </div>
    </DashboardShell>
  )
}

