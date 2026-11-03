const DEFAULT_SITE_URL = 'https://openblog.cc/';

/** Community preview repo (PRs, edits, issues) — not the cloneable template. */
export const COMMUNITY_GITHUB_REPO = 'hajiparvaneh/openblogcc';
export const COMMUNITY_GITHUB_URL = `https://github.com/${COMMUNITY_GITHUB_REPO}`;

export function getPullRequestUrl(prNumber: number): string {
  return `${COMMUNITY_GITHUB_URL}/pull/${prNumber}`;
}

export function getBlobUrl(filePath: string, branch = 'main'): string {
  const normalized = filePath.replace(/^\/+/, '');
  return `${COMMUNITY_GITHUB_URL}/blob/${branch}/${normalized}`;
}

function ensureTrailingSlash(url: string): string {
  return url.endsWith('/') ? url : `${url}/`;
}

export function getSiteUrl(site?: URL | string | null): URL {
  if (site instanceof URL) {
    return site;
  }

  if (typeof site === 'string' && site.trim()) {
    return new URL(ensureTrailingSlash(site.trim()));
  }

  const fromEnv = process.env.OPENBLOG_BASE_URL ?? process.env.SITE_URL ?? DEFAULT_SITE_URL;
  try {
    return new URL(ensureTrailingSlash(fromEnv.trim()));
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
}
