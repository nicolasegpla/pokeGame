import type { Meta, StoryObj } from '@storybook/react';

import { BoardLayout } from './BoardLayout';

const meta: Meta<typeof BoardLayout> = {
    title: 'layouts/BoardLayout',
    component: BoardLayout,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BoardLayout>;

export const Primary: Story = {
    args: {},
};
