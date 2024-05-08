// import React from 'react';
// import { Text, View } from 'react-native';

import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TextInput, Button, FlatList } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import MiniCard from '../components/MiniCard';
import { getSubtitles } from 'youtube-captions-scraper';

import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
//import MiniCard from './components/MiniCard';

// import {

//     YoutubeCaptions,
//     getSubtitles,
//     getSubtitlesContent

// } from '@drorgl/youtube-captions-scraper'


  const VideoPlayer = (props) => {
 //const VideoPlayer = ({ navigation }) => {    

   // const navigation = useNavigation();

    const [playing, setPlayint] = useState(false);
    const [value, setValue] = useState([]);
    const [miniCardData, setMiniCard] = useState([]);
     const [videoId, setVideoId] = useState();
   
   // const [videoId, setVideoId] = useState([]);
   
    // const [vidid, setVidId] = useState([]);
    const [data, setData] = useState();

    const [vid, setVid] = useState([]);

    // onPress = {()=> navigation.navigate("videoplayer", { videoId: props.videoID, title: props.title })}


    // console.log("MiniCard-videoId---------VideoPlayer", videoId[0])

      
      const { videoid } = props;
    //   console.log("MiniCard-videoId---------VideoPlayer", videoId[0])
      console.log("MiniCard-videoId---------VideoPlayer", props.videoID);
    //   let videoid = videoId[0];
    //   console.log("videoid", videoid);


    // setVid(videoId[0])
    // console.log("vid", vid);



    useEffect(() => {

        // const videoid = videoId[0]
        // console.log("vid", vid);

        // const route = useRoute();
        // const video = route.params?.videoID;
        // console("video", video);

       // setVid(videoid);

        // getCheck();
        
         //getSubtitls();
         fetchData();
         //result();

        //  let vidd = 'l3zipB6nek8';
        // setVid(vidd);


    }, [])

    const getSubtitls = () => {

        getSubtitles({
            videoID: '2ILMLDy0L5E', // youtube video id
            lang: 'en' // default: `en`
        }).then(captions => {
            console.log("captions", captions);
        });

    }

    const fetchData = () => {

        // AIzaSyB6PTTWY1hIdDCwvS2g0u8UYnPTyy78YVA

        // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[YOUR_API_KEY]

        // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDUWweYDFXkKW7jk8tGW5OMfZ2tkDdFTx4`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log("data", data)
        // })

        // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDUWweYDFXkKW7jk8tGW5OMfZ2tkDdFTx4`)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyB6PTTWY1hIdDCwvS2g0u8UYnPTyy78YVA`)

            .then(res => res.json())
            .then(data => {
                // console.log("data", data)
                // console.log("data", data.items)

                // data.id.videoId

                //  console.log("data", data.items[etag])




                //setData(data);
                setVideoId(data.items)
                // console.log("data-id-videoid", videoId)
                // console.log("data-id-videoid", data.items)

                // console.log("data-id-videoid", data.kind) //youtube#searchListResponse
                // console.log("data-id-videoid", data.items[0].id.videoID)
                // console.log("data-id-videoid", data.items[0].id.videoId)
                console.log("data-id-videoid", data.items.etag)

                //setVid(data.items[0].id.videoID);

                // const result = async () => {

                //    const resultt =  await data.items[0].id.videoID;
                //     console.log("resultt", resultt);
                //    return resultt;

                // }






                // videoId.map( vid => {
                //     console.log("videoid", vid.videoID)
                // })

                // {
                //     data.map((data) => {
                //         console.log("data", data.id.videoId)
                //     })

                // }







                // setMiniCard(data.items);
                setMiniCard(videoId);
            })

        //{


        // videoId.map( video => {
        //     //setVidId(video.id.videoId);

        //     // console.log("video", video.id.videoId)
        //     console.log("video", video.data.id.videoId)
        // })



    }




    return (
        <View>
        <Text>Video Player lkjsdf </Text>
        
            {/* <View style={{
                padding: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                elevation: 1,
            }} > */}

                <TextInput style={{
                    width: "70%",
                    backgroundcolor: "#e6e6e6"
                }}

                    value={value}
                    onChangeText={(text) => setValue(text)}

                />

                <Button

                    title="Search"
                    onPress={() => fetchData()}
                />

            <TextInput style={{
                width: "70%",
                backgroundcolor: "#e6e6e6"
            }}

                value={vid}
                onChangeText={(text) => setVid(text)}

            />
            <Text>Vide { vid }</Text>

                <YoutubeIframe
                    height={300}
                    play={playing}
                    //    2ILMLDy0L5E
                    //    videoId={'iee2TATGMyI'}

                    // videoId={'2ILMLDy0L5E'}
                    
                     //videoId={'RveHGe2uvbk'} //here
                     
                      // videoId={ videoId }
                
                      ///// videoId={ '6NvLJHUpa-M'}

                          videoId={vid}
                        //videoId={ 'Y9y0pETKG1g' }

                      //    videoID={ props.videoID[0] }


                //videoId={videoId}
                />

                <FlatList
                    data={miniCardData}

                    renderItem={({ item }) => {
                        return <MiniCard
                            //   videoID={item.id.videoID}
                            videoID={item.id.videoId}



                            // videoID={data.id.videoID}
                            // videoID={data.items.id.videoID}

                            /////videoID={data.id.videoId}

                            // videoID = {
                            //     videoId.map( videoid => {
                            //         videoId
                            //         console.log("videoid", videoid.id.videoId)
                            //         return (
                            //             videoid.videoId
                            //         )
                            //     })
                            // }
                            // videoID = {
                            //     vidid.map( vd => {
                            //         console.log("vd", vd.videoId)
                            //         return (
                            //             vd.videoId
                            //         )
                            //     }

                            //     )
                            // }


                            title={item.snippet.title}
                            channel={item.snippet.channelTitle}
                        />

                        console.log("videoId", item.id.videoID)

                        keyExtractor = (item => item.itemId.videoID)
                        //setVideoId(item.itemId.videoID)
                    }}

                />






            {/* </View> */}
        
        
        </View>


    )
}

export default VideoPlayer;