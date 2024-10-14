import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'
import InputWrapper from './InputWrapper'

const meta = {
  title: 'Monito Pets/Atoms/Checkbox',
  component: Checkbox,
  render: (args, { loaded: { isHideAssistive } }) => (
    <InputWrapper
      label='Label'
      subLabel='subLabel'
      assistive={!isHideAssistive && <h1 className='text-state-pink'>Error</h1>}
    >
      <Checkbox {...args} />
    </InputWrapper>
  ),
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
      description: 'The label of the checkbox',
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
      description: 'Disables the checkbox',
    },
  },
  args: {
    label: 'Label',
    defaultChecked: false,
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  loaders: [
    async () => ({
      isHideAssistive: true,
    }),
  ],
}

export const Multiple: Story = {
  args: {
    label: 'Select 1',
  },
  render: (args) => (
    <InputWrapper
      label='Label'
      subLabel='subLabel'
      assistive={<h1 className='text-state-pink'>Error</h1>}
    >
      <Checkbox {...args} />
      <Checkbox label='Select 2' defaultChecked />
      <Checkbox label='Select 3' disabled />
    </InputWrapper>
  ),
  loaders: [
    async () => ({
      isHideAssistive: false,
    }),
  ],
}
