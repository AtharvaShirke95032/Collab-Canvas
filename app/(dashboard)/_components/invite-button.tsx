import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { OrganizationProfile } from "@clerk/nextjs"
import { Plus } from "lucide-react"

export const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Invite members
                </Button>
            </DialogTrigger>

            <DialogContent className=" w-[880px] p-0 bg-transparent border-none">
                <DialogTitle className="hidden">Edit profile</DialogTitle>

                <OrganizationProfile routing="hash" />

            </DialogContent>
        </Dialog>
    )
}