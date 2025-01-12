import Image from "next/image";


const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/ohene.png'}
    width={807}
    height={748}
    alt=''
    className="translate-z-0 w-full h-full"
    />
  </div>;
};

export default Avatar;
