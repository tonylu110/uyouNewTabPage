const getNowMobileState = (callback: (isMobile: boolean) => void) => {
    window.addEventListener("resize", () => {
        var screenwidth = window.innerWidth
        var isMobile
        if (screenwidth < 768) {
            isMobile = true
        } else {
            isMobile = false
        }
        if (callback) {
            callback(isMobile)
        }
    })
}

export default getNowMobileState