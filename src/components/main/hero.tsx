import React from "react";
import { Button } from "../ui/button";
import Image from "next/image"; // استفاده از کامپوننت بهینه‌شده Next.js
import { useTranslations } from "next-intl";
function HeroPage() {
  const t = useTranslations("hero");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-black">
      <div className="flex flex-col items-center justify-center gap-8 p-8 text-center">
        {/* Profile Image */}
        <div className="relative overflow-hidden rounded-full w-52 h-52 group">
          <Image
            src="/profile.jpg"
            alt="Your Name"
            fill
            className="object-cover transition-all duration-500 border-4 border-red-500 rounded-full shadow-xl shadow-purple-500/30 dark:shadow-purple-600/20 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 transition-opacity duration-300 bg-red-500 rounded-full opacity-0 group-hover:opacity-10 blur-md -z-10" />
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-transparent whitespace-pre-line md:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text dark:from-purple-400 dark:to-pink-400">
            {t("heading")}
          </h2>
          <p className="max-w-md mx-auto text-lg text-red-600 dark:text-gray-400">
            {t("description")}
          </p>
        </div>

        {/* Button */}
        <Button
          className="px-8 py-6 text-lg font-medium transition-all rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-purple-600/20"
          variant="default"
        >
          {t("button")}
        </Button>
      </div>
    </div>
  );
}

export default HeroPage;
