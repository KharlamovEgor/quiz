import { createLazyFileRoute } from "@tanstack/react-router";
import { Form } from "../components";

export const Route = createLazyFileRoute("/form")({
  component: () => (
    <main className="main">
      <Form />
    </main>
  ),
});

