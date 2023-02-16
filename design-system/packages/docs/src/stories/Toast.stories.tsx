import { useEffect, useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Toast, ToastProps } from "@jr-ignite-ui/react";

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false);

  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  );
};

export default {
  title: "Form/Toast",
  component: DemoToast,
  args: {
    title: "Agendamento realizado",
    description: "Quinta-feira, 16 de Fevereiro às 13h",
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
