import { gsap, Back } from 'gsap/all';
import selectors from './selectors';

export default class Animation {
  constructor() {
    this._tl = gsap.timeline({
      paused: true,
    });
  }

  async init() {
    this.isPaused = false;
    // initizlie buttons
    this._playBtn = selectors.playBtn;
    this._pauseBtn = selectors.pauseBtn;
    this._reverseBtn = selectors.reverseBtn;

    this._list = selectors.list;
    this._listItems = selectors.listItems;
    this._truck = selectors.truck;
    this._truckBtn = selectors.truckBtn;
    this._truckBtnBg = selectors.truckBtnBg;
    this._shippedLabel = selectors.shippedLabel;
    this._frontGroup = selectors.frontGroup;
    this._frontWheel1 = selectors.frontWheel2;
    this._frontWheel2 = selectors.frontWheel2;
    this._frontWheelsBack = selectors.frontWheelsBack;
    this._backWheel1 = selectors.backWheel1;
    this._backWheelBack1 = selectors.backWheelBack1;
    this._backWheel2 = selectors.backWheel2;
    this._backWheelBack2 = selectors.backWheelBack2;
    this._containerParts = selectors.containerParts;
    this._container = selectors.container;

    this._pauseBtn.addEventListener('click', () => { this.onPauseClick(); });

    this._playBtn.addEventListener('click', () => { this.onPlayClick(); });
    this._truckBtn.addEventListener('click', () => { this.onPlayClick(); });

    this._reverseBtn.addEventListener('click', () => { this.onReverseClick(); });

    this.initTimeline();

  }

  initTimeline() {
    this._tl.to(this._list, { id: 'listUp', y: -80, duration: 0.2 });
    this._tl.to(this._list, { id: 'listDown', y: 0, duration: 0.2 });
    this._tl.to(this._listItems[0], { id: 'listItem0', y: 90, duration: 0.8, opacity: 0 }, 'moveListItems');
    this._tl.to(this._listItems[1], { id: 'listItem1', y: 140, duration: 0.8, opacity: 0 }, 'moveListItems');
    this._tl.to(this._listItems[2], { id: 'listItem2', y: 180, duration: 0.8, opacity: 0 }, 'moveListItems');
    this._tl.to(this._truckBtnBg, { id: 'truckBtnScaleUp', scale: 1.05, transformOrigin: '50% 50%', duration: 0.2 });
    this._tl.to(this._truckBtnBg, { id: 'truckBtnScaleDown', scale: 1, transformOrigin: '50% 50%', duration: 0.2 });
    this._tl.to(this._containerParts, { id: 'containerParts', opacity: 1, duration: 0.6 }, 'showContainer');
    this._tl.to(this._container, { id: 'container', opacity: 1, duration: 0.6 }, 'showContainer');
    this._tl.to(this._backWheel1, { id: 'backWheel1', opacity: 1, duration: 0.6 }, 'showTruckBack');
    this._tl.to(this._backWheel2, { id: 'backWheel2', opacity: 1, duration: 0.6 }, 'showTruckBack');
    this._tl.to(this._backWheelBack1, { id: 'backWheelBack1', opacity: 1, duration: 0.6 }, 'showTruckBack');
    this._tl.to(this._backWheelBack2, { id: 'backWheelBack2', opacity: 1, duration: 0.6 }, 'showTruckBack');
    this._tl.to(this._frontWheel1, { id: 'frontWheel1', opacity: 1, duration: 0.6 }, 'showTruckFront');
    this._tl.to(this._frontWheel2, { id: 'frontWheel2', opacity: 1, duration: 0.6 }, 'showTruckFront');
    this._tl.to(this._frontWheelsBack, { id: 'frontWheelsBack', opacity: 1, duration: 0.6 }, 'showTruckFront');
    this._tl.to(this._frontGroup, { id: 'frontGroup', opacity: 1, duration: 0.6 }, 'showTruckFront');
    this._tl.to(this._truck, { id: 'truckMovement', x: 500, opacity: 0, duration: 2, ease: Back.easeIn.config(3) });
    this._tl.to(this._shippedLabel, { id: 'shippedLabel', opacity: 1 });
  }

  onPauseClick() {
    this._tl.pause();
    this.isPaused = true;
  }

  onPlayClick() {
    if (!this.isPaused) {
      this._tl.restart();
    } else {
      this._tl.play();
    }
  }

  onReverseClick() {
    this._tl.reverse();
  }

}
