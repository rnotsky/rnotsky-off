"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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

  return (
    <>
      <nav className="fixed left-0 top-3 z-[100] w-full px-3 sm:top-4 sm:px-4 lg:top-5">
        {/* OUTER FLOATING WRAPPER */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto w-full max-w-[1220px]"
        >
          <div className="relative">
            {/* PURPLE AMBIENT GLOW */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -inset-1
                rounded-[22px]
                bg-purple-600/[0.08]
                blur-xl
              "
            />

            {/* NAVBAR */}
            <div
              className="
                relative
                isolate
                overflow-visible
                rounded-[18px]
                border
                border-white/[0.09]
                bg-black/[0.58]
                shadow-[0_12px_50px_rgba(0,0,0,0.55)]
                ring-1
                ring-purple-500/[0.04]
                backdrop-blur-3xl

                sm:rounded-[20px]
              "
            >
              {/* TOP GLASS HIGHLIGHT */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  rounded-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.16]
                  to-transparent
                "
              />

              {/* SOFT GLASS LAYER */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[18px]
                  bg-gradient-to-b
                  from-white/[0.045]
                  via-transparent
                  to-transparent

                  sm:rounded-[20px]
                "
              />

              {/* MAIN NAV CONTENT */}
              <div
                className="
                  relative
                  z-20
                  flex
                  min-h-[54px]
                  items-center
                  justify-between
                  px-3

                  sm:min-h-[58px]
                  sm:px-4

                  md:px-5

                  lg:min-h-[60px]
                  lg:px-5
                "
              >
                {/* LOGO */}
                <Link
                  href="/"
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
                      transition-transform
                      duration-300
                      group-hover:scale-[1.03]

                      xs:w-[96px]
                      sm:w-[108px]
                      md:w-[114px]
                      lg:w-[120px]
                      xl:w-[126px]
                    "
                  />
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div
                  className="
                    relative
                    z-30
                    hidden
                    items-center
                    lg:flex
                    lg:gap-1
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
                          rounded-xl
                          px-3
                          text-[13px]
                          font-medium
                          outline-none
                          transition-all
                          duration-300

                          xl:px-3.5
                        "
                      >
                        {/* HOVER / ACTIVE BACKGROUND */}
                        <span
                          aria-hidden="true"
                          className={`
                            absolute
                            inset-0
                            rounded-xl
                            transition-all
                            duration-300

                            ${
                              active
                                ? "bg-white/[0.055]"
                                : "bg-transparent group-hover:bg-white/[0.04]"
                            }
                          `}
                        />

                        {/* TEXT */}
                        <span
                          className={`
                            relative
                            z-10
                            transition-colors
                            duration-300

                            ${
                              active
                                ? "text-white"
                                : "text-gray-400 group-hover:text-white"
                            }
                          `}
                        >
                          {link.name}
                        </span>

                        {/* ACTIVE PURPLE INDICATOR */}
                        {active && (
                          <motion.span
                            layoutId="navbar-active"
                            className="
                              absolute
                              bottom-[3px]
                              left-1/2
                              h-[2px]
                              w-5
                              -translate-x-1/2
                              rounded-full
                              bg-purple-500
                              shadow-[0_0_12px_rgba(168,85,247,0.9)]
                            "
                            transition={{
                              type: "spring",
                              stiffness: 450,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* RIGHT SIDE */}
                <div className="relative z-30 flex items-center gap-2">
                  {/* AI BUTTON */}
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
                      border-purple-500/[0.28]
                      bg-purple-500/[0.07]
                      px-3
                      text-[11px]
                      font-semibold
                      text-purple-300
                      transition-all
                      duration-300

                      hover:border-purple-400/60
                      hover:bg-purple-500/[0.13]
                      hover:text-purple-200
                      hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]

                      lg:flex
                      xl:px-3.5
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

                  {/* DESKTOP LOGIN */}
                  <button
                    type="button"
                    onClick={openAuth}
                    className="
                      group
                      hidden
                      h-9
                      items-center
                      rounded-full
                      bg-gradient-to-r
                      from-purple-700
                      via-purple-600
                      to-purple-500
                      px-3.5
                      text-[11px]
                      font-semibold
                      text-white
                      shadow-[0_4px_18px_rgba(124,58,237,0.18)]
                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:shadow-[0_8px_28px_rgba(168,85,247,0.38)]

                      lg:flex
                      xl:px-4
                    "
                  >
                    <span>Login</span>
                  </button>

                  {/* MOBILE MENU BUTTON */}
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
                      border-white/[0.09]
                      bg-white/[0.045]
                      text-gray-300
                      transition-all
                      duration-300

                      hover:border-purple-500/30
                      hover:bg-purple-500/[0.08]
                      hover:text-white

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
                            rotate: -90,
                            scale: 0.7,
                          }}
                          animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            rotate: 90,
                            scale: 0.7,
                          }}
                          transition={{
                            duration: 0.2,
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
                            rotate: 90,
                            scale: 0.7,
                          }}
                          animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            rotate: -90,
                            scale: 0.7,
                          }}
                          transition={{
                            duration: 0.2,
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

              {/* MOBILE MENU */}
              <AnimatePresence>
                {mobileOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                      y: -8,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      relative
                      z-20
                      overflow-hidden
                      border-t
                      border-white/[0.06]
                      lg:hidden
                    "
                  >
                    <div className="px-3 pb-3 pt-2 sm:px-4 sm:pb-4">
                      {/* MOBILE NAV LINKS */}
                      <div className="space-y-1">
                        {links.map((link, index) => {
                          const active =
                            link.href === "/"
                              ? pathname === "/"
                              : pathname.startsWith(
                                  link.href
                                );

                          return (
                            <motion.div
                              key={link.href}
                              initial={{
                                opacity: 0,
                                x: -12,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay: index * 0.045,
                                duration: 0.3,
                              }}
                            >
                              <Link
                                href={link.href}
                                onClick={() =>
                                  setMobileOpen(false)
                                }
                                className={`
                                  group
                                  flex
                                  min-h-[44px]
                                  items-center
                                  justify-between
                                  rounded-xl
                                  px-3
                                  text-sm
                                  font-medium
                                  transition-all
                                  duration-200

                                  ${
                                    active
                                      ? "bg-purple-500/[0.09] text-white"
                                      : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                                  }
                                `}
                              >
                                <span>{link.name}</span>

                                {active && (
                                  <span
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
                            border-purple-500/[0.25]
                            bg-purple-500/[0.06]
                            text-xs
                            font-semibold
                            text-purple-300
                            transition-all
                            duration-300
                            hover:bg-purple-500/[0.12]
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

                        {/* MOBILE LOGIN */}
                        <button
                          type="button"
                          onClick={openAuth}
                          className="
                            flex
                            h-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-gradient-to-r
                            from-purple-700
                            to-purple-500
                            text-xs
                            font-semibold
                            text-white
                            shadow-[0_5px_20px_rgba(124,58,237,0.2)]
                            transition-all
                            duration-300
                            hover:shadow-[0_8px_25px_rgba(168,85,247,0.3)]
                          "
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* BOTTOM PURPLE GLOW */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-1/2
                  h-px
                  w-[55%]
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-purple-500/[0.18]
                  to-transparent
                  blur-[1px]
                "
              />
            </div>
          </div>
        </motion.div>
      </nav>

      {/* AUTH MODAL */}
      <AuthModal
        open={authOpen}
        onClose={closeAuth}
      />
    </>
  );
}