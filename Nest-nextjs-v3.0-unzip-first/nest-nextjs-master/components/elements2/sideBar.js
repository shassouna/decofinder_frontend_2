import Link from "next/link"
import React from "react"
import VendorFilter from "../../components/ecommerce/Filter/VendorFilter"

const BlogSidebar = () => {
    return (
        <>
            <div className="widget-area">

                <div className="sidebar-widget widget-category-2 mb-50">
                    <h5 className="section-title style-1 mb-30">Category</h5>
                    <ul>
                        <li>
                            <Link href="/products"><a> <img src="/assets/imgs/theme/icons/category-1.svg" alt="" />Milks & Dairies</a></Link><span className="count">30</span>
                        </li>
                        <li>
                            <Link href="/products"><a> <img src="/assets/imgs/theme/icons/category-2.svg" alt="" />Clothing</a></Link><span className="count">35</span>
                        </li>
                        <li>
                            <Link href="/products"><a> <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />Pet Foods </a></Link><span className="count">42</span>
                        </li>
                        <li>
                            <Link href="/products"><a> <img src="/assets/imgs/theme/icons/category-4.svg" alt="" />Baking material</a></Link><span className="count">68</span>
                        </li>
                        <li>
                            <Link href="/products"><a> <img src="/assets/imgs/theme/icons/category-5.svg" alt="" />Fresh Fruit</a></Link><span className="count">87</span>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-widget widget-category-2 mb-50">
                    <h5 className="section-title style-1 mb-30">Category</h5>
                    <ul>
                        <li>
                            <Link href="/products"><a> <img src="/assets/imgs/theme/icons/category-1.svg" alt="" />Milks & Dairies</a></Link><span className="count">30</span>
                        </li>
                        <li>
                            <Link href="/products"><a> <img src="/assets/imgs/theme/icons/category-2.svg" alt="" />Clothing</a></Link><span className="count">35</span>
                        </li>
                        <li>
                            <Link href="/products"><a> <img src="/assets/imgs/theme/icons/category-3.svg" alt="" />Pet Foods </a></Link><span className="count">42</span>
                        </li>
                        <li>
                            <Link href="/products"><a> <img src="/assets/imgs/theme/icons/category-4.svg" alt="" />Baking material</a></Link><span className="count">68</span>
                        </li>
                        <li>
                            <Link href="/products"><a> <img src="/assets/imgs/theme/icons/category-5.svg" alt="" />Fresh Fruit</a></Link><span className="count">87</span>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-widget price_range range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                New products
                            </h5>
                            <VendorFilter />
                        </div>
                    </div>
                    <br />
                </div>

                <div className="sidebar-widget price_range range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                New products
                            </h5>
                            <VendorFilter />
                        </div>
                    </div>
                    <br />
                </div>

                <div className="sidebar-widget price_range range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                New products
                            </h5>
                            <VendorFilter />
                        </div>
                    </div>
                    <br />
                </div>

                <div className="sidebar-widget price_range range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                New products
                            </h5>
                            <VendorFilter />
                        </div>
                    </div>
                    <br />
                </div>

                <div className="sidebar-widget price_range range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                New products
                            </h5>
                            <VendorFilter />
                        </div>
                    </div>
                    <br />
                </div>

                <div className="sidebar-widget price_range range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                New products
                            </h5>
                            <VendorFilter />
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}

export default BlogSidebar
