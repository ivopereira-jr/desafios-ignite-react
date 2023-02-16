import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@jr-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'send',
    varianty: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    // controles
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      // tipo do controle
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      // tipo do controle
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onclick: {
      // logs de açoes do component da para fazer com outras ações tbm
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
