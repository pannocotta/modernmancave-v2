import Link, { type LinkProps } from 'next/link'
import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

type Variant = 'primary' | 'ghost'

type BaseProps = {
  variant?: Variant
  children: ReactNode
  className?: string
}

const base =
  'group relative inline-flex items-stretch border font-bold text-xs tracking-[0.2em] uppercase transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary: 'border-white/30 hover:border-white text-white',
  ghost: 'border-white/15 hover:border-white/40 text-white/80 hover:text-white',
}

const accents: Record<Variant, string> = {
  primary: 'bg-brand-red',
  ghost: 'bg-white/30 group-hover:bg-white/50',
}

function Inner({ variant, children }: { variant: Variant; children: ReactNode }) {
  return (
    <>
      <span
        aria-hidden="true"
        className={`${accents[variant]} w-3 self-stretch shrink-0 transition-all duration-300 group-hover:w-12 group-disabled:w-3`}
      />
      <span className="px-8 py-4 inline-flex items-center gap-3">{children}</span>
    </>
  )
}

export function CTALink({
  variant = 'primary',
  children,
  className = '',
  ...rest
}: BaseProps & LinkProps & ComponentPropsWithoutRef<'a'>) {
  return (
    <Link {...rest} className={`${base} ${variants[variant]} ${className}`}>
      <Inner variant={variant}>{children}</Inner>
    </Link>
  )
}

export function CTAAnchor({
  variant = 'primary',
  children,
  className = '',
  ...rest
}: BaseProps & ComponentPropsWithoutRef<'a'>) {
  return (
    <a {...rest} className={`${base} ${variants[variant]} ${className}`}>
      <Inner variant={variant}>{children}</Inner>
    </a>
  )
}

export function CTAButton({
  variant = 'primary',
  children,
  className = '',
  ...rest
}: BaseProps & ComponentPropsWithoutRef<'button'>) {
  return (
    <button {...rest} className={`${base} ${variants[variant]} ${className}`}>
      <Inner variant={variant}>{children}</Inner>
    </button>
  )
}
