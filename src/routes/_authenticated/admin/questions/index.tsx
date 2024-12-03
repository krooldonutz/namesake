import { PageHeader } from "@/components/app";
import {
  Button,
  Empty,
  Form,
  Modal,
  ModalFooter,
  ModalHeader,
  RichText,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  TextField,
} from "@/components/common";
import { api } from "@convex/_generated/api";
import type { Doc, Id } from "@convex/_generated/dataModel";
import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "convex/react";
import { HelpCircle, Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_authenticated/admin/questions/")({
  component: QuestionsAdminRoute,
});

export const NewQuestionModal = ({
  isOpen,
  onOpenChange,
  onSubmit,
  onQuestionCreated,
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSubmit: () => void;
  onQuestionCreated?: (questionId: Id<"questions">) => void;
}) => {
  const createQuestion = useMutation(api.questions.create);
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");

  const clearForm = () => {
    setQuestionText("");
    setAnswerText("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newQuestion = await createQuestion({
      question: questionText,
      answer: answerText,
      topics: [],
    });

    clearForm();
    onSubmit();
    if (onQuestionCreated && newQuestion) {
      onQuestionCreated(newQuestion);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalHeader title="New question" />
      <Form className="w-full" onSubmit={handleSubmit}>
        <TextField
          label="Question"
          name="question"
          isRequired
          value={questionText}
          onChange={(value) => setQuestionText(value)}
          className="w-full"
        />
        <RichText
          initialContent={answerText}
          onChange={setAnswerText}
          editable
        />
        <ModalFooter>
          <Button type="button" onPress={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Create Question
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

const QuestionTableRow = ({ question }: { question: Doc<"questions"> }) => {
  return (
    <TableRow
      key={question._id}
      className="flex gap-2 items-center"
      href={{
        to: "/admin/questions/$questionId",
        params: { questionId: question._id },
      }}
    >
      <TableCell>{question.question}</TableCell>
      <TableCell>{new Date(question._creationTime).toLocaleString()}</TableCell>
    </TableRow>
  );
};

function QuestionsAdminRoute() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const questions = useQuery(api.questions.getAll);

  return (
    <div>
      <PageHeader title="Forms">
        <Button
          onPress={() => setIsModalOpen(true)}
          icon={Plus}
          variant="primary"
        >
          New Question
        </Button>
      </PageHeader>
      <Table aria-label="Questions">
        <TableHeader>
          <TableColumn isRowHeader>Title</TableColumn>
          <TableColumn>Created</TableColumn>
        </TableHeader>
        <TableBody
          items={questions}
          renderEmptyState={() => (
            <Empty
              title="No questions"
              icon={HelpCircle}
              button={{
                children: "New Question",
                onPress: () => setIsModalOpen(true),
              }}
            />
          )}
        >
          {questions?.map((question) => (
            <QuestionTableRow key={question._id} question={question} />
          ))}
        </TableBody>
      </Table>
      <NewQuestionModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={() => setIsModalOpen(false)}
      />
    </div>
  );
}
