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
  const [multiple, setMultiple] = useState(false);
  const [multipleEntries, setMultipleEntries] = useState("");

  const handleMultiple = () => {
    setMultiple(prev => !prev);
  };

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

  const handleMultipleSubmit = async () => {
    const entries = multipleEntries.split("\n");

    const flashcards = entries.map((entry) => {
      const [term, def] = entry.split(":").map((item) => item.trim());
      return { name: term, definition: def };
    });

    for (const flashcard of flashcards) {
      if (flashcard.name && flashcard.definition) {
        const response = await fetch("http://127.0.0.1:8000/api/flashcards/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(flashcard),
        });

        if (!response.ok) {
          alert(`Failed to add flashcard: ${flashcard.name}`);
          return;
        }
      }
    }
    alert("Multiple flashcards added successfully!");
    setMultipleEntries("");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute right-[615px] top-[140px] text-white size-10 m-4 w-48 h-12 bg-custom-mid opacity-85 border-2 text-md border-custom-mid rounded-md">
          + Add Flashcard
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] bg-white justify-items-center">
        <DialogHeader>
          <DialogTitle className="text-center">Add Flashcard</DialogTitle>
          <DialogDescription className="text-center">
            Enter term and its definition here. Add when you're done.
          </DialogDescription>
        </DialogHeader>
        {multiple ? (
          <div className="flex flex-col items-center text-center">
            <Textarea
              id="multiple"
              placeholder={`term 1: definition 1 \nterm 2: definition 2 \nterm 3: definition 3 ...`}
              value={multipleEntries}
              className="col-span-3 mt-4 h-28 w-56"
              onChange={(e) => setMultipleEntries(e.target.value)}
            />
            <Button
              onClick={handleMultipleSubmit}
              className="size-10 w-36 h-10 mt-4 bg-custom-mid opacity-85 text-white"
            >
              Add
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Term
                </Label>
                <Input
                  id="name"
                  placeholder="Enter term"
                  value={name}
                  className="col-span-3"
                  onChange={(e) => setName(e.target.value)}
                />
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
                className="text-white size-10 w-36 h-10 border-2 border-white rounded-md  bg-custom-mid opacity-85"
              >
                Add
              </Button>
            </div>
          </form>
        )}
        <Button
          onClick={handleMultiple}
          className="size-10 w-36 h-10 bg-white border-2 rounded-none border-white shadow-none text-custom-mid hover:bg-white hover:underline"
        >
          {multiple ? "Add Single Flashcard" : "Add Multiple Flashcards"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
