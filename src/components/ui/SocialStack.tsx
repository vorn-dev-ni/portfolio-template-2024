import { HStack } from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialStack = () => {
  const iconStyle = "hover:scale-125 duration-300 transition-all ease-in-out";
  return (
    <HStack my={6} justifyContent={"center"}>
      <Link
        to={"https://www.facebook.com/phanghavorn.siv/"}
        target="_blank"
      >
        <FaFacebook size={20} className={iconStyle} />
      </Link>

      <Link
        to={"https://www.youtube.com/channel/UC5c5Hi9fZyPCZs71Xav57zQ"}
        target="_blank"
      >
        <FaYoutube size={20} className={iconStyle} />
      </Link>

      <Link
        to={"https://www.instagram.com/c_bayhz_nv?igsh=dzZ3Mm5zNWpndDds"}
        target="_blank"
      >
        <FaInstagram size={20} className={iconStyle} />
      </Link>

      <Link
        to={"https://www.linkedin.com/in/siv-sovanpanhavorn-552367286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
        target="_blank"
      >
        <FaLinkedin size={20} className={iconStyle} />
      </Link>
    </HStack>
  );
};

export default SocialStack;
