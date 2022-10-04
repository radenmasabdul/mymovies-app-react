import { Component } from "react";
import "../styles/App.css";
import Layout from "../components/layout";
import Cards from "../components/cards";

class Home extends Component {
  state = {
    title: "REKOMENDASI POPULER",
    datas: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let dataTemp = [];
    for (let i = 0; i < 20; i++) {
      const temp = {
        id: i + 1,
        title: `NARUTO SHIPPUDEN #EPS${i + 1}`,
        image:
          "https://upload.wikimedia.org/wikipedia/id/a/ad/Naruto_-_Shippuden_DVD_season_1_volume_1.jpg",
      };
      dataTemp.push(temp);
    }
    this.setState({ datas: dataTemp });
  }
  render() {
    return (
      <Layout>
        <div>
          <h1 className="text-color-black text-3xl font-jakarta-sans text-center py-5"> {this.state.title}</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4">
            {this.state.datas.map((data) => (
              <Cards
              key = {data.id}
              image = {data.image}
              title = {data.title}
              judul = {data.title}
              />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
