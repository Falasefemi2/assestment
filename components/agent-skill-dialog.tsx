"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { ChevronDown, LineChart, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AgentSkillDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function AgentSkillDialog({ open, onOpenChange }: AgentSkillDialogProps) {
    const isMobile = useIsMobile(); // Renamed for clarity
    const [isCollapsibleOpen, setIsCollapsibleOpen] = React.useState(true);
    const [email, setEmail] = React.useState("purchasing@contoso.com");

    const Content = (
        <div className="space-y-6">
            <Collapsible
                open={isCollapsibleOpen}
                onOpenChange={setIsCollapsibleOpen}
                className="space-y-2"
            >
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-blue-50 p-4 text-left text-sm font-medium hover:bg-blue-100">
                    <div className="flex items-center gap-2">
                        <LineChart className="h-5 w-5 text-blue-600" />
                        <span>
                            Check if on-hand inventory will allow all sales orders to ship
                            without delay
                        </span>
                    </div>
                    <ChevronDown
                        className={`h-4 w-4 text-blue-600 transition-transform ${isCollapsibleOpen ? "rotate-180" : ""
                            }`}
                    />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 px-4">
                    <p className="text-sm text-muted-foreground">
                        When{" "}
                        <span className="rounded bg-blue-50 px-1.5 py-0.5 text-blue-700">
                            any vendor
                        </span>{" "}
                        sends an email with changes to{" "}
                        <span className="rounded bg-blue-50 px-1.5 py-0.5 text-blue-700">
                            confirmed purchase orders
                        </span>
                        , check if the resulting{" "}
                        <span className="rounded bg-blue-50 px-1.5 py-0.5 text-blue-700">
                            on-hand inventory
                        </span>{" "}
                        will allow{" "}
                        <span className="rounded bg-blue-50 px-1.5 py-0.5 text-blue-700">
                            all sales orders
                        </span>{" "}
                        to{" "}
                        <span className="rounded bg-blue-50 px-1.5 py-0.5 text-blue-700">
                            ship without delay
                        </span>
                        . If so,{" "}
                        <span className="rounded bg-blue-50 px-1.5 py-0.5 text-blue-700">
                            update the purchase order
                        </span>{" "}
                        to reflect the change.
                    </p>
                </CollapsibleContent>
            </Collapsible>

            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <h3 className="font-medium">Enable email access</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                    Allow the agent to access email inboxes to read mail from known vendors
                </p>
                <div className="flex gap-2">
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1"
                    />
                    <Button variant="secondary">Allow access</Button>
                </div>
            </div>
        </div>
    );

    return isMobile ? (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Agent skill</DrawerTitle>
                </DrawerHeader>
                <div className="px-4">{Content}</div>
                <DrawerFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Close
                    </Button>
                    <Button>Activate</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    ) : (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Agent skill</DialogTitle>
                </DialogHeader>
                {Content}
                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Close
                    </Button>
                    <Button>Activate</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

