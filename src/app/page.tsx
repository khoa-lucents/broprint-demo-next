"use client";
import Image from "next/image";
import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [fingerprint, setFingerprint] = useState("");

  useEffect(() => {
    getCurrentBrowserFingerPrint().then((fingerprint) => {
      // Set the fingerprint state with the unique browser id
      setFingerprint(fingerprint);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="my-10 p-5 border rounded shadow-lg">
        <h3 className="text-lg font-bold mb-2">Your Browser Fingerprint:</h3>
        {fingerprint ? (
          <p className="text-sm">{fingerprint}</p>
        ) : (
          <p className="text-sm text-gray-500">Calculating fingerprint...</p>
        )}
      </div>
    </main>
  );
}
