"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fetchData = async (): Promise<FlashCard[]> => {
  const response = await fetch("http://127.0.0.1:8000/api/flashcards/");
  const data = await response.json();
  return data;
};

interface FlashCard {
  id: number;
  name: string;
  definition: string;
}

export function FlashCard() {
  const [flip, setFlip] = useState(false);
  const [items, setItems] = useState<FlashCard[]>([]);
  const [index, nextIndex] = useState(0);
  const [fliptext, setFliptext] = useState("Reveal");

  const handleFlip = () => {
    setFlip(!flip);
    if (flip) {
      setFliptext("Hide");
    } else {
      setFliptext("Reveal");
    }
  };

  const updateIndex = () => {
    if (index < items.length - 1) {
      nextIndex(index + 1);
    } else {
      nextIndex(0);
    }
  };

  useEffect(() => {
    fetchData().then((data) => setItems(data));
  }, []);

  if (items.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="w-[500px] text-center p-4 px-10">
      <CardHeader>
        <CardTitle>GENERAL CS</CardTitle>
        <CardDescription>Flashcard Review</CardDescription>
      </CardHeader>

      <CardTitle className="m-2 text-3xl">{items[index].name}</CardTitle>
      <CardDescription className="text-lg">
        {" "}
        {flip ? items[index].definition : null}{" "}
      </CardDescription>

      <br></br>
      <CardFooter className="flex justify-around">
        <Button
          variant="outline"
          onClick={handleFlip}
          className="bg-custom-mid opacity-85 text-white text-md w-24"
        >
          Reveal
        </Button>
        <Button
          variant="outline"
          onClick={updateIndex}
          className="bg-custom-mid opacity-85 text-white text-md w-24"
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
