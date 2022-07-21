import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FieldInput } from './';

export default {
    title: 'Forms/Field/FieldInput',
    component: FieldInput,
} as ComponentMeta<typeof FieldInput>;

const Template: ComponentStory<typeof FieldInput> = (args) => (
    <FieldInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
    label: 'Test',
    name: 'test',
};

export const Error = Template.bind({});

Error.args = {
    label: 'Test',
    name: 'test',
    errorMessage: 'This is an error',
    error: true,
};
