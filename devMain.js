var youtubeVidIdsSortedByDate = [
  { videoId: 'IJp_uFA_-tU', videoTitle: ''},
  { videoId: 'reSb_co3PVo', videoTitle: ''},
  { videoId: 'ZB5dGf0UQT8', videoTitle: ''},
  { videoId: '82lzQ6pdZCs', videoTitle: ''},
  { videoId: 'XyCdvoWLPYc', videoTitle: ''},
  { videoId: '4IMS2oO0NAE', videoTitle: ''}
]

var row = document.querySelector('#portfolio .container .row')

youtubeVidIdsSortedByDate.forEach(video => {
  var newPortfolioItem = document.createElement('div')
  newPortfolioItem.setAttribute('class', 'portfolio-item')

  var videoTitle = document.createElement('h3')
  videoTitle.textContent = video.videoTitle

  var embedContainer = document.createElement('div')
  embedContainer.setAttribute('class', 'embed-responsive embed-responsive-16by9')

  var iframeSrc = '//www.youtube.com/embed/'+ video.videoId +'?rel=0'

  var iframe = document.createElement('iframe')
  iframe.setAttribute('class', 'embed-responsive-item')
  iframe.setAttribute('src', 'embed-responsive-item')
})

/*
<div class="portfolio-item">
    <h3 style="
  color: #6c6c6c;
  text-transform: capitalize;
">This Week In Tech 622: Running for Human</h3>
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="//www.youtube.com/embed/IJp_uFA_-tU?rel=0"></iframe>
                  </div>
                </div>
 */
