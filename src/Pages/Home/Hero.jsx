import { Link } from "react-router-dom";
import BusinessCover from "../../assets/BookMartCover.png";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
        <div className="text my-5">
        <h1 className="text-5xl font-bold">Welcome to BookMart</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-100">Discover the ultimate destination for book lovers! At BookMart, we offer a wide selection of books—purchase your favorite titles or access the newest releases digitally. Experience a seamless shopping journey with us, whether you're looking for physical copies or eBooks.</p>
            <Link to="/products" type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Explore Books</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
        <img className="rounded-lg max-w-xl max-h-full object-cover" src={BusinessCover} alt="BookMart Cover Page" />
        </div>
    </section>
  )
}
