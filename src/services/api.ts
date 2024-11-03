import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/authentication",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmU2YmI5YjEyMDg0MGQwYzBhYTZjZjczZjVmYjMzNiIsIm5iZiI6MTczMDYyNTU2My40ODY0OTMsInN1YiI6IjY3MjczZTEwMzk4YzkwNDNmODBkMTU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4VUDrXkeGWi0dbWRqDU03xv-dbtBJgObfZquJ58ih6s",
  },
};

axios
  .request(options)
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
