export const menuItems: MenuItem[] = [
    {
        name: "Demos",
        submenu: [{ name: "veryyyyyyyy big name" }]
    },
    {
        name: "Post",
        submenu: [
            { name: "Post Header" },
            { name: "Post Layout" },
            { name: "Share Buttons" },
            { name: "Gallery Post" },
            { name: "Video Post" },
        ]
    },
    {
        name: "Features",
        submenu: [{
            name: "item with link",
            href: "/",
        }]
    },
    {
        name: "Categories",
        submenu: [{ name: "sm" }]
    },
    {
        name: "Shop",
        submenu: [{ name: "mock" }]
    },
    {
        name: "Buy Now",
        href: "/"
    }
];

export interface MenuItem {
    name: string,
    href?: string,
    submenu?: SubMenuItem[],
}

export interface SubMenuItem {
    name: string,
    href?: string,
}