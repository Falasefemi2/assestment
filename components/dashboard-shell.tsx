"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, Clock, Pin, BarChart2, Users, FileText, MessageSquare, ShoppingCart, Settings, HelpCircle, ChevronRight } from 'lucide-react'
import { Brain } from 'lucide-react'
import { AgentSkillDialog } from "@/components/agent-skill-dialog"
import React from "react"

export function DashboardShell({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const [showAgentSkill, setShowAgentSkill] = React.useState(false)
    return (
        <SidebarProvider>
            <div className="flex min-h-screen">
                <Sidebar>
                    <SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Home className="h-4 w-4" />
                                    <span>Home</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Clock className="h-4 w-4" />
                                    <span>Recent</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Pin className="h-4 w-4" />
                                    <span>Pinned</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <BarChart2 className="h-4 w-4" />
                                    <span>Sales</span>
                                </SidebarMenuButton>
                                <ChevronRight className="h-4 w-4" />
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton>Leads</SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton>Opportunities</SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Users className="h-4 w-4" />
                                    <span>Customers</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <FileText className="h-4 w-4" />
                                    <span>Documents</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <MessageSquare className="h-4 w-4" />
                                    <span>Messages</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <ShoppingCart className="h-4 w-4" />
                                    <span>Products</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setShowAgentSkill(true)}>
                                    <Brain className="h-4 w-4" />
                                    <span>Agent Skill</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Settings className="h-4 w-4" />
                                    <span>Settings</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <HelpCircle className="h-4 w-4" />
                                    <span>Help</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>
                </Sidebar>
                <main className="flex-1">
                    <div className="h-14 border-b px-4 lg:px-8">
                        <SidebarTrigger className="h-14" />
                    </div>
                    {children}
                </main>
            </div>
            <AgentSkillDialog
                open={showAgentSkill}
                onOpenChange={setShowAgentSkill}
            />
        </SidebarProvider>
    )
}

