interface HeadlineProps {
    headline: string;
    fade: boolean | true;
}

export default function Headline({ headline, fade }: HeadlineProps) {
    return (
        <>
            <div className="relative text-2xl font-bold mb-4 z-20 whitespace-pre-wrap">{headline}</div>
            {fade ? (<div className="rounded-lg h-1/2 absolute inset-0 bg-gradient-to-t from-transparent from-20% to-black to-80% opacity-00"></div>
            ) : null}
        </>
    );
}