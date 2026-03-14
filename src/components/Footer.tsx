import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-kifd-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-2xl font-black text-kifd-accent mb-2">
              {t("kifd")}
            </p>
            <p className="text-sm text-white/50">{t("subtitle")}</p>
            <p className="text-xs text-white/30 mt-4">{t("disclaimer")}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              {t("pages")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/programm"
                  className="hover:text-white transition-colors"
                >
                  {t("programm")}
                </Link>
              </li>
              <li>
                <Link
                  href="/partei"
                  className="hover:text-white transition-colors"
                >
                  {t("partei")}
                </Link>
              </li>
              <li>
                <Link
                  href="/selbstkritik"
                  className="hover:text-white transition-colors"
                >
                  {t("selbstkritik")}
                </Link>
              </li>
              <li>
                <Link
                  href="/positionen"
                  className="hover:text-white transition-colors"
                >
                  {t("positionen")}
                </Link>
              </li>
              <li>
                <Link
                  href="/wahlomat"
                  className="hover:text-white transition-colors"
                >
                  {t("wahlomat")}
                </Link>
              </li>
              <li>
                <Link
                  href="/unterstuetzer"
                  className="hover:text-white transition-colors"
                >
                  {t("unterstuetzer")}
                </Link>
              </li>
              <li>
                <Link
                  href="/ki-ausweis"
                  className="hover:text-white transition-colors"
                >
                  {t("kiMitgliedsausweis")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              {t("legal")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-white transition-colors"
                >
                  {t("impressum")}
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-white transition-colors"
                >
                  {t("datenschutz")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/30">
          <p>{t("paidBy")}</p>
          <p className="mt-2">{t("noCrypto")}</p>
        </div>
      </div>
    </footer>
  );
}
