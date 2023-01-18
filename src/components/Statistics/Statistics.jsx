import PropTypes from 'prop-types';



export const Statatiscs = ({title,stats}) => {
    return (
        <section className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
    {stats.map(stat => (
          <li
            key={stat.id}
            // style={{ backgroundColor: getRandomHexColor() }}
            
          >
            <span >{stat.label}</span>
            <span >{stat.percentage}%</span>
          </li>
        ))}
      </ul>
</section>
    )
}

Statatiscs.Prototypes = {
    title:PropTypes.string,
    stats:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}