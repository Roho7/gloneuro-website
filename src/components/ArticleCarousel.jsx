import { BlogData } from "../data/blogdata";

function ArticleCarousel() {
  return (
    <div className="m-4">
      <h1 className="mb-4">Latest Blog</h1>
      <div className="flex gap-4 overflow-x-scroll">
        {BlogData.map((item) => {
          return (
            <CarouselCard
              title={item.title}
              img={item.img}
              author={item.author}
            />
          );
        })}
      </div>
    </div>
  );
}

const CarouselCard = ({ title, img, author }) => {
  return (
    <div className="p-4 bg-base-50 w-3/4 rounded-xl">
      <h2 className="mb-2 whitespace-nowrap text-ellipsis overflow-hidden">
        {title}
      </h2>
      <div className="w-full h-48 ">
        <img
          src={img}
          alt=""
          className=" rounded-xl h-full w-full object-cover"
        />
      </div>
      <span className="font-light italic text-base-300"> by {author}</span>
    </div>
  );
};

export default ArticleCarousel;
