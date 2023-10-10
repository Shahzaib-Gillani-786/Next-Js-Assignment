// This is a Dynamic Route for a single post
import React from "react";

export default function Blog({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>This is Dynamic Route for a single Blog with Id {params.id}</div>);
    </main>
  )
}
