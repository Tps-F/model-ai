import { Fira_Code as FontMono, Inter as FontSans, Inter } from "next/font/google"

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})