import request from "./request";


export const getSetting = async () => await request.get("/api/setting");


