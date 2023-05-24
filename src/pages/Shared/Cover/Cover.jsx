const Cover = ({ img, title,description, heading }) => {
    return (
        <section className="hero h-[700px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-60 text-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className={`mb-5 font-bold ${heading? 'text-7xl' : 'text-5xl'}`}>{title}</h1>
                    <p className={`${heading ? 'text-xl font-bold' : 'font-semibold'}`}>{description}</p>
                </div>
            </div>
        </section>
    );
};

export default Cover;