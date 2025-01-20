

function Cards() {
    const cardData = [
        {
            image: 'https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg',
            title: '50+ Best creative website themes & templates',
            description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
            link: '#',
        },
        {
            image: 'https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg',
            title: 'The ultimate UX and UI guide to card design',
            description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
            link: '#',
        },
        {
            image: 'https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg',
            title: 'Creative Card Component designs graphic elements',
            description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
            link: '#',
        },
    ];

    return (
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    {cardData.map((card, index) => (
                        <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4">
                            <div className="bg-white rounded-lg overflow-hidden mb-10">
                                <img src={card.image} alt={card.title} className="w-full" />
                                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                    <h3>
                                        <a
                                            href={card.link}
                                            className="
                                                font-semibold
                                                text-dark text-xl
                                                sm:text-[22px]
                                                md:text-xl
                                                lg:text-[22px]
                                                xl:text-xl
                                                2xl:text-[22px]
                                                mb-4
                                                block
                                                hover:text-primary
                                            "
                                        >
                                            {card.title}
                                        </a>
                                    </h3>
                                    <p className="text-base text-body-color leading-relaxed mb-7">
                                        {card.description}
                                    </p>
                                    <a
                                        href={card.link}
                                        className="
                                            inline-block
                                            py-2
                                            px-7
                                            border border-[#E5E7EB]
                                            rounded-full
                                            text-base text-body-color
                                            font-medium
                                            hover:border-primary hover:bg-primary hover:text-white
                                            transition
                                        "
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Cards;
