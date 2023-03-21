import "./Information.scss"

const Information = () => {
  return (
    <div className="information">
      <div className="information__container">
        <div className="information__block">
          <h2 className="information__heading information__heading--no-margin">
            Stack Overflow Happy Hour
          </h2>
          <p className="information__date">March 30, 2023</p>
          <p className="information__text">
            You're invited to join us for a fantastic “virtual” wine and cheese
            tasting evening on the 30th March. The event will be hosted
            virtually, but the wine & cheese will be as real as it gets.
          </p>
          <p className="information__text">
            This invite-only event offers you an opportunity to meet developers
            and technologists from across the UKI, to learn about technology
            trends and to discuss how to tackle today's pain points and common
            challenges.
          </p>
        </div>
        <div className="information__block">
          <h2 className="information__heading">Why attend?</h2>
          <ul className="list">
            <li className="list-item">
              Are you undergoing or planning to undergo cloud transformation?
            </li>
            <li className="list-item">
              Do you have collaboration concerns within your organisation?
            </li>
            <li className="list-item">
              Would your organisation like to break away from working in silos?
            </li>
            <li className="list-item">
              Would you like to improve efficiencies within your organisation?
            </li>
          </ul>
          <p className="information__text">
            If the answer to any of the above is yes, we can help you! Attend
            and learn how!
          </p>
          <p className="information__text">
            Also, did we say we are sending you a box including{" "}
            <span className="information__text--bold">
              3 beautiful wines & 3 different kinds of cheeses
            </span>
            ? We look forward to seeing you there.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Information
