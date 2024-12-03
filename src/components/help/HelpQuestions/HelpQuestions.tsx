import { DisclosureGroup, Empty } from "@/components/common";
import { HelpQuestion } from "@/components/help";
import type { Doc } from "@convex/_generated/dataModel";
import { HelpCircle } from "lucide-react";

type HelpQuestionsProps = {
  questions?: Doc<"questions">[];
};

export const HelpQuestions = ({ questions }: HelpQuestionsProps) => {
  if (!questions || questions.length === 0) {
    return <Empty icon={HelpCircle} title="No questions" />;
  }

  return (
    <DisclosureGroup allowsMultipleExpanded className="px-4 pb-4">
      {questions.map((question) => (
        <HelpQuestion key={question._id} question={question} />
      ))}
    </DisclosureGroup>
  );
};
