import axios from "axios";

export async function getListGameSteam() {
  const url = "https://api.steampowered.com/ISteamApps/GetAppList/v2/";
  const axiosConfig = {
    headers: {
      "content-type": "application/json; charset-utf8",
    },
  };
  return axios.get(url, axiosConfig);
}
// const url =
//   "https://store.steampowered.com/search/?sort_by=Reviews_DESC&supportedlang=french&tags=4182&ndl=1";
// const axiosConfig = {
//   headers: {
//     "content-type": "application/json; charset-utf8",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//   },
// };
// return axios.get(url, axiosConfig);
export async function test() {
  // return fetch("https://steamdb.info/instantsearch/", {
  //   headers: {
  //     "User-Agent": "Mozilla/5.0",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.error(err));
}
