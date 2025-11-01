import { getTranslations } from "next-intl/server";
export default async function Home() {
  const t = await getTranslations();

  return (
    <div>
      <h1>{t("titulo")}</h1>
    </div>
  );
}
