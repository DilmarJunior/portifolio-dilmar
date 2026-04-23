import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="col-start-2 flex md:col-start-1 md:justify-start flex-shrink-0">
      <Link href="#home">
        <div className="flex justify-center">
          <div className="mr-2 flex-shrink-0">
            <Image
              src="/images/logo/logo.png"
              alt="Logo do site"
              width={30}
              height={30}
              priority
              className="w-[30px] h-[30px] max-w-none"
            />
          </div>
          <div>
            <span className="text-lg font-bold text-[var(--color-primary-1)]">
              {"<"}
            </span>
            <span className="text-lg font-bold text-[var(--color-white-1)]">
              Dilmar
            </span>
            <span className="text-lg font-bold text-[var(--color-primary-1)]">
              {"/>"}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
