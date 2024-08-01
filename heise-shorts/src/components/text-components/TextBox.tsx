export interface TextBoxProps {
    text: string;
    textsize: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    position: "top" | "center" | "bottom";
}

const posTypes: { [key: string]: string } = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
};

export default function TextBox({
    text,
    textsize,
    position
}: TextBoxProps) {
    return (
        <div
            className={`${posTypes[position]} flex h-full w-full overflow-hidden z-30 rounded-lg`}
        >
            <div className={`bg-black bg-opacity-85 p-4 w-full rounded-lg`}>
                <div className={`text-${textsize} leading-tight w-full break-words hyphens-auto`} lang="de">{text}</div>
            </div>
        </div>
    );
};
