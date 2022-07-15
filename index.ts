import { parse } from "./src";

if(process.env.NODE_ENV === 'development') {
  JSON.parse = parse;
}