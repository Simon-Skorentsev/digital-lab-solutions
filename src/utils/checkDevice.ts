import { layoutSetings } from "../_config";

export const devices = {
    desktop: makeDevice(3),
    tablet: makeDevice(2),
    mobile: 0,
}

export function checkDevice(device: keyof typeof devices): boolean {
    const makeQuery = (px: number) => {
        return window.matchMedia(`(min-width: ${px+20}px)`);
    }

    return makeQuery(devices[device]).matches;
}

function makeDevice(colunsNum: number): number {
    const { columnWidth, columnsGap, paddingX } = layoutSetings;
    return columnWidth * colunsNum + columnsGap * (colunsNum - 1) + paddingX * 2;
}