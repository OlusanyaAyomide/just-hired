import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export  function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function matchPath({pathname, pattern}:{pathname:string,pattern:string}) {
  // Convert pattern to a regular expression
  // const regex = new RegExp(`^${pattern.replace(/:[^\s/]+/g, '[^/]+')}$`);
  // return regex.test(pathname);
  return pathname.startsWith(pattern)
}
