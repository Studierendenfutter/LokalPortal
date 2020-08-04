const local = {
  BACKEND_URL: "http://localhost:8000",
};

const production = {
  BACKEND_URL: "https://api.studierendenfutter.de:8000",
};

let config = local;

if (process.env.NODE_ENV === "production") {
  config = production;
}

export default config;
