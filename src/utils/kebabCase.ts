export const kebabCase = (str: string): string => 
    str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');