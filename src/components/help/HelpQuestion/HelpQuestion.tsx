import { Disclosure, RichText } from "@/components/common";
import type { Doc } from "@convex/_generated/dataModel";

type HelpQuestionProps = {
  question: Doc<"questions">;
};

export const HelpQuestion = ({ question }: HelpQuestionProps) => {
  return (
    <Disclosure id={question._id} title={question.question}>
      <RichText initialContent={question.answer} editable={false} />
    </Disclosure>
  );
};
