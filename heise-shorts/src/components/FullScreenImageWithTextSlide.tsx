interface FullScreenImageWithTextSlideProps {
    url: string;
    headline: string;
    text: string;
}

export default function FullScreenImageWithTextSlide({ url, headline, text }: FullScreenImageWithTextSlideProps) {
    return (
        <>
            <div className={`w-full h-full absolute left-0 top-0 bg-cover bg-no-repeat bg-center rounded-xl`} style={{backgroundImage: `url(${url})`}}>
                <div className="bg-gradient-to-b from-black rounded-xl h-1/3 opacity-80 top-0"></div>
                <div className="bg-gradient-to-t from-black rounded-xl h-1/3 opacity-80 absolute bottom-0 w-full"></div>
                <div className=" text-lg leading-tight text-justify font-bold mx-12 mt-20 absolute top-0">
                    {headline}
                </div>
                <div className="bg-black bg-opacity-50 mx-10 rounded-lg absolute bottom-0 mb-20">
                    <div className=" text-sm m-2 text-justify leading-tight">{text}</div>
                </div>
            </div>
        </>
    );
}