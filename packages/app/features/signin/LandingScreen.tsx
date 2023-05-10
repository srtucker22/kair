import {Button, H1, Paragraph, YStack} from "@my/ui";
import {memo} from "react";
import LandingVideo from "./LandingVideo";

const pageCopy = {
  title: "Kair",
  subtitle: "Rent a Car, Drive for the Gig Economy",
  signUp: "Sign Up",
  login: "Login",
};

export const LandingScreen = memo(() => {
  return (
    <YStack f={1} jc="space-between" w="100%">
      <YStack jc="center" ai="center" w="100%" ov="hidden" h="70%">
        <YStack
          w={800}
          h={800}
          borderBottomLeftRadius={800}
          borderBottomRightRadius={800}
          bg="#f56344"
          ov="hidden"
          pos="absolute"
          bottom={0}
          jc="center"
          ai="center"
        >
          <YStack
            w="100%"
            h="100%"
            jc="center"
            ai="center"
            pos="absolute"
            opacity={0.5}
          >
            <LandingVideo
              src={"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}
              height={800}
            />
          </YStack>
          <YStack jc="center" ai="center">
            <H1 mb="$4">{pageCopy.title}</H1>
            <Paragraph>{pageCopy.subtitle}</Paragraph>
          </YStack>
        </YStack>
      </YStack>
      <YStack w="100%" jc="center" mb="$4" px="$3">
        <Button mb="$3" br={24} bg="#f56344" h={48}>
          {pageCopy.signUp}
        </Button>
        <Button br={24} h={48}>
          {pageCopy.login}
        </Button>
      </YStack>
    </YStack>
  );
});

LandingScreen.displayName = "LandingScreen";

export default LandingScreen;
