import facebook from "../../assets/facebook.svg";
import whatsapp from "../../assets/whatsapp.svg";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import twitch from "../../assets/twitch.svg";
import tiktok from "../../assets/tiktok.svg";
import linkedin from "../../assets/linkedin.svg";
import { Container } from "./style";
import { motion } from "framer-motion";

export function SocialMedias(props: {
  isDarkMode: boolean;
  medias: {
    name:
      | "facebook"
      | "whatsapp"
      | "twitter"
      | "github"
      | "instagram"
      | "youtube"
      | "twitch"
      | "tiktok"
      | "linkedin";
    url: string;
  }[];
}) {
  const socialRelation = {
    facebook: facebook,
    whatsapp: whatsapp,
    twitter: twitter,
    github: github,
    instagram: instagram,
    youtube: youtube,
    twitch: twitch,
    tiktok: tiktok,
    linkedin: linkedin,
  };
  return (
    <Container>
      {props.medias.map((media) => {
        return (
          <motion.a
            href={media.url}
            target="_blank"
            key={media.url}
            whileHover={{
              backgroundColor: props.isDarkMode ? '#414143' : '#E5E5E5',
              transition: { duration: .2, ease: "easeInOut",  },
            }}
            whileTap={{
              backgroundColor: props.isDarkMode ? '#414143' : '#E5E5E5',
              transition: { duration: .2, ease: "easeInOut",  },
            }}
            
          >
            <img src={socialRelation[media.name]} />
          </motion.a>
        );
      })}
    </Container>
  );
}
