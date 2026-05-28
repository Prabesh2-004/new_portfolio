interface Skills {
    head: string;
    items: string[]
}

export default function SkillsCard({ head, items }: Skills) {
    return (
        <div className="border border-[#c778df]">
            <h2 className="border border-[#c778df] font-bold p-3">{head}</h2>
            <div className="p-3 flex flex-col gap-1">
                {items.map((item, index) => (
                    <p key={index} className="text-sm">{item}</p>
                ))}
            </div>
        </div>
    )
}