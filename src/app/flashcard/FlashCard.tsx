"use client";
import React, { useEffect, useState, useRef } from "react";

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
  const [cardHeight, setHeight] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect (() => {
    if (cardRef.current) {
      const { height } = cardRef.current.getBoundingClientRect();
      setHeight(height);
    }
  }, [items, index, flip]);

  const handleFlip = () => {
    setFlip(prev => !prev);
  };

  const updateIndex = () => {
    if (index < items.length - 1) {
      nextIndex(index + 1);
    } else {
      nextIndex(0);
    }
    setFlip(false);
  };

  useEffect(() => {
    fetchData().then((data) => setItems(data));
  }, []);

  if (items.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="absolute right-[460px] top-[240px] w-[500px] bg-custom-card border-custom-card shadow-sm rounded-xl shadow-custom-mid py-4 px-10"
      style={{ height: cardHeight > 0 ? cardHeight : '300px' }}>
      </div>
      <div className="absolute right-[470px] top-[230px] w-[500px] bg-custom-card border-custom-card shadow-sm rounded-xl shadow-custom-mid py-4 px-10"
      style={{ height: cardHeight > 0 ? cardHeight : '300px' }}>
      </div>
      <Card ref={cardRef} className="absolute right-[480px] top-[220px] w-[500px] bg-custom-card border-custom-card drop-shadow-xl shadow-custom-mid text-center py-4 px-10">
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
            onClick={handleFlip}
            className="bg-custom-mid opacity-85 text-white text-md w-24"
          >
            {flip ? "Hide" : "Reveal"}
          </Button>
          <Button
            onClick={updateIndex}
            className="bg-custom-mid opacity-85 text-white text-md w-24"
          >
            Next
          </Button>
        </CardFooter>
      </Card>

    </div>
  );
}
