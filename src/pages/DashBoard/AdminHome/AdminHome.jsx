import Chart from "./Chart";
import Stats from "./Stats";

const AdminHome = () => {

    return (
        <section className="px-5 md:w-11/12 mx-auto py-10">
            <h2 className="text-xl font-semibold">Hi, Welcome Back!</h2>
            <Stats />
            <Chart />
        </section>
    );
};

export default AdminHome;