import {Button, YStack} from "@my/ui";
import {memo} from "react";

const pageCopy = {
  google: "Continue with Google",
  apple: "Continue with Apple",
  email: "Continue with Email",
};

export const SignInOptionsScreen = memo(() => {
  const options = [
    {
      key: "google",
      title: pageCopy.google,
      icon: null,
    },
    {
      key: "apple",
      title: pageCopy.apple,
      icon: null,
    },
    {
      key: "email",
      title: pageCopy.email,
      icon: null,
    },
  ];
  return (
    <YStack f={1} ai="center" w="100%" my="$3" px="$3">
      {options.map(({key, icon, title}) => (
        <Button
          key={key}
          icon={icon}
          my="$3"
          br="$10"
          bg="orange"
          w="100%"
          maw={300}
        >
          {title}
        </Button>
      ))}
    </YStack>
  );
});

SignInOptionsScreen.displayName = "SignInOptionsScreen";

export default SignInOptionsScreen;
