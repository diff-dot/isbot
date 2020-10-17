import { expect } from 'chai';
import { isbot } from '../../src';

describe('isbot', async () => {
  it('주요 봇 테스트', async () => {
    // 네이버
    expect(
      isbot(
        'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebit/53.7.36 (KHTML, like Gecko) Chrome/63.0.3239.0 Safari/537.36 (compatible; Yeti/1.1; +http://naver.me/spd)'
      )
    ).to.be.true;

    // 구글
    expect(isbot('APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html)')).to.be.true;
    expect(isbot('Mediapartners-Google')).to.be.true;
    expect(
      isbot(
        'Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)'
      )
    ).to.be.true;
    expect(
      isbot(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)'
      )
    ).to.be.true;
    expect(isbot('AdsBot-Google(+http://www.google.com/adsbot.html)')).to.be.true;
    expect(isbot('Googlebot-Image/1.0')).to.be.true;
    expect(isbot('Googlebot-News')).to.be.true;
    expect(isbot('Googlebot-Video/1.0')).to.be.true;
    expect(isbot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)')).to.be.true;
    expect(
      isbot(
        'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/W.X.Y.Z‡ Safari/537.36'
      )
    ).to.be.true;
    expect(isbot('Googlebot/2.1 (+http://www.google.com/bot.html)')).to.be.true;
    expect(
      isbot(
        'ozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z‡ Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
      )
    ).to.be.true;
    expect(isbot('(compatible; Mediapartners-Google/2.1; +http://www.google.com/bot.html)')).to.be.true;
    expect(isbot('AdsBot-Google-Mobile-Apps')).to.be.true;
    expect(isbot('FeedFetcher-Google; (+http://www.google.com/feedfetcher.html)')).to.be.true;
    expect(
      isbot(
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36 (compatible; Google-Read-Aloud;  +https://support.google.com/webmasters/answer/1061943)'
      )
    ).to.be.true;
    expect(
      isbot(
        'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36 (compatible; Google-Read-Aloud; +https://support.google.com/webmasters/answer/1061943)'
      )
    ).to.be.true;
    expect(
      isbot(
        'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012; DuplexWeb-Google/1.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Mobile Safari/537.36'
      )
    ).to.be.true;
    expect(isbot('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)  Chrome/49.0.2623.75 Safari/537.36 Google Favicon')).to.be
      .true;
    expect(
      isbot(
        'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko; googleweblight) Chrome/38.0.1025.166 Mobile Safari/535.19'
      )
    ).to.be.true;
  });
});
