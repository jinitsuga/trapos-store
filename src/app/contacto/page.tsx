import Image from "next/image";
export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center text-white pt-10">
      <h2 className="text-3xl text-center tracking-tight font-semibold">
        Consulta lo que necesites
      </h2>
      <ul className="flex flex-col mt-6 gap-4 items-start">
        <li>
          <a
            target="blank_"
            href="https://www.instagram.com/traposlocos/"
            className="flex gap-2 items-center justify-center hover:text-trapo-darkGreen"
          >
            <Image
              src={"/icons/instawhite.svg"}
              width={35}
              height={35}
              alt="instagram icon"
            />
            <p>@traposlocos</p>
          </a>
        </li>
        <li className="flex gap-2 items-center justify-center">
          <Image
            src={"/icons/mailbox.svg"}
            width={35}
            height={35}
            alt="mailbox"
          ></Image>
          <p>traposlocos@vera.com.uy</p>
        </li>
        <li className="flex gap-2 items-center justify-center">
          <Image
            src={"/icons/phone.svg"}
            width={35}
            height={35}
            alt="phone"
          ></Image>
          <p>+598 99 454 647</p>
        </li>
      </ul>
    </section>
  );
}
