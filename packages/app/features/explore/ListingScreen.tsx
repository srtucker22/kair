import {
  Avatar,
  Button,
  Card,
  Circle,
  H1,
  H5,
  H6,
  Image,
  Paragraph,
  ScrollView,
  XStack,
  YStack,
} from "@my/ui";
import {useCallback, useEffect, useRef, useState} from "react";
import {FlatList, useWindowDimensions} from "react-native";
import Slideshow from "./Slideshow";
import {
  ChevronRight,
  Gauge,
  MapPin,
  Shield,
  Star,
  User,
} from "@tamagui/lucide-icons";
import range from "lodash/range";

const data = {
  id: "1",
  name: "Chevrolet Impala Limited",
  year: 2016,
  location: {
    name: "Pflugerville, TX",
  },
  price: "$39",
  owner: {
    name: "Kair A.",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  photos: [
    {
      id: "1",
      src: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: "2",
      src: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ],
};

const offers = [
  {
    title: "Save 5% ($37.05 Per Day)",
    subtitle: "with One Week Rental",
  },
  {
    title: "Save 10% ($35.10 Per Day)",
    subtitle: "with One Month Rental",
  },
];

export const ListingScreen = () => {
  const {width} = useWindowDimensions();

  return (
    <YStack w="100%" h="100%" ov="hidden">
      <ScrollView w="100%" h="100%">
        <Slideshow
          style={{width: "100%", height: 300}}
          data={data.photos}
          renderItem={({item}) => (
            <Image source={{uri: item.src}} w={width} mih={300} />
          )}
          autoPlay
        />
        <Card p="$3" pt="$6" elevate br={0} mb="$3">
          <YStack>
            <Paragraph>{data.year}</Paragraph>
            <H1>{data.name}</H1>
            <XStack w="100%" ai="center" py="$2">
              <XStack mr="$5">
                <H6 fontWeight="800" mr="$1">
                  {data.price}
                </H6>
                <H6>{"/ Day"}</H6>
              </XStack>
              <XStack>
                <Gauge />
                <H6 ml="$3" fontWeight="800" mr="$1">
                  {"1,000"}
                </H6>
                <H6>{"Miles / Day"}</H6>
              </XStack>
            </XStack>
          </YStack>
          <YStack btw={1}>
            <Paragraph py="$3">{"About the Owner"}</Paragraph>
            <XStack jc="space-between">
              <YStack>
                <XStack ai="center" mb="$2">
                  <User />
                  <Paragraph ml="$2">{`Owned by ${data.owner.name}`}</Paragraph>
                </XStack>
                <XStack ai="center" mb="$2">
                  <MapPin />
                  <Paragraph ml="$2">{data.location.name}</Paragraph>
                </XStack>
                <XStack ai="center" mb="$2">
                  <Circle bg="green" w={20} h={20} />
                  <Paragraph ml="$2">{"Online Now!"}</Paragraph>
                </XStack>
              </YStack>
              <Avatar circular size="$6">
                <Avatar.Image src={data.owner.avatarUrl} />
                <Avatar.Fallback bc="red" />
              </Avatar>
            </XStack>
          </YStack>
        </Card>
        <Card p="$3" elevate br={0} mb="$3">
          <H6 mb="$1">{"Available Offers"}</H6>
          {offers.map((offer, i) => (
            <XStack jc="space-between" bbw={1} py="$2" key={i}>
              <XStack ai="flex-start">
                <Star />
                <YStack px="$3">
                  <Paragraph>{offer.title}</Paragraph>
                  <Paragraph>{offer.subtitle}</Paragraph>
                </YStack>
              </XStack>
              <Button>{"Redeem"}</Button>
            </XStack>
          ))}
        </Card>
        <Card p="$3" elevate br={0} mb="$3">
          <XStack jc="space-between">
            <H6 mb="$1">{"Estimated 2 Day Cost"}</H6>
            <XStack>
              <Paragraph>{data.price}</Paragraph>
              <ChevronRight />
            </XStack>
          </XStack>
          <Paragraph>
            {
              "Kair requires a minimum 2 day booking to get started. You can extend daily, weekly, or monthly once you're on the road."
            }
          </Paragraph>
        </Card>
        <Card p="$3" elevate br={0} mb="$3">
          <Paragraph>{"Welcome to Kair Rentals,"}</Paragraph>
          <Paragraph>
            {"We take great pride in customer service, as it is o..."}
          </Paragraph>
          <XStack>
            <H6>{"Open Applications"}</H6>
            <Paragraph>1</Paragraph>
          </XStack>
          <YStack>
            { // TODO: map
            }
          </YStack>
        </Card>
        <Card p="$3">
          <XStack>
            <H6>{"Cancellation Policy"}</H6>
            <ChevronRight />
          </XStack>
          <XStack>
            <Avatar circular size="$6">
              {/* <Avatar.Image src={data.owner.avatarUrl} /> */}
              <Avatar.Fallback bc="red" />
            </Avatar>
            <Paragraph>
              {
                "Cancel this rental within 24 hours for a full refund! Conditions apply. View our policy for full details."
              }
            </Paragraph>
          </XStack>
        </Card>
        <Card p="$3" elevate br={0} mb="$3">
          <H6>{"Similar Cars"}</H6>
          <XStack w="100%" ai="center">
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1600",
              }}
              w={100}
              h={100}
            />
            <YStack f={1} ml="$3">
              <XStack w="100%" jc="space-between">
                <Paragraph>{"2016"}</Paragraph>
                <XStack f={1} jc="flex-end">
                  {range(0, 5).map((i) => (
                    <Star style={{marginRight: 8}} />
                  ))}
                </XStack>
              </XStack>
              <H5>{"Chevrolet Impala Li..."}</H5>
              <XStack jc="space-between">
                <YStack>
                  <Paragraph>{"As Low As"}</Paragraph>
                  <H6>$39 Per Day</H6>
                </YStack>
                <Avatar circular size="$6">
                  <Avatar.Image src={data.owner.avatarUrl} />
                  <Avatar.Fallback bc="red" />
                </Avatar>
              </XStack>
            </YStack>
          </XStack>
        </Card>
        <Card p="$3" elevate br={0} mb="$3">
          <XStack jc="space-between" py="$3">
            <H6>{"Message Owner"}</H6>
            <ChevronRight />
          </XStack>
          <XStack>
            <Shield />
            <Paragraph ml="$3">
              {
                "To protect your payment and personal info, never transfer money or communicate outside of the HyreCar website or app."
              }
            </Paragraph>
          </XStack>
          <XStack jc="space-between" py="$3">
            <H6>{"Additional Fees"}</H6>
            <ChevronRight />
          </XStack>
          <XStack jc="space-between" py="$3">
            <H6>{"How it Works"}</H6>
            <ChevronRight />
          </XStack>
        </Card>
        <Card h={160} />
      </ScrollView>
      <YStack pos="absolute" w={"100%"} bottom="$10">
        <Button onPress={() => {}} br={30} h={60} mx="$4" theme="orange">
          {"Select Dates"}
        </Button>
      </YStack>
    </YStack>
  );
};
