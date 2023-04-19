// import { renderHook } from '@testing-library/react-hooks';
import useSWR from 'swr';
import { useMatches } from '../hooks/useMatches';

// const jest = require('jest');s
jest.mock('swr');

describe('useMatches', () => {
  it('should return data, isLoading, and isError', async () => {
    const data = { matches: [] };
    const error = undefined;

    const swrMock = jest.fn().mockReturnValueOnce({
      data,
      error,
    });
    (useSWR as jest.Mock).mockImplementationOnce(swrMock);

    const { data: returnedData, isLoading, isError } = useMatches();

    await Promise.resolve();

    expect(returnedData).toEqual(data);
    expect(isLoading).toBe(false);
    expect(isError).toBe(error);
  });
});