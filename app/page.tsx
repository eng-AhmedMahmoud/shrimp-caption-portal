"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  LayoutDashboard,
  ChevronDown,
  ExternalLink,
  ShoppingCart,
  Smartphone,
  Languages,
  Image as ImageIcon,
  Star,
  Users,
  Package,
  FolderTree,
  Upload,
  ArrowLeft,
  MapPin,
  Eye,
  ShoppingBag,
  MessageCircle,
  Truck,
  LogIn,
  Settings,
  CheckCircle,
  Send,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Parallax scroll hook                                               */
/* ------------------------------------------------------------------ */

function useParallaxScroll() {
  useEffect(() => {
    function handleScroll() {
      document.documentElement.style.setProperty(
        "--scroll",
        String(window.scrollY)
      );
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

/* ------------------------------------------------------------------ */
/*  Section 1: Hero with Video Parallax                                */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/images/dark-theme-logo.png"
            alt="شرمب كابشن"
            width={200}
            height={200}
            className="mb-6"
            priority
          />
          <p className="mt-2 max-w-2xl text-xl sm:text-2xl font-medium text-gray-200 leading-relaxed">
            منصة توصيل الروبيان الفاخر في المملكة العربية السعودية
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="https://www.shrimpcaption.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-teal-600/25 transition-all hover:bg-teal-500 hover:shadow-teal-500/30 hover:scale-105"
          >
            <Globe className="h-5 w-5" />
            زيارة الموقع
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://dashboard.shrimpcaption.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400/60 bg-amber-400/10 px-8 py-4 text-lg font-semibold text-amber-300 transition-all hover:bg-amber-400/20 hover:border-amber-400 hover:scale-105"
          >
            <LayoutDashboard className="h-5 w-5" />
            لوحة التحكم
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-sm tracking-wider">استكشف المزيد</span>
        <ChevronDown className="h-6 w-6 bounce-slow" />
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2: Platform Overview                                       */
/* ------------------------------------------------------------------ */

function PlatformOverviewSection() {
  const cards = [
    {
      title: "موقع العملاء",
      icon: Globe,
      url: "https://www.shrimpcaption.com/",
      buttonLabel: "زيارة الموقع",
      color: "teal",
      features: [
        { icon: ShoppingCart, label: "تصفح المنتجات" },
        { icon: Languages, label: "دعم اللغتين (عربي/إنجليزي)" },
        { icon: ImageIcon, label: "معرض صور وفيديو للمنتجات" },
        { icon: Star, label: "تقييمات العملاء" },
        { icon: Smartphone, label: "الطلب عبر واتساب" },
        { icon: Smartphone, label: "متوافق مع الجوال" },
      ],
    },
    {
      title: "لوحة التحكم",
      icon: LayoutDashboard,
      url: "https://dashboard.shrimpcaption.com/",
      buttonLabel: "فتح لوحة التحكم",
      color: "amber",
      features: [
        { icon: Package, label: "إدارة المنتجات" },
        { icon: FolderTree, label: "إدارة الفئات" },
        { icon: Star, label: "إدارة ومراجعة التقييمات" },
        { icon: Users, label: "إدارة المستخدمين" },
        { icon: Upload, label: "رفع الصور والفيديو (Cloudflare)" },
        { icon: Languages, label: "دعم اللغتين" },
      ],
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-center text-4xl font-bold mb-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          نظرة عامة على المنصة
        </motion.h2>
        <motion.div
          className="mx-auto mb-16 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        />

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isTeal = card.color === "teal";
            return (
              <motion.div
                key={card.title}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className={`rounded-2xl border p-8 backdrop-blur-md bg-gray-950/70 transition-shadow hover:shadow-xl ${
                  isTeal
                    ? "border-teal-800/50 hover:shadow-teal-900/20"
                    : "border-amber-800/50 hover:shadow-amber-900/20"
                }`}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      isTeal
                        ? "bg-teal-600/20 text-teal-400"
                        : "bg-amber-600/20 text-amber-400"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                </div>

                <ul className="mb-8 space-y-3">
                  {card.features.map((f, fIdx) => {
                    const FIcon = f.icon;
                    return (
                      <li
                        key={`${f.label}-${fIdx}`}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <FIcon
                          className={`h-4 w-4 shrink-0 ${
                            isTeal ? "text-teal-400/70" : "text-amber-400/70"
                          }`}
                        />
                        {f.label}
                      </li>
                    );
                  })}
                </ul>

                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all hover:scale-105 ${
                    isTeal
                      ? "bg-teal-600 text-white hover:bg-teal-500"
                      : "bg-amber-500 text-gray-950 hover:bg-amber-400"
                  }`}
                >
                  {card.buttonLabel}
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3: User Flow Maps                                          */
/* ------------------------------------------------------------------ */

function UserFlowSection() {
  const customerSteps = [
    { icon: MapPin, label: "زيارة الموقع" },
    { icon: Eye, label: "تصفح القائمة" },
    { icon: ImageIcon, label: "عرض تفاصيل المنتج" },
    { icon: ShoppingBag, label: "اختيار المنتج" },
    { icon: MessageCircle, label: "الطلب عبر واتساب" },
    { icon: Truck, label: "التوصيل" },
  ];

  const adminSteps = [
    { icon: LogIn, label: "تسجيل الدخول" },
    { icon: Package, label: "إدارة المنتجات" },
    { icon: Star, label: "إدارة التقييمات" },
    { icon: Settings, label: "مراجعة المحتوى" },
    { icon: CheckCircle, label: "الموافقة والنشر" },
    { icon: Send, label: "النشر على الموقع" },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-center text-4xl font-bold mb-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          مسار المستخدم
        </motion.h2>
        <motion.div
          className="mx-auto mb-16 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        />

        {/* Customer Journey */}
        <motion.div
          className="mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <h3 className="text-xl font-semibold text-teal-400 mb-8 text-center">
            رحلة العميل
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-0">
            {customerSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex items-center">
                  <motion.div
                    custom={idx}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-700/50 bg-teal-950/50 text-teal-400 backdrop-blur-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs text-gray-400 text-center max-w-[80px]">
                      {step.label}
                    </span>
                  </motion.div>
                  {idx < customerSteps.length - 1 && (
                    <div className="mx-2 hidden md:block text-teal-600">←</div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Admin Journey */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <h3 className="text-xl font-semibold text-amber-400 mb-8 text-center">
            مسار المسؤول
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-0">
            {adminSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex items-center">
                  <motion.div
                    custom={idx}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-700/50 bg-amber-950/50 text-amber-400 backdrop-blur-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs text-gray-400 text-center max-w-[80px]">
                      {step.label}
                    </span>
                  </motion.div>
                  {idx < adminSteps.length - 1 && (
                    <div className="mx-2 hidden md:block text-amber-600">←</div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="relative border-t border-gray-800 py-12 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-sm text-gray-400">
          تم التطوير بكل ❤️ من فريق{" "}
          <span className="text-teal-400 font-semibold">Sindo Media</span>{" "}
          التقني
        </p>

        <div className="mb-6 flex items-center justify-center gap-6">
          <a
            href="https://www.shrimpcaption.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-teal-400"
          >
            الموقع
          </a>
          <span className="text-gray-700">|</span>
          <a
            href="https://dashboard.shrimpcaption.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-amber-400"
          >
            لوحة التحكم
          </a>
        </div>

        <p className="text-xs text-gray-500">
          &copy; ٢٠٢٦ شرمب كابشن. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  useParallaxScroll();

  return (
    <main className="relative">
      {/* Fixed video background for the entire page with parallax */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{
            transform: "translateY(calc(var(--scroll) * 0.15px))",
            willChange: "transform",
          }}
        >
          <source src="/videos/ocean-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content sits above the fixed video */}
      <div className="relative z-10">
        <HeroSection />
        <PlatformOverviewSection />
        <UserFlowSection />
        <Footer />
      </div>
    </main>
  );
}
