import { Masonry } from "@mui/lab";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  
} from "@mui/material";
import React from "react";


const RecentCards = () => {
  return (
    <Grid item xs={12} sm={8} my={{ xs: 5, sm: 2 }}>
      <Masonry
        sx={{ margin: "0 !important" }}
        columns={{ xs: 2, sm: 2, md: 3 }}
        spacing={{ xs: 1, sm: 2, md: 1 }}
      >
        {currentData.slice(0, 6).map((data, index) => {
          const imageUrl = `${data.urlToImage.split("?")[0]}?resize=250,150`;
          return (
            <Card
              sx={{
                transition: 'all 0.2s',
                "&:hover": {
                  boxShadow: 16,
                  marginTop: "7.5px",
                },
              }}
              key={index}
            >
              <CardMedia
                component="img"
                height="150px"
                image={imageUrl}
                alt="image loading failed"
              ></CardMedia>
              <CardContent sx={{ padding: "5px 10px" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    lineHeight: "1.2rem",
                    fontWeight: "600",
                  }}
                  component="div"
                >
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.content.slice(0, 120)}...
                </Typography>
              </CardContent>
              <CardActions sx={{ paddingLeft: "10px", paddingBottom: "5px" }}>
                <Button variant="outlined" target='_blank' href={data.url}>Learn More</Button>
                <Button
                  sx={{
                    "&:hover": {
                      bgcolor: "success.light",
                      color: "white",
                      fontWeight: 600,
                    },
                  }}
                >
                  Share
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Masonry>
    </Grid>
  );
};

// const exampleData = [
//   {
//     source: {
//       id: "techcrunch",
//       name: "TechCrunch",
//     },
//     author: "Connie Loizos",
//     title: "Drive Capital's investors hit a fork in the road",
//     description:
//       "Drive Capital was founded by two former Sequoia Capital Partners looking to start anew in the Midwest. But investors in the Columbus, Oh.-based firm have had a bumpy ride of late",
//     url: "https://techcrunch.com/2022/11/18/drive-capitals-investors-hit-a-fork-in-the-road/",
//     urlToImage:
//       "https://techcrunch.com/wp-content/uploads/2016/11/gettyimages-157429059.jpg?resize=250,150",
//     publishedAt: "2022-11-19T05:32:54Z",
//     content:
//       "Drive Capital was founded by two former Sequoia Capital Partners looking to start anew in the Midwest. But investors in the Columbus, Oh.-based firm have had a bumpy ride of late, and according to ou… [+6808 chars]",
//   },
//   {
//     source: {
//       id: "techcrunch",
//       name: "TechCrunch",
//     },
//     author: "Connie Loizos",
//     title: "Drive Capital's investors hit a fork in the road",
//     description:
//       "Drive Capital was founded by two former Sequoia Capital Partners looking to start anew in the Midwest. But investors in the Columbus, Oh.-based firm have had a bumpy ride of late",
//     url: "https://techcrunch.com/2022/11/18/drive-capitals-investors-hit-a-fork-in-the-road/",
//     urlToImage:
//       "https://techcrunch.com/wp-content/uploads/2016/11/gettyimages-157429059.jpg?resize=250,150",
//     publishedAt: "2022-11-19T05:32:54Z",
//     content:
//       "Drive Capital was founded by two former Sequoia Capital Partners looking to start anew in the Midwest. But investors in the Columbus, Oh.-based firm have had a bumpy ride of late, and according to ou… [+6808 chars]",
//   },
//   {
//     source: {
//       id: "techcrunch",
//       name: "TechCrunch",
//     },
//     author: "Connie Loizos",
//     title: "Drive Capital's investors hit a fork in the road",
//     description:
//       "Drive Capital was founded by two former Sequoia Capital Partners looking to start anew in the Midwest. But investors in the Columbus, Oh.-based firm have had a bumpy ride of late",
//     url: "https://techcrunch.com/2022/11/18/drive-capitals-investors-hit-a-fork-in-the-road/",
//     urlToImage:
//       "https://techcrunch.com/wp-content/uploads/2016/11/gettyimages-157429059.jpg?resize=250,150",
//     publishedAt: "2022-11-19T05:32:54Z",
//     content:
//       "Drive Capital was founded by two former Sequoia Capital Partners looking to start anew in the Midwest. But investors in the Columbus, Oh.-based firm have had a bumpy ride of late, and according to ou… [+6808 chars]",
//   },
//   {
//     source: {
//       id: "techcrunch",
//       name: "TechCrunch",
//     },
//     author: "Connie Loizos",
//     title: "Drive Capital's investors hit a fork in the road",
//     description:
//       "Drive Capital was founded by two former Sequoia Capital Partners looking to start anew in the Midwest. But investors in the Columbus, Oh.-based firm have had a bumpy ride of late",
//     url: "https://techcrunch.com/2022/11/18/drive-capitals-investors-hit-a-fork-in-the-road/",
//     urlToImage:
//       "https://techcrunch.com/wp-content/uploads/2016/11/gettyimages-157429059.jpg?resize=250,150",
//     publishedAt: "2022-11-19T05:32:54Z",
//     content:
//       "Drive Capital was founded by two former Sequoia Capital Partners looking to start anew in the Midwest. But investors in the Columbus, Oh.-based firm have had a bumpy ride of late, and according to ou… [+6808 chars]",
//   },
// ];
const currentData = [
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Rebecca Bellan",
    "title": "What it would mean for Tesla to buy back shares",
    "description": "Tesla investors are begging CEO Elon Musk and the board of Tesla to consider buying back shares as stock price slumps to a two-year low.",
    "url": "https://techcrunch.com/2022/11/23/what-it-would-mean-for-tesla-to-buy-back-shares/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/04/GettyImages-1232944328.jpeg?resize=1200,800",
    "publishedAt": "2022-11-24T04:17:06Z",
    "content": "Tesla investors are begging CEO Elon Musk and the board of Tesla to consider buying back shares as the company’s stock price slumps to a two-year low. Tesla stock was trading at $183.20 after hours o… [+4953 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Catherine Shu",
    "title": "Dat Bike gets another $8M to put more e-bikes on Vietnam's roads",
    "description": "Dat Bike is on a mission to put more electric bikes on Vietnam’s roads. The startup said today it has raised $8 million led by returning investor Singapore-based firm Jungle Ventures, just seven months after its first round of funding was announced. GSR Ventu…",
    "url": "https://techcrunch.com/2022/11/23/dat-bike-gets-another-8m-to-put-more-e-bikes-on-vietnams-roads/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/Dat-Bike_2.jpg?resize=1200,800",
    "publishedAt": "2022-11-24T00:38:37Z",
    "content": "Dat Bike is on a mission to put more electric bikes on Vietnams roads. The startup said today it has raised $8 million led by returning investor Singapore-based firm Jungle Ventures, just seven month… [+2219 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Aria Alamalhodaei",
    "title": "Here’s what NASA’s Orion spacecraft is doing over Thanksgiving weekend",
    "description": "NASA's Orion spacecraft will have a busy weekend, including conducting a key burn to reach distant retrograde orbit.",
    "url": "https://techcrunch.com/2022/11/23/heres-what-nasas-orion-spacecraft-is-doing-over-thanksgiving-weekend/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/orion-selfie.jpeg?resize=1200,900",
    "publishedAt": "2022-11-23T22:29:28Z",
    "content": "Since taking off aboard the Space Launch System rocket last Wednesday, NASAs Orion spacecraft has had a remarkably smooth journey. But its far from over. While millions of Americans prepare for a lon… [+2816 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Brian Heater",
    "title": "Let’s talk about killer robots",
    "description": "Language in a new police disclosure raises concern over the use of \"deadly force\" robots in San Francisco.",
    "url": "https://techcrunch.com/2022/11/23/lets-talk-about-killer-robots/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/04/gettyimages-167263495.jpg?resize=1200,799",
    "publishedAt": "2022-11-23T21:17:45Z",
    "content": "Looking for a Thanksgiving dinner table conversation that isnt politics or professional sports? Okay, lets talk about killer robots. Its a concept that long ago leapt from the pages of science fictio… [+6811 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Kate Park",
    "title": "South Korean financial regulator confirms it is reviewing Apple Pay service for launch",
    "description": "Apple is poised to launch its Apple Pay service in South Korea, one of the fastest-growing countries in the world for cashless services.",
    "url": "https://techcrunch.com/2022/11/23/south-korean-financial-regulator-confirms-it-is-reviewing-apple-pay-service-for-launch/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1235254642.jpg?resize=1200,800",
    "publishedAt": "2022-11-23T21:10:49Z",
    "content": "Apple is poised to launch its Apple Pay service in South Korea, one of the fastest-growing countries in the world for cashless services, yet as of right now untapped by both Apple and the other major… [+3793 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Aria Alamalhodaei",
    "title": "NASA selects Rocket Lab to launch TROPICS satellites",
    "description": "NASA has selected Rocket Lab to launch its TROPICS extreme storm observation satellites, to launch no earlier than May next year.",
    "url": "https://techcrunch.com/2022/11/23/nasa-selects-rocket-lab-to-launch-tropics-satellites/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/tropics-nasa.png",
    "publishedAt": "2022-11-23T20:56:15Z",
    "content": "NASA has found a new launch provider for its extreme weather observation satellites. The agency announced Wednesday that it has selected Rocket Lab to launch its Time-Resolved Observations of Precipi… [+1852 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Christine Hall",
    "title": "Daily Crunch: Vulnerable component in IoT devices poses 'supply chain risk,' Microsoft says",
    "description": "To get a roundup of TechCrunch’s biggest and most important stories delivered to your inbox every day at 3 p.m. PDT, subscribe here. Today’s prize (a muted ‘hrmph!’ and a solemn nod) for best headline goes to Devin, and given that we’re sneaking up on Black F…",
    "url": "https://techcrunch.com/2022/11/23/vulnerable-component-in-iot-devices-poses-supply-chain-risk-microsoft-says/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2014/04/shutterstock_103274513.jpg?resize=1200,800",
    "publishedAt": "2022-11-23T20:48:10Z",
    "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT,subscribe here.\r\nTodays prize (a muted hrmph! and a solemn nod) for best headline go… [+4127 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Jacquelyn Melinek",
    "title": "Bitcoin believers maintain view it could find institutional buy-in despite FTX chaos",
    "description": "Bitcoin could potentially capture roughly 3.5% of the global monetary market in aggregate over the next 17 years, according to CoinShares.",
    "url": "https://techcrunch.com/2022/11/23/bitcoin-believers-maintain-view-it-could-find-institutional-buy-in-despite-ftx-chaos/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-887657568.jpg?resize=1200,800",
    "publishedAt": "2022-11-23T20:32:23Z",
    "content": "Its hard to believe that bitcoin and other cryptocurrencies were flirting with all-time highs about a year ago. Todays scenery is less exuberant; bitcoins price has fallen below $20,000 and maintaine… [+308 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Dominic-Madori Davis",
    "title": "#MyTechFrenemy",
    "description": "TechCrunch spoke to over a dozen people who accuse MyTechBestFriend of hostility, bullying, and harassment of its students.",
    "url": "https://techcrunch.com/2022/11/23/mytechfrenemy/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/MTBF-lead-image.jpg?resize=1200,645",
    "publishedAt": "2022-11-23T20:15:34Z",
    "content": "Some students at theMyTechBestFriend academy have always been a little suspicious of the program and its founder, Mary Awodele.\r\nSince its founding in 2020, a whisper network murmured that many of th… [+17436 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Kyle Wiggers",
    "title": "Obrizum uses AI to build employee training modules out of existing content",
    "description": "Obrizum, a platform building tech for customizing corporate learning, is vying for a slice of a lucrative market.",
    "url": "https://techcrunch.com/2022/11/23/obrizum-uses-ai-to-build-employee-training-modules-out-of-existing-content/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-463765589.jpg?resize=1200,800",
    "publishedAt": "2022-11-10T00:50:39Z",
    "content": "The market for corporate training, which Allied Market Research estimates is worth over $400 billion, has grown substantially in recent years as companies realize the cost savings in upskilling their… [+5186 chars]"
  }
];

export default RecentCards;
