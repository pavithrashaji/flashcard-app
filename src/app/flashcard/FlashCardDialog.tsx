import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FlashCardDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white size-10 m-4 w-48 h-12 border-2 border-white rounded-md">+ Add Flashcard</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white justify-items-center">
        <DialogHeader>
          <DialogTitle>Add Flashcard</DialogTitle>
          <DialogDescription>
            Add new term and its definition here. Click add when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Term
            </Label>
            <Input
              id="name"
              placeholder="Enter term"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Definition
            </Label>
            <Input
              id="username"
              placeholder="Enter definition"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="text-white size-10 m-4 w-36 h-12 border-2 border-white rounded-md">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
