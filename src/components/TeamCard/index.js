import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachObject} = props
  const {name, id, teamImageURL} = eachObject

  return (
    <li>
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-item">
          <img src={teamImageURL} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    </li>
  )
}

export default TeamCard
