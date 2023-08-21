import type { Meta } from '@storybook/react-native';
import { Task } from './Task';

const Story: Meta<typeof Task> = {
  component: Task,
  title: 'Task',
};
export default Story;

export const Primary = {
  args: {},
};
