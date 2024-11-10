// import { Caveat } from 'next/font/google'
import { Playfair } from 'next/font/google'



export const playfair = Playfair ({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify weights you need
  variable: '--font-playfair', // Optional: use a CSS variable for easier reference
  display: 'swap', // Fallback option for better performance
});