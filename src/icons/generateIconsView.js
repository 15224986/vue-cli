const generateIcons = {
    data: [],
    generate(iconsMap) {
        this.data = iconsMap.map((i) => {
            return i.default.id.substring(5)
        })
    }
}

export default generateIcons
