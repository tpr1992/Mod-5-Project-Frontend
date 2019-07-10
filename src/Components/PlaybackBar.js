import React from 'react';
import { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import MediaControlCard from './MediaControlCard';
// ======================================

class PlaybackBar extends React.Component {

  state = {
    showBottom: false
  }

  // showBottom = () => {
  //   this.setState({
  //     showBottom: !this.state.showBottom
  //   })
  // }

  render () {
    return (
      <div class="playback-bar">
        <div class="ui bottom fixed inverted menu">
          <div class='right item' style={{ display: 'flex', height: '.5vh' }}>
            {
              this.props.selectedTrack != "" ?
              <iframe src={this.props.selectedTrack} width="500" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              :
              <Fragment />
            }
          </div>
          <div class='right item'>
            notSpotify()
          </div>
          <i class="inverted angle up icon" style={{ display: 'none', paddingTop: '0vh' }} onClick={this.props.showBottom} size='large'/>
          <a class='right item' href='https://github.com/tpr1992/Mod-5-Project-Frontend/tree/v3' icon='inverted github icon'>Github
            <i class="inverted github icon" />
          </a>
        </div>
      </div>
    )
  }
}

export default PlaybackBar;


// return (
//   <div class="playback-bar">
//     <div class="ui left fixed inverted menu">
//       {
//         this.props.trackPlaying ?
//         <Fragment>
//           <div class="item">
//             <img src={this.props.nowPlayingImage} />
//           </div>
//           <a class="item">{this.props.nowPlayingArtist}</a>
//           <a class="item">{this.props.nowPlayingName}</a>
//         </Fragment>
//         :
//         <Fragment />
//       }
//       <div class='right item' style={{display: 'flex'}}>
//         {
//           this.props.selectedTrack != "" ?
//           <iframe src={this.props.selectedTrack} width="500" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
//           :
//           <Fragment />
//         }
//       </div>
//     </div>
//   </div>
// )
