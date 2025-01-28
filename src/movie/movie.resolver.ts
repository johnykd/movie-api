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
    if (data) {
      return data.Search.map((movie: any) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        imageUrl: movie.Poster,
      }));
    }
    return data;
  }

  @Query(() => Movie, { name: "findMovieById" })
  async findMovieById(@Args("id") id: string): Promise<Movie> {
    const data = await this.movieService.findMovieById(id);
    if (data) {
      return {
        id: data.imdbID,
        title: data.Title,
        description: data.Plot,
        imageUrl: data.Poster,
      };
    }
    return data;
  }
}
