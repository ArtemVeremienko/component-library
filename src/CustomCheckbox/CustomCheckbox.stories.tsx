import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomCheckbox } from './CustomCheckbox';

export default {
  title: 'Atoms/CustomCheckbox',
  component: CustomCheckbox,
} as ComponentMeta<typeof CustomCheckbox>;

const Template: ComponentStory<typeof CustomCheckbox> = (args) => (
  <CustomCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {};
