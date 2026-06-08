import { HttpInterceptorFn } from '@angular/common/http';

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODNmY2MwMWRlMTZjODM3Y2I3MTQ4MzRmMThjYTczMiIsIm5iZiI6MTc2MzU1NjE0OS4wNzksInN1YiI6IjY5MWRiYjM1YjQxMTNjNTBhNjdhZDgzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E4wKmMwB_VxlljuGAEvdTZjWUKdMjs78aNyasX9t58o'

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  
  const reqHeader = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${TOKEN}`)
  });

  return next(reqHeader);

};