import {Button, H5, Input, Paragraph, XStack, YStack} from "@my/ui";
import { ArrowRight } from "@tamagui/lucide-icons";

export const CodeScreen = ({
  phoneNumber
}) => {
  return (
    <YStack>
      <H5>Enter Code</H5>
      <Paragraph>Please enter the code sent to your phone number below to continue. This code will expire in 3 minutes.</Paragraph>
      <XStack jc="space-between">
        <Paragraph>Phone</Paragraph>
        <Paragraph>{phoneNumber}</Paragraph>
      </XStack>
      <XStack>
        <Input />
        <Input />
        <Input />
        <Input />
      </XStack>
      <XStack>
        <Button>Resend code</Button>
        <Button icon={ArrowRight} theme="alt2"/>
      </XStack>
    </YStack>
  );
};

CodeScreen.displayName = "CodeScreen";

export default CodeScreen;