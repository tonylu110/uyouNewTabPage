import IIconStyle from "../../interface/IIconStyle"

interface engines {
    name: string,
    style?: IIconStyle | null,
    img?: IIconStyle | null
}

const engine: Array<engines> = [
    {
        name: "google"
    },
    {
        name: "bing",
        style: {
            padding: "15px",
            width: "70px",
            height: "70px"
        },
        img: {
            width: "70px",
            height: "70px"
        }
    },
    {
        name: "baidu",
        style: {
            padding: "20px",
            width: "60px",
            height: "60px"
        },
        img: {
            width: "60px",
            height: "60px"
        }
    }
]

export default engine