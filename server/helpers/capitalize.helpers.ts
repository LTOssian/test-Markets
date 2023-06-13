export const toCapitalizeHelpers = (param: string): string => {
    return param.charAt(0).toUpperCase() + param.slice(1).toLowerCase();
}