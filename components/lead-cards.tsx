import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'

export function LeadCards() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-[0.5px] bg-gradient-to-r from-gray-50 to-gray-50/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/avatars/01.png" alt="Jane Reyes" />
                            <AvatarFallback>JR</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-sm font-medium">Jane Reyes</CardTitle>
                            <p className="text-xs text-muted-foreground">COO • Northwind Traders</p>
                        </div>
                    </div>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                        <ArrowUpRight className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent>
                    <h3 className="font-medium">Engage with Jane Reyes</h3>
                    <p className="text-sm text-muted-foreground">
                        Jane may be interested in upgrading espresso machines for her in-store coffee shops.
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">Expired business</span>
                        <span className="rounded-full bg-orange-100 px-2 py-0.5 text-orange-700">High buying intent</span>
                    </div>
                </CardContent>
            </Card>
            <Card className="border-[0.5px] bg-gradient-to-r from-gray-50 to-gray-50/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/avatars/02.png" alt="Allan" />
                            <AvatarFallback>AM</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-sm font-medium">Allan Munger</CardTitle>
                            <p className="text-xs text-muted-foreground">Head of Real Estate Development • Contoso Coffee</p>
                        </div>
                    </div>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                        <ArrowUpRight className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent>
                    <h3 className="font-medium">Prepare for meeting with Allan</h3>
                    <p className="text-sm text-muted-foreground">
                        Prepare for high-priority client meeting Copilot scheduled for 2 PM regarding upgrading service contract.
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-purple-100 px-2 py-0.5 text-purple-700">Upcoming meeting</span>
                        <span className="rounded-full bg-red-100 px-2 py-0.5 text-red-700">Due today</span>
                    </div>
                </CardContent>
            </Card>
            <Card className="border-[0.5px] bg-gradient-to-r from-gray-50 to-gray-50/50 md:col-span-2 lg:col-span-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Other key activities</CardTitle>
                    <Button variant="link" className="text-xs">Show all key activities</Button>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-start gap-2">
                            <Avatar className="mt-1 h-6 w-6">
                                <AvatarImage src="/avatars/03.png" alt="Cafe" />
                                <AvatarFallback>CA</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium">Cafe A100 for Woodland Bank</p>
                                <p className="text-xs text-muted-foreground">Woodland Bank • $100,000 • 8 days to close</p>
                                <Button variant="link" className="h-auto p-0 text-xs">Review draft and reply to Chris Davis</Button>
                            </div>
                            <Button size="icon" variant="ghost" className="ml-auto h-6 w-6">
                                <ArrowUpRight className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex items-start gap-2">
                            <Avatar className="mt-1 h-6 w-6">
                                <AvatarImage src="/avatars/04.png" alt="Fabricom" />
                                <AvatarFallback>FB</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium">Partnership opportunity for Fabricom</p>
                                <p className="text-xs text-muted-foreground">Fabricom • $3,000,000 • 15 days to close</p>
                                <Button variant="link" className="h-auto p-0 text-xs">Prepare me for Fabricom&apos;s key stakeholder meeting</Button>
                            </div>
                            <Button size="icon" variant="ghost" className="ml-auto h-6 w-6">
                                <ArrowUpRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

