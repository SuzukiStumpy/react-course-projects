import { useState } from 'react';

import "./styles.css";

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
        title: "How long do I have to return my chair?",
        text:
            "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
        title: "Do you ship to countries outside the EU?",
        text:
            "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }
];

export default function App() {
    return (
        <div>
            <Accordion data={faqs} />
        </div>
    );
}

function Accordion({ data }) {
    const [openItem, setOpenItem] = useState(null);

    return <div className="accordion">
        {data.map((el, i) => (
            <AccordionItem openItem={openItem} onOpen={setOpenItem} title={el.title} num={i} key={i}>
                {el.text}
            </AccordionItem>
        ))}

        <AccordionItem openItem={openItem} onOpen={setOpenItem} title="Learn some react" num="23" key="23">
            <ul>
                <li>Break up UI into compoents</li>
                <li>Make components reusable</li>
                <li>Place state efficiently</li>
            </ul>
        </AccordionItem>
    </div >;
}

function AccordionItem({ openItem, onOpen, num, title, children }) {
    const open = openItem === num;

    function handleToggle() {
        onOpen(open ? null : num);
    }

    return <div className={`item ${open ? "open" : ""}`} onClick={handleToggle}>
        <p className="number">{("0" + (Number(num) + 1)).slice(-2)}</p>
        <p className="title">{title}</p>
        <p className="icon">{open ? "-" : "+"}</p>
        {open ?
            <div className="content-box">{children}</div>
            :
            ""
        }
    </div>
}
