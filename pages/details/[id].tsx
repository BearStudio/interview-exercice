import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/marvel/${id}`);
        const data = await res.json();
        setItem(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (id) fetchItem();
  }, [id]);

  if (!item) return <div className='loader-detail'>Loading...</div>;

  const { title, overview, cover_url, trailer_url, release_date, directed_by, duration, type, saga } = item;

  return (

    <div className="movie-card">

      <div className="container">
        <a href="#">
          <img
            className="cover"
            src={cover_url}
            alt={title}
            width={200}
            // Load a default image whene is error
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "https://www.techilife.com/wp-content/uploads/2020/07/facebook-pictures-not-loading.png";
            }}
          />

        </a>

        <div className="hero">
          <div className="details">
            <div className="title1">{title}</div>
            <div className="title2">{release_date}, {directed_by}</div>
            <div className="title2">{duration} min </div>
          </div>
        </div>

        <div className="description">
          <div className="column1">
            <li><i className="material-icons">{saga} </i></li>
            <li><i className="material-icons">{type} </i></li>
          </div>

          <div className="column2">
            <p>{overview} </p>
            <iframe width="480" height="315" src={trailer_url} title={title} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;