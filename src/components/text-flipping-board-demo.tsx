"use client";
import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "./ui/text-flipping-board";

const MESSAGES: string[] = [
  "TURNING COMPLEX\nPROBLEMS INTO ELEGANT\nSOLUTIONS, ONE LINE OF\nCODE AT A TIME.\n\n- DHARANI GOVARDHAN",
  "FIRST, SOLVE\nTHE PROBLEM.\nTHEN, WRITE\nTHE CODE.\n\n- JOHN JOHNSON",
  "TALK IS CHEAP.\nSHOW ME THE CODE.\n\n\n\n- LINUS TORVALDS",
  "BUILDING THE FUTURE\nOF THE WEB,\nPIXEL BY PIXEL,\nFRAME BY FRAME.\n\n- DHARANI GOVARDHAN",
  "CODE IS LIKE HUMOR.\nWHEN YOU HAVE TO\nEXPLAIN IT, IT IS BAD.\n\n- CORY HOUSE",
];

export default function TextFlippingBoardDemo() {
  const [msgIdx, setMsgIdx] = useState(0);

  const next = useCallback(
    () => setMsgIdx((i) => (i + 1) % MESSAGES.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, 15000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 py-20">
      <TextFlippingBoard text={MESSAGES[msgIdx]} />
    </div>
  );
}
