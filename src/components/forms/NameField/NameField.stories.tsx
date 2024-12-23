import type { Meta } from "@storybook/react";
import { NameField } from ".";

const meta: Meta<typeof NameField> = {
  component: NameField,
  parameters: {
    layout: "padded",
  },
};

export default meta;

export const Example = (args: any) => <NameField {...args} />;

Example.args = {
  children: (
    <div className="border border-gray-dim p-3 rounded-lg text-gray-dim">
      Children
    </div>
  ),
};
