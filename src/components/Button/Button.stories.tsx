import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Forms/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    variant: 'primary',
    children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    children: 'Button',
};

export const ButtonAsAnchor = Template.bind({});
ButtonAsAnchor.args = {
    variant: 'primary',
    as: 'a',
    children: 'Button',
};
