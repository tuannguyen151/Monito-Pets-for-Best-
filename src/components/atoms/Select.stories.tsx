import type { Meta, StoryObj } from '@storybook/react'

import Select from './Select'

const meta = {
  title: 'Monito Pets/Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      control: {
        type: 'text',
      },
      description: 'The label of the input',
    },
    assistive: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      options: ['Error', 'None'],
      mapping: {
        Error: <p className='text-state-pink'>Empty text</p>,
        None: null,
      },
      description:
        'The assistive text of the input. It can be an error message',
    },
    subLabel: {
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
      description: 'The subLabel of the input',
    },
    disabled: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
      description: 'The disabled state of the input',
    },
  },
  args: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: '4', label: 'Option 4' },
      { value: '5', label: 'Option 5' },
      { value: '6', label: 'Option 6' },
      { value: '7', label: 'Option 7' },
      { value: '8', label: 'Option 8' },
      { value: '9', label: 'Option 9' },
      { value: '10', label: 'Option 10' },
    ],
    placeholder: { label: 'Select an option', disabled: true },
    subLabel:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    assistive: <p className='text-state-pink'>Empty text</p>,
  },
}
