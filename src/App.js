import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-lg w-64">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-4">
        <Button onClick={() => setCount(count - 1)} variant="destructive">
          -
        </Button>
        <Button onClick={() => setCount(count + 1)}>+</Button>
      </div>
    </div>
  );
}
// this is new code//
