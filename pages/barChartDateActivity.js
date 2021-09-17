import {Line} from 'react-chartjs-2';
import {Layout} from "../components/layout";

export default function LineChart() {
    return (
        <div className="pageCont">
            <Layout>
                <div>Date: activity
                    <Line
                        data={{
                            labels: ['1.10', '2.10', '3.10', '4.10', '5.10'],
                            datasets: [{
                                label: 'Ivan',
                                data: [2, 4, 5, 0, 7],
                                borderColor: "#3e95cd"
                            }, {
                                label: 'Marco',
                                data: [1, 0, 12, 6, 2],
                                borderColor: "#8e5ea2"
                            }, {
                                label: 'Oleg',
                                data: [8, 2, 2, 3, 7],
                                borderColor: "#3cba9f",
                            }, {
                                label: 'Diego',
                                data: [1, 1, 0, 9, 1],
                                borderColor: "#e8c3b9",
                            }]
                        }}
                        height={400}
                        width={600}
                    />
                </div>
            </Layout>
        </div>
    )
}
