import {
  Adapt,
  Button,
  Dialog,
  DialogContentProps,
  Paragraph,
  Sheet,
  Unspaced,
  YStack,
} from "@my/ui";
import {X} from "@tamagui/lucide-icons";
import {memo, forwardRef, ReactNode} from "react";

export const DialogLayout = memo(
  forwardRef(
    (
      {
        children,
        description,
        title,
        trigger,
        ...other
      }: {
        children?: ReactNode;
        description?: ReactNode;
        title?: ReactNode;
        trigger?: ReactNode;
      } & DialogContentProps,
      ref: any
    ) => {
      return (
        <Dialog modal ref={ref}>
          <Dialog.Trigger asChild>
            {typeof trigger === "string" ? <Button>{trigger}</Button> : trigger}
          </Dialog.Trigger>

          <Adapt when="sm" platform="touch">
            <Sheet zIndex={200_000} modal dismissOnSnapToBottom>
              <Sheet.Frame padding="$4" space>
                <Adapt.Contents />
              </Sheet.Frame>
              <Sheet.Overlay />
            </Sheet>
          </Adapt>

          <Dialog.Portal>
            <Dialog.Overlay
              key="overlay"
              animation="quick"
              o={0.5}
              enterStyle={{o: 0}}
              exitStyle={{o: 0}}
            />
            <Dialog.Content
              bordered
              elevate
              key="content"
              animation={[
                "quick",
                {
                  opacity: {
                    overshootClamping: true,
                  },
                },
              ]}
              enterStyle={{x: 0, y: -20, opacity: 0, scale: 0.9}}
              exitStyle={{x: 0, y: 10, opacity: 0, scale: 0.95}}
              x={0}
              scale={1}
              opacity={1}
              y={0}
              space
              {...other}
            >
              {typeof title === "string" ? (
                <Dialog.Title>{title}</Dialog.Title>
              ) : (
                title
              )}
              {typeof description === "string" ? (
                <Dialog.Description>{description}</Dialog.Description>
              ) : (
                description
              )}
              {children}
              <Unspaced>
                <Dialog.Close asChild>
                  <Button
                    pos="absolute"
                    t="$2"
                    r="$2"
                    size="$3"
                    circular
                    icon={X}
                  />
                </Dialog.Close>
              </Unspaced>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog>
      );
    }
  )
);

export default DialogLayout;
