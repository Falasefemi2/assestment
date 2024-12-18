"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Progress } from "@/components/ui/progress"
import { useIsMobile } from "@/hooks/use-media-query"
import { ArrowRight, ChevronRight, Edit, LinkedinIcon, ThumbsUp, Users } from 'lucide-react'

interface LeadDialogProps {
    children: React.ReactNode
    lead: {
        name: string
        title: string
        company: string
        avatar: string
        description: string
    }
}

export function LeadDialog({ children, lead }: LeadDialogProps) {
    const [open, setOpen] = React.useState(false)
    const isMobile = useIsMobile()

    if (!isMobile) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>{children}</DialogTrigger>
                <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
                    <LeadContent lead={lead} />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Lead Details</DrawerTitle>
                </DrawerHeader>
                <div className="px-4">
                    <LeadContent lead={lead} />
                </div>
            </DrawerContent>
        </Drawer>
    )
}

function LeadContent({ lead }: { lead: LeadDialogProps["lead"] }) {
    return (
        <div className="space-y-6">
            <DialogHeader>
                <DialogTitle>Engage with {lead.name}</DialogTitle>
                <div className="flex items-start gap-4 pt-2">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={lead.avatar} alt={lead.name} />
                        <AvatarFallback>{lead.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-semibold">{lead.name}</h2>
                            <LinkedinIcon className="h-5 w-5 text-[#0077B5]" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {lead.title} • {lead.company}
                        </p>
                    </div>
                </div>
            </DialogHeader>

            <div className="rounded-lg border bg-muted/40 p-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm">Jane may be interested in upgrading espresso machines for her in-store coffee shops.</p>
                    <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                        </Button>
                        <Button size="sm" variant="default">
                            <ThumbsUp className="mr-2 h-4 w-4" />
                            Approve and send
                        </Button>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="flex items-center gap-2 font-semibold">
                    Why I picked this lead
                    <Button size="icon" variant="ghost" className="h-5 w-5">
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </h3>
                <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="rounded-full border bg-background px-2 py-0.5">1</span>
                        Jane is a key decision maker and was browsing &apos;espresso machines&apos; on First Coffee&apos;s website.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="rounded-full border bg-background px-2 py-0.5">2</span>
                        Multiple people at her company have reported &apos;slowness&apos; during service requests
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="rounded-full border bg-background px-2 py-0.5">3</span>
                        Northwind Traders currently see $200M in revenue from their in-store coffee shops.
                    </li>
                </ul>

                <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg border p-4">
                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Decision maker</span>
                            <Users className="h-4 w-4 text-blue-500" />
                        </div>
                        <p className="font-medium">Yes</p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Potential deal value</span>
                            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold text-white">
                                $
                            </div>
                        </div>
                        <p className="font-medium">$1M</p>
                    </div>
                    <div className="rounded-lg border p-4">
                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Intent</span>
                            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                        </div>
                        <p className="font-medium">High</p>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold">About {lead.name}</h3>
                <p className="text-sm text-muted-foreground">{lead.description}</p>
            </div>

            <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Showing 1 of 9</span>
                    <Button variant="link" className="h-auto p-0 text-sm font-normal">
                        Show all
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Progress value={11} className="h-1.5 w-16" />
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

