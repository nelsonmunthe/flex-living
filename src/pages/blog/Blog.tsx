import { NavLink } from "react-router-dom"
import arrowLeft from "../../assets/images/arrowLeftBlack.png"
import arrowRigth from "../../assets/images/arrowRighBlack.png"
import CustomNavLink from "../../components/CustomNavLink"
import { CustomNavLinkProps } from "../../intefrace/common"
import blogImage1 from "../../assets/images/blogImage1.png"
import blogImage2 from "../../assets/images/blogImage2.png"
import blogImage3 from "../../assets/images/blogImage3.png"
import blogImage4 from "../../assets/images/blogImage4.png"
import blogImage5 from "../../assets/images/blogImage5.png"
import blogImage6 from "../../assets/images/blogImage6.png"
import blogImage7 from "../../assets/images/blogImage7.png"
import blogImage8 from "../../assets/images/blogImage8.png"
import blogImage9 from "../../assets/images/blogImage9.png"
import blogImage10 from "../../assets/images/blogImage10.png"
import blogImage11 from "../../assets/images/blogImage11.png"
import blogImage12 from "../../assets/images/blogImage12.png"
import blogImage13 from "../../assets/images/blogImage13.png"
import blogImage14 from "../../assets/images/blogImage14.png"
import iconClock from "../../assets/images/eva_clock-fill.png"
import CustomButton from "../../components/CustomButtont"
import CustomHeader from "../../components/CustomHeader"

const Blog = () => {
    const subLinks:CustomNavLinkProps[] = [
        {
            description: "View all",
            path: ""
        },
        {
            description: "Destination guide",
            path: ""
        },
        {
            description: "Remote working",
            path: ""
        },
        {
            description: "Property investing",
            path: ""
        },
        {
            description: "Property insights",
            path: ""
        }
    ];

    type CardsProps = {
        image: string,
        buttonDescription: string,
        header: string,
        subHeader: string,
        duration: string
    }

    const blogs :CardsProps[] = [
        {
            image: blogImage1,
            buttonDescription: "Relocation",
            header: "Turpis elit in dictum eget eget",
            subHeader: "Neque faucibus pharetra condimentum tincidunt commodo velit.",
            duration: "1 min read"
        },
        {
            image: blogImage2,
            buttonDescription: "Relocation",
            header: "Feugiat gravida sed sit lacus sagittis",
            subHeader: "Neque ipsum mi nisl, id ultricies. Sollicitudin et id consequat tellus commodo magnis.",
            duration: "3 min read"
        },
        {
            image: blogImage3,
            buttonDescription: "Relocation",
            header: "Aliquam id ullamcorper eu ",
            subHeader: "Id imperdiet sem nec id nulla purus leo risus. Risus tincidunt ultrices id ultricies vitae.",
            duration: "2 min read"
        },
        {
            image: blogImage4,
            buttonDescription: "Relocation",
            header: "Placerat purus habitasse malesuada",
            subHeader: "Egestas varius urna vestibulum et, phasellus varius ornare.",
            duration: "3 min read"
        },
        {
            image: blogImage5,
            buttonDescription: "Relocation",
            header: "Proin tristique ipsum velit cursus",
            subHeader: "Ultricies lacus, purus praesent scelerisque vitae et ultrices.",
            duration: "2 min read"
        },
        {
            image: blogImage6,
            buttonDescription: "Relocation",
            header: "Vulputate id sem felis, at at eget nulla",
            subHeader: "Vitae enim morbi varius neque pellentesque faucibus.",
            duration: "5 min read"
        },
        {
            image: blogImage7,
            buttonDescription: "Relocation",
            header: "Ultrices sodales a sit pretium ut amet",
            subHeader: "Sagittis purus aenean magna eget arcu egestas nisi, id.",
            duration: "5 min read"
        },
        {
            image: blogImage8,
            buttonDescription: "Relocation",
            header: "Turpis pellentesque mauris quis risus",
            subHeader: "Volutpat scelerisque sed lectus eu donec neque in aliquam.",
            duration: "1 min read"
        },
        {
            image: blogImage9,
            buttonDescription: "Relocation",
            header: "In pellentesque eget natoque vestibulum",
            subHeader: "In amet vehicula porttitor viverra maecenas metus dictum arcu lorem.",
            duration: "2 min read"
        }
    ]

    const blogsFeature :CardsProps[] = [
        {
            image: blogImage10,
            buttonDescription: "Relocation",
            header: "Turpis elit in dictum eget eget",
            subHeader: "Convallis eu vel fames feugiat et venenatis nulla ipsum.",
            duration: "1 min read"
        },
        {
            image: blogImage11,
            buttonDescription: "Relocation",
            header: "Faucibus egestas ut sit purus ultricies at eu",
            subHeader: "Viverra tellus risus lacus commodo urna fringilla cursus nulla amet.",
            duration: "3 min read"
        },
        {
            image: blogImage12,
            buttonDescription: "Relocation",
            header: "Feugiat gravida sed sit lacus sagittis",
            subHeader: "Pellentesque ultrices hendrerit lacus lectus.",
            duration: "2 min read"
        },
        {
            image: blogImage13,
            buttonDescription: "Relocation",
            header: "Placerat purus habitasse malesuada",
            subHeader: "Egestas varius urna vestibulum et, phasellus varius ornare.",
            duration: "3 min read"
        },
        {
            image: blogImage14,
            buttonDescription: "Relocation",
            header: "Proin tristique ipsum velit cursus",
            subHeader: "Ultricies lacus, purus praesent scelerisque vitae et ultrices.",
            duration: "2 min read"
        }
    ]

    return(
        <article className="grid grid-cols-1 gap-y-6 md:gap-y-16 lg:gap-y-10 px-2">
            <h2 className="font-semibold text-3xl  bg-white text-center">Flex Living Insights</h2>
            <section className="grid grid-cols-5 gap-1 sm:grid-cols-5 lg:px-[200px]">
                {
                    subLinks.map(item => {
                        return <NavLink 
                            className='text-[10px] hover:bg-gray-200 p-1 rounded-lg text-center sm:text-sm md:text-md' 
                            to={item.path}
                        >
                            {item.description}
                        </NavLink>
                    })
                }
            </section>
            <section className="flex flex-col gap-5 justify-between sm:justify-end overflow-hidden bg-center px-5  bg-cover bg-coverBLog py-2 md:py-10 lg:px-[100px]">
                <div className="bg-white flex justify-start flex-col gap-1 mt-2 p-2 lg:p-4  rounded-tr-3xl rounded-br-3xl w-40 md:w-56">
                    <span className="font-semibold text-sm lg:text-2xl">We rent your property</span>
                    <p className="text-[10px] md:text-sm max-w-40 lg:max-w-[400px]">Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis proin fermentum, consectetur cursus. </p>
                </div>
                <div className="flex justify-between">
                    <div className="p-2 bg-white rounded-lg opacity-[0.7] hover:cursor-pointer">
                        <img src={arrowLeft}/>
                    </div>
                    <div className="p-2 bg-white rounded-lg opacity-[0.7] hover:cursor-pointer">
                        <img src={arrowRigth}/>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 auto-cols-auto gap-3 lg:px-[150px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
                    {
                        blogs.map(item => {
                            return(
                                <div className="flex flex-col">
                                    <div className="relative flex flex-col">
                                        <img  src={item.image} alt="image" className="rounded-t-2xl"/>
                                        <div className="absolute bg-[#E2F1E8] py-2 px-10 rounded-2xl -bottom-4 left-[25%] hover:cursor-pointer">
                                            <span>{item.buttonDescription}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-3 py-6 px-4 bg-[#F2F0F2] rounded-b-3xl">
                                        <span className="text-2xl text-center font-semibold">{item.header}</span>
                                        <p className="text-sm text-center">{item.subHeader}</p>
                                        <div className="flex justify-center items-center gap-x-2">
                                            <img src={iconClock} alt="image4"/>
                                            <span className="font-semibold">{item.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-center items-center">
                    <CustomButton description="Load more" />
                </div>
                
            </section>
            <section className="grid grid-cols-1  auto-cols-auto gap-3 lg:gap-6 lg:px-[150px]">
                <CustomHeader header="Featured posts" subHeader=""/>
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
                    {
                        blogsFeature.map(item => {
                            return(
                                <div className="flex flex-col">
                                    <div className="relative flex flex-col">
                                        <img  src={item.image} alt="image" className="rounded-t-2xl"/>
                                        <div className="absolute bg-[#E2F1E8] py-2 px-10 rounded-2xl -bottom-4 left-[25%] hover:cursor-pointer">
                                            <span>{item.buttonDescription}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-auto flex-col gap-3 py-6 px-4 bg-[#F2F0F2] rounded-b-2xl">
                                        <span className="text-2xl text-center font-semibold">{item.header}</span>
                                        <p className="text-sm text-center">{item.subHeader}</p>
                                        <div className="flex justify-center items-center gap-x-2">
                                            <img src={iconClock} alt="image4"/>
                                            <span className="font-semibold">{item.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-center items-center">
                    <CustomButton description="Load more" />
                </div>
            </section>
        </article>
    )
}

export default Blog;