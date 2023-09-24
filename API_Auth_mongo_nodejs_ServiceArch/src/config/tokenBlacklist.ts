const tokenBlacklist: string[] = [];


export function isTokenBlacklisted(token: string): boolean {
    return tokenBlacklist.includes(token);
}

export function addToBlacklist(token: string) {
    tokenBlacklist.push(token);
}
