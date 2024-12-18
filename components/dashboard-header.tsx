import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronDown, LineChart } from 'lucide-react'
import { LeadDialog } from "./lead-dialog"

export function DashboardHeader() {
    const lead = {
        name: "Jane Reyes",
        title: "COO",
        company: "Northwind Traders",
        avatar: "/avatars/01.png",
        description: "Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimising operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops' offerings, ensuring consistent, high-quality service."
    }

    return (
        <LeadDialog lead={lead}>
            <Card className="relative cursor-pointer overflow-hidden border-[0.5px] bg-gradient-to-r from-gray-50 to-gray-50/50 transition-colors hover:bg-gray-100/50">
                <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                                    <LineChart className="h-4 w-4 text-white" />
                                </div>
                                <h1 className="text-xl font-semibold tracking-tight">
                                    Hi Mona, <span className="text-blue-600">68%</span> of goal achieved and rest can be achieved by focusing on 20 top leads.
                                </h1>
                                <button className="ml-2 rounded-md p-1 hover:bg-gray-100">
                                    <ChevronDown className="h-4 w-4 text-gray-500" />
                                </button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
                            </p>
                        </div>
                        <div className="hidden space-y-2 md:block">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Target: $45 million</span>
                                <span className="font-medium">68% of target achieved</span>
                            </div>
                            <Progress value={68} className="h-2 w-[300px]" />
                            <div className="flex justify-between gap-4 text-xs">
                                <div className="flex items-center gap-1.5">
                                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                                    <span>Won $15m</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                                    <span>Committed $5m</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                                    <span>Best case $7m</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="h-2 w-2 rounded-full bg-gray-500" />
                                    <span>Leads $15m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </LeadDialog>
    )
}

