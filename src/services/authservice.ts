export function setLocalStorageItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function removeItemFromLocalStorage(key: string) {
    localStorage.removeItem(key);
}