import {Text, View, Image, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../constants";
// import '../app/global.css';
export default function App(){
    return(
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{height: '100%'}}>
          <View className="w-full h-full px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              className="max-w-[380px] w-full h-[298px]"
              resizeMode="contain"
             />
            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless{"\n"}
                Possibilities with{" "}
               <Text className="text-secondary-200">Aora</Text>
               </Text>

                <Image
                  source={images.path}
                  className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                  resizeMode="contain"
                />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
}