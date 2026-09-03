"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div
        className="
          mx-auto
          max-w-[1600px]
          px-5
          pb-8
          pt-16

          sm:px-8
          sm:pb-12
          sm:pt-24

          lg:px-10
          xl:px-16
        "
      >
        {/* ================================================== */}
        {/* FOOTER BOX                                         */}
        {/* ================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-white/[0.08]
            bg-white/[0.02]
            px-5
            py-8
            backdrop-blur-xl

            sm:px-8
            sm:py-10

            lg:px-10
            lg:py-12
          "
        >
          {/* Subtle purple glow */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-180px]
              h-[300px]
              w-[600px]
              -translate-x-1/2
              rounded-full
              bg-purple-600/[0.06]
              blur-[130px]
            "
          />

          {/* ================================================== */}
          {/* LOGO                                                */}
          {/* ================================================== */}

          <div
            className="
              relative
              flex
              justify-center
              border-b
              border-white/[0.07]
              pb-8

              sm:pb-10
            "
          >
            <Link
              href="/"
              className="
                group
                inline-flex
                items-center
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
                  w-[120px]

                  transition-transform
                  duration-300
                  group-hover:scale-[1.04]

                  sm:w-[135px]
                  lg:w-[145px]
                "
              />
            </Link>
          </div>

          {/* ================================================== */}
          {/* NAVIGATION                                         */}
          {/* ================================================== */}

          <div
            className="
              relative
              grid
              grid-cols-1
              gap-10
              pt-8

              sm:pt-10

              md:grid-cols-2
              md:gap-10
            "
          >
            {/* ================================================= */}
            {/* MODULES                                            */}
            {/* ================================================= */}

            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-gray-500

                  sm:text-sm
                "
              >
                Modules
              </p>

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-4
                  text-gray-300
                "
              >
                <FooterLink href="/about">
                  About Us
                </FooterLink>

                <FooterLink href="/partners">
                  Partners
                </FooterLink>

                <FooterLink href="/contact">
                  Contact Us
                </FooterLink>

                <FooterLink href="/support">
                  Support
                </FooterLink>

                <FooterLink href="/terms">
                  Terms & Conditions
                </FooterLink>

                <FooterLink href="/cookies">
                  Cookie Policy
                </FooterLink>
              </div>
            </div>

            {/* ================================================= */}
            {/* CONNECT                                            */}
            {/* ================================================= */}

            <div className="md:text-right">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-gray-500

                  sm:text-sm
                "
              >
                Connect
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-start
                  gap-5

                  md:justify-end
                "
              >
                <SocialLink
                  href="https://instagram.com/rnotsky"
                  label="Instagram"
                  color="hover:text-pink-500"
                >
                  <FaInstagram size={24} />
                </SocialLink>

                <SocialLink
                  href="https://www.youtube.com/@Rnotsky-official"
                  label="YouTube"
                  color="hover:text-red-500"
                >
                  <FaYoutube size={24} />
                </SocialLink>

                <SocialLink
                  href="https://x.com/rnotskyofficial"
                  label="X"
                  color="hover:text-white"
                >
                  <FaXTwitter size={22} />
                </SocialLink>

                <SocialLink
                  href="https://linkedin.com/company/rnotsky"
                  label="LinkedIn"
                  color="hover:text-blue-500"
                >
                  <FaLinkedin size={24} />
                </SocialLink>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* BOTTOM                                             */}
          {/* ================================================== */}

          <div
            className="
              relative
              mt-10
              flex
              flex-col
              gap-3
              border-t
              border-white/[0.07]
              pt-7
              text-sm
              text-gray-500

              sm:mt-12

              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <span>
              © 2026 RNOTSKY. All systems reserved.
            </span>

            <span>
              Built with intelligence.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ========================================================== */
/* FOOTER LINK                                                */
/* ========================================================== */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        transition-all
        duration-300
        hover:translate-x-1
        hover:text-white
      "
    >
      {children}

      <span
        className="
          absolute
          -bottom-1
          left-0
          h-[1px]
          w-0
          bg-purple-500
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </Link>
  );
}

/* ========================================================== */
/* SOCIAL LINK                                                */
/* ========================================================== */

function SocialLink({
  href,
  label,
  children,
  color,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        text-gray-400
        transition-all
        duration-300
        hover:scale-110
        ${color}
      `}
    >
      {children}
    </a>
  );
}