export function splitFileName(fileName: string): SplitName {
    const data =  fileName.match(/(.*?)(-\d)?(\.\w+)/);
    if (!data) {
        console.warn(`wrong file name error: ${fileName}`);
        return {name: fileName, code: "", ext: ""};
    }
    const parts = data.slice(1);
    return {
        name: parts[0],
        code: parts[1] || "",
        ext: parts[2],
    }
}

interface SplitName {
    name: string,
    ext: string,
    code: string
}