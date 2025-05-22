/*import { useState } from "react";

function SummaryList () {

    const [selected, setSelected] = useState(null)
    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <div className="container">
            <h1>Quelle compétence veux-tu débloquer ?</h1>
           
                <div className="accordion">
                    {data.map((cours, i) => (
                        <div className="cours">
                            <div className="title" onClick={() => toggle(i)}>
                                <h2>{cours.theme}</h2>
                                <h3>0%</h3>
                                <span>{selected == i ? "-" : "+"}</span>
                                </div>
                                <div className={selected === i ? "content show" : "content"}>{cours.sujets}</div>
                                </div>

                    ))}
                </div>


        </div>
    )
}
const data = [
    {
        theme: "HTML",
        sujets: "Les balises HTML",
    },
    {
        theme: "CSS",
        sujets: "Les balises CSS",
    },
    {
        theme: "JS Basique",
        sujets: "bla bla bla ",
    },
    {
        theme: "JS Intermédiaire",
        sujets: "bla bla bla ",
    },
]


export default SummaryList;*/
