import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PacerPlan" },
    { name: "description", content: "PacerPlan homepage" },
  ];
}

export default function Home() {
  return <Welcome />;
}
