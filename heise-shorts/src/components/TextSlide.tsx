interface TextSlideProps {
    headline: string;
    text: string;
    url: string;
}

export default function TextSlide({ headline, text, url }: TextSlideProps) {
    return (
        <>
            <div className="line-clamp-[25] text-justify mx-10">
                <h1 className="text-xl font-bold mb-5">{headline}</h1>
                {url ? <img src={url} className="mb-5" /> : null}
                <p className="text-sm">{text}</p>
            </div>
        </>
    );
}