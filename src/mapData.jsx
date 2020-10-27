import axios from "axios";

/* Helper Class
 * To make requesting countries and regions more flexible
 * */
class mapData {
    baseUrl = "https://code.highcharts.com/mapdata/";

    /* Helper Function
     * To get the countries of a specific region
     * */
    getWorld = async () => {
        return await axios.get("https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-density.json");
    };
}

export default mapData;
