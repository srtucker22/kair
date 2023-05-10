import {Button, H5, Input, Paragraph, XStack, YStack} from "@my/ui";
import {ArrowRight} from "@tamagui/lucide-icons";
import {FlatList} from "react-native";

export const ServiceSelectionScreen = () => {
  const gigs = [
    {
      id: "1",
      name: "Uber",
    },
    {
      id: "2",
      name: "Lyft",
    },
    {
      id: "3",
      name: "Uber Eats",
    },
    {
      id: "4",
      name: "DoorDash",
    },
    {
      id: "5",
      name: "Instacart",
    },
    {
      id: "6",
      name: "GrubHub",
    },
    {
      id: "7",
      name: "Vacation Rental",
    },
    {
      id: "8",
      name: "Postmates",
    },
  ];

  return (
    <YStack w="100%" f={1}>
      <H5>What are you renting for?</H5>
      <Paragraph>
        In order to optimize your experience, please select the primary gig
        service that you work with.
      </Paragraph>
      <H5>Gig services</H5>
      <FlatList
        data={gigs}
        keyExtractor={(i) => i.id}
        renderItem={({item}) => (
          <XStack jc="space-between">
            <Paragraph f={1}>{item.name}</Paragraph>
            <Button circular w={20} />
          </XStack>
        )}
        style={{flex: 1}}
      />
      <Button br="$20" h={60}>
        Continue
      </Button>
    </YStack>
  );
};

ServiceSelectionScreen.displayName = "ServiceSelectionScreen";

export default ServiceSelectionScreen;
