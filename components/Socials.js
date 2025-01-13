import Link from "next/link";
import {
  RiInstagramLine,
  RiLinkedinLine,
  RiWhatsappLine,
  RiYoutubeLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={
          "https://api.whatsapp.com/send/?phone=%2B233509438082&text&type=phone_number"
        }
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href={
          "https://www.instagram.com/the_ohene/?utm_source=qr&igsh=ZXpkd3Jjb3FiNGdv"
        }
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/ohene-agyekum"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
