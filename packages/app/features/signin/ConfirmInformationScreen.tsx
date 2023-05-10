import {
  Button,
  Checkbox,
  Fieldset,
  Input,
  Label,
  Paragraph,
  ScrollView,
  YStack,
} from "@my/ui";
import {ArrowRight} from "@tamagui/lucide-icons";
import {Controller, useForm} from "react-hook-form";
import {KeyboardAvoidingView, SafeAreaView} from "react-native";

type FormValues = {
  phoneNumber: string;
  emailAddress: string;
  zipCode: string;
  promotions: boolean;
  form?: string;
};

export const ConfirmInformationScreen = () => {
  const {control, reset, handleSubmit, setError, clearErrors, formState} =
    useForm<FormValues>({
      defaultValues: {},
    });

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <YStack h="100%">
          <ScrollView p="$3" h="100%">
            <Fieldset w="100%" mb="$3">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <>
                    <Label
                      justifyContent="flex-start"
                      htmlFor="phoneNumber"
                      mb={0}
                      mr="$2"
                    >
                      Phone number
                    </Label>
                    <Input
                      id="phoneNumber"
                      placeholder="555-555-5555"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  </>
                )}
                name="phoneNumber"
              />
            </Fieldset>
            <Fieldset w="100%" mb="$3">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <>
                    <Label
                      justifyContent="flex-start"
                      htmlFor="emailAddress"
                      mb={0}
                      mr="$2"
                    >
                      Email address
                    </Label>
                    <Input
                      id="emailAddress"
                      placeholder="example@example.com"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  </>
                )}
                name="emailAddress"
              />
            </Fieldset>
            <Fieldset w="100%" mb="$3">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <>
                    <Label
                      justifyContent="flex-start"
                      htmlFor="zipCode"
                      mb={0}
                      mr="$2"
                    >
                      Zip code
                    </Label>
                    <Input
                      id="zipCode"
                      placeholder="12345"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  </>
                )}
                name="zipCode"
              />
            </Fieldset>
            <Fieldset w="100%" horizontal>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <>
                    <Checkbox
                      id="promotions"
                      onCheckedChange={onChange}
                      value={value}
                    />
                  </>
                )}
                name="zipCode"
              />
              <Paragraph f={1} pl="$3">
                Sign up to receive promotions and updates. Message and data
                rates may apply. Message frequency varies. Text HELP for help.
                Text STOP to stop. Terms & Conditions and Privacy Policy
              </Paragraph>
            </Fieldset>
          </ScrollView>
          <YStack pos="absolute" bottom={0} right={0}>
            <Button circular icon={ArrowRight} theme="alt2" mr="$3" />
          </YStack>
        </YStack>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
