import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TextInput, Button, FlatList } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
//import MiniCard from '../components/MiniCard';
import MiniCard from '../../components/MiniCard';
import { getSubtitles } from 'youtube-captions-scraper';

const VideoPlayer = () => {

    const [playing, setPlayint] = useState(false);
    const [value, setValue] = useState([]);
    const [miniCardData, setMiniCard] = useState([]);
    // const [videoId, setVideoId] = useState();
    const [videoId, setVideoId] = useState([]);
    // const [vidid, setVidId] = useState([]);
    const [data, setData] = useState();

    const [value1, setValue1] = useState([]);
    //const [value1, setValue1] = useState('');

    useEffect(() => {

        // getCheck();
        getSubtitls();
        fetchData();


    }, [])

    const getSubtitls = () => {

        getSubtitles({
            videoID: '2ILMLDy0L5E', // youtube video id
            lang: 'en' // default: `en`
        }).then(captions => {
            console.log("captions", captions);
        });

    }

    const fetchData1 = () => {

       // console.log("value1", value1);

        //  getData();
        getData1();
        getData2();

    }

    const getData = () => {
        console.log("getData", value1)
        fetch('http://ec2-35-164-174-170.us-west-2.compute.amazonaws.com:5000/video', {
            method: 'POST',
            headers: {
                'Content-Typ': 'application/json'
            },
            //  body: JSON.stringify({value1: value1})
            // body: JSON.stringify({ body: value1 }) //here
            body: JSON.stringify(value1)
             // value1: JSON.stringify({ value1: value1 })
        }).
         then(resp => resp.json())
            // then(resp => {
            //  console.log(resp.json)
            // })

        .then(data => {
            // console.log("data", data)
            console.log(data)
        })
    }

    const getData1 = async () => {
         const data = { value1: value1 }
        //const data = { "name": "bartek" }
        const url = "http://ec2-35-164-174-170.us-west-2.compute.amazonaws.com:5000/video";

        let result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Typ":"application/json"
            },
            // body: JSON.stringify(data)
            body: JSON.stringify(data)
            //res
        }).then( res => {
            // console.log("res", res.json())
            // console.log("res", res["name"])
            //let response = res.json();
            //let response = res.response.View[0];
            //console.log("response", response);


            console.log("res", res.json())
            let r = JSON.parse(res.json())
            console.log("r", r)
            // let resultt = JSON.parse(result.json())
            // console.log("json_result", resultt)
        })
        .then((res) => {
            console.log(res)
        },
        (error) => {
            console.log(error)
        })
        
        //;

        // result = await result.json()
        // console.warn(result);
    }

    const getData2 = async () => {
        const data = { value1: value1 }
        //const data = { "name": "bartek" }
       //// const url = "http://ec2-35-164-174-170.us-west-2.compute.amazonaws.com:5000/video";

        fetch('http://ec2-35-164-174-170.us-west-2.compute.amazonaws.com:5000/video_get')
       .then(res => {
            // console.log("res", res.json())
            // console.log("res", res["name"])
            //let response = res.json();
            //let response = res.response.View[0];
            //console.log("response", response);


            // console.log("res", res.json())
            // let r = JSON.parse(res.json())
            // console.log("r", r)

            return res.json()
            // let resultt = JSON.parse(result.json())
            // console.log("json_result", resultt)
        })
            .then((res) => {
                console.log(res)
            },
                (error) => {
                    console.log(error)
                })

        //;

        // result = await result.json()
        // console.warn(result);
    }

    const fetchData = () => {

        // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[YOUR_API_KEY]

        // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDUWweYDFXkKW7jk8tGW5OMfZ2tkDdFTx4`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log("data", data)
        // })

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDUWweYDFXkKW7jk8tGW5OMfZ2tkDdFTx4`)
            .then(res => res.json())
            .then(data => {
                // console.log("data", data)
                // console.log("data", data.items)

                // data.id.videoId

                //  console.log("data", data.items[etag])




                //setData(data);
                setVideoId(data.items)
                console.log("data-id-videoid", videoId)



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

            {/* here */}
            {/* <TextInput style={{
                width: "70%",
                backgroundcolor: "#e6e6e6"
            }}

                value={value}
                onChangeText={(text) => setValue(text)}

            /> */}

            <TextInput style={{
                width: "70%",
                backgroundcolor: "#e6e6e6"
            }}

                value={value1}
                onChangeText={(text) => setValue1(text)}

            />

            <Button

                title="Search"
                onPress={() => fetchData1()}
            />

            {/* here */}
            {/* <Button

                title="Search"
                onPress={() => fetchData()}
            /> */}

            <YoutubeIframe
                height={300}
                play={playing}
                //    2ILMLDy0L5E
                //    videoId={'iee2TATGMyI'}

                // 3tUTdgVhMBk

                // videoId={'2ILMLDy0L5E'}
               
                // videoId={'RveHGe2uvbk'} //here
                // videoId={'3tUTdgVhMBk'}
                videoId={value1}
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

export default VideoPlayer

// import { View, Text } from 'react-native'
// import React from 'react'

// const VideoPlayer = () => {
//   return (
//     <View>
//       <Text>VideoPlayer</Text>
//     </View>
//   )
// }

// export default VideoPlayer