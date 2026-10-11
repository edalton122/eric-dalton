// This is the PUBLIC-SAFE build. Unlike the internal site, there is no
// "full" dataset in this repo at all — only *.public.js files exist here,
// and they never contain customer names, deal-identifying specifics, or
// internal-only content. There is nothing to toggle.
export const PRIVACY_MODE = 'public';

export async function loadWins() {
  const mod = await import('./wins.public.js');
  return mod.wins;
}

export async function loadProjects() {
  const mod = await import('./projects.public.js');
  return mod.projects;
}

/** Footer disclosure line. */
export function privacyNotice() {
  return 'Customer names abstracted. Full detail available on request.';
}
