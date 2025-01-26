import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MovieService {
  private readonly apiUrl = 'https://www.omdbapi.com/';
  private readonly apiKey = 'd33ddb26';

  async searchMovies(query: string): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          s: query,
          apikey: this.apiKey,
        },
      });
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new HttpException('Failed to fetch movies', HttpStatus.BAD_REQUEST);
    }
  }
}
