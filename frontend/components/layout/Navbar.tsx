"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import AuthModal from "@/components/auth/AuthModal";

const links = [
  { name: "Home", href: "/" },
  { name: "Updates", href: "/updates" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Community", href: "/community" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const openAuth = () => {
    setMobileOpen(false);
    setAuthOpen(true);
  };

  const closeAuth = () => {
    setAuthOpen(false);
  };

  /* Close mobile menu after route changes */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Prevent page scrolling while mobile menu is open */
  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <nav
        aria-label="Main navigation"
        className="
          fixed
          left-0
          top-3
          z-[100]
          w-full
          px-3

          sm:top-4
          sm:px-4

          lg:top-5
        "
      >
        {/* No SSR/client entrance animation.
            Prevents hydration mismatch and keeps navbar stable
            while navigating between pages. */}
        <div
          className="
            mx-auto
            w-full
            max-w-[1220px]
          "
        >
          {/* =====================================================
              OUTER NAVBAR WRAPPER
          ===================================================== */}
          <div className="relative">
            {/* ===================================================
                OUTER PURPLE GLOW
            =================================================== */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                top-1/2
                h-[190px]
                w-[420px]
                -translate-y-1/2
                rounded-full
                bg-purple-600/[0.12]
                blur-[90px]
              "
            />

            {/* ===================================================
                SECONDARY OUTER GLOW
            =================================================== */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[30px]
                top-1/2
                h-[120px]
                w-[280px]
                -translate-y-1/2
                rounded-full
                bg-violet-500/[0.08]
                blur-[70px]
              "
            />

            {/* ===================================================
                MAIN NAVBAR
            =================================================== */}
            <div
              className="
                relative
                isolate
                overflow-hidden
                rounded-[20px]
                border
                border-white/[0.11]
                bg-black/[0.30]
                shadow-[0_14px_55px_rgba(0,0,0,0.60)]
                backdrop-blur-2xl

                sm:rounded-[20px]
              "
            >
              {/* =================================================
                  INNER PURPLE GLOW — RIGHT SIDE
              ================================================= */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-[-30px]
                  top-1/2
                  h-[130px]
                  w-[340px]
                  -translate-y-1/2
                  rounded-full
                  bg-purple-500/[0.09]
                  blur-[65px]
                "
              />

              {/* =================================================
                  INNER LOGIN AREA GLOW
              ================================================= */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-[55px]
                  top-1/2
                  h-[85px]
                  w-[210px]
                  -translate-y-1/2
                  rounded-full
                  bg-purple-400/[0.08]
                  blur-[55px]
                "
              />

              {/* =================================================
                  SUBTLE TOP HIGHLIGHT
              ================================================= */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-white/[0.07]
                "
              />

              {/* =================================================
                  MAIN CONTENT
              ================================================= */}
              <div
                className="
                  relative
                  z-10
                  flex
                  min-h-[56px]
                  items-center
                  justify-between
                  px-3

                  sm:min-h-[60px]
                  sm:px-4

                  md:px-5

                  lg:min-h-[60px]
                  lg:px-5
                "
              >
                {/* =================================================
                    LOGO
                ================================================= */}
                <Link
                  href="/"
                  aria-label="RNOTSKY home"
                  onClick={() => setMobileOpen(false)}
                  className="
                    group
                    relative
                    z-30
                    flex
                    shrink-0
                    items-center
                    rounded-lg
                    outline-none
                    focus-visible:ring-2
                    focus-visible:ring-purple-500/60
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-black
                  "
                >
                  <Image
                    src="/brand/logo.png"
                    alt="RNOTSKY"
                    width={160}
                    height={40}
                    priority
                    className="
                      h-auto
                      w-[88px]
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-[1.025]

                      sm:w-[104px]
                      md:w-[112px]
                      lg:w-[118px]
                      xl:w-[124px]
                    "
                  />
                </Link>

                {/* =================================================
                    DESKTOP NAVIGATION
                ================================================= */}
                <div
                  className="
                    hidden
                    items-center
                    gap-1
                    lg:flex
                    xl:gap-2
                  "
                >
                  {links.map((link) => {
                    const active =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="
                          group
                          relative
                          flex
                          h-10
                          items-center
                          px-3.5
                          text-[13px]
                          font-medium
                          outline-none
                          transition-colors
                          duration-300

                          xl:px-4

                          focus-visible:ring-2
                          focus-visible:ring-purple-500/50
                        "
                      >
                        {/* Hover atmosphere */}
                        <span
                          aria-hidden="true"
                          className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-1/2
                            h-8
                            w-12
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-purple-500/[0.055]
                            blur-xl
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                          "
                        />

                        {/* Navigation text */}
                        <span
                          className={`
                            relative
                            z-10
                            whitespace-nowrap
                            transition-all
                            duration-300

                            ${
                              active
                                ? "text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.18)]"
                                : "text-white/45 group-hover:text-white/85"
                            }
                          `}
                        >
                          {link.name}
                        </span>

                        {/* Active indicator */}
                        {active && (
                          <motion.span
                            layoutId="navbar-active-line"
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 34,
                              mass: 0.7,
                            }}
                            className="
                              absolute
                              bottom-0
                              left-1/2
                              h-[2px]
                              w-[36px]
                              -translate-x-1/2
                              rounded-full
                              bg-purple-400
                              shadow-[0_0_10px_rgba(168,85,247,0.85)]
                            "
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* =================================================
                    RIGHT ACTIONS
                ================================================= */}
                <div
                  className="
                    relative
                    z-30
                    flex
                    items-center
                    gap-2
                  "
                >
                  {/* =================================================
                      AI BUTTON
                  ================================================= */}
                  <Link
                    href="/ai"
                    className="
                      group
                      hidden
                      h-9
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-purple-500/[0.40]
                      bg-purple-500/[0.055]
                      px-3.5
                      text-[11px]
                      font-semibold
                      text-purple-300
                      outline-none
                      transition-all
                      duration-300

                      hover:border-purple-400/[0.70]
                      hover:bg-purple-500/[0.10]
                      hover:text-purple-200
                      hover:shadow-[0_0_28px_rgba(168,85,247,0.20)]

                      focus-visible:ring-2
                      focus-visible:ring-purple-500/60

                      lg:flex
                    "
                  >
                    <Image
                      src="/icons/ai.png"
                      alt="RNOTSKY AI"
                      width={18}
                      height={18}
                      className="
                        h-[17px]
                        w-[17px]
                        object-contain
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <span>AI</span>
                  </Link>

                  {/* =================================================
                      LOGIN BUTTON
                  ================================================= */}
                  <button
                    type="button"
                    onClick={openAuth}
                    className="
                      group
                      hidden
                      h-9
                      items-center
                      gap-2
                      rounded-full
                      bg-gradient-to-r
                      from-purple-700
                      via-purple-600
                      to-fuchsia-500
                      px-4
                      text-[11px]
                      font-semibold
                      text-white
                      shadow-[0_5px_25px_rgba(124,58,237,0.30),0_0_45px_rgba(168,85,247,0.10)]
                      outline-none
                      transition-all
                      duration-300

                      hover:-translate-y-[1px]
                      hover:shadow-[0_8px_32px_rgba(168,85,247,0.42),0_0_55px_rgba(168,85,247,0.16)]

                      focus-visible:ring-2
                      focus-visible:ring-purple-400/70
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-black

                      lg:flex
                    "
                  >
                    <span>Login</span>

                    <ArrowRight
                      aria-hidden="true"
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                      "
                    />
                  </button>

                  {/* =================================================
                      MOBILE MENU BUTTON
                  ================================================= */}
                  <button
                    type="button"
                    aria-label={
                      mobileOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                    }
                    aria-expanded={mobileOpen}
                    onClick={() =>
                      setMobileOpen((value) => !value)
                    }
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.10]
                      bg-white/[0.035]
                      text-white/65
                      outline-none
                      transition-all
                      duration-300

                      hover:border-purple-500/[0.30]
                      hover:bg-purple-500/[0.07]
                      hover:text-white

                      focus-visible:ring-2
                      focus-visible:ring-purple-500/60

                      lg:hidden
                    "
                  >
                    <AnimatePresence
                      mode="wait"
                      initial={false}
                    >
                      {mobileOpen ? (
                        <motion.div
                          key="close"
                          initial={{
                            opacity: 0,
                            rotate: -60,
                            scale: 0.8,
                          }}
                          animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            rotate: 60,
                            scale: 0.8,
                          }}
                          transition={{
                            duration: 0.18,
                          }}
                        >
                          <X
                            size={18}
                            strokeWidth={1.8}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{
                            opacity: 0,
                            rotate: 60,
                            scale: 0.8,
                          }}
                          animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            rotate: -60,
                            scale: 0.8,
                          }}
                          transition={{
                            duration: 0.18,
                          }}
                        >
                          <Menu
                            size={18}
                            strokeWidth={1.8}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>

              {/* =====================================================
                  MOBILE MENU
              ===================================================== */}
              <AnimatePresence initial={false}>
                {mobileOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      relative
                      overflow-hidden
                      border-t
                      border-white/[0.07]
                      lg:hidden
                    "
                  >
                    <div
                      className="
                        px-3
                        pb-3
                        pt-2

                        sm:px-4
                        sm:pb-4
                      "
                    >
                      {/* MOBILE LINKS */}
                      <div className="space-y-1">
                        {links.map((link, index) => {
                          const active =
                            link.href === "/"
                              ? pathname === "/"
                              : pathname.startsWith(link.href);

                          return (
                            <motion.div
                              key={link.href}
                              initial={{
                                opacity: 0,
                                x: -8,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay: index * 0.035,
                                duration: 0.25,
                              }}
                            >
                              <Link
                                href={link.href}
                                onClick={() =>
                                  setMobileOpen(false)
                                }
                                className="
                                  group
                                  relative
                                  flex
                                  min-h-[44px]
                                  items-center
                                  justify-between
                                  rounded-xl
                                  px-3
                                  text-sm
                                  font-medium
                                  outline-none
                                  transition-all
                                  duration-200

                                  focus-visible:ring-2
                                  focus-visible:ring-purple-500/50
                                "
                              >
                                <span
                                  className={`
                                    transition-colors
                                    duration-200

                                    ${
                                      active
                                        ? "text-white"
                                        : "text-white/45 group-hover:text-white/90"
                                    }
                                  `}
                                >
                                  {link.name}
                                </span>

                                {active && (
                                  <motion.span
                                    layoutId="mobile-active-dot"
                                    transition={{
                                      type: "spring",
                                      stiffness: 500,
                                      damping: 32,
                                    }}
                                    aria-hidden="true"
                                    className="
                                      h-1.5
                                      w-1.5
                                      rounded-full
                                      bg-purple-400
                                      shadow-[0_0_10px_rgba(168,85,247,0.9)]
                                    "
                                  />
                                )}
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* MOBILE ACTIONS */}
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {/* AI */}
                        <Link
                          href="/ai"
                          onClick={() =>
                            setMobileOpen(false)
                          }
                          className="
                            flex
                            h-10
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-purple-500/[0.30]
                            bg-purple-500/[0.055]
                            text-xs
                            font-semibold
                            text-purple-300
                            outline-none
                            transition-all
                            duration-300

                            hover:border-purple-400/[0.55]
                            hover:bg-purple-500/[0.10]
                            hover:text-purple-200

                            focus-visible:ring-2
                            focus-visible:ring-purple-500/60
                          "
                        >
                          <Image
                            src="/icons/ai.png"
                            alt=""
                            width={16}
                            height={16}
                            className="
                              h-4
                              w-4
                              object-contain
                            "
                          />

                          RNOTSKY AI
                        </Link>

                        {/* LOGIN */}
                        <button
                          type="button"
                          onClick={openAuth}
                          className="
                            group
                            flex
                            h-10
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-gradient-to-r
                            from-purple-700
                            to-fuchsia-500
                            text-xs
                            font-semibold
                            text-white
                            shadow-[0_5px_20px_rgba(124,58,237,0.20)]
                            outline-none
                            transition-all
                            duration-300

                            hover:shadow-[0_8px_25px_rgba(168,85,247,0.32)]

                            focus-visible:ring-2
                            focus-visible:ring-purple-400/70
                          "
                        >
                          Login

                          <ArrowRight
                            aria-hidden="true"
                            className="
                              h-3.5
                              w-3.5
                              transition-transform
                              duration-300
                              group-hover:translate-x-0.5
                            "
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      {/* =========================================================
          AUTH MODAL
      ========================================================= */}
      <AuthModal
        open={authOpen}
        onClose={closeAuth}
      />
    </>
  );
}