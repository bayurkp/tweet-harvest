import { crawl } from "./crawl";
import { ACCESS_TOKEN, MONGO_URI } from "./env";

crawl({
  ACCESS_TOKEN: ACCESS_TOKEN,
  SEARCH_KEYWORDS: `ronaldo messi`,
  TARGET_TWEET_COUNT: 1,
  DELAY_EACH_TWEET_SECONDS: 0,
  DELAY_EVERY_100_TWEETS_SECONDS: 0,
  SEARCH_TAB: "LATEST",
  INSERT_MODE: "MONGO",
  MONGO_URI: MONGO_URI,
  MONGO_DBNAME: "test",
});
