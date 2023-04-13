import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';


const IndexPage = () => {
  const [dataAll, setDataAll] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      setDataAll([]);
      try {
        let url = '/api/marvel';
        let params = {};

        if (filter != 'all') params = { type: filter };

        const { data } = await axios.get(url, { params });

        setDataAll(data);
      } catch (error) {
        console.error(error);
      }
      setLoader(false);
    };

    fetchData();
  }, [filter]);

  const handleFilterChange = (event: any) => setFilter(event.target.value);

  return (
    <div>
      <center>
        <h1>Marvel Movies and TV Shows</h1>
      </center>
      <div className='radio-button-group'>
        <label>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === 'all'}
            onChange={handleFilterChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="movie"
            checked={filter === 'movie'}
            onChange={handleFilterChange}
          />
          Movies
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="tvShow"
            checked={filter === 'tvShow'}
            onChange={handleFilterChange}
          />
          TV Shows
        </label>
      </div>

      {loader ? <div className='loader'>Loading....</div> :
        <ul className='wrap'>
          {dataAll.map((card: any) => (
            <Link href={`/details/${card.id}`}>
              <div>
                <div className="movie_card" id="bright">
                  <div className="info_section">
                    <div className="movie_header">

                      <img
                        className="locandina"
                        src={card.cover_url}
                        alt={card.title}
                        // Load a default image whene is error
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = "https://www.techilife.com/wp-content/uploads/2020/07/facebook-pictures-not-loading.png";
                        }}
                      />

                      <h1>{card.title} </h1>
                      <h4>{card.release_date}, {card.directed_by} </h4>
                      <span className="minutes">{card.duration} min</span>
                      <p className="type">{card.saga} </p>
                    </div>
                    <div className="movie_desc">
                      <div className="overview">
                        <p className="p "> {card.overview} </p>
                      </div>

                    </div>
                    <div className="movie_social">
                      <ul>
                        <li><i className="material-icons"></i></li>
                        <li><i className="material-icons">{card.type} </i></li>
                      </ul>
                    </div>
                  </div>
                  <div className="blur_back bright_back"></div>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      }
    </div>
  );
};

export default IndexPage;

