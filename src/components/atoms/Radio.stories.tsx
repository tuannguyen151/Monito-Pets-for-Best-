import type { Meta, StoryObj } from '@storybook/react'

import InputWrapper from './InputWrapper'
import { RadioGroup, RadioGroupItem } from './Radio'

interface Item {
  label: string
  value: string
  disabled?: boolean
}

const meta = {
  title: 'Monito Pets/Atoms/Radio',
  component: RadioGroup,
  loaders: [
    async () => ({
      isHideAssistive: false,
      items: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3', disabled: true },
      ],
    }),
  ],
  render: (args, { loaded: { isHideAssistive, items } }) => (
    <InputWrapper
      label='Label'
      subLabel='subLabel'
      assistive={!isHideAssistive && <h1 className='text-state-pink'>Error</h1>}
    >
      <RadioGroup {...args}>
        {items.map((item: Item) => (
          <RadioGroupItem key={item.value} {...item} />
        ))}
      </RadioGroup>
    </InputWrapper>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
      description: 'The default value of the radio group',
    },
  },
  args: {
    defaultValue: '2',
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
