import { PageHeader } from "@/components/app";
import { RichText } from "@/components/common";
import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import { Heading } from "react-aria-components";

export const Route = createFileRoute(
  "/_authenticated/admin/questions/$questionId",
)({
  component: QuestionAdminDetailRoute,
});

function QuestionAdminDetailRoute() {
  const { questionId } = Route.useParams();
  const question = useQuery(api.questions.getById, {
    questionId: questionId as Id<"questions">,
  });

  if (!question) return;

  return (
    <>
      <PageHeader title="Question details" />
      <Heading className="text-lg font-medium mb-2">
        {question.question}
      </Heading>
      <RichText initialContent={question.answer} editable={false} />
    </>
  );
}
