import {Button, H1, H4, Paragraph, YStack} from "@my/ui";
import {SafeAreaView} from "react-native-safe-area-context";

export const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <YStack w="100%" ai="center" h="100%" jc="space-between" p="$3">
        <YStack f={1} jc="center" ai="center">
          <H1>Welcome!</H1>
          <H4>We're happy you joined!</H4>
          <H4>Let's get started!</H4>
        </YStack>
        <H4>Do you agree with Kair's</H4>
        <Paragraph>Terms of service and Privacy Policy?</Paragraph>
        <Button br={30} bg="$orange10" w="100%" h={60} mt="$3">
          I agree
        </Button>
      </YStack>
    </SafeAreaView>
  );
};
