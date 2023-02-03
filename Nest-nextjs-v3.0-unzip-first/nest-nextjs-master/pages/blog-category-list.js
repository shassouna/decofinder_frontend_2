import BlogList from "../components/elements/BlogList";
import BlogSidebar from "../components/elements/BlogSidebar";
import Layout from "../components/layout/Layout";
import BlogFilter from './../components/elements/BlogFilter';

function PageBlogList() {
    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="List">
                <section className="mt-50 mb-50">
                    <div className="container custom">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="loop-grid loop-list pr-30">
                                    <BlogList show={6} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default PageBlogList;
