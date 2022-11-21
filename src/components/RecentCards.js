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
                <Button variant="outlined">Learn More</Button>
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
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Connie Loizos",
    title: "Drive Capital's investors hit a fork in the road",
    description:
      "Drive Capital was founded by two former Sequoia Capital Partners looking to start anew in the Midwest. But investors in the Columbus, Oh.-based firm have had a bumpy ride of late",
    url: "https://techcrunch.com/2022/11/18/drive-capitals-investors-hit-a-fork-in-the-road/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2016/11/gettyimages-157429059.jpg?resize=1200,675",
    publishedAt: "2022-11-19T05:32:54Z",
    content:
      "Drive Capital was founded by two former Sequoia Capital Partners looking to start anew in the Midwest. But investors in the Columbus, Oh.-based firm have had a bumpy ride of late, and according to ou… [+6808 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Connie Loizos",
    title:
      "Elon Musk talked about laying off 75% of employees; he may have just gotten his wish",
    description:
      "Elon Musk reportedly told investors he might slash 75% of staff before taking over the company; whether he's in shock today or celebrating their mass exodus is only something Musk and his inner circle knows.",
    url: "https://techcrunch.com/2022/11/18/elon-musk-talked-about-laying-off-75-of-employees-he-may-have-just-gotten-his-wish/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2022/10/elon-musk-buys-twitter-GettyImages-1238367009.jpg?resize=1200,675",
    publishedAt: "2022-11-19T00:48:04Z",
    content:
      "When Peter Clowes last updated his LinkedIn profile, he listed his role as “Layoff Survivor” at Twitter. Yet Clowes, a senior software engineer who joined the company in the spring of 2020, is now go… [+4316 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Devin Coldewey",
    title: "Google introduces Workspaces Spaces Chats conversations summaries",
    description:
      'Too many Chat messages in Workspace Spaces? Google is "excited to introduce conversation summaries in Google Chat for messages in Spaces."',
    url: "https://techcrunch.com/2022/11/18/google-introduces-workspaces-spaces-chats-conversations-summaries/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2019/07/GettyImages-496729620.jpg?resize=1200,900",
    publishedAt: "2022-11-18T22:38:48Z",
    content:
      "Having trouble keeping up with the conversations in your Chats in your Workspace Spaces? Google feels your pain, and is “excited to introduce conversation summaries in Google Chat for messages in Spa… [+2336 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Amanda Silberling",
    title:
      "Elizabeth Holmes sentenced to 11 years in prison for Theranos fraud",
    description:
      "Ten months after she was found guilty of fraud, Theranos CEO and founder Elizabeth Holmes was sentenced to 11 years in prison.",
    url: "https://techcrunch.com/2022/11/18/elizabeth-holmes-sentenced-to-11-years-in-prison-for-theranos-fraud/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2022/11/elizabeth-holmes-sentence-1.jpg?resize=1200,800",
    publishedAt: "2022-11-18T22:32:01Z",
    content:
      "Ten months after she was found guilty of fraud, the former youngest self-made female billionaire Elizabeth Holmes was sentenced to 11.25 years in prison, plus three years of supervised release. At he… [+4182 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Kyle Wiggers",
    title:
      "Daily Crunch: Nuro founders admit aggressive hiring 'was a mistake' in email to laid-off workers",
    description:
      "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
    url: "https://techcrunch.com/2022/11/18/daily-crunch-nuro-founders-admit-aggressive-hiring-was-a-mistake-in-email-to-laid-off-workers/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2021/08/Kroger_and_Nuro.jpg?resize=1200,633",
    publishedAt: "2022-11-18T22:28:40Z",
    content:
      "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT,subscribe here.\r\nHey, folks. It’s Kyle, filling in for the Daily Crunch stalwarts Ha… [+10773 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Zack Whittaker",
    title: "Booz Allen says former staffer downloaded employees' personal data",
    description:
      "The U.S. government contractor says the exposed data includes employee names, Social Security numbers, and security clearance eligibility.",
    url: "https://techcrunch.com/2022/11/18/booz-allen-employee-data-exposed/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2022/11/GettyImages-1229362965-1.jpg?resize=1200,793",
    publishedAt: "2022-11-18T21:48:34Z",
    content:
      "U.S. government contractor Booz Allen Hamilton has disclosed that a former staffer downloaded potentially tens of thousands of employees’ personal information from the company’s internal network.\r\nTh… [+1419 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Abigail Bassett",
    title:
      "VinFast's bid to attract U.S. buyers includes 4 all-electric SUVs and maybe a sports car",
    description:
      "VinFast showcased four all-electric SUVs at the LA Auto Show and hinted at a sports car as the automaker pushes to break into the U.S.",
    url: "https://techcrunch.com/2022/11/18/vinfasts-bid-to-attract-u-s-buyers-includes-4-all-electric-suvs-and-maybe-a-sports-car/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2022/11/vinfast-2022.jpg?resize=1200,675",
    publishedAt: "2022-11-18T20:03:26Z",
    content:
      "VinFast showcased four battery-electric SUVs at the LA Auto Show this week and even hinted at a sports car as the Vietnam-based automaker pushes ahead with its plan to break into the U.S. market.\r\nTh… [+4785 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Anna Heim",
    title: "Quantifying the global e-commerce slowdown",
    description:
      "What do recent e-commerce earnings results tell us about the post-pandemic e-commerce reality?",
    url: "https://techcrunch.com/2022/11/18/quantifying-the-global-e-commerce-slowdown/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2022/02/Exchange-orange.jpeg?resize=1200,900",
    publishedAt: "2022-11-18T19:24:31Z",
    content:
      "The COVID-19 pandemic was many things. Global contagion. Health catastrophe. Herald of new geopolitical tensions and a long-running commentary on how far were willing to go to protect or not our fell… [+1598 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Walter Thompson",
    title:
      "TechCrunch+ roundup: TAM takedown, green card layoffs, when to ignore investor advice",
    description:
      "If someone offers you free business advice, it's probably for their own benefit.",
    url: "https://techcrunch.com/2022/11/18/techcrunch-roundup-tam-takedown-green-card-layoffs-when-to-ignore-investor-advice/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2022/11/GettyImages-1433137913.jpg?resize=1200,800",
    publishedAt: "2022-11-18T18:18:14Z",
    content:
      "When the downturn began, many VCs urged founders to slash their marketing spending. On its face, that’s an effective way to extend runway while cutting costs.\r\nSeveral months later, weve since learne… [+5273 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Kirsten Korosec",
    title: "Autonomous delivery startup Nuro lays off 20% of workforce",
    description:
      "Nuro, the autonomous vehicle delivery startup backed by Softbank and Tiger Global Management, is laying off about 20% of its workforce.",
    url: "https://techcrunch.com/2022/11/18/autonomous-delivery-startup-nuro-lays-off-20-of-workforce/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2021/08/Kroger_and_Nuro.jpg?resize=1200,633",
    publishedAt: "2022-11-18T16:56:14Z",
    content:
      "Nuro, the autonomous vehicle delivery startup backed by Softbank, Google and Tiger Global Management, is laying off about 300 people, or 20% of its workforce in an effort to preserve cash amid a stor… [+2744 chars]",
  },
];

export default RecentCards;
