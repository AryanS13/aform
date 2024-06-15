export function setLocalStorageItem(key: string, value: any) {
    localStorage.setItem(key, value)
}

export function getLocalStorageItem(key: string): string {
    const value = localStorage.getItem(key)
    return value ? value : '';
}

export function removeItemFromLocalStorage(key: string) {
    localStorage.removeItem(key);
}