import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LTP - PacerPlan" },
    { name: "description", content: "Long Term Planning tool" },
  ];
}

export default function Ltp() {
    return (
        <div>
            <h1>Long Term Planning tool</h1>
        </div>
    )
}