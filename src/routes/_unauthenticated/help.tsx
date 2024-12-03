import { AppContent, AppSidebar } from "@/components/app";
import { Container } from "@/components/common";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_unauthenticated/help")({
  component: HelpRoute,
});

function HelpRoute() {
  return (
    <Container className="flex">
      <AppSidebar>Help</AppSidebar>
      <AppContent>Test</AppContent>
    </Container>
  );
}
