import menuImg from '../../../assets/menu/banner3.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import websiteTitle from "../../../utility/websiteTitle";
import Cover from "../../Shared/Cover/Cover";
const MenuHome = () => {
    websiteTitle('Bistro Boss | Menu')
    return (
        <section>
            <Cover
                img={menuImg}
                title={'Our Menu'}
                description={'Would you like to try a dish?'}
                heading={true}
            ></Cover>

         <div className='my-container mt-20'>
         <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            >
            </SectionTitle>
            
         </div>
        </section>
    );
};

export default MenuHome;