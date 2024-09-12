"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";

export function FlashCardDialog() {
  const [name, setName] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/flashcards/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, definition }),
    });

    if (response.ok) {
      alert("Flashcard added successfully!");
      setName("");
      setDefinition("");
    } else {
      alert("Failed to add flashcard.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white size-10 m-4 w-48 h-12 bg-custom-mid opacity-85 border-2 text-md border-white rounded-md">
          + Add Flashcard
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] bg-white justify-items-center">
        <DialogHeader>
          <DialogTitle className="text-center">Add Flashcard</DialogTitle>
          <DialogDescription className="text-center">
            Add term and its definition here. Click add when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                Term
                </Label>
                <Input id="name" placeholder="Enter term" value={name} className="col-span-3" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="definition" className="text-right">
                Definition
                </Label>
                <Textarea
                id="definition"
                placeholder="Enter definition"
                value={definition}
                className="col-span-3"
                onChange={(e) => setDefinition(e.target.value)}
                />
            </div>
            </div>
                <div className="flex flex-col items-center">
                    <Button
                        type="submit"
                        className="text-white size-10 w-28 h-10 border-2 border-white rounded-md  bg-custom-mid opacity-85"
                    >
                        Add
                    </Button>
                    <Button
                        className="size-10 w-36 h-10 bg-white border-2 rounded-none border-white shadow-none text-custom-mid hover:bg-white hover:underline"
                    >
                        Add Multiple Terms
                    </Button>
                </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
