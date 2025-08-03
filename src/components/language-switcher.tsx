"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";

const locales = ["en", "fa"];

function getLocalizedPathname({
  locale,
  pathname,
  currentLocale,
}: {
  locale: string;
  pathname: string;
  currentLocale: string;
}) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === currentLocale) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  return "/" + segments.join("/");
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLocale = (newLocale: string) => {
    const newPath = getLocalizedPathname({
      locale: newLocale,
      pathname,
      currentLocale,
    });
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={() => switchLocale("en")}>
        EN
      </Button>
      <Button variant="outline" onClick={() => switchLocale("fa")}>
        FA
      </Button>
    </div>
  );
}
