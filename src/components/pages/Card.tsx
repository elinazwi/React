import { useState } from "react";

type Props = { name: string; description: string; };

export default function Card({ name, description }: Props) {
    const [amountOfClicks, setAmountOfClicks] = useState(0);
    let hello = "Hello " + name + "!";
    let style = amountOfClicks > 5 ? "bg-pink-400" : "";

    return (
        <div className={`border p-4 hover:curser-pointer ${style}`}
            onClick={() =>
                setAmountOfClicks(amountOfClicks + 1)}>
            <h1 className="font-extrabold text-2xl hover:cursor-pointer">{hello}</h1>
            <p>{description}</p>
            <div>Amount of clicks: {amountOfClicks}</div>
        </div>
    );
}


