import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css'


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statatiscs = ({title,stats}) => {
    return (
  <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.stat_list}>
        {stats.map(stat => (
              <li className={styles.stat_li}
                key={stat.id}
                style={{ backgroundColor: getRandomHexColor() }}
                
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