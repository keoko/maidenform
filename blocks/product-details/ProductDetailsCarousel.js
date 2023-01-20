import {
  h, Component, Fragment,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import Icon from './Icon.js';

const html = htm.bind(h);

function OptimizedSources({
  src,
  sizes,
  width,
  height,
}) {
  return html`
    <${Fragment} >
        ${sizes.map((size) => {
    const url = new URL(src);
    url.searchParams.set('width', size.width);
    return html`
        <source media=${`(max-width: ${size.media}px)`} srcset=${url.href}/>`;
  })
}
        <img height=${height} width=${width} src=${src} />
    </Fragment>
  `;
}

export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      slide: 0,
      thumbnailSlide: 0,
    };

    this.thumbnailImages = [
      'https://cdn.maidenform.com/catalog/product/M/F/MFB_09436/MFB_09436_Black_Front.jpg?width=247&quality=100&bg-color=255,255,255',
      'https://cdn.maidenform.com/catalog/product/M/F/MFB_09436/MFB_09436_Black_Side.jpg?width=247&quality=100&bg-color=255,255,255',
      'https://cdn.maidenform.com/catalog/product/M/F/MFB_09436/MFB_09436_Black_Back.jpg?width=247&quality=100&bg-color=255,255,255',
      'https://cdn.maidenform.com/catalog/product/M/F/MFB_09436/MFB_09436_Black_Detail01.jpg?width=247&quality=100&bg-color=255,255,255',
    ];

    this.images = [
      'https://cdn.maidenform.com/catalog/product/M/F/MFB_09436/MFB_09436_Black_Front.jpg?width=700&quality=100&bg-color=255,255,255&dpr=1 1x',
      'https://cdn.maidenform.com/catalog/product/M/F/MFB_09436/MFB_09436_Black_Side.jpg?width=700&quality=100&bg-color=255,255,255&dpr=1 1x',
      'https://cdn.maidenform.com/catalog/product/M/F/MFB_09436/MFB_09436_Black_Back.jpg?width=700&quality=100&bg-color=255,255,255&dpr=1 1x',
      'https://cdn.maidenform.com/catalog/product/M/F/MFB_09436/MFB_09436_Black_Detail01.jpg?width=700&quality=100&bg-color=255,255,255&dpr=1 1x',
    ];
  }

  static negativeModulo(i, mod) {
    return ((i % mod) + mod) % mod;
  }

  updateThumbnailSlide(getNextIndex) {
    const nextIndex = getNextIndex(this.state.thumbnailSlide);
    const limitedIndex = Math.min(Math.max(nextIndex, 0), this.thumbnailImages.length - 1);
    this.setState({ thumbnailSlide: limitedIndex });
  }

  updateSlide(getNextIndex) {
    const nextIndex = getNextIndex(this.state.slide);
    const correctedNextIndex = Carousel.negativeModulo(nextIndex, this.images.length);
    this.setState({
      slide: correctedNextIndex,
      thumbnailSlide: correctedNextIndex,
    });
  }

  render() {
    return html`
        <div class="product-detail-carousel">
            <div class="carousel-thumbnails-wrapper">
                <div class="thumbnail-controls">
                    <button name="thumbnail-prev" disabled=${this.props.shimmer} onClick=${() => this.updateThumbnailSlide((index) => index - 1)}><${Icon} name="caret-up-fill" /></button>
                    <button name="thumbnail-next" disabled=${this.props.shimmer} onClick=${() => this.updateThumbnailSlide((index) => index + 1)}><${Icon} name="caret-down-fill" /></button>
                </div>
                <ul class="carousel-thumbnails" style="transform: translateY(-${(this.state.thumbnailSlide === 0 ? 0 : 1) * -252.7 + (this.state.thumbnailSlide) * 322.6}px)">
                    ${this.props.shimmer || this.thumbnailImages.map((image, i) => html`
                          <li key=${image} onClick=${() => this.setState({ slide: i, thumbnailSlide: i })}>
                              <picture>
                                  <img height="313" width="247" src=${image} />
                              </picture>
                          </li>`)}
                    ${this.props.shimmer && [1, 2, 3].map(() => html`
                        <li><picture class="shimmer"><img height="313" width="247" /></picture></li>
                    `)}
                </ul>
            </div>
            <div class="carousel-stage-wrapper">
                ${this.props.shimmer || html`
                    <div class="main-controls">
                        <button name="stage-prev" onClick=${() => this.updateSlide((index) => index - 1)}><${Icon} name="caret-left-fill" /></button>
                        <button name="stage-next" onClick=${() => this.updateSlide((index) => index + 1)}><${Icon} name="caret-right-fill" /></button>
                    </div>
                `}
                <ul 
                        class="carousel-stage"
                        style="transform: translateX(-${this.state.slide * 100}%)"
                >
                    ${this.props.shimmer || this.images.map((image, i) => html`
                        <li key=${image} active=${i === this.state.slide ? 'true' : 'false'}>
                            <picture>
                                <${OptimizedSources} src=${image} width="888" height="700" sizes=${[{ media: 450, width: 450 }, { media: 2000, width: 700 }]} />
                            </picture>
                        </li>
                    `)}
                    ${this.props.shimmer && html`
                        <li><picture class="shimmer"><img width="888" height="700" /></picture></li>
                    `}
                </ul>
            </div>
        </div>
    `;
  }
}
