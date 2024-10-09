import type { Meta, StoryObj } from '@storybook/react'

import { Input, variants } from './Input'
import CaretCircleRight from './icons/CaretCircleRight'

const meta = {
  title: 'Monito Pets/Atoms/Input',
  component: Input,
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
    label: 'Label',
    variant: 'default',
    placeholder: 'Type something here!',
    subLabel:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    assistive: <p className='text-state-pink'>Empty text</p>,
    leftIcon: <CaretCircleRight />,
    rightIcon: <CaretCircleRight />,
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    rightIcon: null,
  },
}
