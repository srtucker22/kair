import {
  Avatar,
  Card,
  H5,
  H6,
  Image,
  Paragraph,
  ScrollView,
  XStack,
  YStack,
} from "@my/ui";
import {Gauge, MapPin, Pin, Star, X} from "@tamagui/lucide-icons";
import range from "lodash/range";

export const items = [
  {
    id: "1",
    name: "Chevrolet Impala Limited",
    year: 2016,
    location: "",
    price: "$39",
    owner: {
      name: "Kair A.",
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
    },
    photos: [],
  },
  {
    id: "2",
    name: "Chevrolet Impala Limited",
    year: 2016,
    location: "",
    price: "$39",
    owner: {
      name: "Kair A.",
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
    },
    photos: [],
  },
];

export const ExploreScreenListItem = ({item}) => {
  return (
    <Card mx="$3" mb="$3" elevate>
      <YStack w="100%">
        <XStack jc="space-between" p="$3">
          <YStack>
            <H6>{item.year}</H6>
            <H5>{item.name}</H5>
          </YStack>
          <YStack>
            <H6>Day</H6>
            <H5>{item.price}</H5>
          </YStack>
        </XStack>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1600",
          }}
          w="100%"
          mih={300}
        />
        <XStack p="$3" jc="space-between" bbw={1}>
          <XStack>
            <MapPin style={{marginRight: 8}} />
            <Paragraph>12 Mi. Away</Paragraph>
          </XStack>
          <XStack>
            <Gauge style={{marginRight: 8}} />
            <Paragraph>1,000 Mi. / Day</Paragraph>
          </XStack>
        </XStack>
        <XStack jc="space-between" p="$3">
          <YStack>
            <H6>{item.owner.name}</H6>
            <XStack pt="$3">
              {range(0, 5).map((i) => (
                <Star key={i} style={{marginRight: 8}} />
              ))}
            </XStack>
          </YStack>
          <Avatar circular size="$6">
            <Avatar.Image src={item.owner.avatarUrl} />
            <Avatar.Fallback bc="red" />
          </Avatar>
        </XStack>
      </YStack>
    </Card>
  );
};
