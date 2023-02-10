
const CategoryProduct2 = () => {

    return (
        <>
            <ul>
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-1.svg"
                            alt=""
                        />
                        Milks & Dairies
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "shoe")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-2.svg"
                            alt=""
                        />
                        Clothing
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "jacket")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-3.svg"
                            alt=""
                        />
                        Pet Foods{" "}
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "trousers")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-4.svg"
                            alt=""
                        />
                        Baking material
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "accessories")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-5.svg"
                            alt=""
                        />
                        Fresh Fruit
                    </a>
                </li>
            </ul>
        </>
    );
};

export default CategoryProduct2
