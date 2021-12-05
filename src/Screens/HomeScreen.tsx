import React from 'react';
import { Box, Text} from 'native-base';
import axios from 'axios';
import { CAT_API } from '../Services/Config';
import { Image }from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

function HomeScreen() {
    

    let [catOne, setCatOneData] = React.useState("");
    let [catTwo, setCatTwoData] = React.useState("");
    let [catThree, setCatThreeData] = React.useState("");
    let [width, setWidth] = React.useState(250);
    let [height, setHeight] = React.useState(300);
    //use state array
    // let [cat, setCat] = React.useState<Array<string>>([catOne]);
    
    let allCats = [catOne, catTwo, catThree];
    //declare cat data array
    


    //get data from api
    React.useEffect(() => {
        // axios.get(CAT_API.baseUrl)
        //     .then(res => {
        //         console.log(typeof(res.data));
        //         console.log(res.data);
        //         setData(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    //  getBase64(CAT_API.baseUrl)
    getKittyPictures()
   
    
    }, []);

// function getBase64(url: string) {
//   axios
//   .get(url, {
//     responseType: 'arraybuffer'
//   })
//   .then(response => {
//     const buffer = Buffer.from(response.data, 'base64');
//     const base64 = buffer.toString('base64');
//     // console.log(base64);
//     setData(base64);
    
//   })
//   .catch(ex => {
//     console.error(ex);
//   });
// }
const getKittyPictures = async () => {
    let pictureOne = CAT_API.baseUrl+`/${width}/${height+=1}` 
    let pictureTwo = CAT_API.baseUrl+`/${width}/${height+=2}` 
    let pictureThree = CAT_API.baseUrl+`/${width}/${height+=3}` 

    const requestOne = await axios.get(pictureOne, {
        responseType: 'arraybuffer'
        })
        .then(response => {
            const buffer = Buffer.from(response.data, 'base64');
            const base64 = buffer.toString('base64');
            // console.log(base64);
            return base64;
            
        })

    const requestTwo = await axios.get(pictureTwo, {
        responseType: 'arraybuffer'
        })
        .then(response => {
            const buffer = Buffer.from(response.data, 'base64');
            const base64 = buffer.toString('base64');
            // console.log(base64);
            return base64;
        })
    const requestThree = await axios.get(pictureThree, {
        responseType: 'arraybuffer'
        })
        .then(response => {
            const buffer = Buffer.from(response.data, 'base64');
            const base64 = buffer.toString('base64');
            // console.log(base64);
            return base64;
        })


    axios.all([requestOne, requestTwo, requestThree])
    .then(axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];
      const responesThree = responses[2];

      // use/access the results
    //   console.log(responseOne, responseTwo, responesThree);
       
      //assign the response to the state
        setCatOneData(responseOne);
        setCatTwoData(responseTwo);
        setCatThreeData(responesThree);
        
        }
    ))
    .catch(errors => {
        console.log(errors);
    });

}

//render cat array

// const renderCat = () => {
//     return cat.map((item, index) => {
//         return (
//             <Image key={index} source={{uri: `data:image/jpeg;base64,${item}`}} style={{width: width, height: height}}/>
//         )
//     }
//     )
// }


    return (
        <Box>
            <Text>Home</Text>
            {/* <Image
            style={{width: width, height: height, borderWidth: 1, borderColor: 'red'}}
               source={{uri: `data:image/jpeg;base64,${catOne}`}}
            />
            <Image
            style={{width: width, height: height, borderWidth: 1, borderColor: 'red'}}
               source={{uri: `data:image/jpeg;base64,${catTwo}`}}
            /> */}
            <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                index={0}
                showPagination
                paginationStyleItem={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginHorizontal: 2.5,
                    backgroundColor: 'rgba(0, 0, 0, 0.54)'
                }}
                paginationStyle={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10
                }}
            >
                <Image
                    style={{width: width, height: height, borderWidth: 1, borderColor: 'red'}}
                    source={{uri: `data:image/jpeg;base64,${catOne}`}}
                />
                <Image
                    style={{width: width, height: height, borderWidth: 1, borderColor: 'red'}}
                    source={{uri: `data:image/jpeg;base64,${catTwo}`}}
                />
                <Image
                    style={{width: width, height: height, borderWidth: 1, borderColor: 'red'}}
                    source={{uri: `data:image/jpeg;base64,${catThree}`}}
                />
            </SwiperFlatList>
        </Box>
    );
}

export default HomeScreen;