const check = require('../check');

describe('check', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('predicate가 true일 때 onSuccess를 호출', () => {
    check(() => true, onSuccess, onFail);

    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledWith('yes');
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it('predicate가 false일 때 onFail을 호출', () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
