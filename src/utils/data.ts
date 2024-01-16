export const NAVIGATION = ['main', 'about', 'projects', 'contacts'];
export const formatNavigationToPath = (value: string) => `/${value === 'main' ? '' : value.toLowerCase()}`;