const local = {
  BACKEND_URL: "http://localhost:8000",
};

const production = {
  BACKEND_URL: "https://api.studierendenfutter.de",
};

let config = local;

if (process.env.NODE_ENV === "production") {
  config = production;
}

export default config;
