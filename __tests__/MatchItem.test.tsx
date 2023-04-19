import { liveStatusFormatter, statusLabelFormatter, liveScoreFormatter } from '../components/match';

describe('liveStatusFormatter', () => {
  it('should format the live status correctly', () => {
    expect(liveStatusFormatter('FT')).toBe('FT');
    expect(liveStatusFormatter('Canceled')).toBe('');
    expect(liveStatusFormatter('HT')).toBe('HT');
    expect(liveStatusFormatter('-')).toBe('');
    expect(liveStatusFormatter('test')).toBe('test`');
  });
});


describe('statusLabelFormatter', () => {
  it('should format date and return uppercase string for "notstarted" status', () => {
    const formattedDate = statusLabelFormatter('notstarted', Date.now());
    expect(formattedDate).toMatch(/[A-Z]+/);
  });

  it('should return "ENDED" for "finished" status', () => {
    const result = statusLabelFormatter('finished', Date.now());
    expect(result).toEqual('ENDED');
  });

  it('should return "LIVE" for "inprogress" status', () => {
    const result = statusLabelFormatter('inprogress', Date.now());
    expect(result).toEqual('LIVE');
  });

  it('should return uppercase string for "Canceled" status', () => {
    const result = statusLabelFormatter('Canceled', Date.now());
    expect(result).toMatch(/[A-Z]+/);
  });

  it('should return undefined for unknown status types', () => {
    const result = statusLabelFormatter('unknown', Date.now());
    expect(result).toBeUndefined();
  });
});

describe('liveScoreFormatter', () => {
  it('should return 0 for "notstarted" status type', () => {
    const result = liveScoreFormatter('notstarted', '');
    expect(result).toEqual(0);
  });

  it('should return 0 for "canceled" status type', () => {
    const result = liveScoreFormatter('canceled', '');
    expect(result).toEqual(0);
  });

  it('should return 45 for "inprogress" status type and "HT" live status', () => {
    const result = liveScoreFormatter('inprogress', 'HT');
    expect(result).toEqual(45);
  });

  it('should return the number before "+" for "inprogress" status type and a live status with a plus sign', () => {
    const result = liveScoreFormatter('inprogress', '32+');
    expect(result).toEqual('32');
  });

  it('should return 100 for "finished" status type', () => {
    const result = liveScoreFormatter('finished', '');
    expect(result).toEqual(100);
  });

  it('should return 0 for unknown status types', () => {
    const result = liveScoreFormatter('unknown', '');
    expect(result).toEqual(0);
  });
});

