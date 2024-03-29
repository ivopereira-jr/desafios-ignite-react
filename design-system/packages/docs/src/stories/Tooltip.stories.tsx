import type { Meta, StoryObj } from "@storybook/react";
import { Box, Button, Tooltip, TooltipProps } from "@jr-ignite-ui/react";

export default {
  title: "Form/Tooltip",
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: "This is a Tooltip",
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "$20",
            background: "$gray500",
            maxWidth: "18.75rem",
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
