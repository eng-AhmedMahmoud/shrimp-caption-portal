"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  ChevronDown,
  ExternalLink,
  LogIn,
  Package,
  FolderTree,
  Star,
  Users,
  ShoppingCart,
  Eye,
  MessageCircle,
  Truck,
  Settings,
  CheckCircle,
  Upload,
  ArrowRight,
  Smartphone,
  Languages,
  Image,
  Video,
  Shield,
  GripVertical,
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
/*  Section 1: Hero                                                    */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="animated-gradient absolute inset-0 z-0" />

      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.4)_100%)]" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Shrimp Caption
            </span>
          </h1>
          <p className="mt-2 text-2xl sm:text-3xl font-semibold text-amber-400/90 tracking-wide" dir="rtl">
            شرمب كابشن
          </p>
        </motion.div>

        <motion.p
          className="mt-4 max-w-lg text-lg sm:text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Premium Shrimp Delivery Platform
        </motion.p>

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
            Visit Website
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://dashboard.shrimpcaption.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400/60 bg-amber-400/10 px-8 py-4 text-lg font-semibold text-amber-300 transition-all hover:bg-amber-400/20 hover:border-amber-400 hover:scale-105"
          >
            <LayoutDashboard className="h-5 w-5" />
            Open Dashboard
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
        <span className="text-sm tracking-wider uppercase">Scroll</span>
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
      title: "Customer Website",
      icon: Globe,
      url: "https://www.shrimpcaption.com/",
      buttonLabel: "Visit Site",
      color: "teal",
      features: [
        { icon: ShoppingCart, label: "Browse Products" },
        { icon: Languages, label: "Multi-language (AR/EN)" },
        { icon: Image, label: "Product Details with Gallery & Video" },
        { icon: Star, label: "Customer Reviews" },
        { icon: MessageCircle, label: "WhatsApp Ordering" },
        { icon: Smartphone, label: "Mobile Responsive" },
      ],
    },
    {
      title: "Admin Dashboard",
      icon: LayoutDashboard,
      url: "https://dashboard.shrimpcaption.com/",
      buttonLabel: "Open Dashboard",
      color: "amber",
      features: [
        { icon: Package, label: "Product Management (CRUD)" },
        { icon: FolderTree, label: "Category Management" },
        { icon: Star, label: "Review Management & Moderation" },
        { icon: Users, label: "User Management" },
        { icon: Upload, label: "Image & Video Upload (Cloudflare)" },
        { icon: Languages, label: "Multi-language Support (AR/EN)" },
      ],
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-center text-4xl font-bold mb-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Platform Overview
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
                className={`rounded-2xl border p-8 backdrop-blur-sm transition-shadow hover:shadow-xl ${
                  isTeal
                    ? "border-teal-800/50 bg-teal-950/30 hover:shadow-teal-900/20"
                    : "border-amber-800/50 bg-amber-950/30 hover:shadow-amber-900/20"
                }`}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      isTeal ? "bg-teal-600/20 text-teal-400" : "bg-amber-600/20 text-amber-400"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                </div>

                <ul className="mb-8 space-y-3">
                  {card.features.map((f) => {
                    const FIcon = f.icon;
                    return (
                      <li key={f.label} className="flex items-center gap-3 text-gray-300">
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
                  <ArrowRight className="h-4 w-4" />
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
/*  Section 3: Dashboard Guide                                         */
/* ------------------------------------------------------------------ */

function DashboardGuideSection() {
  const steps = [
    {
      num: 1,
      title: "Login",
      description: "Sign in with admin credentials at dashboard.shrimpcaption.com",
      icon: LogIn,
    },
    {
      num: 2,
      title: "Products",
      description:
        "Add, edit, delete products with images, multi-image gallery, and video support",
      icon: Package,
    },
    {
      num: 3,
      title: "Categories",
      description: "Organize products into categories with drag-to-reorder",
      icon: GripVertical,
    },
    {
      num: 4,
      title: "Reviews",
      description:
        "Manage customer reviews, approve/reject, add reviewer photos and product images",
      icon: Star,
    },
    {
      num: 5,
      title: "Users",
      description: "Manage admin and editor accounts with role-based access",
      icon: Shield,
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-950/50">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="text-center text-4xl font-bold mb-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Dashboard Quick Guide
        </motion.h2>
        <motion.div
          className="mx-auto mb-16 h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-amber-300"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative rounded-2xl border border-gray-800 bg-gray-900/60 p-6 transition-all hover:border-teal-700/50 hover:bg-gray-900/80"
              >
                {/* Number badge */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white shadow-lg shadow-teal-600/20">
                    {step.num}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-teal-400 transition-colors group-hover:bg-teal-900/40">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4: User Flow Map                                           */
/* ------------------------------------------------------------------ */

function FlowStep({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: "teal" | "amber";
}) {
  const isTeal = color === "teal";
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
          isTeal
            ? "border-teal-700/50 bg-teal-900/40 text-teal-400"
            : "border-amber-700/50 bg-amber-900/40 text-amber-400"
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <span className="max-w-[100px] text-center text-xs font-medium text-gray-300 leading-tight">
        {label}
      </span>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-gray-600 shrink-0">
      <ArrowRight className="h-5 w-5" />
    </div>
  );
}

function UserFlowSection() {
  const customerFlow = [
    { icon: Globe, label: "Visit Website" },
    { icon: ShoppingCart, label: "Browse Menu" },
    { icon: Eye, label: "View Product Details" },
    { icon: Package, label: "Select Product" },
    { icon: MessageCircle, label: "Order via WhatsApp" },
    { icon: Truck, label: "Delivery" },
  ];

  const adminFlow = [
    { icon: LogIn, label: "Login to Dashboard" },
    { icon: Package, label: "Manage Products" },
    { icon: Star, label: "Manage Reviews" },
    { icon: Settings, label: "Moderate Content" },
    { icon: CheckCircle, label: "Publish to Website" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-center text-4xl font-bold mb-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Customer Journey
        </motion.h2>
        <motion.div
          className="mx-auto mb-16 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        />

        {/* Customer flow */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12"
        >
          <h3 className="mb-6 text-center text-lg font-semibold text-teal-400">
            Customer Flow
          </h3>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {customerFlow.map((step, idx) => (
                <div key={step.label} className="contents">
                  <FlowStep icon={step.icon} label={step.label} color="teal" />
                  {idx < customerFlow.length - 1 && <FlowArrow />}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Admin flow */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <h3 className="mb-6 text-center text-lg font-semibold text-amber-400">
            Admin Flow
          </h3>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-8">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {adminFlow.map((step, idx) => (
                <div key={step.label} className="contents">
                  <FlowStep icon={step.icon} label={step.label} color="amber" />
                  {idx < adminFlow.length - 1 && <FlowArrow />}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5: Footer                                                  */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-12 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-sm text-gray-400">
          Built with{" "}
          <span className="text-gray-300 font-medium">Next.js</span>,{" "}
          <span className="text-gray-300 font-medium">NestJS</span>, and{" "}
          <span className="text-gray-300 font-medium">Cloudflare</span>
        </p>

        <div className="mb-6 flex items-center justify-center gap-6">
          <a
            href="https://www.shrimpcaption.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-teal-400"
          >
            Website
          </a>
          <span className="text-gray-700">|</span>
          <a
            href="https://dashboard.shrimpcaption.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-amber-400"
          >
            Dashboard
          </a>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2026 Shrimp Caption. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PlatformOverviewSection />
      <DashboardGuideSection />
      <UserFlowSection />
      <Footer />
    </main>
  );
}
