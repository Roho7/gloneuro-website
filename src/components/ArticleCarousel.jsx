import { BlogData } from "../data/blogdata";

function ArticleCarousel() {
  return (
    <div className="m-4">
      <h1 className="mb-4">Latest Blog</h1>
      <div className="flex gap-4 overflow-x-scroll p-4">
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
    <div className="p-4 bg-base-50 w-72 h-3/4 rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all ease-linear whitespace-nowrap text-ellipsis overflow-hidden">
      <div className="h-48">
        <img
          src={img}
          alt=""
          className="mb-4 rounded-xl h-full w-full object-cover"
        />
      </div>
      <h2 className="whitespace-nowrap text-ellipsis overflow-hidden">
        {title}
      </h2>
      <span className="font-light italic text-base-300"> by {author}</span>
    </div>
  );
};

export default ArticleCarousel;
