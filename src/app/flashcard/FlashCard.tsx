"use client";
import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FlashCard() {
    const [flip, useFlip]  = useState(false);
    const handleFlip = () => {
        useFlip(!flip);
    };

    return (
        <Card className="w-[450px] text-center">
        <CardHeader>
            <CardTitle>GENERAL CS</CardTitle>
            <CardDescription>Flashcard Review</CardDescription>
        </CardHeader>
        <br></br>
        <CardTitle className="m-2">
            ALGORITHM
        </CardTitle>
        <CardDescription> {flip ? "A simple step-by-step set of instructions for solving a problem or performing a task." : null} </CardDescription>
        <br></br>
        <br></br>
        <CardFooter className="flex justify-around">
            <Button variant="outline" onClick={handleFlip} className="bg-custom-mid opacity-85 text-white w-24">Flip</Button>
            <Button variant="outline" className="bg-custom-mid opacity-85 text-white w-24">Next</Button>
        </CardFooter>
        </Card>
    )
}
