interface FullScreenImageSlideProps {
    url: string;
    headline: string;
}

export default function FullScreenImageSlide({ url, headline }: FullScreenImageSlideProps) {
    return (
        <>
            <div className={`w-full h-full absolute left-0 top-0 bg-cover bg-no-repeat bg-center rounded-xl flex items-center`} style={{backgroundImage: `url(${url})`}}>
                <div className="bg-black bg-opacity-50 mx-10 rounded-xl">
                    <div className=" text-4xl text-justify font-bold m-2">
                        {headline}
                    </div>
                </div>
            </div>
        </>
    );
}