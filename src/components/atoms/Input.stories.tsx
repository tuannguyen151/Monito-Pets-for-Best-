import type { Meta, StoryObj } from '@storybook/react'

import { Input, variants } from './Input'
import InputWrapper from './InputWrapper'
import CaretCircleRight from './icons/CaretCircleRight'

const meta = {
  title: 'Monito Pets/Atoms/Input',
  component: Input,
  render: (args, { loaded: { isHideAssistive } }) => (
    <InputWrapper
      label='Label'
      subLabel='subLabel'
      assistive={!isHideAssistive && <h1 className='text-state-pink'>Error</h1>}
    >
      <Input {...args} />
    </InputWrapper>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: Object.keys(variants.variant),
      control: { type: 'select' },
      description: 'The variant of the input',
    },
    leftIcon: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      control: {
        type: 'select',
      },
      options: ['CaretCircleRight', 'None'],
      mapping: {
        CaretCircleRight: <CaretCircleRight />,
        None: null,
      },
      description: 'The left icon of the input',
    },
    rightIcon: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      control: {
        type: 'select',
      },
      options: ['CaretCircleRight', 'None'],
      mapping: {
        CaretCircleRight: <CaretCircleRight />,
        None: null,
      },
      description: 'The right icon of the input',
    },
  },
  args: {
    variant: 'default',
    placeholder: 'Type something here!',
    leftIcon: <CaretCircleRight />,
    rightIcon: <CaretCircleRight />,
    disabled: false,
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    rightIcon: null,
  },
}
