import { HStack } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaYoutube, FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link as ChLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SocialStack = () => {
  const iconStyle = "hover:scale-125 duration-300 transition-all ease-in-out";
  return (
    <HStack my={10} justifyContent={"center"} spacing={4}>
      <Link to={"https://www.facebook.com/phanghavorn.siv/"} target="_blank">
        <FaFacebook size={20} className={iconStyle} />
      </Link>

      <Link
        to={"https://www.youtube.com/channel/UC5c5Hi9fZyPCZs71Xav57zQ"}
        target="_blank"
      >
        <FaYoutube size={20} className={iconStyle} />
      </Link>

      <ChLink href="mailto:Nightpp19@gmail.com" target="_blank">
        <MdEmail size={20} className={iconStyle} />
      </ChLink>
      <Link
        to={
          "https://www.linkedin.com/in/siv-sovanpanhavorn-552367286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
        target="_blank"
      >
        <FaLinkedin size={20} className={iconStyle} />
      </Link>
      <Link to={"https://t.me/vornii"} target="_blank">
        <FaTelegram size={20} className={iconStyle} />
      </Link>
    </HStack>
  );
};

export default SocialStack;
