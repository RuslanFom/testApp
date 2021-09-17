import LineChart from "./barChartDateActivity";
import Head from "next/head";
import {Layout} from "../components/layout";
import BarChartGender from "./barChart";


const PersonalPage = () => {
    return (
        <div>
            <h2 className="title">Personal page</h2>
            <Layout>
                <Head>
                    <title>Personal Page</title>
                </Head>
                <div className="tabs_container">
                    <input className="hide" type="radio" name="tabs" id="tab1"/>
                    <label htmlFor="tab1">Gender/Age/Quantity</label>
                    <div className="tab_content" id="tab_content_1">
                        <BarChartGender/>
                    </div>

                    <input defaultValue="button" className="hide" type="radio" checked name="tabs" id="tab2"/>
                    <label htmlFor="tab2">Data/Activity</label>
                    <div className="tab_content" id="tab_content_2">
                        <LineChart/>
                    </div>


                </div>
            </Layout>

        </div>)
}

export default PersonalPage;