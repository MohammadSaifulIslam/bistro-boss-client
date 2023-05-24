import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description, heading }) => {
    return (
        <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <section className="hero h-[400px] md:h-[700px]">
                <div className="hero-overlay bg-opacity-60 text-white"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className={`mb-5 font-bold ${heading ? 'text-7xl' : 'text-5xl'}`}>{title}</h1>
                        <p className={`${heading ? 'text-xl font-bold' : 'font-semibold'}`}>{description}</p>
                    </div>
                </div>
            </section>
        </Parallax>

    );
};

export default Cover;