// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onLeftClick = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  onRightClick = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  renderDetails = activeIndex => {
    const {imgUrl, username, companyName, description} = activeIndex

    return (
      <div className="reviews">
        <img src={imgUrl} alt={username} className="profile-pic" />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    console.log(activeIndex)
    const activeIndexProfile = reviewsList[activeIndex]

    return (
      <div className="bg-cont">
        <h1 className="head">Reviews</h1>
        <div className="profile-container">
          <button
            className="left-arrow"
            type="button"
            onClick={this.onLeftClick}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderDetails(activeIndexProfile)}
          <button
            className="right-arrow"
            type="button"
            onClick={this.onRightClick}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
