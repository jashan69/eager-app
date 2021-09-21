import React from 'react'
import {View, Text, Dimensions, Button} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import HeaderComponent from '../../component/HeaderComponent'
import { colors } from '../../Constants/theme'
import { Ionicons,AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { lottieAnimation } from '../../Constants/assets'
import { FlatList } from 'react-native-gesture-handler'
import TopicCard from '../../component/TopicCard'

const {width, height} = Dimensions.get('window')

const TopicSelectionPage = (props) => {

    const listOfSelection = ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'Cloud\nComputing', 'React Native', 'React']

    return(
        <SafeAreaView style={{flex:1, backgroundColor:colors.secondary}} >
            <HeaderComponent
                leftIcon={()=>(<Ionicons style={{alignSelf:'center'}} name="arrow-back-outline" size={24} color={colors.white} />)}
                rightIcon={()=>(<AntDesign style={{alignSelf:'center'}} name="questioncircle" size={24} color={colors.white} />)}
                headerStyles={{flexDirection:'row', justifyContent:'space-between',backgroundColor:colors.black, height:80, paddingHorizontal:12}}
                title='Choose Your Topic'
                titleStyle={{color:colors.white, fontFamily:'regular',justifyContent:'center', alignSelf:'center', fontSize:24}}
            />
            
            <LottieView
                autoPlay={true}
                speed={1}
                source={lottieAnimation.background_bubble}
            />

            <FlatList
                data={listOfSelection}
                keyExtractor={x=>x}
                renderItem={({item})=>{
                    return<TopicCard item={item} />
                }}
            />
            <Button title = 'Floating Button' onPress={()=>{props.navigation.navigate('Main')}}/>

            
            
        </SafeAreaView>
    )

}

export default TopicSelectionPage