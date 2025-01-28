/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Args, Query, Resolver } from "@nestjs/graphql";
import { MovieService } from "./movie.service";
import { Movie } from "./movie.model";

@Resolver()
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query(() => [Movie], { name: "searchMovies" })
  async searchMovies(@Args("query") query: string): Promise<Movie[]> {
    const data = await this.movieService.searchMovies(query);
    console.log("first response", data);
    if (data) {
      return data.Search.map((movie: any, index: number) => ({
        id: index + 1,
        title: movie.Title,
        description: movie.Year,
        imageUrl: movie.Poster,
      }));
    }
    return data;
  }
}
