import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const checkSiteAvailability = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      cache: 'no-store',
    });
    return response.ok;
  } catch (error) {
    return false;
  }
};

export const MAIN_SITE = 'https://brainfried.co';
export const SUB_SITE = 'https://brainfried.site';
