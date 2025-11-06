import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Label } from './label';

/**
 * Renders an accessible label associated with controls.
 */
const meta = {
  args: {
    children: 'Your email address',
    htmlFor: 'email',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
  component: Label,
  tags: ['autodocs'],
  title: 'Workspace/shadcn-ui/Label',
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

/**
 * The default form of the label.
 */
export const Default: Story = {};
