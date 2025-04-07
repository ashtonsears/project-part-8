import './Grid.css';

const Grid = (disorder) => {
  const imageSrc = 'https://sleep-tracker-server.onrender.com/${disorders.image}/';
  return (
    <div className="grid">
      <section className="disorder">
        <h4>{disorder.name}</h4>
        <img className="grid_img" src={imageSrc} alt={disorder.name}/>
      </section>
    </div>
  );
};

export default Grid;
