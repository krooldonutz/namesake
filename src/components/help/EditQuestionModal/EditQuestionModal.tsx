import {
  Button,
  Form,
  Modal,
  ModalFooter,
  ModalHeader,
} from "@/components/common";
import { api } from "@convex/_generated/api";
import type { Doc, Id } from "@convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

type EditQuestionModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  question: Doc<"questions">;
};

export const EditQuestionModal = ({
  isOpen,
  onOpenChange,
  question,
}: EditQuestionModalProps) => {
  const [newQuestion, _setNewQuestion] = useState("");
  const [newAnswer, _setNewAnswer] = useState("");
  const [newTopics, _setNewTopics] = useState<Id<"topics">[]>([]);

  // const [error, setError] = useState<string>();
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const updateQuestion = useMutation(api.questions.setAll);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setError(undefined);

    try {
      // setIsSubmitting(true);
      await updateQuestion({
        questionId: question._id,
        question: {
          relatedQuests: [],
          question: newQuestion,
          answer: newAnswer,
          topics: newTopics,
        },
      });
      toast.success("Updated question");
    } catch (err) {
      // setError("Failed to update question. Please try again.");
    } finally {
      // setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalHeader title="Edit question" />
      <Form onSubmit={handleSubmit}>
        <ModalFooter>
          <Button type="button" onPress={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};
