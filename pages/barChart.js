import {Bar} from 'react-chartjs-2';
import {Layout} from "../components/layout";

export default function BarChartGender() {
    return (
        <div className="pageCont">
            <Layout>
                <div>Gender
                    <Bar
                        data={{
                            labels: ['age: 0-10', 'age: 11-20', 'age: 21-30', 'age: 31-80'],
                            datasets: [{
                                label: '# of men',
                                data: [10, 3, 0, 15],
                                backgroundColor: [
                                    'rgba(54, 162, 235, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(54, 162, 235, 1)'
                                ],
                                borderWidth: 1
                            },
                                {
                                    label: '# of female',
                                    data: [2, 6, null, 8],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)'
                                    ],
                                    borderWidth: 1
                                }
                            ],
                        }}
                        height={400}
                        width={600}
                    />
                </div>
            </Layout>
        </div>
    )
}



