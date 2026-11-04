import type { Metadata } from "next";
import PlannerFrame from "./PlannerFrame";

export const metadata: Metadata = {
  title: "Itinerary Builder",
  description: "Prepare a sequential UK and European group transport itinerary for operator review and quotation.",
  alternates: { canonical: "/itinerary-builder" },
};

export default function ItineraryBuilderPage() {
  return <PlannerFrame />;
}
