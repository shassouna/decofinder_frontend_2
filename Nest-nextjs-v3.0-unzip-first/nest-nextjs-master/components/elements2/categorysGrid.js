
import Link from "next/link"
import Category from "../elements2/typeprod"
const BlogGrid = ({ show }) => {
    var data = [
        {
            id: 1,
            title: "The litigants on the screen are not actors",
            category: "Politic",
            views: 126,
            date: "25 April 2021",
            img: "blog-1.png",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-2.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-3.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-4.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-5.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-6.png",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
    ]

    return (
        <>
            {data.map(item => (
                <Category key={item["id"]}/>
            ))}
        </>
    )
}

export default BlogGrid
