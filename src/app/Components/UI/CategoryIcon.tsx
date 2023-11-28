import Image from "next/image";

type CatIcon = {
  img: string;
  href: string;
  category: string;
};

export default function CategoryIcon({ img, category, href }: CatIcon) {
  return (
    <div className="flex flex-col items-center justify-center p-2 bg-white hover:bg-stone-300 rounded">
      <a href={href}>
        <Image src={img} width={200} height={200} alt="category icon"></Image>
      </a>
      <h3 className="text-xl text-black">{category}</h3>
    </div>
  );
}
