import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './';

export default {
    title: 'Typography/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: 'Hello world',
};

export const Caps = Template.bind({});

Caps.args = {
    children: 'Hello world',
    variant: 'caps',
};
