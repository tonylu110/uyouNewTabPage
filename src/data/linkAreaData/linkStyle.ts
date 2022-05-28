import IIconStyle from "../../interface/IIconStyle"

const linkStyle: Array<IIconStyle> = [
    {
        padding: '15px',
        width: '70px',
        height: '70px'
    },
    {
        padding: '20px',
        width: '60px',
        height: '60px'
    },
    {
        padding: '10px',
        width: '80px',
        height: '80px'
    }
]

const styles = (index: number) => {
    if (index === 2) {
        return linkStyle[0]
    } else if (index === 3) {
        return linkStyle[1]
    } else if (index === 4) {
        return linkStyle[0]
    } else if (index === 5) {
        return linkStyle[2]
    } else if (index === 7) {
        return linkStyle[1]
    }
}

export default styles