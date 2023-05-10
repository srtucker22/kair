import {FlatList, Modal} from "react-native";
import {ExploreScreenListItem, items} from "./ExploreScreenListItem";
import {Button, Dialog, Input, Paragraph, XStack, YStack} from "@my/ui";
import {MapPin} from "@tamagui/lucide-icons";
import {useState} from "react";

export const ExploreScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <YStack h="100%">
      <YStack>
        <Modal
          animationType="slide"
          presentationStyle="pageSheet"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <YStack>
            <Button onPress={() => setModalVisible(false)}>close</Button>
          </YStack>
        </Modal>
        <XStack p="$3" bbw={1} ai="center" onPress={() => setModalVisible(true)}>
          <MapPin />
          <Paragraph ml="$3">Austin</Paragraph>
        </XStack>
      </YStack>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ExploreScreenListItem item={item} />}
        contentContainerStyle={{paddingTop: 16}}
      />
    </YStack>
  );
};
