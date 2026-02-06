export function getProjectImages(glob: Record<string, string>) {
    return Object.entries(glob)
        .sort(([a], [b]) =>
            a.localeCompare(b, undefined, { numeric: true })
        )
        .map(([, url]) => url);
}
