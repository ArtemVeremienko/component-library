import React from 'react';
import { StyledButton } from './StyledButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/StyledButton',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  variant: 'contained',
  children: 'Click me',
};
