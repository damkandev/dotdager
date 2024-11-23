"use client";
import Chat from "components/Chat";

export default function Lumber() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <iframe
        className="rounded-lg"
        title="Lumber Jack Game"
        src="https://tbot.xyz/lumber/"
        width="500"
        height="800"
      ></iframe>
    </div>
  );
}
