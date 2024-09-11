import { FlashCard } from "./flashcard/FlashCard";
import {SquarePlus} from "lucide-react";
import { FlashCardDialog } from "./flashcard/FlashCardDialog";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FlashCardDialog />
      <FlashCard />
    </div>
  );
}
