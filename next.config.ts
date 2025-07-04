const { DB_URI } = require("./config");

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
   DB_URI: DB_URI,
  },
};

export default nextConfig;
