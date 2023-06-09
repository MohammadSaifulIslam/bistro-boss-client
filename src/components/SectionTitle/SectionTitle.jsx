
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="w-fit  md:w-5/12 mx-auto mb-10 text-center">
            <p className="text-secondary mb-3">--- {subHeading} ---</p>
            <p className="text-4xl border-y-4 py-2">{heading}</p>
        </div>
    );
};

export default SectionTitle;