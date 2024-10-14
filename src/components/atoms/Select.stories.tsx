import type { Meta, StoryObj } from '@storybook/react'

import InputWrapper from './InputWrapper'
import Select from './Select'

const meta = {
  title: 'Monito Pets/Atoms/Select',
  component: Select,
  render: (args, { loaded: { isHideAssistive } }) => (
    <InputWrapper
      label='Label'
      subLabel='subLabel'
      assistive={!isHideAssistive && <h1 className='text-state-pink'>Error</h1>}
    >
      <Select {...args} />
    </InputWrapper>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
  },
}
