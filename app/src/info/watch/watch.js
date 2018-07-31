import React from 'react';
import Spacer from '../../../components/Spacer';

class Watch extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const video = document.getElementById('video');
    if (this.isInViewport(video)) {
      video.play();
    } else {
      video.pause();
    }
  }

  isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return !(rect.bottom < 0
    || rect.right < 0
    || rect.left > window.innerWidth
    || rect.top > window.innerHeight);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center">
            <h2>Watch It Unfold</h2>
            <Spacer value={4} />
          </div>
          <div className="col-xs-12 col-sm-7">
            <div className="embed-responsive embed-responsive-4by3">
              <video id="video" className="embed-responsive-item" controls loop>
                <source src="videos/video-1.mp4" type="video/mp4" />
                <source src="videos/video-1.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="col-xs-12 col-sm-5">
            <div className="row">
              <div className="col-xs-12">
                <h3>Choosing the Angle</h3>
                <p>
                  {`From the video you can see by pulling up on the bracket
                    following the arrow indicators you can easily rotate your
                    bracket to the desired angle of your choosing. In this case
                    we’re building a square 2 tier garden so we’ve removed the
                    top cap from our base bracket & set them at 90 degree angles`}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h3>Setting the Timbers</h3>
                <p>
                  {`Once our brackets are in place, we simply align our timbers
                    with the slot, push them into the slots, and then secure them
                    by screwing the timbers into place through the holes already
                    created in our bracket. It is even possible to put everything
                    in place and screw together at the end of first tier construction`}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h3>Stacking Multi-Levels</h3>
                <p>
                  {`By removing the top cap of base bracket we create the stacking
                    unit for the next level. From the video you can see your
                    brackets ground cleat acts as the stacking joint - simply take
                    the 2nd tier bracket and push it into the base bracket - it
                    will snap & lock into place creating your very sturdy, and
                    durable 2 tier garden`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Watch;
