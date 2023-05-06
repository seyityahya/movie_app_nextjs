import React from "react";
import Movies from "@/components/Movies";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();

  return (
    <div>
      <div className="flex items-center flex-wrap gap-3 justify-center">
        {data?.results?.map((dt, i) => (
          <Movies dt={dt} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
