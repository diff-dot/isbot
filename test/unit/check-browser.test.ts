import { expect } from 'chai';
import { isbot } from '../../src';

describe('isbot', async () => {
  it('주요 브라우저 테스트', async () => {
    // 네이버
    expect(isbot('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36')).to.be
      .false;
  });
});
