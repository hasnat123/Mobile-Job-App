import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useState } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router'

import { ScreenHeaderBtn, Welcome, Popularjobs, Nearbyjobs } from '../components'

import { COLORS, icons, images, SIZES } from '../constants'

const Home = () =>
{
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('')

    const Drawer = createDrawerNavigator();

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: COLORS.lightWhite },
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                        ),
                        headerRight: () => (
                            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                        ),
                        headerTitle: ''
                    }}
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flex: 1, padding: SIZES.medium}}>
                        <Welcome
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            handleClick={() =>
                            {
                                if (searchTerm) router.push(`/search/${searchTerm}`)
                            }}
                        />
                        <Popularjobs/>
                        <Nearbyjobs/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home