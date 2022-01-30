import './whyuse.scss';

const data = [
    {
        label: "Same Day Cash-out",
        val: "Easily transfer your earnings to your bank account."
    },
    {
        label: "Low Commission",
        val: "Easily transfer your earnings to your bank account."
    },
    {
        label: "All-in-one App",
        val: "Easily transfer your earnings to your bank account."
    },
    {
        label: "Multiple Pick-up",
        val: "Easily transfer your earnings to your bank account."
    },
    {
        label: "Work at your own pace",
        val: "Easily transfer your earnings to your bank account."
    }
]

const Whyuse = () => {
    return (
        <div className="why-use">
            <p className="titlexx">Why use us</p>
            <div className="content">
                {data.map(({label, val}, index) => {
                    return (
                        <div className="opt">
                            <div className="left"><span>{index+1}</span>{label}</div><div className="right">{val}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Whyuse;