import {
  Stack,
  TextField,
  MenuItem,
  Box,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardHeader,
  Avatar,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios'
import React from "react";
import SearchIcon from "@mui/icons-material/YoutubeSearchedFor";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Lab = () => {
  // const [filterValue, setFilterValue] = useState('everything');
  // const [timeValue, setTimeValue] = useState('3');
  // const [query, setQuery] = useState(null);

  const schema = yup.object().shape({
    query: yup.string().required("You can't search blank!"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      query: "",
      timeValue: "3",
      filterValue: "everything",
    },
    resolver: yupResolver(schema),
  });

  const handleSearch = (data) => {
    console.log(data);
  };




  return (
    <Stack m="10px" sx={{ width: "100%" }}>
      <form onSubmit={handleSubmit(handleSearch)}>
        <Stack
          ml={6}
          spacing={{ xs: 3, sm: 2 }}
          id="functionalities-container"
          direction={{ xs: "column", sm: "row" }}
        >
          <Stack direction="row" spacing={2}>
            <Controller
              name="query"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="standard"
                  error={Boolean(errors.query)}
                  helperText={errors.query ? errors.query.message : null}
                  label="Search here!"
                />
              )}
            />

            <Box
              id="filterValue"
              width={{ xs: "150px", sm: "125px", md: "250px" }}
            >
              <Controller
                name="filterValue"
                control={control}
                render={({ field }) => (
                  <TextField
                    variant="standard"
                    select
                    label="Filter articles"
                    fullWidth
                    {...field}
                  >
                    <MenuItem value="everything">Everything</MenuItem>
                    <MenuItem value="top-headlines">Top Headlines</MenuItem>
                    <MenuItem value="sources">By Source</MenuItem>
                  </TextField>
                )}
              ></Controller>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Box
              id="timeValue"
              width={{ xs: "150px", sm: "125px", md: "250px" }}
            >
              <Controller
                name="timeValue"
                control={control}
                render={({ field }) => (
                  <TextField
                    variant="standard"
                    select
                    label="Time zone"
                    fullWidth
                    {...field}
                  >
                    <MenuItem value="3">Last 3 months</MenuItem>
                    <MenuItem value="6">Last 6 months</MenuItem>
                    <MenuItem value="01">Last 1 year</MenuItem>
                    <MenuItem value="00">All time</MenuItem>
                  </TextField>
                )}
              ></Controller>
            </Box>

            <IconButton
              type="submit"
              sx={{
                width: "56px",
                height: "56px",
                boxShadow: 2,
                "&:hover": {
                  bgcolor: "info.light",
                  color: "white",
                  boxShadow: 12,
                },
              }}
            >
              <SearchIcon color="inherit" sx={{ fontSize: "36px" }} />
            </IconButton>
          </Stack>
        </Stack>
      </form>

      <Grid item xs={12} my={3} id="lab-results">
        <Masonry
          columns={{ xs: 2, sm: 3, md: 4, xl: 5 }}
          spacing={{ xs: 1, sm: 2, md: 1 }}
        >
          {currentData.slice(0, 12).map((data, index) => {
            const imageUrl = `${data.urlToImage.split("?")[0]}?resize=250,150`;
            return (
              <Card
                sx={{
                  transition: "all 0.2s",
                  "&:hover": {
                    boxShadow: 16,
                    marginTop: "7.5px",
                  },
                }}
                key={index}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: 'success.light' }} aria-label="recipe">
                      {data.author?data.author.slice(0,1):'R'}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={`${data.author},${data.source.name}`}
                  subheader={`${data.publishedAt.slice(11,16)}, ${data.publishedAt.slice(0,10)}`}
                />
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
                    {data.description.slice(0, 120)}...
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
    </Stack>
  );
};

const currentData = [
  {
    source: {
      "id": null,
      name: "Blesk.cz"
    },
    author: "Tomáš Belica",
    title: "EU chce bezemisní domy. Experti varují: Bydlení zdraží o statisíce - Blesk.cz",
    description: "Všechny byty a rodinné domy stavěné po roce 2030 mají být zcela bezemisní. Na tom se shodli evropští ministři energetiky. Experti ale varují: pokud si Česko nevyjedná lepší podmínky, technologie prodraží výstavbu natolik, že vlastní bydlení bude výsadou jen t…",
    url: "https://www.blesk.cz/clanek/zpravy-politika/728672/do-7-let-maji-vsechny-nove-domy-zcela-zezelenat-experti-varuji-bydleni-zdrazi-o-statisice.html",
    urlToImage: "https://1884403144.rsc.cdn77.org/foto/stavba-dum/NjkweDM2NS9jZW50ZXIvdG9wL2ZpbHRlcnM6cXVhbGl0eSg4NSk6bm9fdXBzY2FsZSgpL2ltZw/8040467.jpg?v=0&st=BNTUCP8YVMddLeYMrl4cGhy6bxS46eRdpPch1xqV9pI&ts=1600812000&e=0",
    publishedAt: "2022-11-21T08:20:13Z",
    "content": null
  },
  {
    source: {
      "id": null,
      name: "Gamerbraves.com"
    },
    author: "https://www.facebook.com/gamerbraves",
    title: "Sonic Frontiers Collabs with Monster Hunter Featuring New Outfits and Mini Game - GamerBraves",
    description: "SEGA has announced that the Sonic Frontiers collaboration with Monster Hunter series is available, featuring a special themed pack for",
    url: "https://www.gamerbraves.com/sonic-frontiers-collabs-with-monster-hunter-featuring-new-outfits-and-mini-game/",
    urlToImage: "https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2022/11/Sonic-Frontiers-5.jpg",
    publishedAt: "2022-11-21T08:13:51Z",
    "content": "SEGA has announced that the Sonic Frontiers collaboration with Monster Hunter series is available, featuring a special themed pack for the game.\r\nThe Monster Hunter Collaboration Pack for Sonic Front… [+1063 chars]"
  },
  {
    source: {
      "id": null,
      name: "DER AKTIONÄR"
    },
    author: "Martin Weiß",
    title: "Märkte am Morgen: DAX startet 0,5 Prozent leichter; Bitcoin, Disney, Adidas, Zalando, Hello Fresh, Commerzbank im Fokus - DER AKTIONÄR",
    description: "Der DAX startet mit leichten Verlusten in die neue Handelswoche und fällt rund 30 Minuten vor dem Xetra-Start um 0,5 Prozent auf 14.",
    url: "https://www.deraktionaer.de/artikel/aktien/maerkte-am-morgen-dax-startet-05-prozent-leichter-bitcoin-disney-adidas-zalando-hello-fresh-commerzbank-im-fokus-20321363.html",
    urlToImage: "https://images.boersenmedien.com/images/700f1ad6-e749-4416-a819-07bba4cab100.jpg?w=1280",
    publishedAt: "2022-11-21T08:03:05Z",
    "content": "Der DAX startet mit leichten Verlusten in die neue Handelswoche und fällt rund 30 Minuten vor dem Xetra-Start um 0,5 Prozent auf 14.386 Zähler. Am Freitag hatte der deutsche Leitindex erneut an Wert … [+273 chars]"
  },
  {
    source: {
      "id": null,
      name: "inside digital"
    },
    author: null,
    title: "WhatsApp Gruppenanrufe: So schaltest du lästige Personen aus - inside digital",
    description: "Jeder kennt diese eine Person, die in Gruppenchats immer zu viel schreibt oder redet. Jetzt kannst du sie bei WhatsApp einfach ausschalten.",
    url: "https://www.inside-digital.de/ratgeber/laestige-personen-bei-whatsapp-ausschalten-so-gehts",
    urlToImage: "https://www.inside-digital.de/img/whatsapp-neue-funktion-wird-gruppen-chats-veraendern.jpg",
    publishedAt: "2022-11-21T07:59:30Z",
    "content": "Jeder kennt diese eine Person, die in Gruppenchats immer zu viel schreibt oder redet. Das macht die eigentlich praktischen Gruppen schnell lästig. Du kannst sie deswegen einfach stumm schalten oder d… [+2273 chars]"
  },
  {
    source: {
      "id": null,
      name: "Gematsu"
    },
    author: "Sal Romano",
    title: "This Week’s Japanese Game Releases: Gungrave G.O.R.E, KonoSuba dungeon RPG sequel, more - Gematsu",
    description: "Gungrave G.O.R.E for PlayStation 5, Xbox Series, PlayStation 4, Xbox One, and PC, and KonoSuba: God's Blessing on this Wonderful World! Cursed Relic and the Perplexed Adventurers for PlayStation 4 and…",
    url: "https://www.gematsu.com/2022/11/this-weeks-japanese-game-releases-gungrave-gore-konosuba-dungeon-rpg-sequel-more",
    urlToImage: "https://www.gematsu.com/wp-content/uploads/2022/11/Weekly-Japanese-Game-Releases_11-20-22.jpg",
    publishedAt: "2022-11-21T07:56:30Z",
    "content": "Gungrave G.O.R.E for PlayStation 5, Xbox Series, PlayStation 4, Xbox One, and PC, and KonoSuba: God’s Blessing on this Wonderful World! Cursed Relic and the Perplexed Adventurers for PlayStation 4 an… [+3323 chars]"
  },
  {
    source: {
      "id": null,
      name: "GSMArena.com"
    },
    author: "Yordan",
    title: "Samsung Galaxy A14 5G with Dimensity 700 also pops up on Geekbench - GSMArena.com news - GSMArena.com",
    description: "The smartphone carries a similar model number, scores significantly lower.",
    url: "https://www.gsmarena.com/samsung_galaxy_a14_5g_with_dimensity_700_also_pops_up_on_geekbench-news-56595.php",
    urlToImage: "https://fdn.gsmarena.com/imgroot/news/22/11/samsung-galaxy-a14-mediatek-geekbench/-952x498w6/gsmarena_001.jpg",
    publishedAt: "2022-11-21T07:09:01Z",
    "content": "Samsung is preparing a Galaxy A14 smartphone with 5G connectivity. The device with model number SM-A146B appeared on Geekbench with an unannounced Exynos chipset, but a new listing revealed the model… [+896 chars]"
  },
  {
    source: {
      "id": null,
      name: "The Guardian"
    },
    author: "Samuel Gibbs",
    title: "Microsoft Surface Laptop 5 review: slick operation but dated design - The Guardian",
    description: "Premium Windows 11 PC offers smooth and quiet experience but is showing its age compared with rivals",
    url: "https://www.theguardian.com/technology/2022/nov/21/microsoft-surface-laptop-5-windows-11-review-slick-operation-but-dated-design",
    urlToImage: "https://i.guim.co.uk/img/media/482a892fd4e559c5338a0d3de1e57113c358d6b7/360_490_5094_3056/master/5094.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTQucG5n&enable=upscale&s=26909b574d90c8fa65007f62fb110866",
    publishedAt: "2022-11-21T07:02:00Z",
    content: "Microsofts latest Surface Laptop has new chips, new connections and costs the same as last year but has a five-year-old design that makes it look aged.\r\nThe Surface Laptop 5 starts at £999 ($999/A$1,… [+5941 chars]"
  },
  {
    source: {
      "id": null,
      name: "SamMobile"
    },
    author: "SamMobile",
    title: "BREAKING: Galaxy S20 FE gets Android 13 (One UI 5.0) update - SamMobile - Samsung news",
    description: "Two weeks ago, Samsung released the stable Android 13 update to the Galaxy S20, Galaxy S20+, and Galaxy S20 Ultra. ...",
    url: "https://www.sammobile.com/news/galaxy-s20-fe-android-13-update-one-ui-5-0-released/",
    urlToImage: "https://www.sammobile.com/wp-content/uploads/2020/10/Galaxy-S20-FE-review-14-720x405.jpg",
    publishedAt: "2022-11-21T07:01:00Z",
    "content": "Two weeks ago, Samsung released the stable Android 13 update to the Galaxy S20, Galaxy S20+, and Galaxy S20 Ultra. The fourth member of the Galaxy S20 series, the Galaxy S20 FE, was missing this upda… [+1215 chars]"
  },
  {
    source: {
      id: null,
      name: "Frandroid"
    },
    author: "Humanoid Content, Humanoid Content",
    title: "Pour le Black Friday, OnePlus fait fondre le prix de ses smartphones et écouteurs sans fil - Frandroid",
    description: "L’heure du Black Friday a sonné. OnePlus vous propose de découvrir ses derniers modèles de smartphones à prix réduit, avec des remises pouvant atteindre les 200 euros. De quoi bien s’équiper sans se ruiner.",
    url: "https://www.frandroid.com/produits-android/smartphone/1537098_pour-le-black-friday-oneplus-fait-fondre-le-prix-de-ses-smartphones-et-ecouteurs-sans-fil",
    urlToImage: "https://images.frandroid.com/wp-content/uploads/2022/11/images-design-black-1-mo-1.jpg",
    publishedAt: "2022-11-21T07:00:21Z",
    content: "Lheure du Black Friday a sonné. OnePlus vous propose de découvrir ses derniers modèles de smartphones à prix réduit, avec des remises pouvant atteindre les 200 euros. De quoi bien séquiper sans se ru… [+7114 chars]"
  },
  {
    source: {
      "id": null,
      name: "Actucrypto.info"
    },
    author: "Monsieur Bitcoin",
    title: "Amazon : Jeff Bezos, conseille les consommateurs et les entreprises sur ce qu'ils doivent faire face à la grave crise qui arrive - Actu Crypto.info",
    description: "",
    url: "https://actucrypto.info/actualite/amazon-jeff-bezos-conseille-les-consommateurs-et-les-entreprises-sur-ce-quils-doivent-faire-face-a-la-grave-crise-qui-arrive/",
    urlToImage: "https://actucrypto.info/wp-content/uploads/2022/11/1668998057_Le-fondateur-dAmazon-Jeff-Bezos-conseille-les-consommateurs-et-les-scaled.jpg",
    publishedAt: "2022-11-21T07:00:19Z",
    content: "Le fondateur et ancien directeur général d’Amazon, Jeff Bezos, a donné quelques conseils aux consommateurs et aux petites entreprises sur ce qu’ils devraient faire étant donné que l’économie américai… [+3425 chars]"
  },
  {
    source: {
      "id": null,
      name: "Fal3arda.com"
    },
    author: null,
    title: "اخيرا عرفنااااه.. هذا هو الرقم السري الذي يفتح جميع شبكات الواي فاي المتصلة بكل سهولة بدون برامج أو تطبيقات - كورة في العارضة",
    description: "الرقم السري الذي يفتح جميع شبكات الواي فاي ومعرفة الباسورد لجميع الشبكات بكل سهولة من دون برامج أو تطبيقات، يعد من أكثر المواضيع التي يتزايد عليها البحث من",
    url: "https://koora.fal3arda.com/1860595/%d8%b1%d9%82%d9%85-%d8%b3%d8%b1%d9%8a-%d9%88%d9%85%d8%b9%d8%b1%d9%81%d8%a9-%d8%a7%d9%84%d8%a8%d8%a7%d8%b3%d9%88%d8%b1%d8%af/",
    urlToImage: "https://cdn.fal3arda.com/wp-content/uploads/2022/10/رقم-سري-1-1667158840.jpg",
    publishedAt: "2022-11-21T06:45:54Z",
    content: null
  },
  {
    source: {
      "id": null,
      name: "Mydrivers.com"
    },
    author: null,
    title: "小米商城发消费券了！总价1500元：一图看懂如何领取 - 快科技",
    description: "11月21日，小米商城官方发文宣布，北京消费券来了。据介绍，目前在小米商城App搜索&ldquo;北京消费券&rdquo;即可参与领取，通过身份验证后可一键领取总价值1500元的消费券包。官方称，小米",
    url: "https://news.mydrivers.com/1/874/874063.htm",
    urlToImage: "https://img1.mydrivers.com/img/20221121/d07588832292485cad371a0efcafd996.png",
    publishedAt: "2022-11-21T06:45:00Z",
    content: null
  },
  {
    source: {
      "id": null,
      name: "Diit.cz"
    },
    author: null,
    title: "Intel odsouzen k úhradě $949 milionů společnosti VLSI za porušení patentů - Deep in IT",
    description: "Vybrané 14nm procesory Intelu porušují podle společnosti VLSI její patenty. Soud dal během šestidenního procesu VLSI za pravdu a uložil Intelu uhradit škodu ve výši $948,8 milionů…",
    url: "https://diit.cz/clanek/intel-odsouzen-k-uhrade-949-milionu-spolecnosti-vlsi-za-poruseni-patentu",
    urlToImage: "https://diit.cz/sites/default/files/intel_logo_shutterstock.jpg",
    publishedAt: "2022-11-21T06:42:13Z",
    content: "Moná nebude od vci zaít z trochu jiné strany, aby nedolo k omylu. Protoe je e o spolenosti VLSI a zárove to není tak dlouho (~2 roky), co jsme rovn psali o spolenosti VLSI, bude poteba uvést jednu vc… [+1594 chars]"
  },
  {
    source: {
      "id": null,
      name: "Blitz.bg"
    },
    author: "БЛИЦ",
    title: "Кадри от дрон показват разрушенията от украинската ракета в Полша ВИДЕО - Блиц - Новините от България и света",
    description: "Ракетата падна на полска територия на 15 ноември",
    url: "https://blitz.bg/svyat/kadri-ot-dron-pokazvat-razrusheniyata-ot-ukrainskata-raketa-v-polsha-video_news921561.html",
    urlToImage: "https://static.blitz.bg/documents/thumbnails/730/202211/1669007826-768x432.jpg",
    publishedAt: "2022-11-21T06:38:14Z",
    content: "Blitz.bg , , . , , , , , , . , www.blitz.bg. , , . ."
  },
  {
    source: {
      "id": null,
      name: "Actucrypto.info"
    },
    author: "Monsieur Ripple",
    title: "Enorme manipulation des cours du SNM qui gagne 4 000 % en 24 heures ! - Actu Crypto.info",
    description: "",
    url: "https://actucrypto.info/actualite/enorme-manipulation-des-cours-du-snm-qui-gagne-4-000-en-24-heures/",
    urlToImage: "https://actucrypto.info/wp-content/uploads/2022/11/La-hausse-de-4-000-du-prix-de-laltcoin-scaled.jpg",
    publishedAt: "2022-11-21T06:30:56Z",
    content: "Le cours de l’altcoin SNM a soudainement augmenté de plus de 4 000 % pour atteindre 10,91 $ le 20 novembre, tandis que le volume d’échange de la pièce sur 24 heures s’élevait à un peu plus de 720 mil… [+2684 chars]"
  },
  {
    source: {
      "id": null,
      name: "01net.com"
    },
    author: "Gabriel Manceau",
    title: "Samsung va ridiculiser la concurrence avec ses prochaines mises à jour Android - 01net",
    description: "Alors que Samsung est déjà le meilleur élève en matière de mises à jour Android, le constructeur coréen annonce sa volonté de se rapprocher de Google pour accélérer le rythme sur ses futurs appareils.",
    url: "https://www.01net.com/actualites/samsung-va-ridiculiser-la-concurrence-avec-ses-prochaines-mises-a-jour-android.html",
    urlToImage: "https://www.01net.com/app/uploads/2022/02/MEA-Samsung-Galaxy-S22-Ultra.jpg",
    publishedAt: "2022-11-21T06:30:55Z",
    content: "Alors que Samsung est déjà le meilleur élève en matière de mises à jour Android, le constructeur coréen annonce sa volonté de se rapprocher de Google pour accélérer le rythme sur ses futurs appareils… [+2655 chars]"
  },
  {
    source: {
      "id": null,
      name: "ComputerBase"
    },
    author: "Sven Bauduin",
    title: "AMD Radeon RX 7900 XTX & XT: PowerColor Red Devil erstmals offiziell abgelichtet - ComputerBase",
    description: "PowerColor hat ein erstes offizielles Bild einer der neuen Red Devil auf Basis der AMD Radeon RX 7900 XTX und RX 7900 XT veröffentlicht.",
    url: "https://www.computerbase.de/2022-11/powercolor-radeon-rx-7900-xtx-red-devil-24-gb/",
    urlToImage: "https://pics.computerbase.de/1/0/5/7/8/9-35f0df5136d651d9/article-1280x720.c846fa42.jpg",
    publishedAt: "2022-11-21T06:30:00Z",
    content: "PowerColor, neben Sapphire der zweite große Exklusivpartner von AMD, hat jetzt ein erstes offizielles Bild einer der neuen Red Devil auf Basis einer der beiden kommenden RDNA-3-Grafikkarten Radeon RX… [+1848 chars]"
  },
  {
    source: {
      "id": null,
      name: "Www.fr.de"
    },
    author: null,
    title: "++ Ukraine-News: Video zeigt Zerstörung am AKW-Saporischschja – Behörde besorgt - fr.de",
    description: "Im Ukraine-Krieg verändert sich nach der Rückeroberung des Gebiets Cherson das Kriegsgeschehen. Erneut wurde das AKW Saporischschja beschossen. Der News-Ticker.",
    url: "https://www.fr.de/politik/selenskyj-akw-saporischschja-raketen-cherson-luhansk-ukraine-krieg-news-russland-donbass-militaer-putin-zr-91924115.html",
    urlToImage: "https://www.fr.de/bilder/2022/11/18/91924115/30332455-akw-saporischschja-erneute-angriffe-rufen-expertenteam-der-iaeo-auf-den-plan-2rW2lT1Xarfe.jpg",
    publishedAt: "2022-11-21T06:23:00Z",
    content: "<ol><li>Startseite</li><li>Politik</li></ol>Erstellt: 21.11.2022, 07:23 Uhr\r\nVon: Sandra Kathe, Karolin Schäfer, Vincent Büssow, Nail Akkoyun, Christian Weihrauch, Lucas Maier, Andreas Apetz, Jan-Fre… [+12173 chars]"
  },
  {
    source: {
      "id": null,
      name: "YouTube"
    },
    author: null,
    title: "WIN A FREE Kindle Basic 2022 + FREE CASE Kids Ed. | International Contest - Good e-Reader",
    description: null,
    url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEeO7uRgBK3w",
    urlToImage: null,
    publishedAt: "2022-11-21T06:21:40Z",
    content: null
  },
  {
    source: {
      "id": "news-com-au",
      name: "News.com.au"
    },
    author: null,
    title: "Elder Scrolls Online developer working on new IP - news.com.au",
    description: "<p>Zenimax Online creative director Ben Jones has seemingly confirmed the studio behind popular MMO Elder Scrolls Online is working on a brand-new IP. </p>",
    url: "https://www.news.com.au/technology/gaming/elder-scrolls-online-developer-working-on-new-ip/news-story/a03d107a4bc574a6e039a6860eb45625",
    urlToImage: "https://content.api.news/v3/images/bin/7ea62c736ced5f9c2e6e82b4651cdffd",
    publishedAt: "2022-11-21T06:21:27Z",
    content: "Zenimax Online creative director Ben Jones has seemingly confirmed the studio behind popular MMO Elder Scrolls Online is working on a brand-new IP. \r\nIn a podcast from the Product Builders Podcast, w… [+2106 chars]"
  }
]
export default Lab;
