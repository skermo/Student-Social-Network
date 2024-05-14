import React, { useRef, useState } from "react";
import { Modal, ScrollView, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import GestureRecognizer from "react-native-swipe-gestures";
import CustomText from "./CustomText";

const CustomModal = ({ children, title, openModal, setOpenModal }) => {
  const onSwipeDown = () => {
    if (!isScrolling) {
      setOpenModal(false);
    }
  };

  const onScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setScrolling(offsetY > 0);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const [isScrolling, setScrolling] = useState(false);
  const scrollViewRef = useRef(null);

  return (
    <GestureRecognizer onSwipeDown={onSwipeDown} config={config}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            keyboardDismissMode="interactive"
            keyboardShouldPersistTaps="always"
            extraScrollHeight={-10}
          >
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <View className="bg-raisin-600 w-full h-4/6 rounded-2xl">
                <CustomText classes="text-lg text-center py-3 text-slate-50">
                  {title}
                </CustomText>
                <View className="border-b-light border-slate-50" />
                <ScrollView
                  className="w-full"
                  ref={scrollViewRef}
                  onScroll={onScroll}
                >
                  {children}
                </ScrollView>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </Modal>
    </GestureRecognizer>
  );
};

export default CustomModal;
