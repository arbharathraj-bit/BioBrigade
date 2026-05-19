"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links: [string, string][] = [
  ["Platform", "#products"],
  ["Technology", "#technology"],
  ["Solutions", "#solutions"],
  ["Pricing", "#pricing"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "var(--px)",
          paddingRight: "var(--px)",
          background: scrolled ? "rgba(246,240,227,0.93)" : "transparent",
          backdropFilter: scrolled ? "blur(22px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <Link
          href="/#top"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Image
            src="/biobrigade-logo.jpg"
            alt="BioBrigade"
            width={33}
            height={33}
            style={{ borderRadius: "7px", objectFit: "cover" }}
            priority
          />
          <span
            className="font-display"
            style={{
              fontSize: "17px",
              fontWeight: 700,
              color: "var(--green)",
              letterSpacing: "-0.01em",
            }}
          >
            BioBrigade
          </span>
        </Link>

        <div
          className="hidden lg:flex"
          style={{ alignItems: "center", gap: "28px" }}
        >
          {links.map(([l, h]) => (
            <Link
              key={l}
              href={h}
              className="nl"
              style={{
                fontSize: "14px",
                color: "var(--muted)",
                fontWeight: 500,
              }}
            >
              {l}
            </Link>
          ))}
        </div>

        <div
          className="hidden md:flex"
          style={{ gap: "8px", alignItems: "center" }}
        >
          <Link
            href="/signin"
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              fontWeight: 500,
              padding: "9px 16px",
            }}
          >
            Sign in
          </Link>
          <Link
            href="/#contact"
            style={{
              padding: "10px 22px",
              background: "var(--green)",
              color: "var(--lime)",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
          >
            Book a Demo
          </Link>
        </div>

        <button
          className="md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--green)",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          <Menu size={26} />
        </button>
      </nav>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1100,
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "var(--px)",
            paddingRight: "var(--px)",
            paddingTop: "20px",
            paddingBottom: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "48px",
            }}
          >
            <Link
              href="/#top"
              onClick={() => setOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Image
                src="/biobrigade-logo.jpg"
                alt="BioBrigade"
                width={33}
                height={33}
                style={{ borderRadius: "7px", objectFit: "cover" }}
              />
              <span
                className="font-display"
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "var(--green)",
                }}
              >
                BioBrigade
              </span>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--green)",
                padding: "8px",
                cursor: "pointer",
              }}
            >
              <X size={26} />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              marginTop: "40px",
            }}
          >
            {links.map(([l, h]) => (
              <Link
                key={l}
                href={h}
                onClick={() => setOpen(false)}
                className="font-display"
                style={{
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                {l}
              </Link>
            ))}
          </div>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              style={{
                padding: "14px 22px",
                borderRadius: "10px",
                border: "1.5px solid var(--border2)",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--green)",
              }}
            >
              Sign in
            </Link>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              style={{
                padding: "14px 22px",
                background: "var(--green)",
                color: "var(--lime)",
                borderRadius: "10px",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
