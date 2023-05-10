import {XStack, YStack} from "@my/ui";
import {useCallback, useEffect, useRef, useState, memo} from "react";
import {FlatList, ListRenderItem} from "react-native";

export const Slideshow = memo(
  ({
    autoPlay,
    delay = 5000,
    data,
    renderItem,
    style,
  }: {
    autoPlay?: boolean;
    delay?: number;
    style: any;
    data?: any[];
    renderItem?: ListRenderItem<any> | null | undefined;
  }) => {
    const listRef = useRef<any>();
    const [currentIndex, setCurrentIndex] = useState(0);

    const onPressButton = useCallback((i) => {
      listRef?.current?.scrollToIndex(i);
    }, []);

    const onViewableItemsChanged = ({viewableItems}) => {
      setCurrentIndex(viewableItems?.[0]?.index);
    };

    const viewabilityConfig = {
      viewAreaCoveragePercentThreshold: 50,
    };

    const viewabilityConfigCallbackPairs = useRef([
      {viewabilityConfig, onViewableItemsChanged},
    ]);

    useEffect(() => {
      let timeout;
      if (!!data && autoPlay) {
        timeout = setTimeout(() => {
          const newIndex =
            currentIndex === data.length - 1 ? 0 : currentIndex + 1;

          listRef?.current?.scrollToIndex({index: newIndex, animated: true});
        }, delay);
      }
      return () => timeout && clearTimeout(timeout);
    }, [currentIndex, data, delay, autoPlay]);

    return (
      <YStack>
        <FlatList
          ref={listRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(photo) => photo.id}
          style={style}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
        />
        {data && data.length > 1 && (
          <XStack pos="absolute" bottom={12} w="100%" jc="center">
            {data.map((_, i) => (
              <YStack
                key={i}
                w={10}
                h={10}
                bg={currentIndex === i ? "$gray11Dark" : "$gray9Dark"}
                br={5}
                mr="$1.5"
                elevation="$1"
                opacity={currentIndex === i ? 1 : 0.8}
                onPress={() => onPressButton(i)}
              />
            ))}
          </XStack>
        )}
      </YStack>
    );
  }
);

Slideshow.displayName = "Slideshow";

export default Slideshow;
